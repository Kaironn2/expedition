"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

// Must match the media query that hides the native scrollbar in globals.css.
const POINTER_QUERY = "(hover: hover) and (pointer: fine)";
const MIN_THUMB_SIZE = 32;
const PAGE_SCROLL_RATIO = 0.9;

function mountScrollbar(track: HTMLDivElement, thumb: HTMLDivElement) {
  const root = document.documentElement;
  let trackSize = 0;
  let thumbSize = 0;
  let maxScroll = 0;
  let drag: { startY: number; startScroll: number } | null = null;

  function syncThumbPosition() {
    const progress = maxScroll > 0 ? Math.min(window.scrollY / maxScroll, 1) : 0;
    thumb.style.transform = `translate3d(0, ${progress * (trackSize - thumbSize)}px, 0)`;
  }

  function measure() {
    const viewportSize = root.clientHeight;
    const contentSize = root.scrollHeight;
    maxScroll = contentSize - viewportSize;
    trackSize = track.clientHeight || viewportSize;
    thumbSize =
      maxScroll > 0 ? Math.max(MIN_THUMB_SIZE, (trackSize * viewportSize) / contentSize) : 0;

    track.classList.toggle("is-scrollable", maxScroll > 0);
    thumb.style.height = `${thumbSize}px`;
    syncThumbPosition();
  }

  function startDrag(event: PointerEvent) {
    if (event.button !== 0) return;
    event.preventDefault();
    event.stopPropagation();
    thumb.setPointerCapture(event.pointerId);
    drag = { startY: event.clientY, startScroll: window.scrollY };
    track.classList.add("is-dragging");
  }

  function moveDrag(event: PointerEvent) {
    const range = trackSize - thumbSize;
    if (!drag || range <= 0) return;

    const top = drag.startScroll + ((event.clientY - drag.startY) * maxScroll) / range;
    window.scrollTo({ top, behavior: "instant" });
  }

  function endDrag() {
    drag = null;
    track.classList.remove("is-dragging");
  }

  function scrollPage(event: PointerEvent) {
    if (event.button !== 0 || event.target !== track) return;
    event.preventDefault();

    const direction = event.clientY < thumb.getBoundingClientRect().top ? -1 : 1;
    window.scrollBy({ top: direction * root.clientHeight * PAGE_SCROLL_RATIO, behavior: "smooth" });
  }

  const resizeObserver = new ResizeObserver(measure);
  resizeObserver.observe(document.body);

  measure();
  window.addEventListener("scroll", syncThumbPosition, { passive: true });
  window.addEventListener("resize", measure, { passive: true });
  track.addEventListener("pointerdown", scrollPage);
  thumb.addEventListener("pointerdown", startDrag);
  thumb.addEventListener("pointermove", moveDrag, { passive: true });
  thumb.addEventListener("lostpointercapture", endDrag);

  return () => {
    resizeObserver.disconnect();
    track.classList.remove("is-scrollable", "is-dragging");
    window.removeEventListener("scroll", syncThumbPosition);
    window.removeEventListener("resize", measure);
    track.removeEventListener("pointerdown", scrollPage);
    thumb.removeEventListener("pointerdown", startDrag);
    thumb.removeEventListener("pointermove", moveDrag);
    thumb.removeEventListener("lostpointercapture", endDrag);
  };
}

export function CustomScrollbar() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const thumbRef = useRef<HTMLDivElement | null>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const track = trackRef.current;
    const thumb = thumbRef.current;
    if (!track || !thumb) return;
    if (reducedMotion || !window.matchMedia(POINTER_QUERY).matches) return;

    return mountScrollbar(track, thumb);
  }, [reducedMotion]);

  return (
    <div ref={trackRef} className="k-scrollbar" aria-hidden="true">
      <div ref={thumbRef} className="k-scrollbar-thumb" data-hover />
    </div>
  );
}

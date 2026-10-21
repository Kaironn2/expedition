"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const HOVER_TARGETS = "button, a, [role='button'], input, textarea, select, label, [data-hover]";
const POINTER_QUERY = "(hover: hover) and (pointer: fine)";
const OFFSCREEN_POSITION = { x: -100, y: -100 };
const SCROLLBAR_EDGE_TOLERANCE = 2;

let lastPointerPosition: { x: number; y: number } | null = null;

function isScrollbarEdge(event: PointerEvent): boolean {
  const viewportWidth = document.documentElement.clientWidth;

  return (
    window.innerWidth > viewportWidth &&
    event.clientX >= viewportWidth - SCROLLBAR_EDGE_TOLERANCE &&
    event.clientX <= window.innerWidth + SCROLLBAR_EDGE_TOLERANCE &&
    event.clientY >= 0 &&
    event.clientY <= window.innerHeight
  );
}

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const initialPosition = lastPointerPosition ?? OFFSCREEN_POSITION;
  const positionRef = useRef({
    x: initialPosition.x,
    y: initialPosition.y,
    ringX: initialPosition.x,
    ringY: initialPosition.y,
  });
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const media = window.matchMedia(POINTER_QUERY);
    if (reducedMotion || !media.matches) return;

    let frame = 0;
    const root = document.documentElement;

    function setVisible(visible: boolean) {
      const opacity = visible ? "1" : "0";
      if (dotRef.current) dotRef.current.style.opacity = opacity;
      if (ringRef.current) ringRef.current.style.opacity = opacity;
    }

    function setDotPosition(x: number, y: number) {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      }
    }

    function setRingPosition(x: number, y: number) {
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      }
    }

    function syncPointer(event: PointerEvent) {
      lastPointerPosition = { x: event.clientX, y: event.clientY };
      positionRef.current.x = event.clientX;
      positionRef.current.y = event.clientY;
      setDotPosition(event.clientX, event.clientY);
      setVisible(true);
    }

    function syncHover(event: PointerEvent) {
      const target = event.target instanceof Element ? event.target : null;
      ringRef.current?.classList.toggle("is-hover", Boolean(target?.closest(HOVER_TARGETS)));
    }

    function hideCursor(event: PointerEvent) {
      if (isScrollbarEdge(event)) return;
      setVisible(false);
    }

    function showCursor() {
      if (lastPointerPosition) setVisible(true);
    }

    function tick() {
      positionRef.current.ringX += (positionRef.current.x - positionRef.current.ringX) * 0.18;
      positionRef.current.ringY += (positionRef.current.y - positionRef.current.ringY) * 0.18;

      setRingPosition(positionRef.current.ringX, positionRef.current.ringY);

      frame = requestAnimationFrame(tick);
    }

    root.classList.add("has-custom-cursor");
    setDotPosition(positionRef.current.x, positionRef.current.y);
    setRingPosition(positionRef.current.ringX, positionRef.current.ringY);
    if (lastPointerPosition) setVisible(true);
    window.addEventListener("pointermove", syncPointer, { passive: true });
    window.addEventListener("pointerover", syncHover, { passive: true });
    window.addEventListener("pointerleave", hideCursor);
    window.addEventListener("pointerenter", showCursor);
    frame = requestAnimationFrame(tick);

    return () => {
      root.classList.remove("has-custom-cursor");
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", syncPointer);
      window.removeEventListener("pointerover", syncHover);
      window.removeEventListener("pointerleave", hideCursor);
      window.removeEventListener("pointerenter", showCursor);
    };
  }, [reducedMotion]);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}

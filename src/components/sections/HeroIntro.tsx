"use client";

import { useEffect, useState } from "react";
import { useInView } from "@/hooks/useInView";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { animClass, staggerDelay } from "@/lib/anim";

interface Props {
  readonly alias: string;
  readonly contactCtaLabel: string;
  readonly ctaLabel: string;
  readonly expeditionLabel: string;
  readonly expeditionNumber: number;
  readonly rotating: readonly string[];
  readonly statJourneyLabel: string;
  readonly statJourneyValue: string;
  readonly statProjectsLabel: string;
  readonly statProjectsValue: string;
  readonly statStackLabel: string;
  readonly statStackValue: string;
  readonly subtitleHighlight: string;
  readonly subtitleLead: string;
  readonly titleFirst: string;
  readonly titleLast: string;
}

function randomNextIndex(length: number, currentIndex: number): number {
  if (length <= 1) return 0;

  const next = Math.floor(Math.random() * (length - 1));
  return next >= currentIndex ? next + 1 : next;
}

function Typewriter({ items }: { readonly items: readonly string[] }) {
  const reducedMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [shown, setShown] = useState(items[0] ?? "");
  const [forward, setForward] = useState(false);

  useEffect(() => {
    if (reducedMotion || items.length === 0) return;

    const current = items[index % items.length] ?? "";
    const delay = forward ? 60 : 30;
    const pause = 2200;
    const timer = window.setTimeout(
      () => {
        if (forward) {
          if (shown.length < current.length) {
            setShown(current.slice(0, shown.length + 1));
          } else {
            setForward(false);
          }
          return;
        }

        if (shown.length > 0) {
          setShown(current.slice(0, shown.length - 1));
        } else {
          setForward(true);
          setIndex((value) => randomNextIndex(items.length, value % items.length));
        }
      },
      forward && shown.length === current.length ? pause : delay,
    );

    return () => window.clearTimeout(timer);
  }, [forward, index, items, reducedMotion, shown]);

  return (
    <div className="k-hero-typewriter">
      <span>{shown}</span>
      <span className="k-hero-caret" aria-hidden="true" />
    </div>
  );
}

export function HeroIntro(props: Props) {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <>
      <div ref={ref} className="k-hero-inner">
        <div
          className={`${animClass({ isVisible: isInView })} k-hero-level`}
          style={staggerDelay(0, 120)}
        >
          <span className="k-hero-diamond" />
          <span>
            {props.expeditionLabel} {props.expeditionNumber}
          </span>
          <span className="k-hero-diamond" />
        </div>

        <h1
          className={`${animClass({ isVisible: isInView })} k-hero-title`}
          style={staggerDelay(1, 120)}
        >
          {props.titleFirst}
          <br />
          <span>{props.titleLast}</span>
        </h1>

        <div
          className={`${animClass({ isVisible: isInView })} k-hero-ornament`}
          style={staggerDelay(2, 120)}
        >
          <span className="k-hero-line" />
          <span className="k-hero-small-diamond" />
          <span className="k-hero-alias">&laquo; {props.alias} &raquo;</span>
          <span className="k-hero-small-diamond" />
          <span className="k-hero-line" />
        </div>

        <p
          className={`${animClass({ isVisible: isInView })} k-hero-subtitle`}
          style={staggerDelay(3, 120)}
        >
          {props.subtitleLead}
          <span>{props.subtitleHighlight}</span>
        </p>

        <div className={animClass({ isVisible: isInView })} style={staggerDelay(4, 120)}>
          <Typewriter items={props.rotating} />
        </div>

        <div
          className={`${animClass({ isVisible: isInView })} k-hero-actions`}
          style={staggerDelay(5, 120)}
        >
          <a href="#projects" className="k-brush-btn">
            <span className="k-brush-key k-brush-key-x" aria-hidden="true">
              <svg className="k-brush-symbol" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6.5 6.5L17.5 17.5M17.5 6.5L6.5 17.5" />
              </svg>
            </span>
            {props.ctaLabel}
          </a>
          <a href="#contact" className="k-brush-btn k-brush-btn-secondary">
            <span className="k-brush-key k-brush-key-y" aria-hidden="true">
              <svg className="k-brush-symbol" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6.5 6.5L12 12M17.5 6.5L12 12M12 12V18" />
              </svg>
            </span>
            {props.contactCtaLabel}
          </a>
        </div>
      </div>

      <div
        className={`${animClass({ isVisible: isInView })} k-hero-stats`}
        style={staggerDelay(6, 120)}
      >
        <div className="k-hero-stat">
          <b>{props.statJourneyValue}</b>
          <span>{props.statJourneyLabel}</span>
        </div>
        <span className="k-hero-stat-separator" />
        <div className="k-hero-stat">
          <b>{props.statProjectsValue}</b>
          <span>{props.statProjectsLabel}</span>
        </div>
        <span className="k-hero-stat-separator" />
        <div className="k-hero-stat">
          <b>{props.statStackValue}</b>
          <span>{props.statStackLabel}</span>
        </div>
      </div>
    </>
  );
}

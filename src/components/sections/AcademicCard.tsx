"use client";

import { GearIcon } from "@/components/icons";
import { useInView } from "@/hooks/useInView";
import { animClass, staggerDelay } from "@/lib/anim";
import type { AcademicIconKind } from "@/types/portfolio";

interface Props {
  readonly index: number;
  readonly course: string;
  readonly institution: string;
  readonly iconKind: AcademicIconKind;
  readonly period: string;
  readonly status: string;
  readonly progress: number;
  readonly progressLabel: string;
}

const RING_RADIUS = 36;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;

function AcademicIcon({ kind, className }: { kind: AcademicIconKind; className?: string }) {
  switch (kind) {
    case "gear":
      return <GearIcon className={className} />;
  }
}

export function AcademicCard(props: Props) {
  const [ref, isInView] = useInView<HTMLLIElement>();
  const offset = RING_CIRCUMFERENCE * (1 - props.progress / 100);

  return (
    <li
      ref={ref}
      className={`${animClass({ isVisible: isInView })} k-edu-card`}
      style={staggerDelay(props.index, 100)}
    >
      <div className="k-edu-crest" aria-hidden>
        <AcademicIcon kind={props.iconKind} className="k-edu-crest-icon" />
      </div>
      <div className="k-edu-info">
        <h3>{props.course}</h3>
        <p className="k-edu-institution">{props.institution}</p>
        <span className="k-edu-period">
          {props.period} · {props.status}
        </span>
      </div>
      <div
        className="k-edu-progress"
        role="img"
        aria-label={`${props.progressLabel}: ${props.progress}%`}
      >
        <svg className="k-edu-ring" viewBox="0 0 80 80" aria-hidden="true" focusable="false">
          <circle
            cx="40"
            cy="40"
            r={RING_RADIUS}
            fill="none"
            stroke="rgb(94 74 42 / 40%)"
            strokeWidth="2"
          />
          <circle
            cx="40"
            cy="40"
            r={RING_RADIUS}
            fill="none"
            stroke="#e9d3a0"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray={RING_CIRCUMFERENCE}
            strokeDashoffset={offset}
            transform="rotate(-90 40 40)"
          />
          <text
            x="40"
            y="44"
            textAnchor="middle"
            fill="#e9d3a0"
            fontFamily="var(--font-display), var(--font-serif), serif"
            fontSize="14"
            letterSpacing="1"
          >
            {props.progress}%
          </text>
        </svg>
        <span className="k-edu-progress-label">{props.progressLabel}</span>
      </div>
    </li>
  );
}

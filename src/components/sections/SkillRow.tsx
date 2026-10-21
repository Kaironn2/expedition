"use client";

import { type CSSProperties, type KeyboardEvent, useEffect, useId, useRef, useState } from "react";
import type { SkillSourceKind, SkillTier } from "@/data/skills";
import { cn } from "@/lib/cn";
import { SkillTierPips } from "./SkillTierPips";

export interface SkillRowUse {
  readonly id: string;
  readonly name: string;
  readonly kind: SkillSourceKind;
  readonly meta: string;
  readonly note?: string;
  readonly details: readonly string[];
}

interface Props {
  readonly name: string;
  readonly tier: SkillTier;
  readonly tierLabel: string;
  readonly tierTitle: string;
  readonly timeShort: string;
  readonly timeLong: string;
  readonly countLabel: string;
  readonly description: string;
  readonly uses: readonly SkillRowUse[];
}

const HOVER_DELAY_MS = 140;

function entryStyle(index: number): CSSProperties {
  return { "--use-index": index } as CSSProperties;
}

function canHover() {
  return window.matchMedia("(hover: hover)").matches;
}

export function SkillRow({
  name,
  tier,
  tierLabel,
  tierTitle,
  timeShort,
  timeLong,
  countLabel,
  description,
  uses,
}: Props) {
  const [hovered, setHovered] = useState(false);
  const [pinned, setPinned] = useState(false);
  const rowRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<number | undefined>(undefined);
  const hintId = useId();
  const open = hovered || pinned;

  useEffect(() => {
    if (!pinned) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (rowRef.current && !rowRef.current.contains(event.target as Node)) setPinned(false);
    };
    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [pinned]);

  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;

    const handleMouseEnter = () => {
      if (!canHover()) return;
      window.clearTimeout(timerRef.current);
      timerRef.current = window.setTimeout(() => setHovered(true), HOVER_DELAY_MS);
    };
    const handleMouseLeave = () => {
      window.clearTimeout(timerRef.current);
      setHovered(false);
    };

    row.addEventListener("mouseenter", handleMouseEnter);
    row.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      window.clearTimeout(timerRef.current);
      row.removeEventListener("mouseenter", handleMouseEnter);
      row.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Escape") setPinned(false);
  };

  return (
    <div ref={rowRef} className={cn("k-skill-row", open && "is-open", pinned && "is-pinned")}>
      <button
        type="button"
        className="k-skill-trigger"
        aria-expanded={open}
        aria-controls={hintId}
        onClick={() => setPinned((value) => !value)}
        onKeyDown={handleKeyDown}
      >
        <span className="k-skill-name">{name}</span>
        <SkillTierPips tier={tier} label={tierLabel} small />
        <span className="k-skill-time" title={timeLong}>
          {timeShort}
        </span>
        <span className="k-skill-count" title={countLabel}>
          {uses.length}
        </span>
      </button>

      <div id={hintId} className="k-skill-hint" role="tooltip">
        <i className="k-skill-hint-caret" aria-hidden />
        <div className="k-skill-hint-head">
          <span className="k-skill-hint-name">{name}</span>
          <span className="k-skill-hint-tier">{tierTitle}</span>
          <span className="k-skill-hint-time">{timeLong}</span>
        </div>
        {description ? <p className="k-skill-hint-desc">{description}</p> : null}
        <ul className="k-skill-hint-uses">
          {uses.map((use, index) => (
            <li key={use.id} className={`is-${use.kind}`} style={entryStyle(index)}>
              <i className="k-skill-hint-mark" aria-hidden />
              <span className="k-skill-hint-source">{use.name}</span>
              <span className="k-skill-hint-meta">{use.meta}</span>
              {use.note ? <span className="k-skill-hint-note">{use.note}</span> : null}
              {use.details.length > 0 ? (
                <ul className="k-skill-hint-details">
                  {use.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

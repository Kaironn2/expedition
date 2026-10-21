"use client";

import { useId, useState } from "react";
import { useInView } from "@/hooks/useInView";
import { animClass, staggerDelay } from "@/lib/anim";

interface Props {
  readonly index: number;
  readonly company: string;
  readonly current?: boolean;
  readonly defaultOpen?: boolean;
  readonly role: string;
  readonly description: string;
  readonly highlights: readonly string[];
  readonly labels: {
    readonly current: string;
    readonly level: string;
    readonly showLess: string;
    readonly showMore: string;
  };
  readonly level: number;
  readonly period: string;
  readonly stack: readonly string[];
}

function renderFormattedText(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={`${part}-${index}`}>{part.slice(2, -2)}</strong>;
    }

    return part;
  });
}

export function TimelineItem(props: Props) {
  const [ref, isInView] = useInView<HTMLLIElement>();
  const [open, setOpen] = useState(props.defaultOpen ?? false);
  const highlightsId = useId();

  return (
    <li
      ref={ref}
      className={`${animClass({ isVisible: isInView })} k-career-card ${props.current ? "is-current" : ""}`}
      style={staggerDelay(props.index, 100)}
    >
      <div className="k-career-marker" aria-hidden>
        <div className="k-career-ring" />
        <div className="k-career-core" />
      </div>
      <div className="k-career-body">
        <p className="k-career-period">
          {props.current ? <span className="k-career-current">{props.labels.current}</span> : null}
          {props.period}
        </p>
        <div className="k-career-role-row">
          <h3>{props.role}</h3>
          <span>{props.company}</span>
        </div>
        <p className="k-career-summary">{renderFormattedText(props.description)}</p>
        {open ? (
          <ul id={highlightsId} className="k-career-achievements">
            {props.highlights.map((highlight) => (
              <li key={highlight}>{renderFormattedText(highlight)}</li>
            ))}
          </ul>
        ) : null}
        <ul className="k-career-skills" aria-label="Stack">
          {props.stack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <button
          type="button"
          className="k-career-expand"
          aria-controls={highlightsId}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? `▲ ${props.labels.showLess}` : `▼ ${props.labels.showMore}`}
        </button>
      </div>
      <div className="k-career-level">
        <span>{props.labels.level}</span>
        <b>{props.level}</b>
      </div>
    </li>
  );
}

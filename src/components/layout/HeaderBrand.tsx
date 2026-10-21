"use client";

import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/cn";

interface SectionItem {
  readonly id: string;
}

interface Props {
  readonly activeItems: readonly SectionItem[];
}

export function HeaderBrand({ activeItems }: Props) {
  const activeId = useActiveSection(activeItems);
  const isActive = activeId === "top";

  return (
    <a href="#top" className={cn("k-header-brand", isActive && "is-active")} aria-label="Kaironn">
      <span className="k-header-brand-mark" aria-hidden="true">
        <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" focusable="false">
          <g className="k-header-brand-ornaments" fill="none" strokeWidth="1">
            <path d="M2 6 L2 2 L6 2" />
            <path d="M30 26 L30 30 L26 30" />
          </g>
          <path
            className="k-header-brand-frame"
            d="M16 3 L29 16 L16 29 L3 16 Z"
            strokeWidth="1.5"
            strokeLinejoin="miter"
          />
          <path className="k-header-brand-core" d="M16 9 L23 16 L16 23 L9 16 Z" strokeWidth="1.2" />
          <rect
            className="k-header-brand-seal"
            x="15"
            y="15"
            width="2"
            height="2"
            transform="rotate(45 16 16)"
          />
        </svg>
      </span>
      <span>KAIRONN</span>
    </a>
  );
}

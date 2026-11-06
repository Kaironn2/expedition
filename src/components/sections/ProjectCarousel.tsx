"use client";

import { Children, type CSSProperties, type ReactNode } from "react";
import { CarouselArrowIcon } from "@/components/icons/CarouselArrowIcon";
import { useCarouselWindow } from "@/hooks/useCarouselWindow";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const FOCUS_COUNT = 3;
const DESKTOP_QUERY = "(min-width: 1280px)";

interface Props {
  readonly previousLabel: string;
  readonly nextLabel: string;
  readonly children: ReactNode;
}

interface ArrowProps {
  readonly direction: "previous" | "next";
  readonly label: string;
  readonly enabled: boolean;
  readonly onClick: () => void;
}

function slotStyle(offset: number): CSSProperties {
  return { "--slot-offset": offset } as CSSProperties;
}

function CarouselArrow({ direction, label, enabled, onClick }: ArrowProps) {
  return (
    <button
      type="button"
      className={`k-carousel-arrow is-${direction}`}
      aria-label={label}
      aria-disabled={!enabled}
      onClick={onClick}
    >
      <CarouselArrowIcon direction={direction} className="k-carousel-arrow-svg" />
    </button>
  );
}

export function ProjectCarousel({ previousLabel, nextLabel, children }: Props) {
  const items = Children.toArray(children);
  const { slots, previous, next, canGoPrevious, canGoNext, isScrollable } = useCarouselWindow(
    items.length,
    FOCUS_COUNT,
  );
  const isDesktop = useMediaQuery(DESKTOP_QUERY);

  return (
    <div className="k-projects-carousel">
      <ul className="k-projects-grid">
        {items.map((item, index) => {
          const slot = slots[index];
          if (!slot) return null;
          return (
            <li
              key={(item as { key?: string }).key ?? index}
              className="k-pcard-slot"
              data-slot={slot.kind}
              style={slotStyle(slot.offset)}
              inert={isDesktop && slot.kind !== "focus"}
            >
              {item}
            </li>
          );
        })}
      </ul>
      {isScrollable && (
        <>
          <CarouselArrow
            direction="previous"
            label={previousLabel}
            enabled={canGoPrevious}
            onClick={previous}
          />
          <CarouselArrow direction="next" label={nextLabel} enabled={canGoNext} onClick={next} />
        </>
      )}
    </div>
  );
}

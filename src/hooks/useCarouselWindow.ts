"use client";

import { useCallback, useState } from "react";

export type CarouselSlotKind = "focus" | "peek-prev" | "peek-next" | "hidden";

export interface CarouselSlot {
  readonly offset: number;
  readonly kind: CarouselSlotKind;
}

function slotKind(offset: number, focusCount: number): CarouselSlotKind {
  if (offset === -1) return "peek-prev";
  if (offset === focusCount) return "peek-next";
  return offset >= 0 && offset < focusCount ? "focus" : "hidden";
}

export function useCarouselWindow(itemCount: number, focusCount: number) {
  const [start, setStart] = useState(0);
  const lastStart = Math.max(itemCount - focusCount, 0);

  const previous = useCallback(() => setStart((value) => Math.max(value - 1, 0)), []);
  const next = useCallback(() => setStart((value) => Math.min(value + 1, lastStart)), [lastStart]);

  const slots: readonly CarouselSlot[] = Array.from({ length: itemCount }, (_, index) => {
    const offset = index - start;
    return { offset, kind: slotKind(offset, focusCount) };
  });

  return {
    slots,
    previous,
    next,
    canGoPrevious: start > 0,
    canGoNext: start < lastStart,
    isScrollable: lastStart > 0,
  };
}

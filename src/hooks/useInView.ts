"use client";

import { useEffect, useRef, useState } from "react";

interface Options {
  readonly threshold?: number;
  readonly rootMargin?: string;
  readonly once?: boolean;
}

export function useInView<T extends Element>(options: Options = {}) {
  const { threshold = 0.15, rootMargin = "0px 0px 10% 0px", once = true } = options;
  const ref = useRef<T | null>(null);
  const frameRef = useRef(0);
  const visibleRef = useRef(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    function syncVisibility(nextVisible: boolean) {
      if (visibleRef.current === nextVisible) return;
      visibleRef.current = nextVisible;
      cancelAnimationFrame(frameRef.current);
      frameRef.current = requestAnimationFrame(() => setIsInView(nextVisible));
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        if (entry.isIntersecting) {
          syncVisibility(true);
          if (once) observer.disconnect();
        } else if (!once) {
          syncVisibility(false);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(node);
    return () => {
      cancelAnimationFrame(frameRef.current);
      observer.disconnect();
    };
  }, [threshold, rootMargin, once]);

  return [ref, isInView] as const;
}

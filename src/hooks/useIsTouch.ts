"use client";

import { useEffect, useState } from "react";

const QUERY = "(hover: none) and (pointer: coarse)";

export function useIsTouch() {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(QUERY);
    setIsTouch(mq.matches);
    const handler = (event: MediaQueryListEvent) => setIsTouch(event.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return isTouch;
}

"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

interface Props {
  readonly children: ReactNode;
}

export function HeaderScrollFrame({ children }: Props) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function syncScrollState() {
      setIsScrolled(window.scrollY > 12);
    }

    syncScrollState();
    window.addEventListener("scroll", syncScrollState, { passive: true });
    return () => window.removeEventListener("scroll", syncScrollState);
  }, []);

  return <header className={cn("k-header", isScrolled && "is-scrolled")}>{children}</header>;
}

"use client";

import { useEffect, useState } from "react";

interface SectionItem {
  readonly id: string;
}

export function useActiveSection(items: readonly SectionItem[]) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    let frame = 0;
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));

    function syncFromHash() {
      const id = window.location.hash.replace("#", "");
      if (items.some((item) => item.id === id)) {
        setActiveId(id);
        return true;
      }

      return false;
    }

    function syncFromScroll() {
      const pageBottom = window.scrollY + window.innerHeight;
      const isAtBottom = Math.ceil(pageBottom) >= document.documentElement.scrollHeight - 1;
      const marker = window.scrollY + window.innerHeight * 0.38;
      let currentId = "";

      for (const section of sections) {
        if (section.offsetTop <= marker) currentId = section.id;
      }

      if (isAtBottom) currentId = sections.at(-1)?.id ?? currentId;

      setActiveId(currentId);
    }

    function scheduleSync() {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(syncFromScroll);
    }

    if (!syncFromHash()) syncFromScroll();
    window.addEventListener("hashchange", syncFromHash);
    window.addEventListener("scroll", scheduleSync, { passive: true });
    window.addEventListener("resize", scheduleSync);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("hashchange", syncFromHash);
      window.removeEventListener("scroll", scheduleSync);
      window.removeEventListener("resize", scheduleSync);
    };
  }, [items]);

  return activeId;
}

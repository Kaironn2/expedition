"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

interface Item {
  readonly id: string;
  readonly label: string;
}

export function HeaderMobileMenu({ items }: { readonly items: readonly Item[] }) {
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    function closeFromOutside(event: PointerEvent) {
      const menu = menuRef.current;
      const target = event.target;

      if (menu && target instanceof Node && !menu.contains(target)) setOpen(false);
    }

    document.addEventListener("pointerdown", closeFromOutside);
    return () => document.removeEventListener("pointerdown", closeFromOutside);
  }, [open]);

  return (
    <div ref={menuRef} className="k-mobile-menu md:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="k-mobile-menu-trigger"
      >
        <span aria-hidden />
        <span aria-hidden />
        <span aria-hidden />
      </button>
      <ul className={cn("k-mobile-menu-panel", open ? "block" : "hidden")}>
        {items.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`} onClick={() => setOpen(false)} className="k-mobile-menu-link">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

"use client";

import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/cn";

interface Item {
  readonly id: string;
  readonly label: string;
}

interface Props {
  readonly items: readonly Item[];
}

export function HeaderNavigation({ items }: Props) {
  const activeId = useActiveSection(items);

  return (
    <nav className="hidden md:block" aria-label="Primary">
      <ul className="k-header-nav">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              aria-current={activeId === item.id ? "page" : undefined}
              className={cn("k-header-nav-link", activeId === item.id && "is-active")}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

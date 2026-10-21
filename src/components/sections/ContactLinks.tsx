"use client";

import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { NexusIcon } from "@/components/icons/NexusIcon";
import { useInView } from "@/hooks/useInView";
import { animClass, staggerDelay } from "@/lib/anim";
import type { ContactLink } from "@/types/portfolio";

function SocialIcon({ icon }: { readonly icon: ContactLink["icon"] }) {
  if (icon === "github") {
    return <GitHubIcon />;
  }

  if (icon === "nexus") {
    return <NexusIcon />;
  }

  if (icon === "instagram") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect
          x="4"
          y="4"
          width="16"
          height="16"
          rx="5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <circle cx="12" cy="12" r="3.4" fill="none" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="17" cy="7" r="1" fill="currentColor" />
      </svg>
    );
  }

  if (icon === "twitter") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path
          fill="currentColor"
          d="M14.2 10.2 21.4 2h-1.7l-6.3 7.1L8.4 2H2.6l7.6 10.8L2.6 22h1.7l6.7-7.8 5.4 7.8h5.8l-8-11.8Zm-2.4 2.7-.8-1.1L4.9 3.3h2.7l4.9 6.9.8 1.1 6.5 9.3h-2.7l-5.3-7.7Z"
        />
      </svg>
    );
  }

  if (icon === "steam") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path
          fill="currentColor"
          d="M11.98 0C5.68 0 .51 4.86.02 11.04l6.43 2.66a3.37 3.37 0 0 1 1.91-.59h.19l2.87-4.14v-.06a4.52 4.52 0 1 1 4.52 4.53h-.11l-4.07 2.91v.16a3.39 3.39 0 0 1-6.72.67L.44 15.27A12 12 0 1 0 11.98 0ZM7.54 18.21l-1.47-.61c.26.54.71 1 1.31 1.25a2.54 2.54 0 0 0 3.33-1.38 2.54 2.54 0 0 0-1.37-3.33 2.5 2.5 0 0 0-1.88-.03l1.53.63a1.88 1.88 0 1 1-1.45 3.47Zm11.42-9.3a3.02 3.02 0 1 0-6.04-.01 3.02 3.02 0 0 0 6.04.01Zm-5.28-.01a2.27 2.27 0 1 1 4.53 0 2.27 2.27 0 0 1-4.53 0Z"
        />
      </svg>
    );
  }

  if (icon === "email") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect
          x="3.5"
          y="5.5"
          width="17"
          height="13"
          rx="1.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path d="m4 7 8 6 8-6" fill="none" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M7 17 17 7M9 7h8v8" fill="none" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

export function ContactLinks({ links }: { readonly links: readonly ContactLink[] }) {
  const [ref, isInView] = useInView<HTMLUListElement>();

  return (
    <ul ref={ref} className="mt-10 grid gap-4 sm:grid-cols-2">
      {links.map((link, index) => {
        const isExternal = !link.href.startsWith("mailto:");

        return (
          <li
            key={link.id}
            className={animClass({ isVisible: isInView })}
            style={staggerDelay(index, 100)}
          >
            <a
              href={link.href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className="group flex items-center justify-between gap-4 rounded-lg border border-border-subtle bg-bg-elevated px-6 py-4 transition-colors hover:border-gold-500"
            >
              <span className="flex items-center gap-3">
                <span className="grid size-9 place-items-center border border-gold-700/35 text-gold-700 transition-colors group-hover:border-gold-500 group-hover:text-gold-300 [&_svg]:size-4">
                  <SocialIcon icon={link.icon} />
                </span>
                <span className="font-mono text-xs uppercase tracking-wider text-gold-700 group-hover:text-gold-300">
                  {link.id}
                </span>
              </span>
              <span className="break-all text-right font-serif text-lg text-text-primary group-hover:text-gold-300">
                {link.label}
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

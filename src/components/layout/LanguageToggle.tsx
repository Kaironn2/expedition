"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState, useTransition } from "react";
import { cn } from "@/lib/cn";
import type { Locale } from "@/types/portfolio";

const LOCALES = ["pt", "en"] as const;

interface Props {
  readonly ariaLabel: string;
  readonly className?: string;
  readonly locale: Locale;
}

function pathForLocale(pathname: string, locale: Locale): string {
  const parts = pathname.split("/");
  parts[1] = locale;
  return parts.join("/") || `/${locale}`;
}

export function LanguageToggle({ ariaLabel, className, locale }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const [pendingLocale, setPendingLocale] = useState<Locale | null>(null);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    function prefetchLocales() {
      for (const nextLocale of LOCALES) {
        if (nextLocale !== locale) router.prefetch(pathForLocale(pathname, nextLocale));
      }
    }

    if (typeof window.requestIdleCallback === "function") {
      const idleId = window.requestIdleCallback(prefetchLocales, { timeout: 1200 });
      return () => window.cancelIdleCallback(idleId);
    }

    const timeoutId = globalThis.setTimeout(prefetchLocales, 300);
    return () => globalThis.clearTimeout(timeoutId);
  }, [locale, pathname, router]);

  useEffect(() => {
    if (!isPending) setPendingLocale(null);
  }, [isPending]);

  function prefetchLocale(next: Locale) {
    if (next !== locale) router.prefetch(pathForLocale(pathname, next));
  }

  function switchTo(next: Locale) {
    if (next === locale) return;
    setPendingLocale(next);
    startTransition(() => {
      const hash = window.location.hash;
      router.replace(`${pathForLocale(pathname, next)}${hash}`, { scroll: false });
    });
  }

  return (
    <fieldset
      data-locale={locale}
      className={cn(
        "inline-flex border border-border-subtle font-mono text-xs",
        isPending && "is-switching",
        className,
      )}
    >
      <legend className="sr-only">{ariaLabel}</legend>
      {LOCALES.map((nextLocale) => (
        <button
          key={nextLocale}
          type="button"
          onClick={() => switchTo(nextLocale)}
          onFocus={() => prefetchLocale(nextLocale)}
          onPointerEnter={() => prefetchLocale(nextLocale)}
          aria-pressed={nextLocale === locale}
          className={cn(
            "uppercase transition-colors",
            pendingLocale === nextLocale && "is-pending",
            nextLocale === locale ? "text-gold-300" : "text-text-muted hover:text-gold-300",
          )}
        >
          {nextLocale}
        </button>
      ))}
    </fieldset>
  );
}

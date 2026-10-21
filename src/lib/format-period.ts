import type { Locale } from "@/types/portfolio";

export function formatPeriod(
  period: { readonly start: string; readonly end?: string },
  locale: Locale,
): string {
  const present = locale === "pt" ? "Atual" : "Present";
  return `${period.start} - ${period.end ?? present}`;
}

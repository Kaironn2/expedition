import type { AcademicPeriod } from "@/types/portfolio";

function toMonthIndex(value: string): number {
  const [yearPart, monthPart] = value.split("-");
  const year = Number(yearPart);
  const month = Number(monthPart);
  return year * 12 + (month - 1);
}

export function calculateAcademicProgress(period: AcademicPeriod, now: Date = new Date()): number {
  const start = toMonthIndex(period.start);
  const end = toMonthIndex(period.end);
  const total = end - start;
  if (total <= 0) return 100;

  const current = now.getFullYear() * 12 + now.getMonth();
  const elapsed = current - start;
  if (elapsed <= 0) return 0;
  if (elapsed >= total) return 100;

  return Math.round((elapsed / total) * 100);
}

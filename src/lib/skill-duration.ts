export function monthsSince(since: string, now: Date = new Date()): number {
  const [year, month] = since.split("-").map(Number);
  if (year === undefined || month === undefined) return 0;

  return Math.max(0, (now.getFullYear() - year) * 12 + (now.getMonth() + 1 - month));
}

export function splitMonths(total: number): { years: number; months: number } {
  return { years: Math.floor(total / 12), months: total % 12 };
}

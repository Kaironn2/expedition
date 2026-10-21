export function calculateAge(birthDate: string, now: Date = new Date()): number {
  const [year, month, day] = birthDate.split("-").map(Number);
  if (year === undefined || month === undefined || day === undefined) return 0;

  const age = now.getFullYear() - year;
  const hadBirthday =
    now.getMonth() + 1 > month || (now.getMonth() + 1 === month && now.getDate() >= day);
  return hadBirthday ? age : age - 1;
}

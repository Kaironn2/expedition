import type { AcademicRecord } from "@/types/portfolio";

export const academicRecords: readonly AcademicRecord[] = [
  {
    id: "gran-software-engineering",
    course: {
      pt: "Engenharia de Software",
      en: "Software Engineering",
    },
    institution: "Gran Faculdade",
    iconKind: "gear",
    period: { start: "2025-07", end: "2029-07" },
  },
] as const;

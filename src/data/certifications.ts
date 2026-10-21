import type { Certification } from "@/types/portfolio";

export const certifications: readonly Certification[] = [
  {
    id: "cert-placeholder-1",
    name: "TODO: nome da certificação",
    issuer: "TODO: emissor",
    issuedAt: "2025-01",
    credentialUrl: "https://example.com/credential",
  },
] as const;

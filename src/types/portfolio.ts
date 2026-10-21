export type Locale = "pt" | "en";

export type LocalizedString = Readonly<Record<Locale, string>>;

export interface ContactLink {
  readonly id: string;
  readonly label: string;
  readonly href: string;
  readonly icon?:
    | "github"
    | "linkedin"
    | "email"
    | "twitter"
    | "instagram"
    | "nexus"
    | "steam"
    | "website";
}

export interface Profile {
  readonly name: string;
  readonly role: LocalizedString;
  readonly tagline: LocalizedString;
  readonly bio: LocalizedString;
  readonly location: string;
  readonly birthDate: string;
  readonly socials: readonly ContactLink[];
}

export interface ExperiencePeriod {
  readonly start: string;
  readonly end?: string;
}

export interface Experience {
  readonly id: string;
  readonly company: string;
  readonly current?: boolean;
  readonly level: number;
  readonly role: LocalizedString;
  readonly period: ExperiencePeriod;
  readonly periodLabel: LocalizedString;
  readonly description: LocalizedString;
  readonly highlights: readonly LocalizedString[];
  readonly stack: readonly string[];
}

export interface Certification {
  readonly id: string;
  readonly name: string;
  readonly issuer: string;
  readonly issuedAt: string;
  readonly credentialUrl?: string;
  readonly logoUrl?: string;
}

export type AcademicIconKind = "gear";

export interface AcademicPeriod {
  readonly start: string;
  readonly end: string;
}

export interface AcademicRecord {
  readonly id: string;
  readonly course: LocalizedString;
  readonly institution: string;
  readonly iconKind: AcademicIconKind;
  readonly period: AcademicPeriod;
}

export type ProjectIconKind = "expedition-33" | "icosa" | "lune-glyph";

export type ProjectLinkKind = "github" | "nexus";

export interface ProjectLink {
  readonly kind: ProjectLinkKind;
  readonly url: string;
}

export interface Project {
  readonly id: string;
  readonly name: LocalizedString;
  readonly iconKind: ProjectIconKind;
  readonly iconLabel?: string;
  readonly summary: LocalizedString;
  readonly longSummary: LocalizedString;
  readonly stack: readonly string[];
  readonly links: readonly ProjectLink[];
  readonly placeholder?: boolean;
  readonly secretLevel?: string;
}

import { useLocale, useTranslations } from "next-intl";
import { Section } from "@/components/ui/Section";
import { profile } from "@/data/profile";
import type { Locale } from "@/types/portfolio";
import { AboutContent } from "./AboutContent";

export function About() {
  const locale = useLocale() as Locale;
  const t = useTranslations("about");
  const stackItems = t.raw("stackItems") as string[];

  return (
    <Section id="about" className="max-w-[1180px]">
      <div className="k-section-heading anim-fade-in is-visible">
        <span className="k-section-num">{t("num")}</span>
        <h2 className="k-section-title">
          <span aria-hidden className="k-section-brush" />
          {t("title")}
        </h2>
        <span className="k-section-caption">- {t("caption")}</span>
        <span className="k-section-rule" aria-hidden />
      </div>
      <AboutContent
        bio={profile.bio[locale]}
        labels={{
          location: t("locationLabel"),
          stack: t("stackLabel"),
          status: t("statusLabel"),
        }}
        location={profile.location}
        stackItems={stackItems}
        status={t("statusValue")}
      />
    </Section>
  );
}

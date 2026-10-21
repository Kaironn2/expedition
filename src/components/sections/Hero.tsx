import { useTranslations } from "next-intl";
import { Section } from "@/components/ui/Section";
import { profile } from "@/data/profile";
import { calculateAge } from "@/lib/age";
import { HeroIntro } from "./HeroIntro";

export function Hero() {
  const t = useTranslations("hero");
  const expeditionNumber = calculateAge(profile.birthDate);
  const rotating = [
    t("rotating.one"),
    t("rotating.two"),
    t("rotating.three"),
    t("rotating.four"),
    t("rotating.five"),
    t("rotating.six"),
    t("rotating.seven"),
    t("rotating.eight"),
  ];

  return (
    <Section id="top" className="k-hero">
      <HeroIntro
        alias={t("alias")}
        contactCtaLabel={t("contactCta")}
        ctaLabel={t("cta")}
        expeditionLabel={t("expeditionLabel")}
        expeditionNumber={expeditionNumber}
        rotating={rotating}
        statJourneyLabel={t("statJourneyLabel")}
        statJourneyValue={t("statJourneyValue")}
        statProjectsLabel={t("statProjectsLabel")}
        statProjectsValue={t("statProjectsValue")}
        statStackLabel={t("statStackLabel")}
        statStackValue={t("statStackValue")}
        subtitleHighlight={t("subtitleHighlight")}
        subtitleLead={t("subtitleLead")}
        titleFirst={t("titleFirst")}
        titleLast={t("titleLast")}
      />
    </Section>
  );
}

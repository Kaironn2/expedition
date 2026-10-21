import { useTranslations } from "next-intl";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";

export function Courses() {
  const t = useTranslations("courses");

  return (
    <Section id="courses">
      <Heading eyebrow={t("num")} as="h2">
        {t("title")}
      </Heading>
      <div className="k-coming-soon" data-hover>
        <span>{t("caption")}</span>
        <p>{t("comingSoon")}</p>
      </div>
    </Section>
  );
}

import { useLocale, useTranslations } from "next-intl";
import { Section } from "@/components/ui/Section";
import { experiences } from "@/data/experiences";
import type { Locale } from "@/types/portfolio";
import { TimelineItem } from "./TimelineItem";

export function Experience() {
  const locale = useLocale() as Locale;
  const t = useTranslations("career");

  return (
    <Section id="experience" className="max-w-[1320px]">
      <div className="k-section-heading anim-fade-in is-visible">
        <span className="k-section-num">{t("num")}</span>
        <h2 className="k-section-title">
          <span aria-hidden className="k-section-brush" />
          {t("title")}
        </h2>
        <span className="k-section-caption">- {t("caption")}</span>
        <span className="k-section-rule" aria-hidden />
      </div>
      <div className="k-career-roadmap">
        <span className="k-career-spine" aria-hidden />
        <ol className="k-career-list">
          {experiences.map((experience, index) => (
            <TimelineItem
              key={experience.id}
              index={index}
              company={experience.company}
              current={experience.current}
              defaultOpen={true}
              role={experience.role[locale]}
              description={experience.description[locale]}
              period={experience.periodLabel[locale]}
              highlights={experience.highlights.map((highlight) => highlight[locale])}
              level={experience.level}
              labels={{
                current: t("current"),
                level: t("level"),
                showLess: t("showLess"),
                showMore: t("showMore"),
              }}
              stack={experience.stack}
            />
          ))}
        </ol>
      </div>
    </Section>
  );
}

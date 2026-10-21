import { useLocale, useTranslations } from "next-intl";
import { Section } from "@/components/ui/Section";
import { academicRecords } from "@/data/academic";
import { calculateAcademicProgress } from "@/lib/academic-progress";
import type { AcademicPeriod, Locale } from "@/types/portfolio";
import { AcademicCard } from "./AcademicCard";

function formatPeriodLabel(period: AcademicPeriod, months: readonly string[]): string {
  const [startYear, startMonth] = period.start.split("-").map(Number);
  const [endYear, endMonth] = period.end.split("-").map(Number);
  if (
    startYear === undefined ||
    startMonth === undefined ||
    endYear === undefined ||
    endMonth === undefined
  ) {
    return `${period.start} - ${period.end}`;
  }
  const startLabel = `${months[startMonth - 1] ?? ""} ${startYear}`.trim();
  const endLabel = `${months[endMonth - 1] ?? ""} ${endYear}`.trim();
  return `${startLabel} - ${endLabel}`;
}

export function Academic() {
  const locale = useLocale() as Locale;
  const t = useTranslations("academic");
  const months = t.raw("monthsShort") as readonly string[];

  return (
    <Section id="academic">
      <div className="k-section-heading anim-fade-in is-visible">
        <span className="k-section-num">{t("num")}</span>
        <h2 className="k-section-title">
          <span aria-hidden className="k-section-brush" />
          {t("title")}
        </h2>
        <span className="k-section-caption">- {t("caption")}</span>
        <span className="k-section-rule" aria-hidden />
      </div>
      <ul className="k-edu-list">
        {academicRecords.map((record, index) => {
          const progress = calculateAcademicProgress(record.period);
          const status = progress >= 100 ? t("statusCompleted") : t("statusInProgress");
          const period = formatPeriodLabel(record.period, months);

          return (
            <AcademicCard
              key={record.id}
              index={index}
              course={record.course[locale]}
              institution={record.institution}
              iconKind={record.iconKind}
              period={period}
              status={status}
              progress={progress}
              progressLabel={t("progressLabel")}
            />
          );
        })}
      </ul>
    </Section>
  );
}

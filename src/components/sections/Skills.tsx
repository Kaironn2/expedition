import { useLocale, useTranslations } from "next-intl";
import type { CSSProperties } from "react";
import { Section } from "@/components/ui/Section";
import { type SkillEntry, type SkillTier, skillCategories, skillSources } from "@/data/skills";
import { monthsSince, splitMonths } from "@/lib/skill-duration";
import type { Locale } from "@/types/portfolio";
import { SkillRow, type SkillRowUse } from "./SkillRow";
import { SkillTierPips } from "./SkillTierPips";

const ROMAN = ["I", "II", "III", "IV"] as const;
const TIERS = [1, 2, 3, 4] as const satisfies readonly SkillTier[];

function categoryStyle(index: number): CSSProperties {
  return { transitionDelay: `${index * 120}ms` };
}

export function Skills() {
  const locale = useLocale() as Locale;
  const t = useTranslations("skills");
  const now = new Date();

  const tierName = (tier: SkillTier) => t(`tiers.${tier}`);
  const tierTitle = (tier: SkillTier) => `${ROMAN[tier - 1]} · ${tierName(tier)}`;
  const tierLabel = (tier: SkillTier) => `${t("tierLabel", { tier })} · ${tierName(tier)}`;

  const formatShort = (total: number) => {
    const { years, months } = splitMonths(total);
    if (!years && !months) return t("shortLessThanMonth");
    const parts = [];
    if (years) parts.push(t("shortYears", { count: years }));
    if (months) parts.push(t("shortMonths", { count: months }));
    return parts.join(" ");
  };

  const formatLong = (total: number) => {
    const { years, months } = splitMonths(total);
    if (!years && !months) return t("longLessThanMonth");
    const parts = [];
    if (years) parts.push(t("longYears", { count: years }));
    if (months) parts.push(t("longMonths", { count: months }));
    return parts.join(` ${t("and")} `);
  };

  const resolveUses = (skill: SkillEntry): SkillRowUse[] =>
    skill.uses.flatMap((use) => {
      const source = skillSources.find((item) => item.id === use.source);
      if (!source) return [];
      return [
        {
          id: source.id,
          name: source.name[locale],
          kind: source.kind,
          meta: source.year
            ? `${t(`kinds.${source.kind}`)} · ${source.year}`
            : t(`kinds.${source.kind}`),
          note: use.note?.[locale],
          details: use.details?.map((detail) => detail[locale]) ?? [],
        },
      ];
    });

  return (
    <Section id="skills" className="max-w-[1320px]">
      <div className="k-section-heading anim-fade-in is-visible">
        <span className="k-section-num">{t("num")}</span>
        <h2 className="k-section-title">
          <span aria-hidden className="k-section-brush" />
          {t("title")}
        </h2>
        <span className="k-section-caption">- {t("caption")}</span>
        <span className="k-section-rule" aria-hidden />
      </div>

      <div className="k-skills-legend anim-fade-in is-visible">
        <p className="k-skills-legend-title">{t("legend")}</p>
        <ol className="k-skills-legend-list">
          {TIERS.map((tier) => (
            <li key={tier}>
              <SkillTierPips tier={tier} label={tierLabel(tier)} small />
              <span className="k-skills-legend-name">{tierTitle(tier)}</span>
            </li>
          ))}
        </ol>
      </div>

      <ul className="k-skills-grid">
        {skillCategories.map((category, index) => (
          <li
            key={category.id}
            className="k-skill-category anim-fade-in is-visible"
            style={categoryStyle(index)}
          >
            <h3 className="k-skill-heading">
              <span className="k-skill-category-num">{category.num}</span>
              {category.name}
            </h3>
            <div className="k-skill-list">
              {category.items.map((skill) => {
                const months = skill.since ? monthsSince(skill.since, now) : undefined;
                return (
                  <SkillRow
                    key={skill.name}
                    name={skill.name}
                    tier={skill.tier}
                    tierLabel={tierLabel(skill.tier)}
                    tierTitle={tierTitle(skill.tier)}
                    timeShort={months === undefined ? "—" : formatShort(months)}
                    timeLong={months === undefined ? t("noTime") : formatLong(months)}
                    countLabel={t("keyCount")}
                    description={skill.description[locale]}
                    uses={resolveUses(skill)}
                  />
                );
              })}
            </div>
          </li>
        ))}
      </ul>

      <div className="k-skills-key anim-fade-in is-visible">
        <span className="k-skills-key-item">
          <span className="k-skill-time">{t("keySample")}</span>
          <span className="k-skills-key-label">{t("keyTime")}</span>
        </span>
        <span className="k-skills-key-item">
          <span className="k-skill-count">3</span>
          <span className="k-skills-key-label">{t("keyCount")}</span>
        </span>
        <span className="k-skills-key-item is-hint">
          <span className="k-skills-key-label">{t("keyHint")}</span>
        </span>
      </div>
    </Section>
  );
}

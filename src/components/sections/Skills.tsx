import { useTranslations } from "next-intl";
import type { CSSProperties } from "react";
import { Section } from "@/components/ui/Section";
import { skillCategories } from "@/data/skills";

const maxSkillCount = skillCategories.reduce(
  (max, category) => Math.max(max, category.items.length),
  0,
);
const skillCardMinHeight = 112 + maxSkillCount * 40;

function gridStyle(): CSSProperties {
  return { "--skill-card-min-height": `${skillCardMinHeight}px` } as CSSProperties;
}

function categoryStyle(index: number): CSSProperties {
  return { transitionDelay: `${index * 120}ms` };
}

function fillStyle(familiarity: number): CSSProperties {
  return { "--skill-level": `${familiarity}%` } as CSSProperties;
}

export function Skills() {
  const t = useTranslations("skills");
  const levelLabel = t("levelLabel");

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
      <p className="k-skills-legend anim-fade-in is-visible">{t("legend")}</p>
      <ul className="k-skills-grid" style={gridStyle()}>
        {skillCategories.map((category, index) => (
          <li
            key={category.id}
            className="k-skill-category anim-fade-in is-visible"
            style={categoryStyle(index)}
            data-hover
          >
            <h3 className="k-skill-heading">
              <span className="k-skill-category-num">{category.num}</span>
              {category.name}
            </h3>
            <ul className="k-skill-list">
              {category.items.map((skill) => (
                <li key={skill.name} className="k-skill-row">
                  <span className="k-skill-name">{skill.name}</span>
                  <span className="sr-only">{`${levelLabel}: ${skill.familiarity}/100`}</span>
                  <div className="k-skill-bar" aria-hidden="true">
                    <span className="k-skill-fill" style={fillStyle(skill.familiarity)} />
                  </div>
                  <span className="k-skill-level" aria-hidden="true">
                    {skill.familiarity}
                  </span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  );
}

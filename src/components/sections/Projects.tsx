import { useLocale, useTranslations } from "next-intl";
import { Section } from "@/components/ui/Section";
import { projects } from "@/data/projects";
import type { Locale } from "@/types/portfolio";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  const locale = useLocale() as Locale;
  const t = useTranslations("projects");
  const levelPrefix = locale === "pt" ? "Nv." : "Lv.";
  const repositoryLabel = t("repository");
  const flipHintHover = t("flipHintHover");
  const flipHintTap = t("flipHintTap");

  return (
    <Section id="projects" className="max-w-[1180px]">
      <div className="k-section-heading anim-fade-in is-visible">
        <span className="k-section-num">{t("num")}</span>
        <h2 className="k-section-title">
          <span aria-hidden className="k-section-brush" />
          {t("title")}
        </h2>
        <span className="k-section-caption">- {t("caption")}</span>
        <span className="k-section-rule" aria-hidden />
      </div>
      <ul className="k-projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            index={index}
            project={project}
            locale={locale}
            levelPrefix={levelPrefix}
            repositoryLabel={repositoryLabel}
            flipHintHover={flipHintHover}
            flipHintTap={flipHintTap}
          />
        ))}
      </ul>
    </Section>
  );
}

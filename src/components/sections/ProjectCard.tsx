"use client";

import { type KeyboardEvent, type MouseEvent, useCallback, useState } from "react";
import { ExpeditionBadgeIcon } from "@/components/icons/ExpeditionBadgeIcon";
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { IcosaIcon } from "@/components/icons/IcosaIcon";
import { LuneGlyphIcon } from "@/components/icons/LuneGlyphIcon";
import { NexusIcon } from "@/components/icons/NexusIcon";
import { useInView } from "@/hooks/useInView";
import { useIsTouch } from "@/hooks/useIsTouch";
import { animClass, staggerDelay } from "@/lib/anim";
import type { Project, ProjectLink } from "@/types/portfolio";

const FRONT_TAG_LIMIT = 5;

interface Props {
  readonly index: number;
  readonly project: Project;
  readonly locale: "pt" | "en";
  readonly levelPrefix: string;
  readonly repositoryLabel: string;
  readonly flipHintHover: string;
  readonly flipHintTap: string;
}

function ProjectGlyph({ project }: { readonly project: Project }) {
  if (project.iconKind === "icosa") {
    return <IcosaIcon className="k-pcard-glyph-svg" />;
  }
  if (project.iconKind === "lune-glyph") {
    return <LuneGlyphIcon className="k-pcard-glyph-svg" />;
  }
  return <ExpeditionBadgeIcon label={project.iconLabel ?? "?"} className="k-pcard-glyph-svg" />;
}

function ProjectLinkButton({
  link,
  repositoryLabel,
}: {
  readonly link: ProjectLink;
  readonly repositoryLabel: string;
}) {
  const stopPropagation = useCallback((event: MouseEvent<HTMLAnchorElement>) => {
    event.stopPropagation();
  }, []);

  if (link.kind === "github") {
    return (
      <a
        className="k-pcard-link"
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={stopPropagation}
      >
        <GitHubIcon />
        <span>{repositoryLabel}</span>
      </a>
    );
  }

  return (
    <a
      className="k-pcard-link"
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={stopPropagation}
    >
      <NexusIcon />
      <span>Nexus</span>
    </a>
  );
}

export function ProjectCard({
  index,
  project,
  locale,
  levelPrefix,
  repositoryLabel,
  flipHintHover,
  flipHintTap,
}: Props) {
  const [ref, isInView] = useInView<HTMLLIElement>();
  const isTouch = useIsTouch();
  const [flipped, setFlipped] = useState(false);

  const handleToggle = useCallback(() => {
    if (!isTouch) return;
    setFlipped((value) => !value);
  }, [isTouch]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      if (!isTouch) return;
      event.preventDefault();
      setFlipped((value) => !value);
    },
    [isTouch],
  );

  const level = project.placeholder ? (project.secretLevel ?? "?") : String(project.stack.length);
  const levelText = `${levelPrefix} ${level}`;
  const name = project.name[locale];
  const summary = project.summary[locale];
  const longSummary = project.longSummary[locale];
  const frontTags = project.stack.slice(0, FRONT_TAG_LIMIT);
  const overflow = project.stack.length - frontTags.length;
  const flipHint = isTouch ? flipHintTap : flipHintHover;

  return (
    <li
      ref={ref}
      className={`${animClass({ isVisible: isInView })} k-pcard-wrap`}
      style={staggerDelay(index, 100)}
    >
      {/* biome-ignore lint/a11y/noStaticElementInteractions: role is set dynamically based on input device */}
      {/* biome-ignore lint/a11y/useAriaPropsSupportedByRole: aria-pressed is only set when role=button (touch) */}
      <div
        className={`k-pcard${project.placeholder ? " is-placeholder" : ""}${flipped ? " is-flipped" : ""}`}
        role={isTouch ? "button" : undefined}
        tabIndex={isTouch ? 0 : -1}
        aria-pressed={isTouch ? flipped : undefined}
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        data-hover
      >
        <div className="k-pcard-inner">
          <article className="k-pcard-face k-pcard-front" aria-hidden={flipped}>
            <span className="k-pcard-corner tl" aria-hidden />
            <span className="k-pcard-corner tr" aria-hidden />
            <span className="k-pcard-corner bl" aria-hidden />
            <span className="k-pcard-corner br" aria-hidden />
            <header className="k-pcard-head">
              <span className="k-pcard-level">
                <span className="k-pcard-diamond" aria-hidden />
                {levelText}
              </span>
              <span className="k-pcard-hint">{flipHint}</span>
            </header>
            <div className="k-pcard-glyph">
              <ProjectGlyph project={project} />
            </div>
            {project.placeholder ? (
              <span className="k-pcard-secret-mark" aria-hidden>
                ?
              </span>
            ) : (
              <>
                <h3 className="k-pcard-name">{name}</h3>
                <p className="k-pcard-summary">{summary}</p>
                {frontTags.length > 0 && (
                  <ul className="k-pcard-tags">
                    {frontTags.map((tag) => (
                      <li key={tag} className="k-pcard-tag">
                        {tag}
                      </li>
                    ))}
                    {overflow > 0 && <li className="k-pcard-tag k-pcard-tag-more">+{overflow}</li>}
                  </ul>
                )}
              </>
            )}
          </article>
          <article className="k-pcard-face k-pcard-back" aria-hidden={!flipped}>
            <span className="k-pcard-corner tl" aria-hidden />
            <span className="k-pcard-corner tr" aria-hidden />
            <span className="k-pcard-corner bl" aria-hidden />
            <span className="k-pcard-corner br" aria-hidden />
            <header className="k-pcard-head k-pcard-head-back">
              <span className="k-pcard-level">
                <span className="k-pcard-diamond" aria-hidden />
                {levelText}
              </span>
              <h3 className="k-pcard-name k-pcard-name-back">{name}</h3>
            </header>
            <p className="k-pcard-long">{longSummary}</p>
            {project.stack.length > 0 && (
              <ul className="k-pcard-tags k-pcard-tags-back">
                {project.stack.map((tag) => (
                  <li key={tag} className="k-pcard-tag">
                    {tag}
                  </li>
                ))}
              </ul>
            )}
            {project.links.length > 0 && (
              <div className="k-pcard-links">
                {project.links.map((link) => (
                  <ProjectLinkButton
                    key={link.kind}
                    link={link}
                    repositoryLabel={repositoryLabel}
                  />
                ))}
              </div>
            )}
          </article>
        </div>
      </div>
    </li>
  );
}

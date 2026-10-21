"use client";

import { useInView } from "@/hooks/useInView";
import { animClass } from "@/lib/anim";

interface Props {
  readonly bio: string;
  readonly labels: {
    readonly location: string;
    readonly stack: string;
    readonly status: string;
  };
  readonly location: string;
  readonly stackItems: readonly string[];
  readonly status: string;
}

function renderFormattedText(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={`${part}-${index}`}>{part.slice(2, -2)}</strong>;
    }

    return part;
  });
}

function renderBioBlock(block: string) {
  const lines = block.split("\n");
  const isList = lines.every((line) => line.startsWith("- "));

  if (isList) {
    return (
      <ul className="k-about-results" key={block}>
        {lines.map((line) => (
          <li key={line}>{renderFormattedText(line.slice(2))}</li>
        ))}
      </ul>
    );
  }

  return <p key={block}>{renderFormattedText(block)}</p>;
}

export function AboutContent({ bio, labels, location, stackItems, status }: Props) {
  const [ref, isInView] = useInView<HTMLDivElement>();
  const bioBlocks = bio.split("\n\n");

  return (
    <div ref={ref} className={`${animClass({ isVisible: isInView })} k-about-shell`}>
      <div className="k-about-copy">{bioBlocks.map((block) => renderBioBlock(block))}</div>
      <aside className="k-about-panel">
        <dl>
          <div>
            <dt>{labels.location}</dt>
            <dd>{location}</dd>
          </div>
          <div>
            <dt>{labels.status}</dt>
            <dd>{status}</dd>
          </div>
        </dl>
        <div className="k-about-focus">
          <span>{labels.stack}</span>
          <ul>
            {stackItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
}

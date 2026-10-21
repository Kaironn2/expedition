"use client";

import { Card } from "@/components/ui/Card";
import { useInView } from "@/hooks/useInView";
import { animClass, staggerDelay } from "@/lib/anim";

interface Props {
  readonly index: number;
  readonly name: string;
  readonly issuer: string;
  readonly issuedAt: string;
  readonly credentialUrl?: string;
}

export function CertificationCard(props: Props) {
  const [ref, isInView] = useInView<HTMLLIElement>();

  const content = (
    <Card className="h-full">
      <p className="font-mono text-xs uppercase tracking-wider text-gold-700">{props.issuedAt}</p>
      <h3 className="mt-2 font-serif text-xl text-gold-300">{props.name}</h3>
      <p className="font-mono text-sm text-text-muted">{props.issuer}</p>
    </Card>
  );

  return (
    <li
      ref={ref}
      className={animClass({ isVisible: isInView })}
      style={staggerDelay(props.index, 80)}
    >
      {props.credentialUrl ? (
        <a
          href={props.credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block h-full"
        >
          {content}
        </a>
      ) : (
        content
      )}
    </li>
  );
}

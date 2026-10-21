import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface Props {
  readonly as?: "h1" | "h2" | "h3";
  readonly children: ReactNode;
  readonly className?: string;
  readonly eyebrow?: string;
}

const sizes = {
  h1: "text-5xl md:text-7xl",
  h2: "text-3xl md:text-5xl",
  h3: "text-2xl md:text-3xl",
} as const;

export function Heading({ as: Tag = "h2", children, className, eyebrow }: Props) {
  return (
    <div className="space-y-2">
      {eyebrow ? (
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-gold-700">{eyebrow}</p>
      ) : null}
      <Tag className={cn("font-serif text-gold-300", sizes[Tag], className)}>{children}</Tag>
    </div>
  );
}

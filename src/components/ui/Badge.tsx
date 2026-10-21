import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface Props {
  readonly children: ReactNode;
  readonly className?: string;
}

export function Badge({ children, className }: Props) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-gold-700/40",
        "px-3 py-1 font-mono text-xs uppercase tracking-wider text-gold-300",
        className,
      )}
    >
      {children}
    </span>
  );
}

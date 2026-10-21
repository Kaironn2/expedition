import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

interface Props extends HTMLAttributes<HTMLDivElement> {
  readonly children: ReactNode;
}

export function Card({ className, children, ...rest }: Props) {
  return (
    <div
      className={cn(
        "rounded-lg border border-border-subtle bg-bg-elevated p-6",
        "transition-colors duration-300 hover:border-gold-700",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

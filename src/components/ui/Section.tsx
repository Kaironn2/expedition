import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

interface Props extends HTMLAttributes<HTMLElement> {
  readonly id: string;
  readonly children: ReactNode;
}

export function Section({ id, className, children, ...rest }: Props) {
  return (
    <section
      id={id}
      className={cn("mx-auto max-w-5xl scroll-mt-24 px-6 py-20 md:px-10 md:py-28", className)}
      {...rest}
    >
      {children}
    </section>
  );
}

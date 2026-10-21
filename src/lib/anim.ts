import { cn } from "@/lib/cn";

interface Options {
  readonly isVisible: boolean;
  readonly variant?: "fade-up" | "fade-in";
}

export function animClass({ isVisible, variant = "fade-up" }: Options): string {
  return cn(`anim-${variant}`, isVisible && "is-visible");
}

export function staggerDelay(index: number, stepMs = 80): { transitionDelay: string } {
  return { transitionDelay: `${index * stepMs}ms` };
}

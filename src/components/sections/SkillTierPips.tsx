import type { SkillTier } from "@/data/skills";
import { cn } from "@/lib/cn";

interface Props {
  readonly tier: SkillTier;
  readonly label: string;
  readonly small?: boolean;
}

const steps = [1, 2, 3, 4] as const;

export function SkillTierPips({ tier, label, small = false }: Props) {
  return (
    <span className={cn("k-tier-pips", small && "is-small")} role="img" aria-label={label}>
      {steps.map((step) => (
        <i key={step} className={step <= tier ? "is-on" : undefined} />
      ))}
    </span>
  );
}

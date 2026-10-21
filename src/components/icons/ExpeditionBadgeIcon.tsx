interface Props {
  readonly label: string;
  readonly className?: string;
}

export function ExpeditionBadgeIcon({ label, className }: Props) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="60" cy="60" r="56" strokeWidth={1.5} opacity={0.55} />
      <circle cx="60" cy="60" r="50" strokeWidth={1} opacity={0.35} />
      <path
        d="M60 8 L60 18 M60 102 L60 112 M8 60 L18 60 M102 60 L112 60"
        strokeWidth={1.5}
        opacity={0.7}
      />
      <path
        d="M23 23 L28 28 M97 23 L92 28 M23 97 L28 92 M97 97 L92 92"
        strokeWidth={1}
        opacity={0.4}
      />
      <rect
        x="30"
        y="30"
        width="60"
        height="60"
        transform="rotate(45 60 60)"
        strokeWidth={1}
        opacity={0.5}
      />
      <text
        x="60"
        y="60"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="Cinzel, serif"
        fontWeight={500}
        fontSize={34}
        letterSpacing="2"
        fill="currentColor"
        stroke="none"
      >
        {label}
      </text>
      <rect
        x="16"
        y="56"
        width="8"
        height="8"
        transform="rotate(45 20 60)"
        fill="currentColor"
        stroke="none"
        opacity={0.85}
      />
      <rect
        x="96"
        y="56"
        width="8"
        height="8"
        transform="rotate(45 100 60)"
        fill="currentColor"
        stroke="none"
        opacity={0.85}
      />
    </svg>
  );
}

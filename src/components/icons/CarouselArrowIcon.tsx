interface Props {
  readonly direction: "previous" | "next";
  readonly className?: string;
}

export function CarouselArrowIcon({ direction, className }: Props) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.75}
      aria-hidden="true"
      focusable="false"
    >
      <g transform={direction === "previous" ? "rotate(180 24 24)" : undefined}>
        <polygon points="5 24 9 20 13 24 9 28" fill="currentColor" stroke="none" />
        <path d="M13 24H37" />
        <path d="M21 17L28 24L21 31" />
        <path d="M28 13L39 24L28 35" />
        <circle cx="43" cy="24" r="1.5" fill="currentColor" stroke="none" />
      </g>
    </svg>
  );
}

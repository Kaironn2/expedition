interface Props {
  readonly className?: string;
}

export function GearIcon({ className }: Props) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M20 6 L22 6 L23 9 L25.5 10 L28 8.5 L29.5 10 L28 12.5 L29 15 L32 16 L32 18 L32 22 L32 24 L29 25 L28 27.5 L29.5 30 L28 31.5 L25.5 30 L23 31 L22 34 L20 34 L18 34 L17 31 L14.5 30 L12 31.5 L10.5 30 L12 27.5 L11 25 L8 24 L8 22 L8 18 L8 16 L11 15 L12 12.5 L10.5 10 L12 8.5 L14.5 10 L17 9 L18 6 Z"
        opacity={0.85}
      />
      <circle cx="20" cy="20" r="5" />
      <circle cx="20" cy="20" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  );
}

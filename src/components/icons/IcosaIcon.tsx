interface Props {
  readonly className?: string;
}

export function IcosaIcon({ className }: Props) {
  return (
    <svg
      viewBox="0 0 512 512"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeLinecap="round"
      aria-hidden="true"
      focusable="false"
    >
      <polygon
        points="48.72 135.69 256 15.38 463.28 135.69 463.28 376.31 256 496.62 48.72 376.31 48.72 135.69"
        strokeWidth={4}
      />
      <g fill="currentColor" stroke="currentColor">
        <circle cx="256" cy="15.38" r="9.12" />
        <circle cx="463.28" cy="134.63" r="9.12" />
        <circle cx="463.28" cy="377.72" r="9.12" />
        <circle cx="48.72" cy="134.63" r="9.12" />
        <circle cx="48.72" cy="377.72" r="9.12" />
        <circle cx="256" cy="496.62" r="9.12" />
      </g>
      <circle cx="256" cy="256" r="18.63" fill="currentColor" strokeWidth={3} />
      <polygon points="256 143.74 159.21 311.39 352.79 311.39 256 143.74" strokeWidth={4} />
      <polygon points="256 16.28 159.21 183.93 352.79 183.93 256 16.28" strokeWidth={4} />
      <polygon points="256 495.95 161.45 310.93 48.72 377.71 256 495.95" strokeWidth={4} />
      <polygon points="254.37 496.41 348.92 311.39 461.64 378.17 254.37 496.41" strokeWidth={4} />
      <g fill="currentColor" stroke="currentColor">
        <circle cx="352.79" cy="182.9" r="9.12" />
        <circle cx="159.21" cy="182.9" r="9.12" />
        <circle cx="161.48" cy="311.39" r="9.12" />
        <circle cx="352.79" cy="311.39" r="9.12" />
        <circle cx="256" cy="143.74" r="9.12" />
        <circle cx="256" cy="397.13" r="9.12" />
      </g>
      <polygon points="159.31 183.93 51.99 377.94 256 397.13 159.31 183.93" strokeWidth={4} />
      <polygon points="352.69 183.93 460.01 377.94 256 397.13 352.69 183.93" strokeWidth={4} />
      <polygon points="256 393.88 352.79 183.83 159.21 183.83 256 393.88" strokeWidth={4} />
      <polygon points="160.12 314.76 256.14 143.45 47.72 137.63 160.12 314.76" strokeWidth={4} />
      <polygon points="353.58 314.88 257.57 143.57 465.98 137.74 353.58 314.88" strokeWidth={4} />
      <polygon points="48.72 377.72 256 496.62 256 397.13 48.72 377.72" />
      <polygon points="465.55 140.47 256 17.38 256 142.45 465.55 140.47" strokeWidth={3} />
      <polygon points="47.59 137.18 256 18.28 257.14 142.45 47.59 137.18" strokeWidth={3} />
      <polygon points="463.28 377.72 256 496.62 256 397.13 463.28 377.72" strokeWidth={4} />
      <rect
        x="45.39"
        y="159.1"
        width="117.15"
        height="0.83"
        transform="translate(67.33 -27.33) rotate(22)"
        fill="currentColor"
        strokeWidth={4}
      />
      <rect
        x="353.89"
        y="159.1"
        width="117.15"
        height="0.83"
        transform="translate(854.67 152.91) rotate(158)"
        fill="currentColor"
        strokeWidth={4}
      />
    </svg>
  );
}

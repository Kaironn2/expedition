interface Props {
  readonly className?: string;
}

export function MaidCafeIcon({ className }: Props) {
  return (
    <svg
      viewBox="0 0 512 512"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={4}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M256 52A33 33 0 0 1 319 62A33 33 0 0 1 375.9 91A33 33 0 0 1 421 136.1A33 33 0 0 1 450 193A33 33 0 0 1 460 256A33 33 0 0 1 450 319A33 33 0 0 1 421 375.9A33 33 0 0 1 375.9 421A33 33 0 0 1 319 450A33 33 0 0 1 256 460A33 33 0 0 1 193 450A33 33 0 0 1 136.1 421A33 33 0 0 1 91 375.9A33 33 0 0 1 62 319A33 33 0 0 1 52 256A33 33 0 0 1 62 193A33 33 0 0 1 91 136.1A33 33 0 0 1 136.1 91A33 33 0 0 1 193 62A33 33 0 0 1 256 52Z" />
      <circle cx="256" cy="256" r="190" strokeWidth={3} />
      <g fill="currentColor" stroke="none">
        <circle cx="256" cy="52" r="7" />
        <circle cx="450" cy="193" r="7" />
        <circle cx="375.9" cy="421" r="7" />
        <circle cx="136.1" cy="421" r="7" />
        <circle cx="62" cy="193" r="7" />
      </g>
      <path d="M226 196C216 180 236 168 226 152" />
      <path d="M286 196C296 180 276 168 286 152" />
      <path d="M256 184C232 166 232 142 246 142C251 142 256 147 256 153C256 147 261 142 266 142C280 142 280 166 256 184Z" />
      <path d="M168 214H344" />
      <path d="M168 214C168 276 194 324 226 338H286C318 324 344 276 344 214" />
      <path d="M342 232C382 226 396 268 366 288C356 295 342 297 326 296" />
      <path d="M256 274L218 255V293Z" />
      <path d="M256 274L294 255V293Z" />
      <path d="M146 352C184 374 328 374 366 352" />
      <g fill="currentColor" stroke="none">
        <circle cx="256" cy="274" r="8" />
        <circle cx="146" cy="352" r="6" />
        <circle cx="366" cy="352" r="6" />
      </g>
    </svg>
  );
}

export function Logo({ width, height = 32 }: { width?: number; height?: number }) {
  const w = width ?? (height * 180) / 56;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 180 56"
      width={w}
      height={height}
      aria-label="BalançoTotal"
    >
      <polyline
        points="4,26 28,4 52,26"
        fill="none"
        className="stroke-emerald-bright"
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="9" y="21" width="38" height="31" rx="4" className="fill-emerald-bright" />
      <rect x="13" y="40" width="7" height="8" rx="1.5" className="fill-ground" />
      <rect x="23" y="35" width="7" height="13" rx="1.5" className="fill-ground" />
      <rect x="33" y="29" width="7" height="19" rx="1.5" className="fill-ground" />
      <text
        x="60"
        y="27"
        fontFamily="'Arial Black', 'Helvetica Neue', Arial, sans-serif"
        fontSize="21"
        fontWeight="900"
        className="fill-ink"
        letterSpacing="0.5"
      >
        BALANÇO
      </text>
      <text
        x="60"
        y="51"
        fontFamily="'Arial Black', 'Helvetica Neue', Arial, sans-serif"
        fontSize="21"
        fontWeight="900"
        className="fill-emerald-bright"
        letterSpacing="0.5"
      >
        TOTAL
      </text>
    </svg>
  );
}

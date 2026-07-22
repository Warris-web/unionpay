/**
 * A lightweight dotted world-map silhouette (two continent-ish blobs)
 * used as ambient texture behind the "who we are" stats, matching the
 * dotted map treatment in the original design.
 */
export default function WorldMapDots({ className = '' }) {
  return (
    <svg viewBox="0 0 800 260" className={className} preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <pattern id="mapDots" width="9" height="9" patternUnits="userSpaceOnUse">
          <circle cx="1.4" cy="1.4" r="1.4" fill="#C7CDD8" />
        </pattern>
      </defs>
      {/* rough west/east landmass blobs, purely decorative */}
      <path
        d="M20 140 C60 90 140 70 210 90 C260 104 250 150 300 160 C340 168 360 130 410 140 C440 146 430 190 470 200 C510 210 520 170 560 175 C610 182 630 230 690 220 C730 213 760 180 780 190 L780 260 L20 260 Z"
        fill="url(#mapDots)"
      />
      <path
        d="M120 40 C160 20 220 15 260 35 C290 50 280 75 320 80 C350 84 360 55 400 60 C430 64 425 95 460 100 C500 106 520 70 560 75 C600 80 610 110 650 108 C680 106 700 85 730 90 L730 40 L120 40 Z"
        fill="url(#mapDots)"
        opacity="0.7"
      />
    </svg>
  )
}

type OrnamentDividerProps = {
  className?: string;
  tone?: "gold" | "navy";
};

/**
 * A slender, symmetrical floral rule inspired by the engraved ornaments
 * of antique book frontispieces — stripped back to a single hairline stroke.
 */
export default function OrnamentDivider({
  className,
  tone = "gold",
}: OrnamentDividerProps) {
  const stroke = tone === "gold" ? "var(--color-gold)" : "var(--color-navy)";
  return (
    <div className={className} aria-hidden>
      <svg
        viewBox="0 0 240 24"
        className="mx-auto h-6 w-[240px]"
        fill="none"
        stroke={stroke}
        strokeWidth="1"
        strokeLinecap="round"
      >
        <line x1="0" y1="12" x2="92" y2="12" opacity="0.6" />
        <line x1="148" y1="12" x2="240" y2="12" opacity="0.6" />
        <path d="M92 12c6-7 14-7 20 0c-6 7-14 7-20 0Z" />
        <path d="M148 12c-6-7-14-7-20 0c6 7 14 7 20 0Z" />
        <circle cx="120" cy="12" r="2.4" fill={stroke} stroke="none" />
        <path d="M120 5.5c2.5-3 5-3 5-3M120 18.5c2.5 3 5 3 5 3M120 5.5c-2.5-3-5-3-5-3M120 18.5c-2.5 3-5 3-5 3" opacity="0.7" />
      </svg>
    </div>
  );
}

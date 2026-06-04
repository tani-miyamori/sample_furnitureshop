type DecorativeScriptProps = {
  children: string;
  className?: string;
};

/**
 * A large, whisper-faint calligraphic flourish set behind a section —
 * the "binding" detail borrowed from fine book design. Purely decorative.
 */
export default function DecorativeScript({
  children,
  className,
}: DecorativeScriptProps) {
  return (
    <span
      aria-hidden
      className={`font-script pointer-events-none select-none leading-none text-navy opacity-[0.06] ${className ?? ""}`}
    >
      {children}
    </span>
  );
}

import React from "react";

type LogoProps = {
  inverted?: boolean;
  className?: string;
  /** Extra classes for the tagline — use to hide it at cramped breakpoints. */
  taglineClassName?: string;
};

export function Logo({
  inverted = false,
  className = "",
  taglineClassName = "",
}: LogoProps) {
  const wordColor = inverted ? "text-white" : "text-navy";
  const tagColor = inverted ? "text-mist/80" : "text-teal";

  return (
    <span
      className={`flex items-center gap-2 sm:gap-3 ${className}`}
    >
      <img
        src="/relogo1.png"
        alt="Senehasa Logo"
        aria-hidden="true"
        className="h-10 w-10 shrink-0 object-contain sm:h-11 sm:w-11"
      />

      <span className="flex min-w-0 flex-col leading-none">
        <span
          className={`font-display text-lg font-extrabold tracking-tight sm:text-2xl ${wordColor}`}
        >
          Senehasa
        </span>

        <span
          className={`mt-1 whitespace-nowrap text-[9px] font-semibold uppercase tracking-[0.12em] sm:text-[11px] sm:tracking-[0.18em] ${tagColor} ${taglineClassName}`}
        >
          Care • Support • Trust
        </span>
      </span>
    </span>
  );
}
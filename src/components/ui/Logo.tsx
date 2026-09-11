import React from 'react';

type LogoProps = {
  inverted?: boolean;
  className?: string;
  /** Extra classes for the tagline — use to hide it at cramped breakpoints. */
  taglineClassName?: string;
};

export function Logo({ inverted = false, className = '', taglineClassName = '' }: LogoProps) {
  const wordColor = inverted ? 'text-white' : 'text-navy';
  const tagColor = inverted ? 'text-mist/80' : 'text-teal';

  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <svg
        viewBox="0 0 48 48"
        aria-hidden="true"
        className="h-10 w-10 shrink-0 sm:h-11 sm:w-11"
        fill="none">
        
        <circle cx="24" cy="24" r="23" fill={inverted ? '#FFFFFF' : '#011A42'} />
        <path
          d="M24 35c-6.5-4.4-10-8-10-12a5.6 5.6 0 0 1 10-3.4A5.6 5.6 0 0 1 34 23c0 4-3.5 7.6-10 12Z"
          fill="#098581" />
        
        <path
          d="M15 30c3.5 3.5 8 5.5 12 5.5s7-1.4 9-3.6"
          stroke={inverted ? '#011A42' : '#FFFFFF'}
          strokeWidth="2"
          strokeLinecap="round" />
        
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-xl font-extrabold tracking-tight sm:text-2xl ${wordColor}`}>
          
          Senehasa
        </span>
        <span
          className={`mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] ${tagColor} ${taglineClassName}`}>
          
          Care • Support • Trust
        </span>
      </span>
    </span>);

}
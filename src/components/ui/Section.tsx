import React from 'react';

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  tone?: 'white' | 'cloud' | 'mist' | 'navy';
};

const tones = {
  white: 'bg-white',
  cloud: 'bg-cloud',
  mist: 'bg-mist',
  navy: 'bg-navy text-white'
};

export function Section({ children, className = '', id, tone = 'white' }: SectionProps) {
  return (
    <section id={id} className={`${tones[tone]} py-16 sm:py-20 lg:py-24 ${className}`}>
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">{children}</div>
    </section>);

}

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  inverted?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  inverted = false
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      
      {eyebrow &&
      <p
        className={`mb-3 text-sm font-bold uppercase tracking-[0.16em] ${
        inverted ? 'text-teal-light' : 'text-teal'}`
        }>
        
          {eyebrow}
        </p>
      }
      <h2
        className={`text-3xl font-extrabold leading-tight sm:text-4xl lg:text-[2.75rem] ${
        inverted ? 'text-white' : 'text-navy'}`
        }>
        
        {title}
      </h2>
      {description &&
      <p
        className={`mt-5 text-lg leading-relaxed sm:text-xl ${
        inverted ? 'text-mist/85' : 'text-ink/75'}`
        }>
        
          {description}
        </p>
      }
    </div>);

}
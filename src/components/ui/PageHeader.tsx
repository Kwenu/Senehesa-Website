import React from 'react';

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
};

export function PageHeader({ eyebrow, title, description, children }: PageHeaderProps) {
  return (
    <section className="bg-cloud">
      <div className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="max-w-3xl">
          {eyebrow &&
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-teal">
              {eyebrow}
            </p>
          }
          <h1 className="text-4xl font-extrabold leading-[1.12] text-navy sm:text-5xl">
            {title}
          </h1>
          {description &&
          <p className="mt-6 text-lg leading-relaxed text-ink/80 sm:text-xl">
              {description}
            </p>
          }
          {children && <div className="mt-8 flex flex-col gap-4 sm:flex-row">{children}</div>}
        </div>
      </div>
    </section>);
}
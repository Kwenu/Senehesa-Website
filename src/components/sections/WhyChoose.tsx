import React from 'react';
import { Section, SectionHeading } from '../ui/Section';
import { ServiceIcon } from '../ui/ServiceIcon';
import { trustPillars } from '../../data/services';

export function WhyChoose({ tone = 'cloud' }: {tone?: 'white' | 'cloud' | 'mist';}) {
  return (
    <Section tone={tone}>
      <SectionHeading
        eyebrow="Trust"
        title="Why Families Choose Senehasa"
        description="We're not a ride service. We're the people your family can count on when you can't be there." />      

      <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {trustPillars.map((pillar) =>
        <li
          key={pillar.title}
          className="rounded-3xl border border-navy/10 bg-white p-7 shadow-soft transition-all duration-200 hover:-translate-y-1 hover:shadow-lift">
          
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-mist text-teal">
              <ServiceIcon name={pillar.icon} className="h-6 w-6" />
            </span>
            <h3 className="mt-5 text-xl font-bold text-navy">{pillar.title}</h3>
            <p className="mt-2 text-base leading-relaxed text-ink/75">{pillar.description}</p>
          </li>
        )}
      </ul>
    </Section>);

}
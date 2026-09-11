import React from 'react';
import { GlobeIcon, HomeIcon } from 'lucide-react';
import { Section, SectionHeading } from '../ui/Section';
import { Button } from '../ui/Button';

const cards = [
{
  icon: GlobeIcon,
  title: 'For Families Living Overseas',
  description:
  'Arrange care and transportation for your parents in Sri Lanka, even when you are thousands of kilometers away.',
  cta: 'Arrange Care From Abroad',
  to: '/plan'
},
{
  icon: HomeIcon,
  title: 'For Families in Sri Lanka',
  description:
  'Make everyday travel, appointments and errands easier and safer for your loved ones.',
  cta: 'Book a Service',
  to: '/plan'
}];


export function AudienceCards() {
  return (
    <Section tone="white">
      <SectionHeading
        eyebrow="Who we serve"
        title="Designed for Families Near and Far"
        description="Whether you're across the world or across town, arranging care for your parents should feel simple." />
      

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {cards.map((card) =>
        <div
          key={card.title}
          className="flex flex-col rounded-4xl border border-navy/10 bg-cloud p-8 shadow-soft transition-shadow hover:shadow-lift sm:p-10">
          
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal text-white">
              <card.icon className="h-7 w-7" aria-hidden="true" />
            </span>
            <h3 className="mt-6 text-2xl font-bold text-navy">{card.title}</h3>
            <p className="mt-4 flex-1 text-lg leading-relaxed text-ink/75">
              {card.description}
            </p>
            <div className="mt-8">
              <Button to={card.to} size="lg">
                {card.cta}
              </Button>
            </div>
          </div>
        )}
      </div>
    </Section>);

}
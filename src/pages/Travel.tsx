import React from 'react';
import { PageHeader } from '../components/ui/PageHeader';
import { Button } from '../components/ui/Button';
import { Section, SectionHeading } from '../components/ui/Section';
import { TourismSection } from '../components/sections/TourismSection';
import { VehiclesGrid } from '../components/sections/VehiclesGrid';
import { FinalCta } from '../components/sections/FinalCta';

const experiences = [
{
  title: 'Coastal South',
  description: 'Galle Fort, Mirissa beaches and stilt fishermen at sunrise.',
  duration: '1–3 days'
},
{
  title: 'Hill Country',
  description: 'Kandy, Nuwara Eliya tea estates and the Ella train route.',
  duration: '2–4 days'
},
{
  title: 'Cultural Triangle',
  description: 'Sigiriya, Dambulla and Polonnaruwa at an unhurried pace.',
  duration: '2–3 days'
},
{
  title: 'Wildlife & Nature',
  description: 'Yala, Udawalawe and Sinharaja with early-morning transfers.',
  duration: '1–2 days'
}];


export function Travel() {
  return (
    <>
      <PageHeader
        eyebrow="Travel & tourism"
        title="See Sri Lanka at Your Own Pace."
        description="Private, comfortable transportation with drivers who know the roads — ideal for families travelling with elderly relatives or young children.">
        
        <Button to="/plan" size="lg">
          Plan a Trip
        </Button>
        <Button to="/contact" variant="secondary" size="lg">
          Ask About Airport Transfers
        </Button>
      </PageHeader>

      <TourismSection />

      <Section tone="cloud">
        <SectionHeading
          eyebrow="Popular routes"
          title="Customized Journeys Across the Island"
          description="Every itinerary is built around your pace, your stops and your comfort." />
        
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {experiences.map((experience) =>
          <li
            key={experience.title}
            className="rounded-3xl border border-navy/10 bg-white p-7 shadow-soft transition-all duration-200 hover:-translate-y-1 hover:shadow-lift">
            
              <p className="text-sm font-bold uppercase tracking-wider text-teal">
                {experience.duration}
              </p>
              <h3 className="mt-3 text-xl font-bold text-navy">{experience.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-ink/75">
                {experience.description}
              </p>
            </li>
          )}
        </ul>
      </Section>

      <VehiclesGrid tone="white" />
      <FinalCta />
    </>);

}
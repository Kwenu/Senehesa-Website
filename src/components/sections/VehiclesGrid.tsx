import React from 'react';
import { UsersIcon, SofaIcon, InfoIcon } from 'lucide-react';
import { Section, SectionHeading } from '../ui/Section';
import { vehicles } from '../../data/vehicles';

export function VehiclesGrid({ tone = 'cloud' }: {tone?: 'white' | 'cloud' | 'mist';}) {
  return (
    <Section tone={tone}>
      <SectionHeading
        eyebrow="Comfort first"
        title="Choose the Right Vehicle"
        description="Every vehicle is selected for easy access, comfort and a calm ride - not just for getting from A to B." />
      

      <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {vehicles.map((vehicle) =>
        <li
          key={vehicle.id}
          className="flex flex-col overflow-hidden rounded-3xl border border-navy/10 bg-white shadow-soft transition-all duration-200 hover:-translate-y-1 hover:shadow-lift">
          
            <img
            src={vehicle.image}
            alt={vehicle.name}
            className="h-44 w-full object-cover"
            loading="lazy" />
          
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-xl font-bold text-navy">{vehicle.name}</h3>
              <p className="mt-3 flex items-center gap-2 text-base text-ink/75">
                <UsersIcon className="h-5 w-5 text-teal" aria-hidden="true" />
                {vehicle.capacity}
              </p>
              <p className="mt-2 flex items-center gap-2 text-base text-ink/75">
                <SofaIcon className="h-5 w-5 text-teal" aria-hidden="true" />
                {vehicle.comfort}
              </p>
              <ul className="mt-4 flex-1 space-y-1.5 border-t border-navy/10 pt-4 text-base text-ink/70">
                {vehicle.useCases.map((use) =>
              <li key={use}>• {use}</li>
              )}
              </ul>
            </div>
          </li>
        )}
      </ul>

      <p className="mx-auto mt-8 flex max-w-2xl items-start gap-3 rounded-2xl bg-white px-5 py-4 text-base text-ink/75 shadow-soft">
        <InfoIcon className="mt-0.5 h-5 w-5 shrink-0 text-teal" aria-hidden="true" />
        Vehicle availability is confirmed by Senehasa after your request.
      </p>
    </Section>);

}
import React from 'react';
import { CheckIcon } from 'lucide-react';
import { Section, SectionHeading } from '../ui/Section';
import { Button } from '../ui/Button';
import { tourismServices } from '../../data/services';
import { images } from '../../data/site';

export function TourismSection({ tone = 'white' }: {tone?: 'white' | 'cloud' | 'mist';}) {
  return (
    <Section tone={tone}>
      <SectionHeading
        eyebrow="Travel & tourism"
        title="Explore Sri Lanka With Senehasa"
        description="Comfortable private transportation and customized journeys for travelers exploring Sri Lanka." />
      

      <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-center">
        <div className="grid gap-4 sm:grid-cols-2">
          <img
            src={images.travel}
            alt="A winding mountain road through tea plantations near Ella, Sri Lanka"
            className="h-64 w-full rounded-3xl object-cover shadow-soft sm:col-span-2"
            loading="lazy" />
          
          <img
            src={images.coast}
            alt="A palm-fringed beach at sunrise on Sri Lanka's southern coast"
            className="h-48 w-full rounded-3xl object-cover shadow-soft"
            loading="lazy" />
          
          <div className="flex flex-col justify-center rounded-3xl bg-mist p-6">
            <p className="font-display text-2xl font-extrabold text-navy">Island-wide</p>
            <p className="mt-2 text-base text-ink/75">
              Beaches, hill country, cultural sites and wildlife parks - with the same
              careful drivers.
            </p>
          </div>
        </div>

        <div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {tourismServices.map((service) =>
            <li
              key={service}
              className="flex items-center gap-3 rounded-2xl border border-navy/10 bg-white px-5 py-4 shadow-soft">
              
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-mist">
                  <CheckIcon className="h-4 w-4 text-teal" aria-hidden="true" />
                </span>
                <span className="font-semibold text-navy">{service}</span>
              </li>
            )}
          </ul>

          <div className="mt-8">
            <Button to="/plan" size="lg">
              Plan a Trip
            </Button>
          </div>
        </div>
      </div>
    </Section>);

}
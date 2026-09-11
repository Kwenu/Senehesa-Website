import React from 'react';
import { CheckIcon } from 'lucide-react';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { images } from '../../data/site';

const points = [
'Hospital and clinic appointments',
'Bank visits and government offices',
'Shopping trips and daily errands',
'Family and religious visits'];


export function BeingThere() {
  return (
    <Section tone="white">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="order-2 lg:order-1">
          <img
            src={images.family}
            alt="An elderly Sri Lankan couple on their veranda, speaking with their daughter on a video call"
            className="w-full rounded-4xl object-cover shadow-soft"
            loading="lazy" />
          
        </div>

        <div className="order-1 lg:order-2">
          <h2 className="text-3xl font-extrabold leading-tight text-navy sm:text-4xl lg:text-[2.75rem]">
            Because Being There Isn't Always Possible.
          </h2>
          <p className="mt-6 text-xl font-semibold text-teal-dark">
            Your parents deserve support, even when you can't be beside them.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-ink/80">
            Many sons and daughters live overseas, or simply hours away, and can't
            personally accompany their parents to every hospital visit, clinic
            appointment, bank visit, shopping trip or daily activity.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-ink/80">
            Senehasa helps you arrange safe transportation, personal assistance and
            complete journeys for your loved ones in Sri Lanka — from anywhere in the
            world.
          </p>

          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {points.map((point) =>
            <li key={point} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-mist">
                  <CheckIcon className="h-4 w-4 text-teal" aria-hidden="true" />
                </span>
                <span className="text-ink/80">{point}</span>
              </li>
            )}
          </ul>

          <div className="mt-9">
            <Button to="/plan" size="lg">
              Arrange Care for Your Loved One
            </Button>
          </div>
        </div>
      </div>
    </Section>);

}
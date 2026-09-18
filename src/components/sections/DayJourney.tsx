import React from 'react';
import { motion } from 'framer-motion';
import { HomeIcon, HeartPulseIcon, PillIcon, ShoppingBagIcon } from 'lucide-react';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { sampleDay } from '../../data/services';

const stopIcons = [HomeIcon, HeartPulseIcon, PillIcon, ShoppingBagIcon, HomeIcon];

export function DayJourney() {
  return (
    <Section tone="navy">
      <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-teal-light">
            The Senehasa difference
          </p>
          <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
            Plan Their Entire Day, Not Just a Ride.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-mist/85 sm:text-xl">
            With Senehasa, you can arrange an entire day's journey from one place - pickup,
            appointments, errands and the trip back home, all in a single request.
          </p>
          <div className="mt-9">
            <Button to="/plan" size="lg">
              Start Planning a Journey
            </Button>
          </div>
          <p className="mt-6 text-base text-mist/70">
            Add, remove or reorder stops any time before your journey is confirmed.
          </p>
        </div>

        <div className="rounded-4xl bg-white p-6 shadow-lift sm:p-8">
          <div className="flex items-center justify-between">
            <p className="font-display text-lg font-bold text-navy">Sample day journey</p>
            <span className="rounded-full bg-mist px-3 py-1 text-sm font-semibold text-teal-dark">
              5 stops
            </span>
          </div>

          <ol className="relative mt-6">
            <div
              className="absolute bottom-8 left-[27px] top-6 w-0.5 bg-mist"
              aria-hidden="true">
              
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, ease: 'easeInOut' }}
                className="h-full w-full origin-top bg-teal" />
              
            </div>

            {sampleDay.map((stop, index) => {
              const Icon = stopIcons[index] ?? HomeIcon;
              return (
                <motion.li
                  key={stop.time}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.2 + index * 0.18 }}
                  className="relative flex items-start gap-5 pb-7 last:pb-0">
                  
                  <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-mist text-teal-dark">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div className="pt-1.5">
                    <p className="text-sm font-bold uppercase tracking-wider text-teal">
                      {stop.time}
                    </p>
                    <p className="mt-1 text-lg font-bold text-navy">{stop.title}</p>
                    <p className="text-base text-ink/70">{stop.place}</p>
                  </div>
                </motion.li>);

            })}
          </ol>

          <p className="mt-4 rounded-2xl bg-cloud px-4 py-3 text-base text-ink/75">
            Estimated journey duration: <strong className="text-navy">about 5 hours</strong>
          </p>
        </div>
      </div>
    </Section>);

}
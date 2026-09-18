import React from 'react';
import { HeartHandshakeIcon, UsersIcon, MapPinnedIcon } from 'lucide-react';
import { PageHeader } from '../components/ui/PageHeader';
import { Button } from '../components/ui/Button';
import { Section, SectionHeading } from '../components/ui/Section';
import { WhyChoose } from '../components/sections/WhyChoose';
import { FinalCta } from '../components/sections/FinalCta';
import { images } from '../data/site';

const values = [
{
  icon: HeartHandshakeIcon,
  title: 'Dignity first',
  description:
  'We move at your parents\u2019 pace, speak in their language and never rush a journey.'
},
{
  icon: UsersIcon,
  title: 'One trusted team',
  description:
  'The same familiar drivers and assistants, so your family sees a friendly face each time.'
},
{
  icon: MapPinnedIcon,
  title: 'Rooted in Sri Lanka',
  description:
  'We know the hospitals, the traffic, the shortcuts and the queues — and we plan around them.'
}];


export function About() {
  return (
    <>
      <PageHeader
        eyebrow="About Senehasa"
        title="Care That Goes Beyond the Journey."
        description="Senehasa was created to make transportation, assistance and daily journeys easier for elderly people and the families who love them.">
        
        <Button to="/plan" size="lg">
          Plan a Journey
        </Button>
        <Button to="/contact" variant="secondary" size="lg">
          Talk to Our Team
        </Button>
      </PageHeader>

      <Section tone="white">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Our story"
              title="It Started With a Phone Call From Abroad." />
            
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink/80">
              <p>
                Across Sri Lanka, there are parents who wait for a lift to a clinic
                appointment, who put off a bank visit because the queue is long, who skip
                the shopping because carrying the bags home has become difficult.
              </p>
              <p>
                And across the world, there are sons and daughters who worry about exactly
                that. They call every day, they send money for the taxi - but they cannot be
                there to hold an arm at the hospital steps.
              </p>
              <p>
                Senehasa exists to close that distance. We arrange the vehicle, the driver
                and the assistance, and we plan the whole day rather than a single ride - 
                so families overseas can organise real care from anywhere, and parents at
                home are never left to manage alone.
              </p>
              <p className="font-semibold text-navy">
                Senehasa means affection. That is the standard we hold ourselves to on
                every journey.
              </p>
            </div>
          </div>
          <img
            src={images.about}
            alt="Three generations of a Sri Lankan family sitting together in a bright living room"
            className="w-full rounded-4xl object-cover shadow-soft"
            loading="lazy" />
          
        </div>
      </Section>

      <Section tone="cloud">
        <SectionHeading
          eyebrow="What we stand for"
          title="The Promises Behind Every Journey" />
        
        <ul className="mt-12 grid gap-6 lg:grid-cols-3">
          {values.map((value) =>
          <li
            key={value.title}
            className="rounded-3xl border border-navy/10 bg-white p-8 shadow-soft">
            
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-mist text-teal">
                <value.icon className="h-7 w-7" aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-xl font-bold text-navy">{value.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-ink/75">
                {value.description}
              </p>
            </li>
          )}
        </ul>
      </Section>

      <WhyChoose tone="white" />
      <FinalCta />
    </>);

}
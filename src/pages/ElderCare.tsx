import React from 'react';
import { CheckIcon } from 'lucide-react';
import { PageHeader } from '../components/ui/PageHeader';
import { Section, SectionHeading } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { BeingThere } from '../components/sections/BeingThere';
import { DayJourney } from '../components/sections/DayJourney';
import { AudienceCards } from '../components/sections/AudienceCards';
import { RecurringCare } from '../components/sections/RecurringCare';
import { WhyChoose } from '../components/sections/WhyChoose';
import { FinalCta } from '../components/sections/FinalCta';
import { images } from '../data/site';

const supportList = [
'A steady arm getting in and out of the vehicle',
'Wheelchair assistance where needed',
'Someone to wait during appointments',
'Help collecting medication at the pharmacy',
'Assistance with bank forms and queues',
'Carrying shopping bags to the door'];


export function ElderCare() {
  return (
    <>
      <PageHeader
        eyebrow="Elder care"
        title="Patient, Respectful Support for Your Parents."
        description="Senehasa staff are trained to move at your parents' pace - calmly, kindly and with dignity, from the front gate and back again.">
        
        <Button to="/plan" size="lg">
          Arrange Care for Your Loved One
        </Button>
      </PageHeader>

      <Section tone="white">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <img
            src={images.elderCare}
            alt="A Senehasa care assistant walking beside an elderly Sri Lankan man outside a pharmacy"
            className="w-full rounded-4xl object-cover shadow-soft"
            loading="lazy" />
          
          <div>
            <SectionHeading
              align="left"
              eyebrow="What assistance looks like"
              title="Support Beyond the Vehicle Door."
              description="Transportation is only half of it. Real help happens in the queue, at the counter and on the walk back to the car." />
            
            <ul className="mt-8 space-y-3">
              {supportList.map((item) =>
              <li key={item} className="flex items-start gap-3 text-lg text-ink/80">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-mist">
                    <CheckIcon className="h-4 w-4 text-teal" aria-hidden="true" />
                  </span>
                  {item}
                </li>
              )}
            </ul>
          </div>
        </div>
      </Section>

      <BeingThere />
      <DayJourney />
      <RecurringCare tone="cloud" />
      <AudienceCards />
      <WhyChoose />
      <FinalCta />
    </>);

}
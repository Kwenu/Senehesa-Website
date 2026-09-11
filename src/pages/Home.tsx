import React from 'react';
import { Hero } from '../components/sections/Hero';
import { BeingThere } from '../components/sections/BeingThere';
import { ServicesGrid } from '../components/sections/ServicesGrid';
import { HowItWorksSteps } from '../components/sections/HowItWorksSteps';
import { DayJourney } from '../components/sections/DayJourney';
import { AudienceCards } from '../components/sections/AudienceCards';
import { VehiclesGrid } from '../components/sections/VehiclesGrid';
import { PlannerPreview } from '../components/sections/PlannerPreview';
import { EverydayServices } from '../components/sections/EverydayServices';
import { TourismSection } from '../components/sections/TourismSection';
import { RecurringCare } from '../components/sections/RecurringCare';
import { WhyChoose } from '../components/sections/WhyChoose';
import { FinalCta } from '../components/sections/FinalCta';

export function Home() {
  return (
    <>
      <Hero />
      <BeingThere />
      <ServicesGrid />
      <HowItWorksSteps />
      <DayJourney />
      <AudienceCards />
      <VehiclesGrid />
      <PlannerPreview />
      <EverydayServices />
      <TourismSection tone="cloud" />
      <RecurringCare />
      <WhyChoose tone="white" />
      <FinalCta />
    </>);

}
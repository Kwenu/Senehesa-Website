import React from 'react';
import { PageHeader } from '../components/ui/PageHeader';
import { Button } from '../components/ui/Button';
import { ServicesGrid } from '../components/sections/ServicesGrid';
import { EverydayServices } from '../components/sections/EverydayServices';
import { VehiclesGrid } from '../components/sections/VehiclesGrid';
import { RecurringCare } from '../components/sections/RecurringCare';
import { FinalCta } from '../components/sections/FinalCta';

export function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Care, Assistance and Journeys — Arranged Together."
        description="From a single clinic visit to a full day of errands, Senehasa plans the whole journey so your family doesn't have to piece it together.">
        
        <Button to="/plan" size="lg">
          Plan a Journey
        </Button>
        <Button to="/contact" variant="secondary" size="lg">
          Book a Service
        </Button>
      </PageHeader>

      <ServicesGrid
        title="Our Core Services"
        description="Each service can stand alone or become one stop in a larger journey."
        tone="white" />
      
      <EverydayServices tone="cloud" />
      <VehiclesGrid tone="white" />
      <RecurringCare />
      <FinalCta />
    </>);

}
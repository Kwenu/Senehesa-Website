import React from 'react';
import { PageHeader } from '../components/ui/PageHeader';
import { Button } from '../components/ui/Button';
import { Section, SectionHeading } from '../components/ui/Section';
import { HowItWorksSteps } from '../components/sections/HowItWorksSteps';
import { DayJourney } from '../components/sections/DayJourney';
import { WhyChoose } from '../components/sections/WhyChoose';
import { FinalCta } from '../components/sections/FinalCta';

const faqPreview = [
{
  question: 'How do payments work?',
  answer:
  'Payments are handled manually. Once your journey is confirmed, our team contacts you with the final price and payment instructions.'
},
{
  question: 'How quickly will I hear back?',
  answer:
  'Most requests are reviewed and confirmed within a few hours during business hours, by phone, WhatsApp or email.'
},
{
  question: 'Can I change a journey after submitting?',
  answer:
  'Yes. Contact us with your booking reference and we will update the stops, timings or vehicle.'
}];

export function HowItWorks() {
  return (
    <>
      <PageHeader
        eyebrow="How it works"
        title="Arranging Care Should Be Simple."
        description="Tell us what your loved one needs, build the journey, and we take it from there.">
        
        <Button to="/plan" size="lg">
          Plan a Journey
        </Button>
      </PageHeader>

      <HowItWorksSteps />
      <DayJourney />

      <Section tone="cloud">
        <SectionHeading
          eyebrow="Good to know"
          title="Before You Book"
          description="A few things families usually ask us first." />
        
        <ul className="mx-auto mt-12 grid max-w-4xl gap-5">
          {faqPreview.map((item) =>
          <li
            key={item.question}
            className="rounded-3xl border border-navy/10 bg-white p-7 shadow-soft">
            
              <h3 className="text-xl font-bold text-navy">{item.question}</h3>
              <p className="mt-2 text-lg leading-relaxed text-ink/75">{item.answer}</p>
            </li>
          )}
        </ul>
        <div className="mt-10 text-center">
          <Button to="/faq" variant="secondary" size="lg">
            Read All FAQs
          </Button>
        </div>
      </Section>

      <WhyChoose tone="white" />
      <FinalCta />
    </>);
}
import React from 'react';
import { motion } from 'framer-motion';
import { Section, SectionHeading } from '../ui/Section';
import { howItWorksSteps } from '../../data/services';

export function HowItWorksSteps({ tone = 'white' }: {tone?: 'white' | 'cloud' | 'mist';}) {
  return (
    <Section tone={tone}>
      <SectionHeading
        eyebrow="Simple from anywhere"
        title="How Senehasa Works"
        description="Four clear steps from your first request to a journey completed safely." />
      

      <div className="relative mt-14">
        <div
          className="absolute left-7 top-4 hidden h-[calc(100%-2rem)] w-1 rounded-full bg-mist sm:block lg:left-0 lg:top-8 lg:h-1 lg:w-full"
          aria-hidden="true">
          
          <motion.div
            initial={{ scaleY: 0, scaleX: 0 }}
            whileInView={{ scaleY: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: 'easeOut' }}
            className="h-full w-full origin-top rounded-full bg-teal/60 lg:origin-left" />
          
        </div>

        <ol className="relative grid gap-8 lg:grid-cols-4 lg:gap-6">
          {howItWorksSteps.map((step, index) =>
          <motion.li
            key={step.number}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex gap-5 sm:gap-6 lg:block">
            
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-4 border-white bg-navy font-display text-lg font-extrabold text-white shadow-soft">
                {step.number}
              </span>
              <div className="lg:mt-6 lg:pr-6">
                <h3 className="text-xl font-bold text-navy">{step.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-ink/75">
                  {step.description}
                </p>
              </div>
            </motion.li>
          )}
        </ol>
      </div>
    </Section>);

}
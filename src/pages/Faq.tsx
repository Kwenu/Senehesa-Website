import React, { useState } from 'react';
import { ChevronDownIcon } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { PageHeader } from '../components/ui/PageHeader';
import { Button } from '../components/ui/Button';
import { Section } from '../components/ui/Section';
import { RecurringCare } from '../components/sections/RecurringCare';
import { FinalCta } from '../components/sections/FinalCta';
import { faqs } from '../data/faqs';

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <PageHeader
        eyebrow="FAQ"
        title="Questions Families Ask Us."
        description="If your question isn't answered here, message us on WhatsApp — we reply in plain language, in English, Sinhala or Tamil.">
        
        <Button to="/contact" size="lg">
          Ask a Question
        </Button>
      </PageHeader>

      <Section tone="white">
        <ul className="mx-auto max-w-4xl space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <li
                key={faq.question}
                className="overflow-hidden rounded-3xl border border-navy/10 bg-white shadow-soft">
                
                <h2>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left sm:px-8">
                    
                    <span className="text-lg font-bold text-navy sm:text-xl">
                      {faq.question}
                    </span>
                    <ChevronDownIcon
                      className={`h-6 w-6 shrink-0 text-teal transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''}`
                      }
                      aria-hidden="true" />
                    
                  </button>
                </h2>
                <AnimatePresence initial={false}>
                  {isOpen &&
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.22, ease: 'easeOut' }}
                    className="overflow-hidden">
                    
                      <p className="px-6 pb-6 text-lg leading-relaxed text-ink/75 sm:px-8">
                        {faq.answer}
                      </p>
                    </motion.div>
                  }
                </AnimatePresence>
              </li>);
          })}
        </ul>
      </Section>

      <RecurringCare tone="cloud" />
      <FinalCta />
    </>);
}
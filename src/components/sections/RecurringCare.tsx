import React from 'react';
import { RepeatIcon, CheckIcon } from 'lucide-react';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { recurringOptions } from '../../data/services';

export function RecurringCare({ tone = 'mist' }: {tone?: 'white' | 'cloud' | 'mist';}) {
  return (
    <Section tone={tone}>
      <div className="grid items-center gap-10 rounded-4xl border border-navy/10 bg-white p-8 shadow-soft sm:p-12 lg:grid-cols-2">
        <div>
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-mist text-teal">
            <RepeatIcon className="h-7 w-7" aria-hidden="true" />
          </span>
          <h2 className="mt-6 text-3xl font-extrabold leading-tight text-navy sm:text-4xl">
            Recurring Care, Arranged Once.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink/80">
            If your parents need the same journey every week or month, set it up once and
            we'll handle the rest — same trusted driver wherever possible.
          </p>
          <div className="mt-8">
            <Button to="/plan" size="lg">
              Set Up Recurring Care
            </Button>
          </div>
        </div>

        <ul className="grid gap-3">
          {recurringOptions.map((option) =>
          <li
            key={option}
            className="flex items-center gap-3 rounded-2xl bg-cloud px-5 py-4 text-lg font-semibold text-navy">
            
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal text-white">
                <CheckIcon className="h-4 w-4" aria-hidden="true" />
              </span>
              {option}
            </li>
          )}
        </ul>
      </div>
    </Section>);

}
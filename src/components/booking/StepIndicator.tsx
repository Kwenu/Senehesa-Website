import React from 'react';
import { CheckIcon } from 'lucide-react';
import { bookingSteps } from '../../types/booking';

type StepIndicatorProps = {
  current: number;
  onSelect: (step: number) => void;
};

export function StepIndicator({ current, onSelect }: StepIndicatorProps) {
  const progress = current / (bookingSteps.length - 1) * 100;

  return (
    <div>
      <div className="flex items-center justify-between gap-3 lg:hidden">
        <p className="text-base font-semibold text-navy">
          Step {current + 1} of {bookingSteps.length}
        </p>
        <p className="text-base font-bold text-teal">{bookingSteps[current]}</p>
      </div>
      <div className="mt-3 h-2 w-full rounded-full bg-mist lg:hidden">
        <div
          className="h-full rounded-full bg-teal transition-all duration-300"
          style={{ width: `${(current + 1) / bookingSteps.length * 100}%` }} />
        
      </div>

      <ol className="relative hidden items-start justify-between lg:flex">
        <div className="absolute left-0 right-0 top-6 h-1 rounded-full bg-mist" aria-hidden="true">
          <div
            className="h-full rounded-full bg-teal transition-all duration-300"
            style={{ width: `${progress}%` }} />
          
        </div>
        {bookingSteps.map((step, index) => {
          const isDone = index < current;
          const isCurrent = index === current;
          return (
            <li key={step} className="relative z-10 flex w-28 flex-col items-center text-center">
              <button
                type="button"
                onClick={() => index <= current && onSelect(index)}
                disabled={index > current}
                className={`flex h-12 w-12 items-center justify-center rounded-full border-4 border-white font-display font-bold transition-colors ${
                isDone ?
                'bg-teal text-white' :
                isCurrent ?
                'bg-navy text-white' :
                'bg-mist text-navy/50'} ${
                index <= current ? 'cursor-pointer' : 'cursor-default'}`}>
                
                {isDone ? <CheckIcon className="h-5 w-5" aria-hidden="true" /> : index + 1}
                <span className="sr-only">
                  {step}
                  {isCurrent ? ' (current step)' : ''}
                </span>
              </button>
              <span
                className={`mt-3 text-sm font-semibold ${
                isCurrent ? 'text-navy' : 'text-ink/60'}`
                }>
                
                {step}
              </span>
            </li>);

        })}
      </ol>
    </div>);

}
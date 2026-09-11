import React from 'react';
import { StepShell, ChoiceCard } from './formControls';
import { serviceOptions, type BookingState } from '../../types/booking';

type StepServiceProps = {
  booking: BookingState;
  update: (patch: Partial<BookingState>) => void;
  errors: Record<string, string>;
};

export function StepService({ booking, update, errors }: StepServiceProps) {
  return (
    <StepShell
      title="Select a service"
      description="Choose the closest match — you can add more stops and requirements next.">
      
      <fieldset>
        <legend className="sr-only">Select a service</legend>
        <div className="grid gap-4 sm:grid-cols-2">
          {serviceOptions.map((option) =>
          <ChoiceCard
            key={option}
            name="service"
            value={option}
            checked={booking.service === option}
            onChange={(value) => update({ service: value })} />

          )}
        </div>
        {errors.service &&
        <p role="alert" className="mt-3 text-sm font-semibold text-red-600">
            {errors.service}
          </p>
        }
      </fieldset>
    </StepShell>);

}
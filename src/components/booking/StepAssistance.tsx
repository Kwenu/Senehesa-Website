import React from 'react';
import { Field, StepShell, fieldClass } from './formControls';
import { assistanceOptions } from '../../data/vehicles';
import { type BookingState } from '../../types/booking';

type StepAssistanceProps = {
  booking: BookingState;
  update: (patch: Partial<BookingState>) => void;
};

export function StepAssistance({ booking, update }: StepAssistanceProps) {
  const toggle = (option: string) => {
    const selected = booking.assistance.includes(option);
    update({
      assistance: selected ?
      booking.assistance.filter((item) => item !== option) :
      [...booking.assistance, option]
    });
  };

  return (
    <StepShell
      title="Additional assistance"
      description="Select everything that would help — there is no extra paperwork for any of these.">
      
      <fieldset>
        <legend className="sr-only">Additional assistance options</legend>
        <div className="grid gap-4 sm:grid-cols-2">
          {assistanceOptions.map((option) => {
            const checked = booking.assistance.includes(option);
            return (
              <label
                key={option}
                className={`flex cursor-pointer items-center gap-4 rounded-2xl border-2 p-5 transition-colors ${
                checked ? 'border-teal bg-mist' : 'border-navy/15 bg-white hover:border-teal/50'}`
                }>
                
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => toggle(option)}
                  className="h-5 w-5 shrink-0 accent-[#098581]" />
                
                <span className="text-lg font-semibold text-navy">{option}</span>
              </label>);

          })}
        </div>
      </fieldset>

      <div className="mt-8">
        <Field
          label="Special Instructions"
          htmlFor="specialInstructions"
          hint="Mobility needs, medication timings, preferred language, anything at all.">
          
          <textarea
            id="specialInstructions"
            rows={5}
            className={fieldClass}
            placeholder="Tell us anything we should know"
            value={booking.specialInstructions}
            onChange={(e) => update({ specialInstructions: e.target.value })} />
          
        </Field>
      </div>
    </StepShell>);

}
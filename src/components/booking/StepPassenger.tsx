import React from 'react';
import { Field, StepShell, ChoiceCard, fieldClass } from './formControls';
import { bookingForOptions, type BookingState } from '../../types/booking';

type StepPassengerProps = {
  booking: BookingState;
  update: (patch: Partial<BookingState>) => void;
  errors: Record<string, string>;
};

export function StepPassenger({ booking, update, errors }: StepPassengerProps) {
  return (
    <StepShell
      title="Who is this booking for?"
      description="This helps us prepare the right assistance for the journey.">
      
      <fieldset>
        <legend className="sr-only">Who is this booking for</legend>
        <div className="grid gap-4 sm:grid-cols-2">
          {bookingForOptions.map((option) =>
          <ChoiceCard
            key={option.value}
            name="bookingFor"
            value={option.value}
            description={option.description}
            checked={booking.bookingFor === option.value}
            onChange={(value) => update({ bookingFor: value })} />

          )}
        </div>
        {errors.bookingFor &&
        <p role="alert" className="mt-3 text-sm font-semibold text-red-600">
            {errors.bookingFor}
          </p>
        }
      </fieldset>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <Field label="Your Name" htmlFor="customerName" error={errors.customerName}>
          <input
            id="customerName"
            className={fieldClass}
            placeholder="Full name"
            value={booking.customerName}
            onChange={(e) => update({ customerName: e.target.value })} />
          
        </Field>

        <Field
          label="Contact Number"
          htmlFor="contactNumber"
          hint="Include your country code if you are overseas."
          error={errors.contactNumber}>
          
          <input
            id="contactNumber"
            type="tel"
            className={fieldClass}
            placeholder="+94 77 123 4567"
            value={booking.contactNumber}
            onChange={(e) => update({ contactNumber: e.target.value })} />
          
        </Field>

        <Field label="Email" htmlFor="email" error={errors.email}>
          <input
            id="email"
            type="email"
            className={fieldClass}
            placeholder="you@example.com"
            value={booking.email}
            onChange={(e) => update({ email: e.target.value })} />
          
        </Field>

        <Field
          label="Relationship to Passenger"
          htmlFor="relationship"
          hint="For example: daughter, son, grandson.">
          
          <input
            id="relationship"
            className={fieldClass}
            placeholder="Daughter"
            value={booking.relationship}
            onChange={(e) => update({ relationship: e.target.value })} />
          
        </Field>

        <Field
          label="Passenger Name"
          htmlFor="passengerName"
          hint="The person travelling, if it isn't you."
          className="sm:col-span-2">
          
          <input
            id="passengerName"
            className={fieldClass}
            placeholder="Name of the person travelling"
            value={booking.passengerName}
            onChange={(e) => update({ passengerName: e.target.value })} />
          
        </Field>
      </div>
    </StepShell>);

}
import React from 'react';
import { MapPinIcon, FlagIcon, HomeIcon } from 'lucide-react';
import { StepShell } from './formControls';
import { type BookingState } from '../../types/booking';

type StepReviewProps = {
  booking: BookingState;
  estimatedDuration: string;
};

function SummaryRow({ label, value }: {label: string;value: string;}) {
  return (
    <div className="flex flex-col gap-1 border-b border-navy/10 py-4 last:border-0 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
      <dt className="text-base font-semibold text-ink/70">{label}</dt>
      <dd className="text-lg font-semibold text-navy sm:max-w-md sm:text-right">
        {value || '—'}
      </dd>
    </div>);

}

export function StepReview({ booking, estimatedDuration }: StepReviewProps) {
  return (
    <StepShell
      title="Review the journey"
      description="Check the details below. You can go back and change anything before submitting.">
      
      <div className="grid gap-8 lg:grid-cols-2">
        <dl className="rounded-3xl border border-navy/10 bg-white p-6 shadow-soft sm:p-8">
          <SummaryRow label="Customer" value={booking.customerName} />
          <SummaryRow
            label="Passenger"
            value={booking.passengerName || booking.bookingFor} />
          
          <SummaryRow label="Contact" value={booking.contactNumber} />
          <SummaryRow label="Service" value={booking.service} />
          <SummaryRow label="Date" value={booking.date} />
          <SummaryRow label="Pickup time" value={booking.time} />
          <SummaryRow label="Pickup" value={booking.pickupLocation} />
          <SummaryRow label="Stops" value={`${booking.stops.length}`} />
          <SummaryRow label="Vehicle" value={booking.vehicle} />
          <SummaryRow label="Frequency" value={booking.recurring} />
          <SummaryRow
            label="Assistance"
            value={booking.assistance.length ? booking.assistance.join(', ') : 'None requested'} />
          
          <SummaryRow label="Estimated journey duration" value={estimatedDuration} />
        </dl>

        <div className="rounded-3xl bg-navy p-6 text-white shadow-soft sm:p-8">
          <p className="font-display text-xl font-bold">Journey timeline</p>
          <ol className="relative mt-6">
            <div
              className="absolute bottom-6 left-[19px] top-4 w-0.5 bg-white/20"
              aria-hidden="true" />
            
            <li className="relative flex items-start gap-4 pb-6">
              <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal text-white">
                <HomeIcon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="pt-1">
                <span className="block text-sm font-bold uppercase tracking-wider text-teal-light">
                  {booking.time || 'Pickup time'}
                </span>
                <span className="block text-lg font-semibold">
                  {booking.pickupLocation || 'Pickup location'}
                </span>
              </span>
            </li>

            {booking.stops.map((stop, index) =>
            <li key={stop.id} className="relative flex items-start gap-4 pb-6">
                <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-navy">
                  <MapPinIcon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="pt-1">
                  <span className="block text-sm font-bold uppercase tracking-wider text-teal-light">
                    Stop {index + 1} • {stop.duration}
                  </span>
                  <span className="block text-lg font-semibold">
                    {stop.location || 'Destination'}
                  </span>
                  {stop.purpose &&
                <span className="block text-base text-mist/75">{stop.purpose}</span>
                }
                </span>
              </li>
            )}

            <li className="relative flex items-start gap-4">
              <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal text-white">
                <FlagIcon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="pt-1">
                <span className="block text-sm font-bold uppercase tracking-wider text-teal-light">
                  Return
                </span>
                <span className="block text-lg font-semibold">Back home safely</span>
              </span>
            </li>
          </ol>

          <p className="mt-4 rounded-2xl bg-white/10 px-4 py-3 text-base text-mist/85">
            Estimated journey duration: <strong>{estimatedDuration}</strong>
          </p>
        </div>
      </div>
    </StepShell>);

}
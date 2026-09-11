import React from 'react';
import { CheckCircle2Icon, UsersIcon, InfoIcon } from 'lucide-react';
import { StepShell } from './formControls';
import { vehicles } from '../../data/vehicles';
import { type BookingState } from '../../types/booking';

type StepVehicleProps = {
  booking: BookingState;
  update: (patch: Partial<BookingState>) => void;
  errors: Record<string, string>;
};

export function StepVehicle({ booking, update, errors }: StepVehicleProps) {
  return (
    <StepShell
      title="Vehicle selection"
      description="Pick the vehicle that will be most comfortable for your loved one.">
      
      <fieldset>
        <legend className="sr-only">Select a vehicle</legend>
        <div className="grid gap-5 sm:grid-cols-2">
          {vehicles.map((vehicle) => {
            const selected = booking.vehicle === vehicle.name;
            return (
              <label
                key={vehicle.id}
                className={`relative cursor-pointer overflow-hidden rounded-3xl border-2 bg-white transition-colors ${
                selected ? 'border-teal' : 'border-navy/15 hover:border-teal/50'}`
                }>
                
                <input
                  type="radio"
                  name="vehicle"
                  value={vehicle.name}
                  checked={selected}
                  onChange={() => update({ vehicle: vehicle.name })}
                  className="sr-only" />
                
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="h-40 w-full object-cover"
                  loading="lazy" />
                
                {selected &&
                <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-teal text-white">
                    <CheckCircle2Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                }
                <span className="block p-5">
                  <span className="block text-xl font-bold text-navy">{vehicle.name}</span>
                  <span className="mt-2 flex items-center gap-2 text-base text-ink/75">
                    <UsersIcon className="h-5 w-5 text-teal" aria-hidden="true" />
                    {vehicle.capacity}
                  </span>
                  <span className="mt-1 block text-base text-ink/70">{vehicle.comfort}</span>
                </span>
              </label>);

          })}
        </div>
        {errors.vehicle &&
        <p role="alert" className="mt-3 text-sm font-semibold text-red-600">
            {errors.vehicle}
          </p>
        }
      </fieldset>

      <p className="mt-6 flex items-start gap-3 rounded-2xl bg-mist px-5 py-4 text-base text-ink/75">
        <InfoIcon className="mt-0.5 h-5 w-5 shrink-0 text-teal" aria-hidden="true" />
        Vehicle availability is confirmed by Senehasa after your request.
      </p>
    </StepShell>);

}
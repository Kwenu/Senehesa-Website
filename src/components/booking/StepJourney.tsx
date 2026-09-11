import React from 'react';
import { PlusIcon, TrashIcon, MapPinIcon } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { Field, StepShell, fieldClass } from './formControls';
import {
  emptyStop,
  recurringChoices,
  stopDurations,
  type BookingState,
  type Stop } from
'../../types/booking';

type StepJourneyProps = {
  booking: BookingState;
  update: (patch: Partial<BookingState>) => void;
  errors: Record<string, string>;
};

export function StepJourney({ booking, update, errors }: StepJourneyProps) {
  const updateStop = (id: string, patch: Partial<Stop>) =>
  update({
    stops: booking.stops.map((stop) => stop.id === id ? { ...stop, ...patch } : stop)
  });

  const removeStop = (id: string) =>
  update({ stops: booking.stops.filter((stop) => stop.id !== id) });

  return (
    <StepShell
      title="Journey details"
      description="Tell us where the journey starts and every stop along the way.">
      
      <div className="grid gap-6 sm:grid-cols-2">
        <Field
          label="Pickup Location"
          htmlFor="pickupLocation"
          className="sm:col-span-2"
          error={errors.pickupLocation}>
          
          <input
            id="pickupLocation"
            className={fieldClass}
            placeholder="House number, street, city"
            value={booking.pickupLocation}
            onChange={(e) => update({ pickupLocation: e.target.value })} />
          
        </Field>

        <Field label="Date" htmlFor="date" error={errors.date}>
          <input
            id="date"
            type="date"
            className={fieldClass}
            value={booking.date}
            onChange={(e) => update({ date: e.target.value })} />
          
        </Field>

        <Field label="Pickup Time" htmlFor="time" error={errors.time}>
          <input
            id="time"
            type="time"
            className={fieldClass}
            value={booking.time}
            onChange={(e) => update({ time: e.target.value })} />
          
        </Field>

        <Field
          label="Recurring Care"
          htmlFor="recurring"
          hint="Set up repeating journeys once and we'll schedule them."
          className="sm:col-span-2">
          
          <select
            id="recurring"
            className={fieldClass}
            value={booking.recurring}
            onChange={(e) => update({ recurring: e.target.value })}>
            
            {recurringChoices.map((choice) =>
            <option key={choice} value={choice}>
                {choice}
              </option>
            )}
          </select>
        </Field>
      </div>

      <div className="mt-10">
        <h3 className="text-xl font-bold text-navy">Destinations</h3>
        <p className="mt-1 text-base text-ink/70">
          Add every stop in order — hospital, pharmacy, bank, supermarket and home.
        </p>
        {errors.stops &&
        <p role="alert" className="mt-2 text-sm font-semibold text-red-600">
            {errors.stops}
          </p>
        }

        <ul className="mt-6 space-y-5">
          <AnimatePresence initial={false}>
            {booking.stops.map((stop, index) =>
            <motion.li
              key={stop.id}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="rounded-3xl border-2 border-navy/10 bg-cloud p-5 sm:p-6">
              
                <div className="flex items-center justify-between gap-4">
                  <p className="flex items-center gap-2 font-display text-lg font-bold text-navy">
                    <MapPinIcon className="h-5 w-5 text-teal" aria-hidden="true" />
                    Stop {index + 1}
                  </p>
                  {booking.stops.length > 1 &&
                <button
                  type="button"
                  onClick={() => removeStop(stop.id)}
                  className="inline-flex items-center gap-2 rounded-full px-3 py-2 font-semibold text-navy hover:bg-white hover:text-teal-dark">
                  
                      <TrashIcon className="h-5 w-5" aria-hidden="true" />
                      Remove
                    </button>
                }
                </div>

                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  <Field label="Location" htmlFor={`location-${stop.id}`}>
                    <input
                    id={`location-${stop.id}`}
                    className={fieldClass}
                    placeholder="e.g. Nawaloka Hospital, Colombo"
                    value={stop.location}
                    onChange={(e) => updateStop(stop.id, { location: e.target.value })} />
                  
                  </Field>

                  <Field label="Estimated Stop Duration" htmlFor={`duration-${stop.id}`}>
                    <select
                    id={`duration-${stop.id}`}
                    className={fieldClass}
                    value={stop.duration}
                    onChange={(e) => updateStop(stop.id, { duration: e.target.value })}>
                    
                      {stopDurations.map((duration) =>
                    <option key={duration} value={duration}>
                          {duration}
                        </option>
                    )}
                    </select>
                  </Field>

                  <Field label="Purpose of Visit" htmlFor={`purpose-${stop.id}`}>
                    <input
                    id={`purpose-${stop.id}`}
                    className={fieldClass}
                    placeholder="e.g. Cardiology appointment"
                    value={stop.purpose}
                    onChange={(e) => updateStop(stop.id, { purpose: e.target.value })} />
                  
                  </Field>

                  <Field label="Additional Notes" htmlFor={`notes-${stop.id}`}>
                    <input
                    id={`notes-${stop.id}`}
                    className={fieldClass}
                    placeholder="Anything the driver should know"
                    value={stop.notes}
                    onChange={(e) => updateStop(stop.id, { notes: e.target.value })} />
                  
                  </Field>
                </div>
              </motion.li>
            )}
          </AnimatePresence>
        </ul>

        <button
          type="button"
          onClick={() => update({ stops: [...booking.stops, emptyStop()] })}
          className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-teal/50 bg-mist px-6 py-4 text-lg font-semibold text-teal-dark hover:bg-teal hover:text-white sm:w-auto">
          
          <PlusIcon className="h-5 w-5" aria-hidden="true" />
          Add Another Stop
        </button>
      </div>
    </StepShell>);

}
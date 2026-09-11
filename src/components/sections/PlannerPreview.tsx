import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PlusIcon, MapPinIcon, FlagIcon, TrashIcon } from 'lucide-react';
import { Section, SectionHeading } from '../ui/Section';
import { Button } from '../ui/Button';
import { vehicles, assistanceOptions } from '../../data/vehicles';

const fieldClass =
'w-full rounded-2xl border-2 border-navy/15 bg-white px-4 py-3.5 text-base text-ink placeholder:text-ink/40 focus:border-teal focus:outline-none';
const labelClass = 'mb-2 block text-base font-semibold text-navy';

export function PlannerPreview() {
  const navigate = useNavigate();
  const [pickup, setPickup] = useState('');
  const [stops, setStops] = useState<string[]>(['']);

  const updateStop = (index: number, value: string) =>
  setStops((prev) => prev.map((stop, i) => i === index ? value : stop));

  const removeStop = (index: number) =>
  setStops((prev) => prev.length === 1 ? prev : prev.filter((_, i) => i !== index));

  const routePoints = [pickup || 'Pickup location', ...stops.map((s, i) => s || `Stop ${i + 1}`), 'Return home'];

  return (
    <Section tone="mist">
      <SectionHeading
        eyebrow="Journey planner"
        title="Your Journey, Your Way."
        description="Start building the journey here — you can finish every detail on the full planner." />
      

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <form
          className="rounded-4xl bg-white p-6 shadow-soft sm:p-9"
          onSubmit={(e) => {
            e.preventDefault();
            navigate('/plan');
          }}>
          
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className={labelClass} htmlFor="preview-pickup">
                Pickup Location
              </label>
              <input
                id="preview-pickup"
                className={fieldClass}
                placeholder="Enter pickup location"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)} />
              
            </div>

            <div>
              <label className={labelClass} htmlFor="preview-date">
                Date
              </label>
              <input id="preview-date" type="date" className={fieldClass} />
            </div>

            <div>
              <label className={labelClass} htmlFor="preview-time">
                Pickup Time
              </label>
              <input id="preview-time" type="time" className={fieldClass} />
            </div>

            <div>
              <label className={labelClass} htmlFor="preview-vehicle">
                Vehicle
              </label>
              <select id="preview-vehicle" className={fieldClass} defaultValue="">
                <option value="" disabled>
                  Select vehicle
                </option>
                {vehicles.map((vehicle) =>
                <option key={vehicle.id} value={vehicle.id}>
                    {vehicle.name}
                  </option>
                )}
              </select>
            </div>

            <div>
              <label className={labelClass} htmlFor="preview-assistance">
                Additional Assistance
              </label>
              <select id="preview-assistance" className={fieldClass} defaultValue="">
                <option value="" disabled>
                  Select assistance
                </option>
                {assistanceOptions.map((option) =>
                <option key={option} value={option}>
                    {option}
                  </option>
                )}
              </select>
            </div>

            <div className="sm:col-span-2">
              <span className={labelClass}>Destinations</span>
              <div className="space-y-3">
                {stops.map((stop, index) =>
                <div key={index} className="flex items-center gap-3">
                    <input
                    className={fieldClass}
                    aria-label={`Destination ${index + 1}`}
                    placeholder={`Destination ${index + 1}`}
                    value={stop}
                    onChange={(e) => updateStop(index, e.target.value)} />
                  
                    {stops.length > 1 &&
                  <button
                    type="button"
                    onClick={() => removeStop(index)}
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border-2 border-navy/15 text-navy hover:border-teal hover:text-teal">
                    
                        <span className="sr-only">Remove destination {index + 1}</span>
                        <TrashIcon className="h-5 w-5" aria-hidden="true" />
                      </button>
                  }
                  </div>
                )}
              </div>
              <button
                type="button"
                onClick={() => setStops((prev) => [...prev, ''])}
                className="mt-3 inline-flex items-center gap-2 rounded-full bg-mist px-5 py-3 font-semibold text-teal-dark hover:bg-teal hover:text-white">
                
                <PlusIcon className="h-5 w-5" aria-hidden="true" />
                Add another stop
              </button>
            </div>

            <div className="sm:col-span-2">
              <label className={labelClass} htmlFor="preview-notes">
                Special Requirements
              </label>
              <textarea
                id="preview-notes"
                rows={3}
                className={fieldClass}
                placeholder="Tell us anything we should know" />
              
            </div>
          </div>

          <div className="mt-8">
            <Button size="lg" className="w-full sm:w-auto">
              Continue Planning
            </Button>
          </div>
        </form>

        <div className="rounded-4xl bg-navy p-6 text-white shadow-soft sm:p-8">
          <p className="font-display text-xl font-bold">Route preview</p>
          <p className="mt-2 text-base text-mist/75">
            Your stops appear here in order as you plan.
          </p>

          <ol className="relative mt-8">
            <div className="absolute bottom-6 left-[15px] top-3 w-0.5 bg-white/20" aria-hidden="true" />
            {routePoints.map((point, index) => {
              const isLast = index === routePoints.length - 1;
              return (
                <li key={index} className="relative flex items-start gap-4 pb-6 last:pb-0">
                  <span
                    className={`relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                    isLast ? 'bg-white text-navy' : 'bg-teal text-white'}`
                    }>
                    
                    {isLast ?
                    <FlagIcon className="h-4 w-4" aria-hidden="true" /> :

                    <MapPinIcon className="h-4 w-4" aria-hidden="true" />
                    }
                  </span>
                  <span className="pt-0.5 text-base font-medium text-mist/90">{point}</span>
                </li>);

            })}
          </ol>

          <p className="mt-4 rounded-2xl bg-white/10 px-4 py-3 text-sm text-mist/80">
            Final route, timing and price are confirmed by the Senehasa team.
          </p>
        </div>
      </div>
    </Section>);

}
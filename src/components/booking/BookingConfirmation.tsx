import React from 'react';
import { CheckCircle2Icon, PhoneIcon, MessageCircleIcon } from 'lucide-react';
import { Button } from '../ui/Button';
import { contactDetails } from '../../data/site';

type BookingConfirmationProps = {
  reference: string;
  onStartAnother: () => void;
};

export function BookingConfirmation({ reference, onStartAnother }: BookingConfirmationProps) {
  return (
    <div className="mx-auto max-w-2xl rounded-4xl border border-navy/10 bg-white p-8 text-center shadow-soft sm:p-12">
      <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-mist">
        <CheckCircle2Icon className="h-11 w-11 text-teal" aria-hidden="true" />
      </span>
      <h2 className="mt-7 text-3xl font-extrabold leading-tight text-navy sm:text-4xl">
        Your Journey Request Has Been Received
      </h2>
      <p className="mt-4 text-lg text-ink/75">
        Your Senehasa team will review your request and contact you shortly.
      </p>

      <div className="mt-8 rounded-3xl bg-cloud px-6 py-6">
        <p className="text-base font-semibold uppercase tracking-[0.14em] text-ink/60">
          Booking reference
        </p>
        <p className="mt-2 font-display text-3xl font-extrabold tracking-wide text-navy">
          {reference}
        </p>
        <p className="mt-3 text-base text-ink/70">
          Keep this reference — quote it if you need to change anything.
        </p>
      </div>

      <p className="mt-6 text-base leading-relaxed text-ink/75">
        Booking requests are reviewed by our Senehasa team. Once your journey is confirmed,
        our team will contact you with the final price and payment instructions.
      </p>

      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <Button href={contactDetails.whatsappHref} size="lg">
          <MessageCircleIcon className="h-5 w-5" aria-hidden="true" />
          Message Us on WhatsApp
        </Button>
        <Button href={contactDetails.phoneHref} variant="secondary" size="lg">
          <PhoneIcon className="h-5 w-5" aria-hidden="true" />
          Call Senehasa
        </Button>
      </div>

      <button
        type="button"
        onClick={onStartAnother}
        className="mt-7 font-semibold text-teal underline underline-offset-4 hover:text-teal-dark">
        
        Plan another journey
      </button>
    </div>);

}
import React from 'react';
import { Button } from '../ui/Button';

export function FinalCta() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="rounded-4xl bg-navy px-6 py-14 text-center shadow-lift sm:px-12 sm:py-20">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-teal-light">
            Built for peace of mind
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
            You May Be Far Away. Your Care Doesn't Have To Be.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-mist/85 sm:text-xl">
            Let Senehasa help you care for the people who matter most.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Button to="/plan" size="lg">
              Plan a Journey
            </Button>
            <Button to="/contact" variant="white" size="lg">
              Contact Senehasa
            </Button>
          </div>
        </div>
      </div>
    </section>);

}
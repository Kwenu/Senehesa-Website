import React, { useState } from 'react';
import {
  PhoneIcon,
  MessageCircleIcon,
  MailIcon,
  MapPinIcon,
  ClockIcon,
  CheckCircle2Icon } from
'lucide-react';
import { PageHeader } from '../components/ui/PageHeader';
import { Button } from '../components/ui/Button';
import { Section } from '../components/ui/Section';
import { contactDetails } from '../data/site';
import { services } from '../data/services';

const fieldClass =
'w-full rounded-2xl border-2 border-navy/15 bg-white px-4 py-3.5 text-base text-ink placeholder:text-ink/40 focus:border-teal focus:outline-none';
const labelClass = 'mb-2 block text-base font-semibold text-navy';

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Talk to Senehasa."
        description="Call, message or send us an inquiry — whichever is easiest from where you are." />
      

      <Section tone="white">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div className="space-y-4">
            <a
              href={contactDetails.phoneHref}
              className="flex items-start gap-4 rounded-3xl border border-navy/10 bg-white p-6 shadow-soft transition-colors hover:border-teal/50 hover:bg-mist">
              
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-mist text-teal">
                <PhoneIcon className="h-6 w-6" aria-hidden="true" />
              </span>
              <span>
                <span className="block font-bold text-navy">Phone</span>
                <span className="text-lg text-ink/75">{contactDetails.phone}</span>
              </span>
            </a>

            <a
              href={contactDetails.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-4 rounded-3xl border border-navy/10 bg-white p-6 shadow-soft transition-colors hover:border-teal/50 hover:bg-mist">
              
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-mist text-teal">
                <MessageCircleIcon className="h-6 w-6" aria-hidden="true" />
              </span>
              <span>
                <span className="block font-bold text-navy">WhatsApp</span>
                <span className="text-lg text-ink/75">{contactDetails.whatsapp}</span>
              </span>
            </a>

            <a
              href={contactDetails.emailHref}
              className="flex items-start gap-4 rounded-3xl border border-navy/10 bg-white p-6 shadow-soft transition-colors hover:border-teal/50 hover:bg-mist">
              
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-mist text-teal">
                <MailIcon className="h-6 w-6" aria-hidden="true" />
              </span>
              <span>
                <span className="block font-bold text-navy">Email</span>
                <span className="text-lg text-ink/75">{contactDetails.email}</span>
              </span>
            </a>

            <div className="flex items-start gap-4 rounded-3xl border border-navy/10 bg-white p-6 shadow-soft">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-mist text-teal">
                <MapPinIcon className="h-6 w-6" aria-hidden="true" />
              </span>
              <span>
                <span className="block font-bold text-navy">Office</span>
                <span className="text-lg text-ink/75">{contactDetails.address}</span>
              </span>
            </div>

            <div className="rounded-3xl border border-navy/10 bg-cloud p-6">
              <div className="flex items-center gap-3">
                <ClockIcon className="h-6 w-6 text-teal" aria-hidden="true" />
                <h2 className="font-display text-lg font-bold text-navy">Business Hours</h2>
              </div>
              <ul className="mt-4 space-y-2">
                {contactDetails.hours.map((slot) =>
                <li key={slot.day} className="flex justify-between gap-4 text-ink/80">
                    <span>{slot.day}</span>
                    <span className="font-semibold text-navy">{slot.time}</span>
                  </li>
                )}
              </ul>
              <p className="mt-4 text-base text-ink/70">{contactDetails.note}</p>
            </div>
          </div>

          <div className="rounded-4xl border border-navy/10 bg-white p-6 shadow-soft sm:p-9">
            {sent ?
            <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                <CheckCircle2Icon className="h-16 w-16 text-teal" aria-hidden="true" />
                <h2 className="mt-6 text-2xl font-extrabold text-navy">
                  Thank you — your inquiry has been received.
                </h2>
                <p className="mt-3 max-w-md text-lg text-ink/75">
                  A member of the Senehasa team will contact you shortly.
                </p>
                <div className="mt-8">
                  <Button onClick={() => setSent(false)} variant="secondary">
                    Send Another Inquiry
                  </Button>
                </div>
              </div> :

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="grid gap-6 sm:grid-cols-2">
              
                <h2 className="text-2xl font-extrabold text-navy sm:col-span-2">
                  Send an Inquiry
                </h2>

                <div>
                  <label className={labelClass} htmlFor="contact-name">
                    Name
                  </label>
                  <input id="contact-name" required className={fieldClass} placeholder="Your full name" />
                </div>
                <div>
                  <label className={labelClass} htmlFor="contact-email">
                    Email
                  </label>
                  <input
                  id="contact-email"
                  type="email"
                  required
                  className={fieldClass}
                  placeholder="you@example.com" />
                
                </div>
                <div>
                  <label className={labelClass} htmlFor="contact-phone">
                    Phone
                  </label>
                  <input
                  id="contact-phone"
                  type="tel"
                  className={fieldClass}
                  placeholder="Include country code" />
                
                </div>
                <div>
                  <label className={labelClass} htmlFor="contact-service">
                    Service Required
                  </label>
                  <select id="contact-service" className={fieldClass} defaultValue="">
                    <option value="" disabled>
                      Select a service
                    </option>
                    {services.map((service) =>
                  <option key={service.id} value={service.title}>
                        {service.title}
                      </option>
                  )}
                    <option value="Recurring Care">Recurring Care</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className={labelClass} htmlFor="contact-message">
                    Message
                  </label>
                  <textarea
                  id="contact-message"
                  rows={5}
                  className={fieldClass}
                  placeholder="Tell us how we can help your family" />
                
                </div>
                <div className="sm:col-span-2">
                  <Button size="lg" className="w-full sm:w-auto">
                    Send Inquiry
                  </Button>
                </div>
              </form>
            }
          </div>
        </div>
      </Section>
    </>);

}
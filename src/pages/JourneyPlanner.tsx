import React, { useMemo, useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon, InfoIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

import { PageHeader } from "../components/ui/PageHeader";
import { Button } from "../components/ui/Button";
import { StepIndicator } from "../components/booking/StepIndicator";
import { StepPassenger } from "../components/booking/StepPassenger";
import { StepService } from "../components/booking/StepService";
import { StepJourney } from "../components/booking/StepJourney";
import { StepVehicle } from "../components/booking/StepVehicle";
import { StepAssistance } from "../components/booking/StepAssistance";
import { StepReview } from "../components/booking/StepReview";
import { BookingConfirmation } from "../components/booking/BookingConfirmation";

import {
  initialBooking,
  bookingSteps,
  type BookingState,
} from "../types/booking";

const durationMinutes: Record<string, number> = {
  "15 minutes": 15,
  "30 minutes": 30,
  "1 hour": 60,
  "2 hours": 120,
  "3 hours or more": 180,
};

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const WHATSAPP_NUMBER = "94766246767";

function createReference() {
  const year = new Date().getFullYear();

  const storageKey = `senehasa_booking_sequence_${year}`;

  const lastNumber = Number(localStorage.getItem(storageKey) || "0");

  const nextNumber = lastNumber + 1;

  localStorage.setItem(storageKey, String(nextNumber));

  const digits = String(nextNumber).padStart(5, "0");

  return `SNH-${year}-${digits}`;
}

export function JourneyPlanner() {
  const [step, setStep] = useState(0);
  const [booking, setBooking] = useState<BookingState>(initialBooking);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [reference, setReference] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const update = (patch: Partial<BookingState>) => {
    setBooking((prev) => ({ ...prev, ...patch }));
    setErrors({});
  };

  const estimatedDuration = useMemo(() => {
    const travel = (booking.stops.length + 1) * 30;

    const stops = booking.stops.reduce(
      (total, stop) => total + (durationMinutes[stop.duration] ?? 30),
      0,
    );

    const total = travel + stops;
    const hours = Math.floor(total / 60);
    const minutes = total % 60;

    if (hours === 0) return `${minutes} minutes`;

    return minutes === 0
      ? `about ${hours} hours`
      : `about ${hours} hours ${minutes} minutes`;
  }, [booking.stops]);

  const validate = () => {
    const next: Record<string, string> = {};

    if (step === 0) {
      if (!booking.bookingFor)
        next.bookingFor = "Please tell us who this booking is for.";

      if (!booking.customerName.trim())
        next.customerName = "Please enter your name.";

      if (!booking.contactNumber.trim())
        next.contactNumber = "Please enter a contact number so we can confirm.";

      if (!booking.email.trim()) next.email = "Please enter an email address.";
    }

    if (step === 1 && !booking.service)
      next.service = "Please select a service.";

    if (step === 2) {
      if (!booking.pickupLocation.trim())
        next.pickupLocation = "Please enter the pickup location.";

      if (!booking.date) next.date = "Please choose a date.";

      if (!booking.time) next.time = "Please choose a pickup time.";

      if (!booking.stops.some((stop) => stop.location.trim()))
        next.stops = "Please add at least one destination.";
    }

    if (step === 3 && !booking.vehicle)
      next.vehicle = "Please select a vehicle.";

    setErrors(next);

    return Object.keys(next).length === 0;
  };

  const goNext = () => {
    if (!validate()) return;

    setStep((prev) => Math.min(prev + 1, bookingSteps.length - 1));

    window.scrollTo({
      top: 240,
      behavior: "smooth",
    });
  };

  const goBack = () => {
    setErrors({});
    setStep((prev) => Math.max(prev - 1, 0));

    window.scrollTo({
      top: 240,
      behavior: "smooth",
    });
  };

  const createJourneyMessage = (bookingReference: string) => {
    const stopsText =
      booking.stops
        .filter((stop) => stop.location.trim())
        .map(
          (stop, index) =>
            `${index + 1}. ${stop.location}
   Purpose: ${stop.purpose || "Not specified"}
   Duration: ${stop.duration}
   Notes: ${stop.notes || "None"}`,
        )
        .join("\n\n") || "No destinations provided";

    const assistanceText =
      booking.assistance.length > 0
        ? booking.assistance.join(", ")
        : "No specific assistance selected";

    return `SENEHASA JOURNEY BOOKING REQUEST

Booking Reference: ${bookingReference}

━━━━━━━━━━━━━━━━━━━━
CUSTOMER DETAILS
━━━━━━━━━━━━━━━━━━━━

Booking For: ${booking.bookingFor}
Customer Name: ${booking.customerName}
Contact Number: ${booking.contactNumber}
Email: ${booking.email}
Relationship: ${booking.relationship || "Not specified"}
Passenger Name: ${booking.passengerName || "Same as customer"}

━━━━━━━━━━━━━━━━━━━━
SERVICE DETAILS
━━━━━━━━━━━━━━━━━━━━

Service: ${booking.service}
Recurring: ${booking.recurring}

━━━━━━━━━━━━━━━━━━━━
JOURNEY DETAILS
━━━━━━━━━━━━━━━━━━━━

Pickup Location:
${booking.pickupLocation}

Date: ${booking.date}
Pickup Time: ${booking.time}

Destinations:

${stopsText}

Estimated Duration:
${estimatedDuration}

━━━━━━━━━━━━━━━━━━━━
VEHICLE
━━━━━━━━━━━━━━━━━━━━

${booking.vehicle}

━━━━━━━━━━━━━━━━━━━━
ASSISTANCE
━━━━━━━━━━━━━━━━━━━━

${assistanceText}

━━━━━━━━━━━━━━━━━━━━
SPECIAL INSTRUCTIONS
━━━━━━━━━━━━━━━━━━━━

${booking.specialInstructions || "None"}

━━━━━━━━━━━━━━━━━━━━

Please review this journey request and contact the customer to confirm availability, final pricing and payment instructions.

Senehasa
Care • Support • Trust`;
  };

  const submit = async () => {
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitError("");

    const bookingReference = createReference();

    const journeyMessage = createJourneyMessage(bookingReference);

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      journeyMessage,
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    try {

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          booking_reference: bookingReference,

          booking_for: booking.bookingFor,
          customer_name: booking.customerName,
          contact_number: booking.contactNumber,
          customer_email: booking.email,
          relationship: booking.relationship || "Not specified",
          passenger_name: booking.passengerName || "Same as customer",

          service: booking.service,
          recurring: booking.recurring,

          pickup_location: booking.pickupLocation,
          journey_date: booking.date,
          pickup_time: booking.time,

          destinations: booking.stops
            .filter((stop) => stop.location.trim())
            .map(
              (stop, index) =>
                `${index + 1}. ${stop.location}
Purpose: ${stop.purpose || "Not specified"}
Duration: ${stop.duration}
Notes: ${stop.notes || "None"}`,
            )
            .join("\n\n"),

          vehicle: booking.vehicle,

          assistance:
            booking.assistance.length > 0
              ? booking.assistance.join(", ")
              : "No specific assistance selected",

          special_instructions: booking.specialInstructions || "None",

          estimated_duration: estimatedDuration,

          reply_to: booking.email,
        },
        EMAILJS_PUBLIC_KEY,
      );

      setReference(bookingReference);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } catch (error) {
      console.error("EmailJS error:", error);

      setSubmitError(
        "We couldn't send the email automatically. Your journey details have been prepared for WhatsApp. Please contact Senehasa if you need assistance.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const restart = () => {
    setBooking(initialBooking);
    setStep(0);
    setReference(null);
    setErrors({});
    setSubmitError("");
  };

  if (reference) {
    return (
      <>
        <PageHeader
          eyebrow="Journey planner"
          title="Thank You for Trusting Senehasa."
        />

        <div className="bg-white px-5 py-14 sm:px-8 sm:py-20">
          <BookingConfirmation reference={reference} onStartAnother={restart} />
        </div>
      </>
    );
  }

  return (
    <>
      <PageHeader
        eyebrow="Journey planner"
        title="Plan a Journey"
        description="Build the whole day in one request - pickup, every stop, the vehicle and the assistance your loved one needs."
      />

      <div className="bg-white py-10 sm:py-14">
        <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
          <StepIndicator current={step} onSelect={setStep} />

          <div className="mt-10 rounded-4xl border border-navy/10 bg-white p-6 shadow-soft sm:p-9">
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{
                  opacity: 0,
                  x: 12,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: -12,
                }}
                transition={{
                  duration: 0.22,
                  ease: "easeOut",
                }}
              >
                {step === 0 && (
                  <StepPassenger
                    booking={booking}
                    update={update}
                    errors={errors}
                  />
                )}

                {step === 1 && (
                  <StepService
                    booking={booking}
                    update={update}
                    errors={errors}
                  />
                )}

                {step === 2 && (
                  <StepJourney
                    booking={booking}
                    update={update}
                    errors={errors}
                  />
                )}

                {step === 3 && (
                  <StepVehicle
                    booking={booking}
                    update={update}
                    errors={errors}
                  />
                )}

                {step === 4 && (
                  <StepAssistance booking={booking} update={update} />
                )}

                {step === 5 && (
                  <StepReview
                    booking={booking}
                    estimatedDuration={estimatedDuration}
                  />
                )}
              </motion.div>
            </AnimatePresence>

            {step === bookingSteps.length - 1 && (
              <p className="mt-8 flex items-start gap-3 rounded-2xl bg-mist px-5 py-4 text-base leading-relaxed text-ink/80">
                <InfoIcon
                  className="mt-0.5 h-5 w-5 shrink-0 text-teal"
                  aria-hidden="true"
                />

                <span>
                  Booking requests are reviewed by our Senehasa team. Once your
                  journey is confirmed, our team will contact you with the final
                  price and payment instructions. No payment is taken online.
                </span>
              </p>
            )}

            {submitError && (
              <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm leading-relaxed text-red-700">
                {submitError}
              </div>
            )}

            <div className="mt-10 flex flex-col-reverse gap-4 border-t border-navy/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
              {step > 0 ? (
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={goBack}
                  disabled={isSubmitting}
                >
                  <ArrowLeftIcon className="h-5 w-5" aria-hidden="true" />
                  Back
                </Button>
              ) : (
                <span className="hidden sm:block" />
              )}

              {step < bookingSteps.length - 1 ? (
                <Button size="lg" onClick={goNext}>
                  Continue
                  <ArrowRightIcon className="h-5 w-5" aria-hidden="true" />
                </Button>
              ) : (
                <Button size="lg" onClick={submit} disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit Booking Request"}
                </Button>
              )}
            </div>
          </div>

          <p className="mt-8 text-center text-base text-ink/70">
            Prefer to talk it through? Call or WhatsApp us and we'll plan the
            journey with you.
          </p>
        </div>
      </div>
    </>
  );
}

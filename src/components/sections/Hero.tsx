import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheckIcon,
  HeartHandshakeIcon,
  MapPinnedIcon,
} from "lucide-react";
import { Button } from "../ui/Button";
import { images } from "../../data/site";

const badges = [
  { icon: ShieldCheckIcon, label: "Trusted drivers" },
  { icon: HeartHandshakeIcon, label: "Trained assistance" },
  { icon: MapPinnedIcon, label: "Island-wide" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-cloud">
      <div className="pointer-events-none absolute -top-24 h-96 w-96 rounded-full bg-mist" />
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-3 py-10 sm:px-8 sm:py-15 lg:grid-cols-2 lg:gap-16 lg:py-24 -top-12">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold uppercase tracking-[0.14em] text-teal shadow-soft">
            Care • Support • Trust
          </p>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] text-navy sm:text-5xl lg:text-6xl">
            Care for Your Loved Ones, Even From Miles Away.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/80 sm:text-xl">
            Reliable elder care, assisted transportation and daily support for
            your loved ones across Sri Lanka - helping you stay connected, even
            when you can't be there.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button to="/plan" size="lg">
              Plan a Journey
            </Button>
            <Button to="/services" variant="secondary" size="lg">
              Explore Services
            </Button>
          </div>

          <p className="mt-8 text-base font-semibold text-navy">
            Trusted care. Reliable journeys. Peace of mind.
          </p>

          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
            {badges.map((badge) => (
              <li
                key={badge.label}
                className="flex items-center gap-2 text-ink/75"
              >
                <badge.icon className="h-5 w-5 text-teal" aria-hidden="true" />
                <span className="font-medium">{badge.label}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="relative"
        >
          <img
            src={images.hero}
            alt="A Senehasa driver gently helping an elderly Sri Lankan woman into a comfortable car outside her home"
            className="w-full rounded-4xl object-cover shadow-lift"
            loading="eager"
          />

          <div className="absolute -bottom-6 left-4 right-4 rounded-3xl border border-navy/10 bg-white p-5 shadow-lift sm:left-8 sm:right-auto sm:max-w-xs">
            <p className="font-display text-lg font-bold text-navy">
              Door-to-door care
            </p>
            <p className="mt-1 text-base text-ink/75">
              From the front gate to the appointment and safely back home again.
            </p>
          </div>
        </motion.div>
      </div>
      <div className="h-10 lg:h-0" />
    </section>
  );
}

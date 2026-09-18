import React from "react";
import { Link } from "react-router-dom";
import {
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  MessageCircleIcon,
} from "lucide-react";
import { Logo } from "../ui/Logo";
import { contactDetails, navLinks } from "../../data/site";

const serviceLinks = [
  { label: "Hospital & Clinic Visits", to: "/services" },
  { label: "Daily Assistance", to: "/services" },
  { label: "Assisted Transportation", to: "/services" },
  { label: "Multi-Stop Journeys", to: "/plan" },
  { label: "Recurring Care", to: "/elder-care" },
  { label: "Travel & Tourism", to: "/travel" },
];

export function Footer() {
  return (
    <footer className="bg-navy text-mist/80">
      <div className="mx-auto grid max-w-8xl gap-10 px-5 py-10 sm:px-8 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Logo inverted />
          <p className="mt-5 max-w-xs text-base leading-relaxed xl:text-[15px]">
            Elder care, assisted transportation and complete journey planning
            across Sri Lanka - for families here and abroad.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="font-display text-lg font-bold text-white">Explore</h2>
          <ul className="mt-4 space-y-2.5 xl:text-[15px]">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.to} className="hover:text-teal-light">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Services">
          <h2 className="font-display text-lg font-bold text-white">
            Services
          </h2>
          <ul className="mt-4 space-y-2.5 xl:text-[15px]">
            {serviceLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.to} className="hover:text-teal-light">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-lg font-bold text-white">Contact</h2>
          <ul className="mt-4 space-y-3.5 xl:text-[15px]">
            <li>
              <a
                href={contactDetails.phoneHref}
                className="flex items-start gap-3 hover:text-teal-light"
              >
                <PhoneIcon
                  className="mt-1 h-5 w-5 shrink-0 text-teal-light"
                  aria-hidden="true"
                />
                {contactDetails.phone}
              </a>
            </li>
            <li>
              <a
                href={contactDetails.whatsappHref}
                className="flex items-start gap-3 hover:text-teal-light"
              >
                <MessageCircleIcon
                  className="mt-1 h-5 w-5 shrink-0 text-teal-light"
                  aria-hidden="true"
                />
                WhatsApp {contactDetails.whatsapp}
              </a>
            </li>
            <li>
              <a
                href={contactDetails.emailHref}
                className="flex items-start gap-3 hover:text-teal-light"
              >
                <MailIcon
                  className="mt-1 h-5 w-5 shrink-0 text-teal-light"
                  aria-hidden="true"
                />
                {contactDetails.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPinIcon
                className="mt-1 h-5 w-5 shrink-0 text-teal-light"
                aria-hidden="true"
              />
              {contactDetails.address}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-8xl flex-col gap-2 px-5 py-6 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} Senehasa. All rights reserved.</p>
          <p>Care • Support • Trust</p>
          <div className="flex items-center gap-2 ml-4">
            <span className="text-m text-white-500">
              Designed & Developed by
            </span>
            <a
              href="https://wa.me/94754841586"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact Lingo"
              className="inline-flex items-center"
            >
              <img
                src="/Lingo.png"
                alt="Lingo"
                className="h-9 w-auto mr-3 ml-[-8px] object-contain"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

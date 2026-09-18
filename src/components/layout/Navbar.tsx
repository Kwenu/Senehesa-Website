import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { MenuIcon, XIcon, PhoneIcon } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "../ui/Logo";
import { Button } from "../ui/Button";
import { navLinks, contactDetails } from "../../data/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full border-b bg-white/95 backdrop-blur transition-shadow ${
        scrolled ? "border-navy/10 shadow-soft" : "border-transparent"
      }`}
    >
      <div className="hidden bg-teal py-2 text-sm text-mist/100 lg:block">
        <div className="mx-auto flex max-w-8xl items-center justify-between px-8">
          <p>Trusted care. Reliable journeys. Peace of mind.</p>
          <a
            href={contactDetails.phoneHref}
            className="inline-flex items-center gap-2 font-semibold text-white hover:text-teal-light"
          >
            <PhoneIcon className="h-4 w-4" aria-hidden="true" />
            {contactDetails.phone}
          </a>
        </div>
      </div>

      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-8xl items-center justify-between gap-3 px-5 py-4 sm:px-8 lg:gap-5"
      >
        <Link to="/" aria-label="Senehasa home" className="shrink-0">
          <Logo taglineClassName="hidden sm:block lg:hidden 2xl:block" />
        </Link>

        <ul className="hidden min-w-0 flex-1 items-center justify-center gap-2 lg:flex xl:gap-5">
          {navLinks.map((link) => (
            <li key={link.to} className="min-w-0">
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `block whitespace-nowrap rounded-full px-2.5 py-2 text-[13px] font-semibold transition-colors xl:px-8.5 xl:text-[15px] ${
                    isActive
                      ? "bg-mist text-teal-dark"        
                      : "text-navy/80 hover:bg-cloud hover:text-navy"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden shrink-0 items-center lg:flex">
          <Button to="/plan" size="sm" className="whitespace-nowrap">
            Plan a Journey
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border-2 border-navy/15 text-navy lg:hidden"
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? (
            <XIcon className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="overflow-hidden border-t border-navy/10 bg-white lg:hidden"
          >
            <ul className="mx-auto max-w-7xl px-5 py-4 sm:px-8">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `block rounded-2xl px-4 py-3.5 text-lg font-semibold ${
                        isActive ? "bg-mist text-teal-dark" : "text-navy"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
              <li className="mt-3">
                <Button to="/plan" size="lg" className="w-full">
                  Plan a Journey
                </Button>
              </li>
              <li className="mt-3 pb-2">
                <a
                  href={contactDetails.phoneHref}
                  className="flex items-center justify-center gap-2 py-2 font-semibold text-navy"
                >
                  <PhoneIcon className="h-5 w-5" aria-hidden="true" />
                  {contactDetails.phone}
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

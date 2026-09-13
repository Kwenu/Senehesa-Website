import React, { useState } from 'react';
import { MessageCircleIcon, PhoneIcon, XIcon, HeadphonesIcon } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { contactDetails } from '../../data/site';

export function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-24 right-4 z-40 flex flex-col items-end gap-3 lg:bottom-35 lg:right-6">
      <AnimatePresence>
        {open &&
        <motion.div
          initial={{ opacity: 0, y: 8, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.96 }}
          transition={{ duration: 0.18 }}
          className="w-64 rounded-3xl border border-navy/10 bg-white p-4 shadow-lift">
          
            <p className="font-display font-bold text-navy">Talk to Senehasa</p>
            <p className="mt-1 text-sm text-ink/70">
              We reply quickly — from anywhere in the world.
            </p>
            <a
            href={contactDetails.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="mt-3 flex items-center gap-3 rounded-2xl bg-mist px-4 py-3 font-semibold text-navy hover:bg-teal hover:text-white">
            
              <MessageCircleIcon className="h-5 w-5" aria-hidden="true" />
              WhatsApp us
            </a>
            <a
            href={contactDetails.phoneHref}
            className="mt-2 flex items-center gap-3 rounded-2xl bg-mist px-4 py-3 font-semibold text-navy hover:bg-teal hover:text-white">
            
              <PhoneIcon className="h-5 w-5" aria-hidden="true" />
              Call us
            </a>
          </motion.div>
        }
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-teal text-white shadow-lift transition-colors hover:bg-teal-dark">
        
        <span className="sr-only">{open ? 'Close contact options' : 'Contact Senehasa'}</span>
        {open ?
        <XIcon className="h-6 w-6" aria-hidden="true" /> :

        <HeadphonesIcon className="h-6 w-6" aria-hidden="true" />
        }
      </button>
    </div>);

}
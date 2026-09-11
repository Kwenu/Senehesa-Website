import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { RouteIcon, PhoneIcon } from 'lucide-react';
import { contactDetails } from '../../data/site';

export function MobileStickyCta() {
  const { pathname } = useLocation();
  if (pathname === '/plan') return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-navy/10 bg-white/95 px-4 py-3 backdrop-blur lg:hidden">
      <div className="flex items-center gap-3">
        <Link
          to="/plan"
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-teal px-5 py-3.5 text-lg font-semibold text-white shadow-soft">
          
          <RouteIcon className="h-5 w-5" aria-hidden="true" />
          Plan a Journey
        </Link>
        <a
          href={contactDetails.phoneHref}
          aria-label="Call Senehasa"
          className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full border-2 border-navy text-navy">
          
          <PhoneIcon className="h-5 w-5" aria-hidden="true" />
        </a>
      </div>
    </div>);

}
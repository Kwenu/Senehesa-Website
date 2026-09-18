import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { FloatingContact } from "./FloatingContact";
import { MobileStickyCta } from "./MobileStickyCta";

type SiteLayoutProps = {
  children: React.ReactNode;
};

export function SiteLayout({ children }: SiteLayoutProps) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return (
    <div className="flex min-h-screen w-full flex-col bg-white">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-navy focus:px-5 focus:py-3 focus:text-white"
      >
        Skip to main content
      </a>
      <Navbar />
      <main
        id="main"
        className="flex-1 pb-[calc(6rem+env(safe-area-inset-bottom))] lg:pb-0"
      >
        {children}
      </main>
      <Footer />
      <FloatingContact />
      <MobileStickyCta />
    </div>
  );
}

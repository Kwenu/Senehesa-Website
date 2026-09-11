import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SiteLayout } from './components/layout/SiteLayout';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { ElderCare } from './pages/ElderCare';
import { JourneyPlanner } from './pages/JourneyPlanner';
import { Travel } from './pages/Travel';
import { HowItWorks } from './pages/HowItWorks';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Faq } from './pages/Faq';

export function App() {
  return (
    <BrowserRouter>
      <SiteLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/elder-care" element={<ElderCare />} />
          <Route path="/plan" element={<JourneyPlanner />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </SiteLayout>
    </BrowserRouter>);
}
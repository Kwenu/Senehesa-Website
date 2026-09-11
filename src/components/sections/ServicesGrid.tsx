import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Section, SectionHeading } from '../ui/Section';
import { ServiceIcon } from '../ui/ServiceIcon';
import { services } from '../../data/services';

type ServicesGridProps = {
  title?: string;
  description?: string;
  tone?: 'white' | 'cloud' | 'mist';
};

export function ServicesGrid({
  title = 'Everything They Need, In One Journey.',
  description = 'One trusted team for hospital visits, daily errands, assisted transport and travel — arranged together, not one ride at a time.',
  tone = 'cloud'
}: ServicesGridProps) {
  return (
    <Section tone={tone}>
      <SectionHeading eyebrow="Our services" title={title} description={description} />

      <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) =>
        <motion.li
          key={service.id}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.4, delay: Math.min(index * 0.06, 0.3) }}>
          
            <Link
            to="/plan"
            className="group flex h-full flex-col rounded-3xl border border-navy/10 bg-white p-7 shadow-soft transition-all duration-200 hover:-translate-y-1 hover:border-teal/40 hover:shadow-lift">
            
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-mist text-teal transition-colors group-hover:bg-teal group-hover:text-white">
                <ServiceIcon name={service.icon} className="h-7 w-7" />
              </span>
              <h3 className="mt-6 text-xl font-bold text-navy">{service.title}</h3>
              <p className="mt-3 flex-1 text-base leading-relaxed text-ink/75">
                {service.description}
              </p>
              <span className="mt-5 inline-flex items-center gap-2 font-semibold text-teal">
                Add to a journey
                <ArrowRightIcon
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                aria-hidden="true" />
              
              </span>
            </Link>
          </motion.li>
        )}
      </ul>
    </Section>);

}
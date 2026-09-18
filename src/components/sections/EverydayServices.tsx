import React from "react";
import { Section, SectionHeading } from "../ui/Section";
import { ServiceIcon } from "../ui/ServiceIcon";
import { everydayServices } from "../../data/services";

export function EverydayServices({
  tone = "white",
}: {
  tone?: "white" | "cloud" | "mist";
}) {
  return (
    <Section tone={tone}>
      <SectionHeading
        eyebrow="Everyday support"
        title="More Than Transportation"
        description="Anything that needs a trip out of the house - we can plan it, assist with it and bring them home."
      />

      <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {everydayServices.map((item) => (
          <li
            key={item.label}
            className="flex items-center gap-4 rounded-2xl border border-navy/10 bg-white px-5 py-4 shadow-soft transition-colors hover:border-teal/50 hover:bg-mist"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-mist text-teal">
              <ServiceIcon name={item.icon} className="h-5 w-5" />
            </span>
            <span className="text-base font-semibold text-navy">
              {item.label}
            </span>
          </li>
        ))}
      </ul>
    </Section>
  );
}

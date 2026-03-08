"use client";

import { useState } from "react";
import { Shield, Wrench, Sun, Car, Square, X, ChevronRight } from "lucide-react";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";

interface Service {
  icon: LucideIcon;
  title: string;
  tagline: string;
  description: string;
  features: string[];
}

const services: Service[] = [
  {
    icon: Shield,
    title: "Windshield Replacement",
    tagline: "Full replacement using OEM-grade glass — fast and done right.",
    description:
      "A cracked or damaged windshield isn't just an eyesore — it's a real safety hazard. We specialize in professional windshield replacement using OEM-grade glass and advanced installation techniques. Whether you've got a minor crack that spread or a completely shattered windshield, our certified technicians handle it with care and get you back on the road the same day.",
    features: [
      "OEM-grade and OEE glass options",
      "Same-day appointments available",
      "Mobile service — we come to you",
      "ADAS recalibration when required",
      "Insurance claims handled for you",
    ],
  },
  {
    icon: Wrench,
    title: "Windshield Repair",
    tagline: "Stop a chip before it turns into a full replacement.",
    description:
      "A small chip or crack might not seem like a big deal, but leave it alone and it spreads fast. We use advanced resin injection technology to repair chips and cracks in place — no removal needed, no long wait, and most repairs take under 30 minutes. Save money and preserve your original glass.",
    features: [
      "Advanced resin injection technology",
      "Most repairs done in under 30 minutes",
      "Preserves your factory-installed glass",
      "Results often invisible after repair",
      "Insurance deductible waived in most cases",
    ],
  },
  {
    icon: Sun,
    title: "Sunroof Glass Replacement",
    tagline: "Cracked or shattered sunroof glass replaced correctly.",
    description:
      "Sunroof damage can happen from hail, debris, or just bad luck. We replace sunroof glass on most makes and models, restoring the seal and structural integrity so you don't deal with leaks or wind noise.",
    features: [
      "Fits most makes and models",
      "Proper sealing to prevent leaks",
      "OEM-spec glass replacements",
      "Mobile service available",
      "Quick turnaround",
    ],
  },
  {
    icon: Car,
    title: "Side Window Replacement",
    tagline: "Door glass and quarter windows replaced the same day.",
    description:
      "A broken side window leaves your vehicle exposed to weather and theft. We carry stock for most common vehicles and can often replace door glass and quarter windows on the spot so you're not left vulnerable overnight.",
    features: [
      "Same-day stock on popular vehicles",
      "Driver and passenger side",
      "Rear quarter windows",
      "Proper regulator inspection included",
      "Mobile service available",
    ],
  },
  {
    icon: Square,
    title: "Rear Glass Replacement",
    tagline: "Rear windshield replacement with defroster restored.",
    description:
      "Rear glass replacement is more involved than it looks — defroster grids, antennas, and tight seals all need to be handled correctly. Our technicians make sure your rear glass is installed properly with all integrated components working as they should.",
    features: [
      "Defroster grid reinstalled or repaired",
      "Antenna integration handled",
      "Full seal and weatherproofing",
      "OEM-grade glass",
      "Lifetime warranty on workmanship",
    ],
  },
];

function ServiceCard({ service }: { service: Service }) {
  const [expanded, setExpanded] = useState(false);
  const Icon = service.icon;

  return (
    <>
      <button
        onClick={() => setExpanded(true)}
        className="group bg-surface border border-black/10 rounded-sm p-7 text-left transition-all duration-300 hover:border-primary/50 hover:shadow-md cursor-pointer"
      >
        <Icon
          size={36}
          className="text-text-muted transition-colors duration-300 group-hover:text-primary mb-5"
        />
        <h3 className="text-xl font-black mb-2 transition-colors duration-300 group-hover:text-primary">
          {service.title}
        </h3>
        <p className="text-text-muted text-sm leading-relaxed mb-5">
          {service.tagline}
        </p>
        <span className="inline-flex items-center gap-1 text-sm font-bold text-primary">
          Learn More <ChevronRight size={16} />
        </span>
      </button>

      {/* Modal */}
      {expanded && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={() => setExpanded(false)}
        >
          <div
            className="bg-bg border border-black/10 rounded-sm max-w-lg w-full p-8 relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setExpanded(false)}
              className="absolute top-4 right-4 text-text-muted hover:text-text-main transition-colors"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <Icon size={36} className="text-primary mb-4" />
            <h3 className="text-2xl font-black mb-3">{service.title}</h3>
            <p className="text-text-muted leading-relaxed mb-6 text-sm">
              {service.description}
            </p>

            <ul className="space-y-2 mb-8">
              {service.features.map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-3 text-sm text-text-muted"
                >
                  <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              onClick={() => setExpanded(false)}
              className="inline-flex items-center gap-2 bg-primary text-white font-bold px-6 py-3 rounded-sm text-sm uppercase tracking-widest transition-colors duration-200 hover:bg-primary-dark"
            >
              Get a Quote <ChevronRight size={16} />
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-bg">
      <div className="max-w-7xl mx-auto px-6">

        {/* Windshield Replacement spotlight */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24 md:mb-32">
          <div className="relative rounded-sm overflow-hidden min-h-[320px] order-2 lg:order-1">
            <Image
              src="/images/technician-fixing-windshield-close-up.avif"
              alt="Technician installing a new windshield"
              fill
              className="object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-4">
              Most Common Service
            </p>
            <h2 className="text-4xl md:text-5xl font-black leading-tight mb-5">
              Windshield Replacement
            </h2>
            <p className="text-text-muted text-lg leading-relaxed mb-5">
              A cracked windshield isn&apos;t just an eyesore — it&apos;s a structural
              issue. Your windshield accounts for up to 30% of your car&apos;s cabin
              rigidity and is part of your airbag deployment system.
            </p>
            <p className="text-text-muted text-lg leading-relaxed mb-8">
              We use OEM-grade glass and follow manufacturer installation specs
              so your vehicle is as safe after the job as it was before — often
              finished the same day you call.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-primary text-white font-bold px-7 py-3.5 rounded-sm text-sm uppercase tracking-widest transition-colors duration-200 hover:bg-primary-dark"
            >
              Book a Replacement <ChevronRight size={16} />
            </a>
          </div>
        </div>

        {/* Windshield Repair spotlight */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24 md:mb-32">
          <div>
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-4">
              Fix It Before It Spreads
            </p>
            <h2 className="text-4xl md:text-5xl font-black leading-tight mb-5">
              Windshield Repair
            </h2>
            <p className="text-text-muted text-lg leading-relaxed mb-5">
              A chip smaller than a quarter can almost always be repaired —
              no replacement needed. Most repairs take under 30 minutes and cost a
              fraction of a full replacement.
            </p>
            <p className="text-text-muted text-lg leading-relaxed mb-8">
              We inject professional-grade resin into the damaged area, restoring
              clarity and strength before the crack has a chance to spread across
              the glass.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-primary text-white font-bold px-7 py-3.5 rounded-sm text-sm uppercase tracking-widest transition-colors duration-200 hover:bg-primary-dark"
            >
              Repair My Windshield <ChevronRight size={16} />
            </a>
          </div>
          <div className="relative rounded-sm overflow-hidden min-h-[320px]">
            <Image
              src="/images/beforeafter1600x640.jpg"
              alt="Windshield chip repair before and after"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* All Services */}
        <p className="text-primary text-sm font-bold uppercase tracking-widest mb-4">
          All Services
        </p>
        <h2 className="text-4xl md:text-5xl font-black leading-tight mb-14 max-w-2xl">
          Everything auto glass, handled.
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

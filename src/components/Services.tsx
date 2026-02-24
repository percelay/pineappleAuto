"use client";

import { useState } from "react";
import { Home, Building2, Factory, X, ChevronRight } from "lucide-react";
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
    icon: Home,
    title: "Residential",
    tagline: "Custom home building, renovations, and personalized design.",
    description:
      "From ground-up custom homes to full-scale renovations, we bring your vision to life with meticulous craftsmanship. Our team handles every detail — design, permitting, construction, and finishing — so you can enjoy a stress-free building experience.",
    features: [
      "Custom home construction",
      "Full-scale renovations",
      "Kitchen & bathroom remodels",
      "Additions & expansions",
      "Design-build integration",
    ],
  },
  {
    icon: Building2,
    title: "Commercial",
    tagline: "Office spaces, retail build-outs, and scalable infrastructure.",
    description:
      "We deliver commercial spaces that drive business results. Whether you need a modern office, a retail storefront, or a multi-use complex, our design-to-build approach ensures your project stays on budget and on schedule.",
    features: [
      "Office build-outs",
      "Retail construction",
      "Tenant improvements",
      "Multi-use developments",
      "ADA compliance & code work",
    ],
  },
  {
    icon: Factory,
    title: "Industrial",
    tagline: "Warehousing, manufacturing facilities, and heavy-duty logistics.",
    description:
      "Purpose-built industrial spaces designed for efficiency and durability. We specialize in large-scale projects that meet the demanding requirements of manufacturing, warehousing, and distribution operations.",
    features: [
      "Warehouse construction",
      "Manufacturing facilities",
      "Distribution centers",
      "Cold storage facilities",
      "Heavy equipment foundations",
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
        className="group bg-surface border border-black/10 rounded-sm p-8 text-left transition-all duration-300 hover:border-primary/50 hover:bg-surface/80 cursor-pointer"
      >
        <Icon
          size={40}
          className="text-text-muted transition-colors duration-300 group-hover:text-primary mb-6"
        />
        <h3 className="text-2xl font-black mb-3 transition-colors duration-300 group-hover:text-primary">
          {service.title}
        </h3>
        <p className="text-text-muted text-sm leading-relaxed mb-6">
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
            className="bg-surface border border-black/10 rounded-sm max-w-lg w-full p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setExpanded(false)}
              className="absolute top-4 right-4 text-text-muted hover:text-text-main transition-colors"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <Icon size={40} className="text-primary mb-4" />
            <h3 className="text-3xl font-black mb-4">{service.title}</h3>
            <p className="text-text-muted leading-relaxed mb-6">
              {service.description}
            </p>

            <ul className="space-y-2">
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
        <p className="text-primary text-sm font-bold uppercase tracking-widest mb-4">
          What We Do
        </p>
        <h2 className="text-4xl md:text-5xl font-black leading-tight mb-16 max-w-2xl">
          End-to-end construction services.
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

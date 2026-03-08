"use client";

import { Phone, Mail, MapPin } from "lucide-react";

const serviceOptions = [
  "Windshield Replacement",
  "Windshield Repair",
  "Sunroof Glass Replacement",
  "Side Window Replacement",
  "Rear Glass Replacement",
  "Not Sure — Need an Assessment",
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-surface/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">

          {/* Left — Info */}
          <div>
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-4">
              Get in Touch
            </p>
            <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6">
              Let&apos;s get your glass fixed.
            </h2>
            <p className="text-text-muted text-lg leading-relaxed mb-10 max-w-md">
              Send us a message and we&apos;ll get back to you fast — usually within
              a few hours. Or just give us a call if you need something sooner.
            </p>

            <div className="space-y-6 mb-12">
              <a
                href="tel:+17279022572"
                className="flex items-center gap-4 group"
              >
                <span className="w-12 h-12 bg-bg border border-black/10 rounded-sm flex items-center justify-center transition-colors duration-200 group-hover:border-primary/50">
                  <Phone size={20} className="text-text-muted transition-colors duration-200 group-hover:text-primary" />
                </span>
                <div>
                  <p className="text-xs text-text-muted uppercase tracking-wider">Phone</p>
                  <p className="font-bold transition-colors duration-200 group-hover:text-primary">
                    (727) 902-2572
                  </p>
                </div>
              </a>

              <a
                href="mailto:info@pineappleautoglass.com"
                className="flex items-center gap-4 group"
              >
                <span className="w-12 h-12 bg-bg border border-black/10 rounded-sm flex items-center justify-center transition-colors duration-200 group-hover:border-primary/50">
                  <Mail size={20} className="text-text-muted transition-colors duration-200 group-hover:text-primary" />
                </span>
                <div>
                  <p className="text-xs text-text-muted uppercase tracking-wider">Email</p>
                  <p className="font-bold transition-colors duration-200 group-hover:text-primary">
                    info@pineappleautoglass.com
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <span className="w-12 h-12 bg-bg border border-black/10 rounded-sm flex items-center justify-center">
                  <MapPin size={20} className="text-text-muted" />
                </span>
                <div>
                  <p className="text-xs text-text-muted uppercase tracking-wider">Service Area</p>
                  <p className="font-bold">Tampa Bay, FL</p>
                </div>
              </div>
            </div>

            {/* Google Maps embed */}
            <div className="rounded-sm overflow-hidden border border-black/10 shadow-sm">
              <iframe
                src="https://maps.google.com/maps?q=27.8947933,-82.7533646&z=15&ie=UTF8&output=embed"
                width="100%"
                height="260"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Pineapple Auto Glass location"
              />
            </div>
          </div>

          {/* Right — Form */}
          <div className="bg-bg border border-black/10 rounded-sm p-8 shadow-sm">
            <h3 className="text-2xl font-black mb-6">Request a Free Quote</h3>
            <form className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs text-text-muted uppercase tracking-wider mb-2"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full bg-surface border border-black/10 rounded-sm px-4 py-3 text-sm text-text-main placeholder:text-text-muted/50 focus:outline-none focus:border-primary transition-colors"
                  placeholder="Jane Smith"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs text-text-muted uppercase tracking-wider mb-2"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    className="w-full bg-surface border border-black/10 rounded-sm px-4 py-3 text-sm text-text-main placeholder:text-text-muted/50 focus:outline-none focus:border-primary transition-colors"
                    placeholder="(727) 555-0100"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs text-text-muted uppercase tracking-wider mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full bg-surface border border-black/10 rounded-sm px-4 py-3 text-sm text-text-main placeholder:text-text-muted/50 focus:outline-none focus:border-primary transition-colors"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-xs text-text-muted uppercase tracking-wider mb-2"
                >
                  Service Needed
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  className="w-full bg-surface border border-black/10 rounded-sm px-4 py-3 text-sm text-text-main focus:outline-none focus:border-primary transition-colors appearance-none"
                >
                  <option value="">Select a service</option>
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt.toLowerCase().replace(/\s+/g, "-")}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="vehicle"
                  className="block text-xs text-text-muted uppercase tracking-wider mb-2"
                >
                  Vehicle (Year, Make, Model)
                </label>
                <input
                  id="vehicle"
                  name="vehicle"
                  type="text"
                  className="w-full bg-surface border border-black/10 rounded-sm px-4 py-3 text-sm text-text-main placeholder:text-text-muted/50 focus:outline-none focus:border-primary transition-colors"
                  placeholder="e.g. 2020 Toyota Camry"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs text-text-muted uppercase tracking-wider mb-2"
                >
                  Anything else?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className="w-full bg-surface border border-black/10 rounded-sm px-4 py-3 text-sm text-text-main placeholder:text-text-muted/50 focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Tell us about the damage or ask a question..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white font-bold py-4 rounded-sm text-sm uppercase tracking-widest transition-colors duration-200 hover:bg-primary-dark cursor-pointer"
              >
                Send My Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

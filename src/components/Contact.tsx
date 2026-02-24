"use client";

import { Phone, Mail, MapPin } from "lucide-react";

const serviceOptions = [
  "Residential",
  "Commercial",
  "Industrial",
  "Renovation",
  "Other",
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left — Info */}
          <div>
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-4">
              Get in Touch
            </p>
            <h2 className="text-4xl md:text-5xl font-black leading-tight mb-8">
              Let&apos;s build something great.
            </h2>
            <p className="text-text-muted text-lg leading-relaxed mb-12 max-w-md">
              Ready to start your project? Reach out for a free quote. We
              respond to every inquiry — usually within a few hours.
            </p>

            <div className="space-y-6">
              <a
                href="tel:+14054410337"
                className="flex items-center gap-4 group"
              >
                <span className="w-12 h-12 bg-surface border border-black/10 rounded-sm flex items-center justify-center transition-colors duration-200 group-hover:border-primary/50">
                  <Phone
                    size={20}
                    className="text-text-muted transition-colors duration-200 group-hover:text-primary"
                  />
                </span>
                <div>
                  <p className="text-xs text-text-muted uppercase tracking-wider">
                    Phone
                  </p>
                  <p className="font-bold transition-colors duration-200 group-hover:text-primary">
                    (405) 441-0337
                  </p>
                </div>
              </a>

              <a
                href="mailto:bearbuildingsolutions@outlook.com"
                className="flex items-center gap-4 group"
              >
                <span className="w-12 h-12 bg-surface border border-black/10 rounded-sm flex items-center justify-center transition-colors duration-200 group-hover:border-primary/50">
                  <Mail
                    size={20}
                    className="text-text-muted transition-colors duration-200 group-hover:text-primary"
                  />
                </span>
                <div>
                  <p className="text-xs text-text-muted uppercase tracking-wider">
                    Email
                  </p>
                  <p className="font-bold transition-colors duration-200 group-hover:text-primary">
                    bearbuildingsolutions@outlook.com
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <span className="w-12 h-12 bg-surface border border-black/10 rounded-sm flex items-center justify-center">
                  <MapPin size={20} className="text-text-muted" />
                </span>
                <div>
                  <p className="text-xs text-text-muted uppercase tracking-wider">
                    Address
                  </p>
                  <p className="font-bold">
                    3422 NW 135th St., Oklahoma City, OK 73120
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="bg-surface border border-black/10 rounded-sm p-8">
            <h3 className="text-2xl font-black mb-6">Request a Quote</h3>
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
                  className="w-full bg-bg border border-black/10 rounded-sm px-4 py-3 text-sm text-text-main placeholder:text-text-muted/50 focus:outline-none focus:border-primary transition-colors"
                  placeholder="John Doe"
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
                    className="w-full bg-bg border border-black/10 rounded-sm px-4 py-3 text-sm text-text-main placeholder:text-text-muted/50 focus:outline-none focus:border-primary transition-colors"
                    placeholder="(405) 555-0123"
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
                    className="w-full bg-bg border border-black/10 rounded-sm px-4 py-3 text-sm text-text-main placeholder:text-text-muted/50 focus:outline-none focus:border-primary transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-xs text-text-muted uppercase tracking-wider mb-2"
                >
                  Service Type
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  className="w-full bg-bg border border-black/10 rounded-sm px-4 py-3 text-sm text-text-main focus:outline-none focus:border-primary transition-colors appearance-none"
                >
                  <option value="">Select a service</option>
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt.toLowerCase()}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs text-text-muted uppercase tracking-wider mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full bg-bg border border-black/10 rounded-sm px-4 py-3 text-sm text-text-main placeholder:text-text-muted/50 focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white font-bold py-4 rounded-sm text-sm uppercase tracking-widest transition-colors duration-200 hover:bg-black hover:text-white cursor-pointer"
              >
                Send Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

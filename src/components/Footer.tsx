import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Reviews", href: "#testimonials" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#071828] border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div>
            <div className="mb-4">
              <Image
                src="/images/pineapplelogo.png"
                alt="Pineapple Auto Glass"
                width={140}
                height={60}
                className="object-contain h-12 w-auto"
              />
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              Professional auto glass repair and replacement in the Tampa Bay area.
              Your view is our vision.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs text-white/40 uppercase tracking-widest font-bold mb-4">
              Navigation
            </p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs text-white/40 uppercase tracking-widest font-bold mb-4">
              Services
            </p>
            <ul className="space-y-3">
              {[
                "Windshield Replacement",
                "Windshield Repair",
                "Sunroof Glass Replacement",
                "Side Window Replacement",
                "Rear Glass Replacement",
              ].map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-sm text-white/50 transition-colors duration-200 hover:text-white"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs text-white/40 uppercase tracking-widest font-bold mb-4">
              Contact
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+17279022572"
                  className="flex items-center gap-2 text-sm text-white/50 transition-colors duration-200 hover:text-white"
                >
                  <Phone size={14} />
                  (727) 902-2572
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@pineappleautoglass.com"
                  className="flex items-center gap-2 text-sm text-white/50 transition-colors duration-200 hover:text-white"
                >
                  <Mail size={14} />
                  info@pineappleautoglass.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/50">
                <MapPin size={14} className="shrink-0 mt-0.5" />
                Tampa Bay, FL
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            &copy; {new Date().getFullYear()} Pineapple Auto Glass. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/25 text-xs hover:text-white/50 transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/25 text-xs hover:text-white/50 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

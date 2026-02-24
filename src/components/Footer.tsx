import { Phone, Mail, MapPin } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <p className="text-lg font-black tracking-tight mb-4 text-white">
              BEAR BUILDING
            </p>
            <p className="text-white/50 text-sm leading-relaxed">
              Over 50 years of hassle-free, solutions-based building. From
              design to build, we control the entire process.
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

          {/* Contact */}
          <div>
            <p className="text-xs text-white/40 uppercase tracking-widest font-bold mb-4">
              Contact
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+14054410337"
                  className="flex items-center gap-2 text-sm text-white/50 transition-colors duration-200 hover:text-white"
                >
                  <Phone size={14} />
                  (405) 441-0337
                </a>
              </li>
              <li>
                <a
                  href="mailto:bearbuildingsolutions@outlook.com"
                  className="flex items-center gap-2 text-sm text-white/50 transition-colors duration-200 hover:text-white"
                >
                  <Mail size={14} />
                  bearbuildingsolutions@outlook.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/50">
                <MapPin size={14} className="shrink-0 mt-0.5" />
                3422 NW 135th St., Oklahoma City, OK 73120
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-xs text-white/40 uppercase tracking-widest font-bold mb-4">
              Legal
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-white/50 transition-colors duration-200 hover:text-white"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-white/50 transition-colors duration-200 hover:text-white"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <p className="text-white/30 text-xs text-center">
            &copy; {new Date().getFullYear()} Bear Building Solutions. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

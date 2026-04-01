"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const links = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Reviews", href: "#testimonials" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0ABAB5] border-b border-black/10">
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between h-20">
        <a href="#">
          <Image
            src="/images/pineapplelogo.png"
            alt="Pineapple Auto Glass"
            width={120}
            height={64}
            className="object-contain h-14 w-auto"
          />
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-white font-medium transition-colors duration-200 hover:text-black"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 bg-black text-white font-bold px-5 py-2 rounded-sm text-sm uppercase tracking-widest transition-colors duration-200 hover:bg-black/80"
        >
          Get a Quote
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0ABAB5] border-b border-black/10">
          <ul className="flex flex-col px-6 py-4 gap-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm text-white font-medium transition-colors duration-200 hover:text-black"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center bg-black text-white font-bold px-5 py-2 rounded-sm text-sm uppercase tracking-widest"
              >
                Get a Quote
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

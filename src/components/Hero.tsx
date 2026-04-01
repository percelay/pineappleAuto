import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-r from-white to-gray-400">

      <div className="relative max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-0 items-center py-20">

        {/* Left: Text on white */}
        <div className="lg:pr-16">
          <p className="text-primary text-sm font-bold uppercase tracking-widest mb-5">
            Tampa Bay&apos;s Auto Glass Specialists
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight text-primary">
            Back on the road safely.
          </h1>
          <p className="mt-6 text-lg text-text-muted max-w-lg leading-relaxed">
            Cracked windshield? Shattered side window? We replace and repair auto
            glass fast — often same day — so you don&apos;t miss a beat.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-4 rounded-sm text-sm uppercase tracking-widest transition-colors duration-200 hover:bg-primary-dark"
            >
              Get a Free Quote
              <ArrowRight size={18} />
            </a>
            <a
              href="tel:+17279022572"
              className="inline-flex items-center gap-2 bg-black text-white font-bold px-8 py-4 rounded-sm text-sm uppercase tracking-widest transition-colors duration-200 hover:bg-black/80"
            >
              <Phone size={16} />
              Call Now
            </a>
          </div>

          <div className="mt-10 flex gap-8">
            <div>
              <p className="text-3xl font-black text-text-main">4.9<span className="text-primary">★</span></p>
              <p className="text-text-muted text-xs uppercase tracking-wider mt-1">247 Google Reviews</p>
            </div>
            <div className="w-px bg-black/10" />
            <div>
              <p className="text-3xl font-black text-text-main">Same<span className="text-primary">-</span>Day</p>
              <p className="text-text-muted text-xs uppercase tracking-wider mt-1">Mobile Service Available</p>
            </div>
            <div className="w-px bg-black/10" />
            <div>
              <p className="text-3xl font-black text-text-main">OEM</p>
              <p className="text-text-muted text-xs uppercase tracking-wider mt-1">Grade Glass</p>
            </div>
          </div>
        </div>

        {/* Right: Truck */}
        <div className="flex items-center justify-center lg:justify-end lg:pl-8 mt-12 lg:mt-0">
          <div className="w-full max-w-xl">
            <Image
              src="/images/pineappleauto.png"
              alt="Pineapple Auto Glass service truck"
              width={640}
              height={480}
              className="object-contain drop-shadow-xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

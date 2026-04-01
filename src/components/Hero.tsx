import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center py-20 lg:py-0">

        {/* Left: Text */}
        <div>
          <p className="text-primary text-sm font-bold uppercase tracking-widest mb-5">
            Tampa Bay&apos;s Auto Glass Specialists
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight text-white">
            Back on the road safely.
          </h1>
          <p className="mt-6 text-lg text-white/60 max-w-lg leading-relaxed">
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
              className="inline-flex items-center gap-2 bg-white/10 text-white font-bold px-8 py-4 rounded-sm text-sm uppercase tracking-widest transition-colors duration-200 hover:bg-white/20"
            >
              <Phone size={16} />
              Call Now
            </a>
          </div>

          <div className="mt-10 flex gap-8">
            <div>
              <p className="text-3xl font-black text-white">4.9<span className="text-primary">★</span></p>
              <p className="text-white/40 text-xs uppercase tracking-wider mt-1">247 Google Reviews</p>
            </div>
            <div className="w-px bg-white/10" />
            <div>
              <p className="text-3xl font-black text-white">Same<span className="text-primary">-</span>Day</p>
              <p className="text-white/40 text-xs uppercase tracking-wider mt-1">Mobile Service Available</p>
            </div>
            <div className="w-px bg-white/10" />
            <div>
              <p className="text-3xl font-black text-white">OEM</p>
              <p className="text-white/40 text-xs uppercase tracking-wider mt-1">Grade Glass</p>
            </div>
          </div>
        </div>

        {/* Right: Truck Image */}
        <div className="flex items-center justify-center lg:justify-end">
          <div className="relative w-full max-w-xl">
            <Image
              src="/images/pineappleauto.png"
              alt="Pineapple Auto Glass service truck"
              width={640}
              height={480}
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-bg to-transparent" />
    </section>
  );
}

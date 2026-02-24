import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-end">
      <Image
        src="/images/hero.jpeg"
        alt="Construction site"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pb-20 md:pb-28">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight max-w-4xl text-white">
          Hassle-free, solutions&#8209;based building.
        </h1>
        <p className="mt-6 text-lg md:text-xl text-white/60 max-w-2xl">
          Over 50 years of building experience. Controlling the process from
          design to build.
        </p>
        <a
          href="#contact"
          className="mt-8 inline-flex items-center gap-2 bg-white text-black font-bold px-8 py-4 rounded-sm text-sm uppercase tracking-widest transition-colors duration-200 hover:bg-black hover:text-white"
        >
          Get a Quote
          <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}

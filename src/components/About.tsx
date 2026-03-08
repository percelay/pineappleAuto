import { ImageIcon } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image placeholder */}
          <div className="bg-surface border-2 border-dashed border-black/15 rounded-sm flex flex-col items-center justify-center p-10 min-h-[400px]">
            <ImageIcon size={48} className="text-text-muted/30 mb-4" />
            <p className="text-text-muted text-sm text-center max-w-xs">
              Photo: Owner or team photo — candid shot in front of the shop or next to a freshly serviced vehicle
            </p>
          </div>

          {/* Text */}
          <div>
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-4">
              About Us
            </p>
            <h2 className="text-4xl md:text-5xl font-black leading-tight mb-8">
              A fresh take on auto glass.
            </h2>
            <div className="space-y-5 text-text-muted text-lg leading-relaxed">
              <p>
                At Pineapple Auto Glass, we do things a little differently. No long
                waits, no vague quotes, no sending you to a shop when we can come
                right to you. Our team shows up when we say we will, does the job
                correctly the first time, and treats your vehicle the way we&apos;d
                want ours treated.
              </p>
              <p>
                We handle everything from a quick chip repair to a full windshield
                swap — using quality glass and proven installation methods. And
                because we work with all major insurance carriers, most of our
                customers pay nothing out of pocket.
              </p>
              <p>
                Your car is part of your daily life. We get that. That&apos;s why every
                job, big or small, gets our full attention. Welcome to Pineapple
                Auto Glass — where your view is our vision.
              </p>
            </div>

            <a
              href="#contact"
              className="mt-10 inline-flex items-center gap-2 bg-primary text-white font-bold px-7 py-3.5 rounded-sm text-sm uppercase tracking-widest transition-colors duration-200 hover:bg-primary-dark"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

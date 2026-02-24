import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Marcus & Lisa Johnson",
    role: "Custom Home Build",
    text: "Bear Building Solutions made the entire process effortless. From the first consultation to handing us the keys, they were available around the clock. We never felt like just another project — they treated us like family.",
    stars: 5,
  },
  {
    name: "David Chen",
    role: "Commercial Renovation",
    text: "I've worked with a lot of contractors over the years, and nobody comes close to the level of personal connection Bear Building provides. They answered every call, addressed every concern, and delivered ahead of schedule.",
    stars: 5,
  },
  {
    name: "Rachel Whitfield",
    role: "Residential Addition",
    text: "The quality of their work speaks for itself. Our neighbors constantly compliment the addition, and it blends seamlessly with the original structure. Truly solutions-based building at its finest.",
    stars: 5,
  },
  {
    name: "Tom & Angela Rivera",
    role: "Industrial Warehouse",
    text: "We needed a contractor who could handle a large-scale warehouse project without cutting corners. Bear Building delivered on every front — quality, timeline, and budget. Their 24/7 availability made all the difference during critical phases.",
    stars: 5,
  },
  {
    name: "Sarah Mitchell",
    role: "Kitchen & Bath Remodel",
    text: "From day one, it was clear these guys genuinely care about their customers. The attention to detail was incredible, and they kept us informed every step of the way. Wouldn't trust anyone else with our home.",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-surface/30">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-primary text-sm font-bold uppercase tracking-widest mb-4">
          Testimonials
        </p>
        <h2 className="text-4xl md:text-5xl font-black leading-tight mb-16 max-w-2xl">
          What our clients say.
        </h2>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="break-inside-avoid bg-surface border border-black/10 rounded-sm p-6"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-primary text-primary"
                  />
                ))}
              </div>
              <p className="text-text-muted text-sm leading-relaxed mb-6">
                &ldquo;{t.text}&rdquo;
              </p>
              <div>
                <p className="font-bold text-sm">{t.name}</p>
                <p className="text-text-muted text-xs">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

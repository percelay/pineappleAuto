import { Star, ExternalLink } from "lucide-react";

const reviews = [
  {
    name: "Jamie R.",
    text: "Called in the morning and they had my windshield replaced by noon. Came right to my office parking lot. Couldn't have been easier.",
    stars: 5,
  },
  {
    name: "Carlos M.",
    text: "Insurance handled everything — I didn't have to make a single call to my carrier. Super smooth process and the glass looks perfect.",
    stars: 5,
  },
  {
    name: "Brittany S.",
    text: "Had a chip that was starting to crack. They came out, repaired it in about 20 minutes, and you can barely tell anything was there. Great price too.",
    stars: 5,
  },
  {
    name: "Tony D.",
    text: "My rear window got smashed overnight. They showed up the next morning and had it done fast. Really professional crew.",
    stars: 5,
  },
  {
    name: "Maria L.",
    text: "Friendly, fast, and honest. They told me upfront my crack was repairable instead of upselling me on a full replacement. That kind of honesty goes a long way.",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-surface/40">
      <div className="max-w-7xl mx-auto px-6">

        {/* Aggregate rating */}
        <div className="flex flex-col sm:flex-row sm:items-end gap-6 mb-16">
          <div>
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-4">
              Google Reviews
            </p>
            <h2 className="text-4xl md:text-5xl font-black leading-tight max-w-xl">
              Hear from our happy customers.
            </h2>
          </div>
          <div className="sm:ml-auto flex-shrink-0">
            <div className="bg-white border border-black/10 rounded-sm p-6 text-center shadow-sm">
              <p className="text-5xl font-black text-text-main">4.9</p>
              <div className="flex justify-center gap-1 my-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={18} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-text-muted text-sm font-medium">247 reviews</p>
              <a
                href="https://www.google.com/maps/place/Pineapple+Auto+Glass/@27.895002,-82.753214,16z/data=!4m8!3m7!1s0x88c2e727e774f41d:0x82e380d8aab0909c!8m2!3d27.8947933!4d-82.7533646!9m1!1b1!16s%2Fg%2F11fv4hjpzj?hl=en&entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-primary font-bold mt-3 hover:underline"
              >
                View all on Google <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>

        {/* Review cards */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="break-inside-avoid bg-white border border-black/10 rounded-sm p-6 shadow-sm"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: r.stars }).map((_, i) => (
                  <Star key={i} size={15} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-text-muted text-sm leading-relaxed mb-5">
                &ldquo;{r.text}&rdquo;
              </p>
              <p className="font-bold text-sm text-text-main">{r.name}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://www.google.com/maps/place/Pineapple+Auto+Glass/@27.895002,-82.753214,16z/data=!4m8!3m7!1s0x88c2e727e774f41d:0x82e380d8aab0909c!8m2!3d27.8947933!4d-82.7533646!9m1!1b1!16s%2Fg%2F11fv4hjpzj?hl=en&entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-black/20 text-text-main font-bold px-6 py-3 rounded-sm text-sm uppercase tracking-widest transition-colors duration-200 hover:border-primary hover:text-primary"
          >
            Read All 247 Reviews on Google <ExternalLink size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}

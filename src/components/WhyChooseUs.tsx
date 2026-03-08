import { Zap, FileText, Award, DollarSign, Gem } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Same-Day & Mobile Service",
    text: "We come to your home, office, or wherever your car is. Most jobs are finished the same day you call.",
  },
  {
    icon: FileText,
    title: "Insurance Assistance",
    text: "We work directly with your insurance company and handle the paperwork so you don't have to deal with the hassle.",
  },
  {
    icon: Award,
    title: "Certified Technicians",
    text: "Our team is trained and certified in auto glass installation — not just guys with tools. Your safety is taken seriously.",
  },
  {
    icon: DollarSign,
    title: "Straightforward Pricing",
    text: "No surprise fees. We give you a clear quote upfront and stick to it — insurance or out of pocket.",
  },
  {
    icon: Gem,
    title: "OEM-Grade Materials",
    text: "We use quality glass that meets or exceeds your vehicle manufacturer's specifications, every single time.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 md:py-32 bg-[#111827]">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-primary text-sm font-bold uppercase tracking-widest mb-4">
          Why Pineapple
        </p>
        <h2 className="text-4xl md:text-5xl font-black leading-tight text-white mb-16 max-w-2xl">
          Five reasons customers keep coming back.
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.slice(0, 3).map((r) => (
            <div
              key={r.title}
              className="bg-white/5 border border-white/10 rounded-sm p-8 hover:border-primary/40 transition-colors duration-300"
            >
              <r.icon size={32} className="text-primary mb-5" />
              <h3 className="text-lg font-black text-white mb-3">{r.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{r.text}</p>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mt-6 lg:max-w-[calc(66.67%+1.5rem)]">
          {reasons.slice(3).map((r) => (
            <div
              key={r.title}
              className="bg-white/5 border border-white/10 rounded-sm p-8 hover:border-primary/40 transition-colors duration-300"
            >
              <r.icon size={32} className="text-primary mb-5" />
              <h3 className="text-lg font-black text-white mb-3">{r.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

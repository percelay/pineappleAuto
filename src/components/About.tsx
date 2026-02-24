import { Shield, Clock, Users } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "50+ Years Experience",
    text: "Decades of expertise in residential, commercial, and industrial construction.",
  },
  {
    icon: Clock,
    title: "Available 24/7",
    text: "We're always just a phone call away, whenever you need us.",
  },
  {
    icon: Users,
    title: "Personal Connection",
    text: "Invested in building real relationships with every customer.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-4">
              About Us
            </p>
            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              Building with purpose since day one.
            </h2>
          </div>
          <div className="space-y-6">
            <p className="text-text-muted text-lg leading-relaxed">
              With over 50 years of building experience, we have made it our
              mission to provide customers with a hassle free, solutions based
              building process. We are able to meet all of our customers&apos;
              needs by controlling the entire process from the design phase all
              the way through to the build phase.
            </p>
            <p className="text-text-muted text-lg leading-relaxed">
              We&apos;re the best in our field&hellip; invested in developing a
              personal connection with each and every one of our customers, by
              providing quality service and being available to you 24/7.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-20">
          {values.map((v) => (
            <div
              key={v.title}
              className="bg-surface border border-black/10 p-8 rounded-sm"
            >
              <v.icon size={32} className="text-primary mb-4" />
              <h3 className="text-lg font-bold mb-2">{v.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {v.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

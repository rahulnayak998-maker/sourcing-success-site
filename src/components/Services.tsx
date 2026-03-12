import { Search, Handshake, Plane, ClipboardCheck, Eye, Truck } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Finding the Right Curator",
    desc: "We know who makes the best and we know how to get you in front of them. Every manufacturer recommendation is based on years of relationship and in-person evaluation.",
  },
  {
    icon: Handshake,
    title: "Negotiation & Terms",
    desc: "Pricing, lead times, production terms — negotiated on your behalf by people who understand both the market and the manufacturer.",
  },
  {
    icon: Plane,
    title: "The China Visit",
    desc: "For clients who want to see the world Tandee works in. Foshan, Guangzhou, Shanghai. The showrooms, the factories, the materials. Fully accompanied.",
  },
  {
    icon: Eye,
    title: "Quality, Verified",
    desc: "Every order is inspected in-factory before it leaves. Against your specification. Against your standard. Nothing ships without your sign-off.",
  },
  {
    icon: Truck,
    title: "From Factory to Your Door",
    desc: "Shipping, customs, freight coordination, last-mile delivery — managed entirely by Tandee. Your furniture arrives where and when it should.",
  },
  {
    icon: ClipboardCheck,
    title: "Full Project Management",
    desc: "For large-scale projects, Tandee functions as your dedicated procurement team — coordinating categories, suppliers, timelines, and delivery milestones.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-gold mb-4">Our Services</p>
          <h2 className="font-display text-3xl md:text-5xl font-medium text-warm-cream mb-6">
            We carry the complexity.
          </h2>
          <p className="font-body text-warm-cream-muted text-lg">
            You bring the vision. Tandee handles everything from the moment that vision meets the manufacturing world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item) => (
            <div key={item.title} className="flex gap-5">
              <div className="flex-shrink-0 w-12 h-12 border border-gold/30 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h3 className="font-display text-lg font-medium text-warm-cream mb-2">{item.title}</h3>
                <p className="font-body text-sm text-warm-cream-muted leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

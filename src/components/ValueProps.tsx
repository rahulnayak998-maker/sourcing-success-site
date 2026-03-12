import { Shield, Ruler, BadgeDollarSign, Eye, Handshake, Gem } from "lucide-react";

const props = [
  {
    icon: Shield,
    title: "The Right Manufacturers",
    desc: "Our manufacturer relationships are built over years, evaluated in person, and held to a standard most buyers never get close enough to verify.",
  },
  {
    icon: Ruler,
    title: "Made for Your Space",
    desc: "Every piece can be dimensioned, finished, and configured to your exact specification. The room drives the furniture, not the other way around.",
  },
  {
    icon: BadgeDollarSign,
    title: "What It Should Cost",
    desc: "When you go to the source, the price reflects the craft, not the chain of hands it passed through. Tandee's clients pay for quality. Not for intermediaries.",
  },
  {
    icon: Eye,
    title: "Eyes on Every Detail",
    desc: "We inspect every order at the factory before it moves. What is agreed is what arrives. No surprises at delivery. No compromises along the way.",
  },
  {
    icon: Handshake,
    title: "One Conversation. Everything Handled.",
    desc: "From the first brief to the last delivery — sourcing, customisation, production, logistics. You stay focused on your project. We carry the rest.",
  },
  {
    icon: Gem,
    title: "Furniture That Exists Nowhere Else",
    desc: "For clients who want something truly singular — one piece, one space, made for no one else. We engage the specialist manufacturers who make that possible.",
  },
];

const ValueProps = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-medium text-warm-cream mb-6">
            Not what the market offers.{" "}
            <span className="text-gold italic">What you actually want.</span>
          </h2>
          <p className="font-body text-warm-cream-muted text-lg">
            There is a difference between furniture that fills a room and furniture that defines one. Tandee exists for clients who know the difference and refuse to settle.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {props.map((item) => (
            <div
              key={item.title}
              className="bg-surface-elevated border border-border p-8 hover:border-gold/30 transition-colors group"
            >
              <item.icon className="w-8 h-8 text-gold mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="font-display text-xl font-medium text-warm-cream mb-3">
                {item.title}
              </h3>
              <p className="font-body text-sm leading-relaxed text-warm-cream-muted">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;

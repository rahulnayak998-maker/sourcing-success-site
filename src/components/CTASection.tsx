import ctaBg from "@/assets/cta-bg.jpg";

const CTASection = () => {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${ctaBg})` }}
      />
      <div className="absolute inset-0 bg-background/80" />

      <div className="relative z-10 container mx-auto px-6 text-center max-w-3xl">
        <h2 className="font-display text-3xl md:text-5xl font-medium text-warm-cream mb-6">
          The room you imagined is waiting to be made.
        </h2>
        <p className="font-body text-lg text-warm-cream-muted mb-10">
          Tell us what you are building. We will tell you what is possible.
        </p>
        <a
          href="#contact"
          className="inline-block px-10 py-4 bg-gold text-background font-body font-semibold text-sm tracking-wide hover:bg-gold-light transition-colors"
        >
          Start Your Project
        </a>
      </div>
    </section>
  );
};

export default CTASection;

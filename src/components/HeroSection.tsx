import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/70" />

      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl pt-20">
        <p className="font-body text-sm tracking-[0.3em] uppercase text-gold mb-6">
          Luxury Furniture Curator
        </p>
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-medium leading-tight text-warm-cream mb-8">
          Some rooms are never forgotten.
        </h1>
        <p className="font-display text-xl md:text-2xl italic text-gold-light mb-8">
          Tandee makes sure yours is one of them.
        </p>
        <p className="font-body text-base md:text-lg leading-relaxed text-warm-cream-muted max-w-2xl mx-auto mb-12">
          The furniture in the world's most remarkable interiors was not found in a showroom. It was made to a precise vision, from the finest materials, by the hands that know them best. Tandee gives Indian homeowners, architects, and developers the relationships, the knowledge, and the process to make that possible.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="px-8 py-4 bg-gold text-background font-body font-semibold text-sm tracking-wide hover:bg-gold-light transition-colors"
          >
            Begin Your Sourcing Journey →
          </a>
          <a
            href="#services"
            className="px-8 py-4 border border-warm-cream/30 text-warm-cream font-body text-sm tracking-wide hover:border-gold hover:text-gold transition-colors"
          >
            Explore Our Services
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-warm-cream/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-gold rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

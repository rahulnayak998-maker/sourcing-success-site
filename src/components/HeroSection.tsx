import heroBg from "@/assets/hero-bg2.jpeg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})`}}
      />
      <div className="absolute inset-0 bg-cream/10" />

      <div className="relative z-10 text-center max-w-3xl mx-auto px-6 pt-24">
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-white leading-[1.1] mb-8">
          Some rooms are
          <br />
          <em className="font-light">never forgotten.</em>
        </h1>
        <div className="w-16 h-px bg-white mx-auto mb-8" />
        <p className="font-body text-sm md:text-base leading-relaxed text-white max-w-xl mx-auto mb-12 font-light">
          The furniture in the world's most remarkable interiors was not found in a showroom. It was made to a precise vision, from the finest materials, by the hands that know them best.
        </p>
        <a
          href="#contact"
          className="inline-block font-body text-xs tracking-[0.25em] uppercase text-white border-b border-white pb-1 hover:text-bronze hover:border-bronze transition-colors"
        >
          Begin Your Journey
        </a>
      </div>
    </section>
  );
};

export default HeroSection;

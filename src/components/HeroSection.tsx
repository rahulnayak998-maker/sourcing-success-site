import type { MouseEvent } from "react";
import heroBg from "@/assets/hero-bg2.jpeg";

const HeroSection = () => {
  const scrollToContact = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    const section = document.getElementById("contact");
    const nav = document.querySelector("nav");
    const navHeight = nav instanceof HTMLElement ? nav.offsetHeight : 0;

    if (section) {
      const top = section.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})`}}
      />
      <div className="absolute inset-0 bg-cream/10" />

      <div className="relative z-10 text-center max-w-3xl mx-auto px-6 pt-24">
        <div className="-translate-y-16">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-white leading-[1.1] mb-8">
            Some rooms are
            <br />
            <em className="font-light">never forgotten.</em>
          </h1>
          <div className="w-16 h-px bg-white mx-auto mb-8" />
          <p className="font-body text-sm md:text-base leading-relaxed text-white max-w-xl mx-auto mb-12 font-light">
              Tandee is a luxury procurement specialist connecting India to China's finest furniture manufacturers, end to end.
          </p>
        </div>
        <a
          href="#contact"
          onClick={scrollToContact}
          className="inline-block font-body text-xs tracking-[0.25em] uppercase text-white border-b border-white pb-1 hover:text-bronze hover:border-bronze transition-colors"
        >
          Begin Your Journey
        </a>
      </div>
    </section>
  );
};

export default HeroSection;

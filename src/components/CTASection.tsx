import type { MouseEvent } from "react";
import ctaBg from "@/assets/cta-bg.jpg";

const CTASection = () => {
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
    <section className="relative py-36 md:py-44 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${ctaBg})` }}
      />
      <div className="absolute inset-0 bg-charcoal/50" />

      <div className="relative z-10 text-center max-w-2xl mx-auto px-6">
        <h2 className="font-display text-3xl md:text-5xl font-light text-cream leading-tight mb-6">
          The room you imagined
          <br />
          <em>is waiting to be made.</em>
        </h2>
        <div className="w-12 h-px bg-cream/40 mx-auto mb-8" />
        <p className="font-body text-sm text-cream/70 mb-10 font-light">
          Tell us what you are building. We will tell you what is possible.
        </p>
        <a
          href="#contact"
          onClick={scrollToContact}
          className="inline-block font-body text-xs tracking-[0.25em] uppercase text-cream border-b border-cream/50 pb-1 hover:border-cream transition-colors"
        >
          Start Your Project
        </a>
      </div>
    </section>
  );
};

export default CTASection;

import type { MouseEvent } from "react";
import ctaBg2 from "@/assets/cta-bg2.jpg";

const CTASectionTwo = () => {
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
    <section className="relative overflow-hidden py-36 md:py-44">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${ctaBg2})` }}
      />
      <div className="absolute inset-0 bg-charcoal/55" />

      <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
        <h2 className="font-display text-3xl font-light leading-tight text-cream md:text-5xl mb-6">
          Built for your brief.
          <br />
          <em>Finished to your standard.</em>
        </h2>
        <div className="mx-auto mb-8 h-px w-12 bg-cream/40" />
        <p className="font-body text-sm font-light text-cream/70 mb-10">
          Materials, dimensions, finishes, logistics. Every decision is coordinated around the room you are actually creating.
        </p>
        <a
          href="#contact"
          onClick={scrollToContact}
          className="inline-block border-b border-cream/50 pb-1 font-body text-xs uppercase tracking-[0.25em] text-cream transition-colors hover:border-cream"
        >
          Discuss Your Requirements
        </a>
      </div>
    </section>
  );
};

export default CTASectionTwo;

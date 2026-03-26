import type { MouseEvent } from "react";
import heroBg from "@/assets/Hero_bg_vid.mp4";

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
    <section className="relative min-h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={heroBg} type="video/mp4" />
      </video>

      <div className="relative z-10 mx-auto flex min-h-screen w-full flex-col items-center justify-between pb-16 text-center">
        <div className="mt-20 pt-80">
          <h1 className="font-display text-4xl font-light leading-[1.1] text-white md:text-5xl lg:text-6xl">
            <em>Premium Selections from China's Finest Manufacturers</em>
          </h1>
        </div>

        <a
          href="#contact"
          onClick={scrollToContact}
          className="inline-block border-b border-white mb-14 pb-1 font-body text-xs uppercase tracking-[0.25em] text-white transition-colors hover:border-bronze hover:text-bronze"
        >
          Begin Your Journey
        </a>
      </div>
    </section>
  );
};

export default HeroSection;

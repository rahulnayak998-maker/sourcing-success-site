import type { MouseEvent } from "react";
import ctaBg from "@/assets/cta-bg.jpg";

const CTASection = () => {

  return (
    <section className="relative py-36 md:py-60 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${ctaBg})` }}
      />

      <div className="relative z-10 text-center mx-auto px-6">
        <h2 className="font-display  text-4xl md:text-6xl lg:text-7xl font-light text-cream leading-tight mb-6">
          <em>The room you imagined is waiting to be made.</em>
        </h2>
      </div>
    </section>
  );
};

export default CTASection;

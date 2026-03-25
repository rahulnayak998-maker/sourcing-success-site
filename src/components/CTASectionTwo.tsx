import type { MouseEvent } from "react";
import ctaBg2 from "@/assets/cta-bg2.jpg";

const CTASectionTwo = () => {
  return (
    <section className="relative overflow-hidden py-36 md:py-60">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${ctaBg2})` }}
      />

      <div className="relative z-10 mx-auto px-6 text-center">
        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-light leading-tight text-cream mb-6">
          <em>Execution that meets your standards and exceeds them.</em>
        </h2>
      </div>
    </section>
  );
};

export default CTASectionTwo;

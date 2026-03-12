const steps = [
  { title: "We Listen First", desc: "Before anything is sourced, we understand your project — the spaces, the vision, the materials, the timeline." },
  { title: "We Find the Right Curators", desc: "We identify and shortlist the manufacturers best suited to your brief, matched to quality and capacity." },
  { title: "You See It For Yourself", desc: "A fully curated visit to China's finest furniture districts. Touch the material. Meet the maker." },
  { title: "We Confirm Every Detail", desc: "Materials, finishes, dimensions — agreed with you, confirmed with the manufacturer, documented before production." },
  { title: "We Watch It Being Made", desc: "In-factory inspection before any order is approved for dispatch. You receive the report." },
  { title: "It Arrives. Perfectly.", desc: "Freight, customs, delivery — managed entirely. On time. As agreed." },
];

const Process = () => {
  return (
    <section id="process" className="py-28 md:py-36 bg-cream-dark">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-taupe mb-6">Our Process</p>
          <h2 className="font-display text-3xl md:text-5xl font-light text-charcoal leading-tight">
            Six steps.
            <em> No surprises.</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-16 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <div key={step.title} className="relative">
              <span className="font-display text-6xl font-light text-cream-dark leading-none">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-xl font-normal text-charcoal mt-3 mb-3">{step.title}</h3>
              <p className="font-body text-sm text-taupe leading-relaxed font-light">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;

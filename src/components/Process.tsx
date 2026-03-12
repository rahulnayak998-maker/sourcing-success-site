const steps = [
  { num: "01", title: "We Listen First", desc: "Before anything is sourced, we understand your project. The spaces, the vision, the materials, the timeline." },
  { num: "02", title: "We Find the Right Curators", desc: "From our network, we identify and shortlist the manufacturers best suited to your brief — matched to quality standard and production capacity." },
  { num: "03", title: "You See It For Yourself", desc: "If you want to stand in the factory, touch the material, and meet the maker — we arrange it. A fully curated visit to China's finest furniture districts." },
  { num: "04", title: "We Confirm Every Detail", desc: "Materials, finishes, dimensions, configurations — agreed with you, confirmed with the manufacturer, documented before production begins." },
  { num: "05", title: "We Watch It Being Made", desc: "Our team monitors production and conducts a thorough in-factory inspection before any order is approved for dispatch." },
  { num: "06", title: "It Arrives. Perfectly.", desc: "We manage every step of the journey to your door — freight, customs, delivery. On time. As agreed." },
];

const Process = () => {
  return (
    <section id="process" className="py-24 md:py-32 bg-surface-elevated">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-gold mb-4">Our Process</p>
          <h2 className="font-display text-3xl md:text-5xl font-medium text-warm-cream mb-6">
            Six steps. No surprises.
          </h2>
          <p className="font-body text-warm-cream-muted text-lg">
            A procurement journey designed to move with your project, not against it.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.num} className="relative pl-16">
              <span className="absolute left-0 top-0 font-display text-4xl font-bold text-gold/20">{step.num}</span>
              <h3 className="font-display text-lg font-medium text-warm-cream mb-2">{step.title}</h3>
              <p className="font-body text-sm text-warm-cream-muted leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;

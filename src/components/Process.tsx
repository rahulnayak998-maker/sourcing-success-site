const steps = [
  { title: "We Listen First", desc: "Before anything is sourced, we understand your project — the spaces, the vision, the materials, the timeline." },
  { title: "We Find the Right Curators", desc: "We identify and shortlist the manufacturers best suited to your brief, matched to quality and capacity." },
  { title: "You See It For Yourself", desc: "A fully curated visit to China’s finest furniture districts. Get hands-on with materials, colours, and designs—see it, feel it, understand it." },
  { title: "We Confirm Every Detail", desc: "Materials, finishes, dimensions — agreed with you, confirmed with the manufacturer, documented before production." },
  { title: "Factory-Level Quality Assurance", desc: "In-factory inspection before any order is approved for dispatch. You receive the report." },
  { title: "Delivered. Exactly As Planned.", desc: "Freight, customs, delivery — managed entirely. On time. As agreed." },
];

const romans = ["I", "II", "III", "IV", "V", "VI"];

const Process = () => {
  return (
    <section id="process" className="py-28 md:py-36 bg-cream-dark">
      <div className="mx-auto w-full max-w-[1440px] px-6">
        <div className="text-center mx-auto mb-20">
          <h2 className="font-display text-5xl font-light text-teal leading-tight">
            <em>Our Process</em>
          </h2>
        </div>

        <div className="mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="flex card h-full flex-col rounded-sm border bg-teal/95 px-8 py-9"
              style={{
                backgroundImage: "url('/Tandee_bg.png')",
                backgroundSize: "100% 100%",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <span className="font-display text-4xl text-center font-light text-white leading-none">
                {romans[i]}
              </span>
              <h3 className="mt-5 mb-3 font-display text-center text-3xl font-normal text-gold">
                {step.title}
              </h3>
              <p className="font-body leading-relaxed text-center text-white">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;

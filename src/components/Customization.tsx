const options = [
  {
    title: "Brand & Label",
    desc: "Private label manufacturing — your branding, your specifications, produced at the source.",
    tags: ["White label", "OEM", "ODM"],
  },
  {
    title: "Material",
    desc: "Solid hardwoods, engineered composites, premium metals, glass, natural and engineered stone.",
    tags: ["Oak", "Walnut", "Marble", "Brass"],
  },
  {
    title: "Fabric & Leather",
    desc: "From performance velvets to full-grain leathers — sampled, selected, and specified with the manufacturer.",
    tags: ["Full-grain", "Top-grain", "Aniline"],
  },
  {
    title: "Dimension & Scale",
    desc: "Every piece is made to your measurements. Standard sizes are a starting point.",
    tags: ["Sofas", "Tables", "Wardrobes"],
  },
  {
    title: "Finish & Colour",
    desc: "Lacquers, stains, surface treatments — matched with precision, confirmed before production.",
    tags: ["RAL matching", "Custom lacquers"],
  },
  {
    title: "One of a Kind",
    desc: "Truly singular commissions — designed around one space, made for no one else.",
    tags: ["Bespoke", "Specialist execution"],
  },
];

const Customization = () => {
  return (
    <section id="customisation" className="py-28 md:py-36 bg-cream-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mx-auto mb-20">
          <p className="font-body text-xl tracking-[0.3em] uppercase text-taupe mb-6">Customisation</p>
          <h2 className="font-display text-3xl md:text-5xl font-light text-charcoal leading-tight">
            <em>Everything is curated per your vision.</em>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {options.map((item) => (
            <div
              key={item.title}
              className="flex card h-full flex-col rounded-sm border bg-charcoal/95 px-8 py-9"
            >
              <h3 className="mb-3 font-display text-2xl font-normal text-white">{item.title}</h3>
              <p className="mb-4 font-body leading-relaxed text-warm-white">{item.desc}</p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="button border border-warm-white/25 px-3 py-1.5 font-body text-sm tracking-wide text-warm-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Customization;

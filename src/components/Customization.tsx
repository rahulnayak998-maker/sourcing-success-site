import brandLabel from "@/assets/customization/BrandLabel.png";
import dimensionScale from "@/assets/customization/DimensionScale.jpeg";
import fabricLeather from "@/assets/customization/FabricLeather.jpeg";
import finishScale from "@/assets/customization/FinishScale.jpeg";
import material from "@/assets/customization/Material.jpeg";
import oneKind from "@/assets/customization/OneKind.jpeg";

const options = [
  {
    title: "Brand & Label",
    desc: "Private label manufacturing: your branding, your specifications, produced at the source.",
    tags: ["White label", "OEM", "ODM"],
    image: brandLabel,
  },
  {
    title: "Material",
    desc: "Solid hardwoods, engineered composites, premium metals, glass, natural and engineered stone.",
    tags: ["Oak", "Walnut", "Marble", "Brass"],
    image: material,
  },
  {
    title: "Fabric & Leather",
    desc: "From performance velvets to full-grain leathers: sampled, selected, and specified with the manufacturer.",
    tags: ["Full-grain", "Top-grain", "Aniline"],
    image: fabricLeather,
  },
  {
    title: "Dimension & Scale",
    desc: "Every piece is made to your measurements. Standard sizes are a starting point.",
    tags: ["Sofas", "Tables", "Wardrobes"],
    image: dimensionScale,
  },
  {
    title: "Finish & Colour",
    desc: "Lacquers, stains, surface treatments: matched with precision, confirmed before production.",
    tags: ["RAL matching", "Custom lacquers"],
    image: finishScale,
  },
  {
    title: "One of a Kind",
    desc: "Truly singular commissions: designed around one space, made for no one else.",
    tags: ["Bespoke", "Specialist execution"],
    image: oneKind,
  },
];

const Customization = () => {
  return (
    <section id="customisation" className="bg-cream-dark py-28 md:py-36">
      <div className="mx-auto w-full max-w-[1440px] px-6">
        <div className="mx-auto mb-20 text-center">
          <p className="mb-6 font-body text-xl uppercase tracking-[0.3em] text-gold">Customisation</p>
          <h2 className="font-display text-3xl font-light leading-tight text-teal md:text-5xl">
            <em>Everything is curated per your vision.</em>
          </h2>
        </div>

        <div className="mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {options.map((item) => (
            <div key={item.title} className="group w-full [perspective:1200px]">
              <div className="relative w-full overflow-hidden rounded-2xl border border-teal/15 shadow-[0_18px_50px_rgba(16,55,61,0.16)]">
                <div
                  className="flex flex-col rounded-2xl bg-teal/95 px-8 py-9 transition-[transform,opacity] duration-700 [backface-visibility:hidden] [transform:rotateY(0deg)] group-hover:opacity-0 group-hover:[transform:rotateY(-180deg)]"
                  style={{
                    backgroundImage: "url('/Tandee_bg.png')",
                    backgroundSize: "100% 100%",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <h3 className="mb-3 font-display text-2xl font-normal text-gold">{item.title}</h3>
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

                <div className="absolute inset-0 overflow-hidden rounded-2xl opacity-0 transition-[transform,opacity] duration-700 [backface-visibility:hidden] [transform:rotateY(180deg)] group-hover:opacity-100 group-hover:[transform:rotateY(0deg)]">
                  <img
                    src={item.image}
                    alt=""
                    loading="eager"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Customization;

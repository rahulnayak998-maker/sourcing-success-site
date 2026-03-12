import { Tag, Layers, Scissors, Move, Paintbrush, Sparkles } from "lucide-react";

const options = [
  {
    icon: Tag,
    title: "Brand & Label",
    desc: "Hospitality groups and design firms can have pieces manufactured under private label — your branding, your specifications, produced at the source.",
    tags: ["White label", "OEM", "ODM"],
  },
  {
    icon: Layers,
    title: "Material",
    desc: "The material defines the piece. We work with the full range — solid hardwoods, engineered composites, premium metals, glass, natural and engineered stone.",
    tags: ["Oak", "Walnut", "Marble", "Brass"],
  },
  {
    icon: Scissors,
    title: "Fabric & Leather",
    desc: "From performance velvets to full-grain leathers — sampled, selected, and specified in direct collaboration with the manufacturer.",
    tags: ["Full-grain", "Top-grain", "Aniline", "Weaves"],
  },
  {
    icon: Move,
    title: "Dimension & Scale",
    desc: "Every piece is made to your measurements. Standard sizes are a starting point. The final dimensions are yours.",
    tags: ["Sofas", "Tables", "Wardrobes", "Joinery"],
  },
  {
    icon: Paintbrush,
    title: "Finish & Colour",
    desc: "Lacquers, stains, surface treatments — developed based on your approved sample, matched with precision, confirmed before production begins.",
    tags: ["RAL matching", "Custom lacquers", "Sample approval"],
  },
  {
    icon: Sparkles,
    title: "One of a Kind",
    desc: "For the piece that exists nowhere else. We engage specialist manufacturers for truly singular commissions — designed around one space, made for no one else.",
    tags: ["Bespoke commission", "Specialist execution"],
  },
];

const Customization = () => {
  return (
    <section className="py-24 md:py-32 bg-surface-elevated">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-gold mb-4">Customisation</p>
          <h2 className="font-display text-3xl md:text-5xl font-medium text-warm-cream mb-6">
            Everything is curated per your vision.
          </h2>
          <p className="font-body text-warm-cream-muted text-lg">
            The manufacturer makes what you ask for. The question is whether you have someone who knows how to ask. Tandee does.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {options.map((item) => (
            <div key={item.title} className="bg-background border border-border p-8 hover:border-gold/30 transition-colors group">
              <item.icon className="w-7 h-7 text-gold mb-5" />
              <h3 className="font-display text-lg font-medium text-warm-cream mb-3">{item.title}</h3>
              <p className="font-body text-sm text-warm-cream-muted leading-relaxed mb-4">{item.desc}</p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="text-xs font-body px-3 py-1 border border-border text-muted-foreground">
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

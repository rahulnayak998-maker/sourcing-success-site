const types = [
  {
    title: "The Private Homeowner",
    desc: "Your home is not a project. It is a statement of how you choose to live.",
  },
  {
    title: "The Villa & Farmhouse Owner",
    desc: "Scale is its own discipline. We manage large-format residential procurement as a single cohesive engagement.",
  },
  {
    title: "The Apartment & Penthouse Owner",
    desc: "Every piece earns its place. Tandee curates furniture that elevates without overwhelming.",
  },
  {
    title: "The Hospitality Developer",
    desc: "We understand procurement at scale — the timelines, specifications, and standards that five-star properties demand.",
  },
  {
    title: "The Restaurant & Commercial Owner",
    desc: "Spaces that are worked hard must be built right. Aesthetic and durability are both non-negotiable.",
  },
  {
    title: "The Architect & Interior Designer",
    desc: "You have a vision. We have the relationships and the process to execute it without translation loss.",
  },
];

const ProjectTypes = () => {
  return (
    <section id="clients" className="py-28 md:py-36 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-taupe mb-6">Who We Serve</p>
          <h2 className="font-display text-3xl md:text-5xl font-light text-charcoal leading-tight">
            For those who hold their spaces
            <br />
            <em>to a higher standard.</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14 max-w-5xl mx-auto">
          {types.map((item) => (
            <div key={item.title} className="text-center">
              <div className="w-12 h-px bg-divider mx-auto mb-6" />
              <h3 className="font-display text-xl font-normal text-charcoal mb-3">{item.title}</h3>
              <p className="font-body text-sm text-taupe leading-relaxed font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectTypes;

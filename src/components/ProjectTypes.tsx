import { Home, Building2, Building, Hotel, UtensilsCrossed, Compass } from "lucide-react";

const types = [
  {
    icon: Home,
    title: "The Private Homeowner",
    desc: "Your home is not a project. It is a statement of how you choose to live. Every piece Tandee sources for a private residence is selected with that weight in mind.",
  },
  {
    icon: Building2,
    title: "The Villa & Farmhouse Owner",
    desc: "Scale is its own discipline. We manage large-format residential procurement across every category — furniture, finishes, fixtures as a single cohesive engagement.",
  },
  {
    icon: Building,
    title: "The Apartment & Penthouse Owner",
    desc: "When space is considered and design is deliberate, every piece earns its place. Tandee curates furniture that elevates without overwhelming.",
  },
  {
    icon: Hotel,
    title: "The Hospitality Developer",
    desc: "Guest experience begins with the room. We understand procurement at scale — the timelines, the specifications, and the standard that five-star properties demand.",
  },
  {
    icon: UtensilsCrossed,
    title: "The Restaurant & Commercial Owner",
    desc: "Spaces that are worked hard must be built right. We source for environments where aesthetic and durability are both non-negotiable.",
  },
  {
    icon: Compass,
    title: "The Architect & Interior Designer",
    desc: "You have a vision. We have the relationships and the process to execute it without translation loss, without timeline risk, and without compromise.",
  },
];

const ProjectTypes = () => {
  return (
    <section id="clients" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-gold mb-4">Who We Work With</p>
          <h2 className="font-display text-3xl md:text-5xl font-medium text-warm-cream">
            For those who hold their spaces to a higher standard.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {types.map((item, i) => (
            <div
              key={item.title}
              className="border border-border p-8 hover:border-gold/30 transition-all group"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="font-display text-3xl text-gold/30 font-bold">{String(i + 1).padStart(2, "0")}</span>
                <item.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-display text-lg font-medium text-warm-cream mb-3">{item.title}</h3>
              <p className="font-body text-sm text-warm-cream-muted leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectTypes;

import categorySofas from "@/assets/category-sofas.jpg";
import categoryDining from "@/assets/category-dining.jpg";
import categoryKitchen from "@/assets/category-kitchen.jpg";
import categoryMarble from "@/assets/category-marble.jpg";
import categoryLighting from "@/assets/category-lighting.jpg";
import categoryDoors from "@/assets/category-doors.jpg";

const categories = [
  {
    img: categorySofas,
    title: "Sofas & Seating",
    desc: "Bespoke sofas, sectionals, lounge chairs, and accent seating. Solid frames. Premium leathers. Fabrics that age with the room.",
  },
  {
    img: categoryDining,
    title: "Dining & Tables",
    desc: "Dining tables, centre tables, consoles, and custom joinery. Marble, solid wood, lacquer, and designer composites — made to your scale.",
  },
  {
    img: categoryKitchen,
    title: "Kitchen & Cabinetry",
    desc: "Modular and bespoke kitchen systems, wardrobes, and storage — precision-engineered with premium hardware and considered finishes.",
  },
  {
    img: categoryMarble,
    title: "Marble, Stone & Surfaces",
    desc: "Natural marble slabs, engineered stone, decorative panels, and surface materials. Sourced at origin. Selected by hand.",
  },
  {
    img: categoryLighting,
    title: "Lighting & Decorative Fixtures",
    desc: "Chandeliers, pendants, sconces, and bespoke fixtures that do not illuminate a room so much as define its atmosphere.",
  },
  {
    img: categoryDoors,
    title: "Doors, Windows & Architectural Materials",
    desc: "Premium entry doors, aluminium window systems, architectural cladding — the materials that shape a space before the furniture arrives.",
  },
];

const Categories = () => {
  return (
    <section id="categories" className="py-24 md:py-32 bg-surface-elevated">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-gold mb-4">What We Source</p>
          <h2 className="font-display text-3xl md:text-5xl font-medium text-warm-cream mb-6">
            Every material a great interior demands.
          </h2>
          <p className="font-body text-warm-cream-muted text-lg">
            Tandee curates across every category, from statement pieces to quiet surfaces. Everything in between.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div key={cat.title} className="group relative overflow-hidden cursor-pointer">
              <div className="aspect-square overflow-hidden">
                <img
                  src={cat.img}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent flex flex-col justify-end p-6">
                <h3 className="font-display text-xl font-medium text-warm-cream mb-2">{cat.title}</h3>
                <p className="font-body text-sm text-warm-cream-muted leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {cat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;

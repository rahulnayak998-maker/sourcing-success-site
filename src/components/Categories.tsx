import categorySofas from "@/assets/category-sofas.jpg";
import categoryDining from "@/assets/category-dining.jpg";
import categoryKitchen from "@/assets/category-kitchen.jpg";
import categoryMarble from "@/assets/category-marble.jpg";
import categoryLighting from "@/assets/category-lighting.jpg";
import categoryDoors from "@/assets/category-doors.jpg";

const categories = [
  { img: categorySofas, title: "Sofas & Seating" },
  { img: categoryDining, title: "Dining & Tables" },
  { img: categoryKitchen, title: "Kitchen & Cabinetry" },
  { img: categoryMarble, title: "Marble & Stone" },
  { img: categoryLighting, title: "Lighting" },
  { img: categoryDoors, title: "Doors & Architectural" },
];

const Categories = () => {
  return (
    <section id="categories" className="py-28 md:py-36 bg-cream-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mx-auto mb-20">
          <p className="font-body text-xl tracking-[0.3em] uppercase text-taupe mb-6">What We Source</p>
          <h2 className="font-display text-3xl md:text-5xl font-light text-charcoal leading-tight">
            <em>Your World of Elevated Living, Curated by Us.</em>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <div key={cat.title} className="group cursor-pointer">
              <div className="aspect-[3/4] card overflow-hidden mb-4">
                <img
                  src={cat.img}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>
              <h3 className="font-display text-lg md:text-xl font-normal text-charcoal text-center">
                {cat.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;

import { useState } from "react";
import categoryResidential from "@/assets/categories/covers/Residential-Furniture.jpg";
import categoryCorporate from "@/assets/categories/covers/Corporate-Furniture.jpg";
import categoryInstitutional from "@/assets/categories/covers/Institutional-Furniture.jpg";
import categoryHospitality from "@/assets/categories/covers/Hospitality-Furniture.jpg";
import categoryHospitals from "@/assets/categories/covers/Hospital-Furniture.jpg";
import categoryOutdoor from "@/assets/categories/covers/Outdoor-Furniture.jpg";
import residential1 from "@/assets/categories/residential/residential1.jpeg";
import residential2 from "@/assets/categories/residential/residential2.jpeg";
import residential3 from "@/assets/categories/residential/residential3.jpeg";
import residential4 from "@/assets/categories/residential/residential4.jpeg";
import residential5 from "@/assets/categories/residential/residential5.jpeg";
import residential6 from "@/assets/categories/residential/residential6.jpeg";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const gallerySets = [
  [residential1, residential2, residential3, residential4, residential5, residential6],
  [residential1, residential2, residential3, residential4, residential5, residential6],
  [residential1, residential2, residential3, residential4, residential5, residential6],
  [residential1, residential2, residential3, residential4, residential5, residential6],
  [residential1, residential2, residential3, residential4, residential5, residential6],
  [residential1, residential2, residential3, residential4, residential5, residential6],
];

const categories = [
  { img: categoryResidential, title: "Residential", gallery: gallerySets[0] },
  { img: categoryCorporate, title: "Corporate", gallery: gallerySets[1] },
  { img: categoryInstitutional, title: "Institutional", gallery: gallerySets[2] },
  { img: categoryHospitality, title: "Hospitality", gallery: gallerySets[3] },
  { img: categoryHospitals, title: "Hospitals", gallery: gallerySets[4] },
  { img: categoryOutdoor, title: "Outdoor Furniture", gallery: gallerySets[5] },
];

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState<(typeof categories)[number] | null>(null);

  return (
    <section id="categories" className="py-28 md:py-36 bg-cream-dark">
      <div className="mx-auto w-full max-w-[1440px] px-6">
        <div className="text-center mx-auto mb-20">
          <p className="font-body text-xl tracking-[0.3em] uppercase text-gold mb-6">What We Source</p>
          <h2 className="font-display text-3xl md:text-5xl font-light text-teal leading-tight">
            <em>Your World of Elevated Living, Curated by Us.</em>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <button
              key={cat.title}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className="group text-left"
            >
              <div className="aspect-[30/31] card overflow-hidden mb-4">
                <img
                  src={cat.img}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="eager"
                />
              </div>
              <h3 className="font-display text-lg md:text-xl font-normal text-teal text-center">
                {cat.title}
              </h3>
            </button>
          ))}
        </div>
      </div>

      <Dialog open={selectedCategory !== null} onOpenChange={(open) => !open && setSelectedCategory(null)}>
        <DialogContent className="max-h-[calc(100vh-2rem)] max-w-5xl overflow-hidden rounded-[32px] border-0 bg-transparent p-0 shadow-[0_24px_80px_rgba(16,34,30,0.24)] sm:max-h-[calc(100vh-4rem)]">
          {selectedCategory ? (
            <div className="max-h-[calc(100vh-2rem)] overflow-y-auto rounded-[32px] border border-white/70 bg-[#f7f1e7] p-6 sm:max-h-[calc(100vh-4rem)] sm:p-8">
              <DialogHeader className="pr-12">
                <DialogTitle className="font-display text-2xl font-light text-teal md:text-4xl">
                  {selectedCategory.title}
                </DialogTitle>
                <DialogDescription className="font-body text-sm uppercase tracking-[0.2em] text-gold">
                  Gallery
                </DialogDescription>
              </DialogHeader>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {selectedCategory.gallery.map((image, index) => (
                  <div
                    key={`${selectedCategory.title}-${index}`}
                    className="overflow-hidden rounded-2xl border border-teal/10 bg-white shadow-sm"
                  >
                    <img
                      src={image}
                      alt={`${selectedCategory.title} gallery image ${index + 1}`}
                      className="h-56 w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Categories;

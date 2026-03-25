const props = [
  {
    title: "Private Residential Furniture",
    desc: "Furniture that reflects the art of living. Curated pieces tailored to your lifestyle, scale, and sensibilities & crafted to elevate every corner of your home.",
  },
  {
    title: "Corporate Office Furniture",
    desc: "Where design meets distinction. Thoughtfully curated furniture that embodies your brand’s stature while enhancing functionality, flow, and productivity.",
  },
  {
    title: "Educational Institution Furniture",
    desc: "Built for learning. Designed for longevity. Purpose-driven furniture curated for schools and colleges. Balancing durability, comfort, and performance at scale.",
  },
  {
    title: "Hospitality Furniture",
    desc: "Designed to leave a lasting impression. Furniture that seamlessly blends aesthetics, comfort, and resilience—crafted for spaces that welcome, inspire, and endure.",
  },
  {
    title: "Healthcare Furniture",
    desc: "Precision in every detail. Care in every element. Meticulously curated furniture focused on hygiene, comfort, and efficiency—supporting critical environments with uncompromising standards."
  },
  {
    title: "Outdoor Furniture",
    desc: "Beyond walls, without compromise. Weather-resistant, design- led furniture curated for open spaces-where durability meets refined outdoor living."
  }
];

const ValueProps = () => {
  return (
    <section className="py-28 md:py-36 bg-background">
      <div className="mx-auto w-full max-w-[1440px] px-6">
        <div className="text-center mx-auto mb-20">
          <p className="font-body text-xl tracking-[0.3em] uppercase text-taupe mb-6">Why Tandee</p>
          <h2 className="font-display text-3xl md:text-5xl font-light text-charcoal leading-tight">
            <em>Not what the market offers. What you actually want.</em>
          </h2>
        </div>

        <div className="mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {props.map((item, i) => (
            <div
              key={item.title}
              className="flex card h-full flex-col rounded-sm border bg-charcoal/95 px-8 py-9 text-center"
            >
              <span className="font-display text-5xl font-light text-warm-white">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 mb-4 font-display text-xl font-normal text-white md:text-2xl">
                {item.title}
              </h3>
              <p className="font-body leading-relaxed text-white">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;

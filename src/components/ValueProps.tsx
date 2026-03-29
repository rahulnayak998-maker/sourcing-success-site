const props = [
  {
    title: "Residential Furniture",
    desc: "Furniture that reflects the art of living. Curated pieces tailored to your lifestyle, scale, and sensibilities & crafted to elevate every corner of your home.",
  },
  {
    title: "Corporate Furniture",
    desc: "Where design meets distinction. Featuring the latest designs and trending furniture, curated to reflect your brand’s stature while elevating functionality, flow, and productivity.",
  },
  {
    title: "Institutional Furniture",
    desc: "Built for learning. Designed for longevity. Purpose-driven furniture curated for schools and colleges. Balancing durability, comfort, and performance at scale.",
  },
  {
    title: "Hospitality Furniture",
    desc: "Designed to leave a lasting impression. Furniture that seamlessly blends aesthetics, comfort, and resilience—crafted for spaces that welcome, inspire, and endure.",
  },
  {
    title: "Healthcare Furniture",
    desc: "Precision in every detail. Care in every element. Meticulously curated, contemporary furniture aligned with evolving design standards—focused on hygiene, comfort, and efficiency, supporting critical environments with uncompromising precision."
  },
  {
    title: "Outdoor Furniture",
    desc: "Beyond walls, without compromise. Weather-resistant, design- led furniture curated for open spaces-where durability meets refined outdoor living."
  }
];

const romans = ["I", "II", "III", "IV", "V", "VI"];

const ValueProps = () => {
  return (
    <section className="py-28 md:py-36 bg-background">
      <div className="mx-auto w-full max-w-[1440px] px-6">
        <div className="text-center mx-auto mb-20">
          <h2 className="font-display text-3xl md:text-5xl font-light text-teal leading-tight">
            <em>Why Tandee</em>
          </h2>
        </div>

        <div className="mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {props.map((item, i) => (
            <div
              key={item.title}
              className="flex card h-full flex-col rounded-sm border bg-teal/95 px-8 py-9 text-center"
              style={{
                backgroundImage: "url('/Tandee_bg.png')",
                backgroundSize: "100% 100%",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <span className="font-display text-3xl font-light text-warm-white">
                {romans[i]}
              </span>
              <h3 className="mt-4 mb-4 font-display text-3xl font-normal text-gold">
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

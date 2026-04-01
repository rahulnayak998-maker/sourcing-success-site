const props = [
  {
    title: "Cut Your Costs by 50%",
    desc: "Half the Price. Same Quality. Go direct to Chinese furniture manufacturers and save up to 50% off what you'd pay in stores.",
  },
  {
    title: "60+ Vetted Manufacturers ",
    desc: "Partnered with 60+ Furniture Factories & Showrooms Across China",
  },
  {
    title: "Quality Checked",
    desc: "Eyes on Every Piece, Every Time We're on-site at the source, inspecting your order so you never have to wonder what's coming.",
  },
  {
    title: "End-to-end focused",
    desc: "Everything, Handled. From design to production to delivery... we manage every step so you don't have to.",
  },
  {
    title: "No Hidden Costs. Clear Quotes.",
    desc: "We provide detailed cost breakdowns including product, logistics, and duties — so you know exactly what you're paying for."
  },
  {
    title: "From Factory to Your Door",
    desc: "We handle shipping, customs, and logistics to ensure your furniture arrives safely and on time."
  }
];

const Features = () => {
  return (
    <section className="py-28 bg-cream-dark">
      <div className="mx-auto w-full max-w-[1440px] px-6">
        <div className="mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {props.map((item, i) => {
            return (
            <div
              key={`${item.title}-${i}`}
              className="flex card h-full flex-col rounded-sm border bg-teal/95 px-8 py-9 text-center"
              style={{
                backgroundImage: "url('/Tandee_bg.png')",
                backgroundSize: "100% 100%",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <h3 className="mt-4 mb-4 font-display text-xl font-normal text-gold md:text-2xl">
                {item.title}
              </h3>
              <p className="font-body leading-relaxed text-white">
                {item.desc}
              </p>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;

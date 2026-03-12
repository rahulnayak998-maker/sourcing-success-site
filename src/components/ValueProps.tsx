const props = [
  {
    title: "The Right Manufacturers",
    desc: "Our manufacturer relationships are built over years, evaluated in person, and held to a standard most buyers never get close enough to verify.",
  },
  {
    title: "Made for Your Space",
    desc: "Every piece can be dimensioned, finished, and configured to your exact specification. The room drives the furniture, not the other way around.",
  },
  {
    title: "What It Should Cost",
    desc: "When you go to the source, the price reflects the craft, not the chain of hands it passed through.",
  },
  {
    title: "Eyes on Every Detail",
    desc: "We inspect every order at the factory before it moves. What is agreed is what arrives. No surprises at delivery.",
  },
];

const ValueProps = () => {
  return (
    <section className="py-28 md:py-36 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-taupe mb-6">Why Tandee</p>
          <h2 className="font-display text-3xl md:text-5xl font-light text-charcoal leading-tight">
            Not what the market offers.
            <br />
            <em>What you actually want.</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-16 max-w-4xl mx-auto">
          {props.map((item, i) => (
            <div key={item.title} className="text-center">
              <span className="font-display text-5xl font-light text-cream-dark">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-xl md:text-2xl font-normal text-charcoal mt-4 mb-4">
                {item.title}
              </h3>
              <p className="font-body text-sm text-taupe leading-relaxed font-light">
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

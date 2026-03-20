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
    title: "40+ Verified Factories",
    desc: "Access to over 40 carefully vetted factories across China's premier manufacturing regions. More options. Better matches. Every time.",
  },
  {
    title: "Better Pricing. Direct from the Source",
    desc: "When furniture travels from factory to your space without unnecessary stops along the way, the price reflects the craft, not the journey. Tandee clients consistently get significantly better value than traditional retail and import channels offer.",
  },
  {
    title: "Source with Complete Confidence",
    desc: "The global furniture sourcing market has its risks - misrepresented quality, unreliable suppliers, orders that never arrive as promised. Tandee's verified network and on-ground presence means every supplier is known, every order is tracked, and your investment is protected."
  },
  {
    title: "One Conversation. Everything Handled",
    desc: "From the first brief to the last delivery - sourcing, customisation, production, logistics. You stay focused on your project. We carry the rest."
  }
];

const ValueProps = () => {
  return (
    <section className="py-28 md:py-36 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mx-auto mb-20">
          <p className="font-body text-xl tracking-[0.3em] uppercase text-taupe mb-6">Why Tandee</p>
          <h2 className="font-display text-3xl md:text-5xl font-light text-charcoal leading-tight">
            <em>Not what the market offers. What you actually want.</em>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {props.map((item, i) => (
            <div
              key={item.title}
              className="flex card h-full flex-col rounded-sm border border-divider bg-cream-dark/35 px-8 py-9 text-center"
            >
              <span className="font-display text-5xl font-light text-bronze">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-xl md:text-2xl font-normal text-charcoal mt-4 mb-4">
                {item.title}
              </h3>
              <p className="font-body text-taupe leading-relaxed">
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

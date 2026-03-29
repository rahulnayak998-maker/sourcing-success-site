const services = [
  {
    title: "Finding the Right Curator",
    desc: "Every manufacturer recommendation is based on years of relationship, in-person evaluation, and an understanding of what exceptional actually looks like.",
  },
  {
    title: "Negotiation & Terms",
    desc: "Pricing, lead times, production terms — negotiated on your behalf by people who understand both the market and the manufacturer.",
  },
  {
    title: "The China Visit",
    desc: "Foshan, Guangzhou, Shanghai. The showrooms, the factories, the materials. Fully accompanied, fully considered.",
  },
  {
    title: "Quality, Verified",
    desc: "Every order is inspected in-factory before it leaves. Against your specification. Nothing ships without your sign-off.",
  },
  {
    title: "From Factory to Your Door",
    desc: "Shipping, customs, freight coordination, last-mile delivery — managed entirely by Tandee.",
  },
  {
    title: "Full Project Management",
    desc: "Coordinating categories, suppliers, timelines, and delivery milestones so your project moves forward without friction.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-28 md:py-36 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mx-auto mb-20">
          <h2 className="font-display text-3xl md:text-5xl font-light text-teal leading-tight">
            <em>Our Services</em>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          {services.map((item, i) => (
            <div key={item.title} className="card border-t py-8 md:py-10 flex gap-6 md:gap-10 items-start">
              <span className="font-display text-4xl font-light text-teal flex-shrink-0 w-10">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display pt-2 text-2xl font-normal text-teal mb-2">
                  {item.title}
                </h3>
                <p className="font-body text-xl text-gold leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

import aboutBg from "@/assets/about-bg.jpg";

const About = () => {
  return (
    <section id="about" className="py-28 md:py-36 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="order-2 lg:order-1">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-taupe mb-6">About Tandee</p>
            <h2 className="font-display text-3xl md:text-4xl font-light text-charcoal leading-tight mb-8">
              We built Tandee for
              <br />
              <em>one kind of client.</em>
            </h2>

            <div className="space-y-5 font-body text-sm text-taupe leading-[1.8] font-light">
              <p>
                Tandee is a luxury furniture curator and procurement specialist. We give Indian homeowners, architects, interior designers, and developers direct access to China's finest furniture manufacturers — and we manage the complete journey from first selection to final delivery.
              </p>
              <p>
                Our network spans verified factories and premium showrooms across Foshan, Guangzhou, and Shanghai. Every relationship built over years, evaluated in person, and maintained through a standard most procurement companies never impose on themselves.
              </p>
              <p className="font-display text-lg text-charcoal italic font-light !leading-relaxed">
                "The furniture in the world's finest homes was not chosen from a catalogue. It was made."
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <img
              src={aboutBg}
              alt="Tandee curated showroom"
              className="w-full aspect-[4/5] object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Founder section */}
        <div className="mt-24 border-t border-divider pt-16 max-w-2xl mx-auto text-center">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-taupe mb-6">Leadership</p>
          <h3 className="font-display text-2xl md:text-3xl font-light text-charcoal mb-6">
            Led by 25 years of design knowledge
          </h3>
          <p className="font-body text-sm text-taupe leading-[1.8] font-light">
            Tandee is led by Mr. Deepak, whose 25 years in interior design and the furnishing industry have shaped how we see quality, how we evaluate materials, and how we hold our manufacturers to account. When Tandee recommends a manufacturer, it is because Mr. Deepak would furnish his own home with their work.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

import aboutBg from "@/assets/about-bg.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-body text-sm tracking-[0.3em] uppercase text-gold mb-4">About Tandee</p>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-warm-cream mb-6">
              We built Tandee for one kind of client.
            </h2>
            <p className="font-display text-xl italic text-gold-light mb-8">
              The kind who knows exactly what they want and refuses to accept something close.
            </p>
            <div className="space-y-5 font-body text-sm text-warm-cream-muted leading-relaxed">
              <p>
                Tandee is a luxury furniture curator and procurement specialist. We give Indian homeowners, architects, interior designers, and developers direct access to China's finest furniture manufacturers — and we manage the complete journey from first selection to final delivery.
              </p>
              <p>
                Our network spans verified factories and premium showrooms across Foshan, Guangzhou, and Shanghai, every relationship built over years, evaluated in person, and maintained through a standard that most procurement companies never impose on themselves.
              </p>
              <p>
                We do not send you a catalogue. We learn your project, find the right makers, oversee what is produced, and ensure it reaches you exactly as agreed. One engagement. Complete accountability.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src={aboutBg}
              alt="Tandee showroom"
              className="w-full aspect-[4/3] object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
          </div>
        </div>

        {/* Founder */}
        <div className="mt-20 border-t border-border pt-16 max-w-3xl">
          <h3 className="font-display text-2xl font-medium text-warm-cream mb-4">
            Led by 25 years of design knowledge
          </h3>
          <p className="font-body text-sm text-warm-cream-muted leading-relaxed mb-6">
            Tandee is led by Mr. Deepak, whose 25 years in interior design and the furnishing industry have shaped how we see quality, how we evaluate materials, and how we hold our manufacturers to account. His experience is not operational — it is curatorial. He understands what a space is supposed to feel like, and every sourcing decision Tandee makes is informed by that knowledge.
          </p>
          <p className="font-display text-lg italic text-gold">
            "When Tandee recommends a manufacturer, it is because Mr. Deepak would furnish his own home with their work."
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

import aboutBg from "@/assets/about/about-bg.jpg";

const About = () => {
  return (
    <section id="about" className="py-28 md:py-36 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="order-2 lg:order-1">
            <p className="font-body text-xl tracking-[0.3em] uppercase text-gold mb-6">About Tandee</p>
            <h2 className="font-display text-2xl md:text-3xl font-light text-teal leading-tight mb-8">
              <em>Tandee was built for those who demand better.</em>
            </h2>

            <div className="space-y-5 font-body text-lg text-gold leading-[1.8] font-light">
              <p>
                Tandee is a luxury furniture curator. We give architects, interior designers, developers, and homeowners in India direct access to China’s finest manufacturers—managing everything from selection to final delivery.
              </p>
              <p>
                Our network spans verified factories and premium showrooms across Foshan, Guangzhou, and Shanghai. Every relationship built over years, evaluated in person, and maintained through a standard most procurement companies never impose on themselves.
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <img
              src={aboutBg}
              alt="Tandee curated showroom"
              className="w-full card aspect-[4/5] object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Founder section */}
        <div className="mt-24 border-t border-divider pt-16 max-w-4xl mx-auto text-center">
          <p className="font-body text-xl tracking-[0.3em] uppercase text-gold mb-6">Leadership</p>
          <h3 className="font-display text-3xl md:text-4xl font-light text-teal mb-6">
            <em>Led by 25 years of design knowledge</em>
          </h3>
          <p className="font-body text-lg text-gold leading-[1.8] font-light">
            Tandee is led by Mr. Deepak Bharadwaj, whose 25+ years in the interior design and furniture industry shape how we define quality, evaluate materials, and hold manufacturers to uncompromising standards.
          </p>
          <br/>
          <p className="font-body text-lg text-gold leading-[1.8] font-light">
            Alongside Team Mr. Deepak Bharadwaj, Mr. Rajesh Shah and Tanmay Bharadwaj, Tandee brings deep industry expertise to every project—supporting architects, interior designers, developers, and homeowners in making the right furniture decisions with clarity and confidence.
          </p>
          <br/>
          <p className="font-body text-lg text-gold leading-[1.8] font-light">
            Every manufacturer we recommend is carefully vetted because it has to meet the same standards we would expect for our own spaces.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

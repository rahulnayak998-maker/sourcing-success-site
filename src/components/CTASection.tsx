type CTASectionProps = {
  imageSrc: string;
  text: string;
};

const CTASection = ({ imageSrc, text }: CTASectionProps) => {
  return (
    <section className="relative py-36 md:py-60 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageSrc})` }}
      />

      <div className="relative z-10 text-center mx-auto px-6">
        <h2 className="font-display text-outline text-4xl md:text-6xl lg:text-7xl font-light text-cream leading-tight mb-6">
          <em>{text}</em>
        </h2>
      </div>
    </section>
  );
};

export default CTASection;

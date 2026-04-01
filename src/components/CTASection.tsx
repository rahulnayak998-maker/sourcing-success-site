type CTASectionProps = {
  imageSrc: string;
  text?: string[];
  size?: "sm" | "md" | "lg";
  showOverlay?: boolean;
};

const sizeClasses = {
  sm: {
    heading: "text-3xl md:text-4xl lg:text-5xl",
  },
  md: {
    heading: "text-4xl md:text-6xl lg:text-7xl",
  },
  lg: {
    heading: "text-5xl md:text-7xl lg:text-8xl",
  },
} as const;

const CTASection = ({
  imageSrc,
  text,
  size = "md",
  showOverlay = false,
}: CTASectionProps) => {
  const classes = sizeClasses[size];

  return (
    <section className="relative overflow-hidden py-36 md:py-60">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageSrc})` }}
      />
      {showOverlay ? (
        <div className="absolute inset-0 bg-black/25" aria-hidden="true" />
      ) : null}

      <div className="relative z-10 text-center mx-auto px-6">
        {text ? (
          <h2
            className={`mb-6 inline-block px-6 py-4 font-display font-light leading-tight text-cream ${classes.heading}`}
          >
            <em>
              {text.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </em>
          </h2>
        ) : null}
      </div>
    </section>
  );
};

export default CTASection;

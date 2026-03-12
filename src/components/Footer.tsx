const Footer = () => {
  return (
    <footer className="py-16 bg-charcoal">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="font-display text-2xl font-light tracking-[0.15em] text-cream mb-2">
            TANDEE
          </h3>
          <p className="font-body text-[10px] tracking-[0.35em] uppercase text-cream/50">
            Luxury Furniture Curator
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {["Services", "Collections", "Process", "About", "Contact"].map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              className="font-body text-xs tracking-[0.15em] uppercase text-cream/50 hover:text-cream transition-colors"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="text-center space-y-2 mb-12">
          <p className="font-body text-xs text-cream/40">hello@tandee.in</p>
          <p className="font-body text-xs text-cream/40">+91 98765 43210</p>
          <p className="font-body text-xs text-cream/40">India · China</p>
        </div>

        <div className="border-t border-cream/10 pt-8 text-center">
          <p className="font-body text-[11px] text-cream/30">
            © 2026 Tandee. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

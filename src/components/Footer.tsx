const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <h3 className="font-display text-2xl font-bold tracking-wider text-warm-cream mb-4">TANDEE</h3>
            <p className="font-body text-sm text-warm-cream-muted leading-relaxed max-w-sm">
              Luxury furniture curator and procurement specialist. Direct access to China's finest furniture manufacturers for Indian homeowners, architects, and developers.
            </p>
          </div>
          <div>
            <h4 className="font-body text-xs tracking-[0.2em] uppercase text-gold mb-4">Navigate</h4>
            <div className="space-y-2">
              {["Services", "What We Source", "Who We Serve", "Our Process", "About"].map((l) => (
                <a key={l} href={`#${l.toLowerCase().replace(/\s+/g, "-")}`} className="block font-body text-sm text-warm-cream-muted hover:text-gold transition-colors">
                  {l}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-body text-xs tracking-[0.2em] uppercase text-gold mb-4">Contact</h4>
            <div className="space-y-2 font-body text-sm text-warm-cream-muted">
              <p>hello@tandee.in</p>
              <p>+91 98765 43210</p>
              <p>India · China</p>
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-muted-foreground">
            © 2026 Tandee. All rights reserved.
          </p>
          <p className="font-body text-xs text-muted-foreground italic">
            The furniture in the world's finest homes was not chosen from a catalogue. It was made.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

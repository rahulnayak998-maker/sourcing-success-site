import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "What We Source", href: "#categories" },
  { label: "Who We Serve", href: "#clients" },
  { label: "Our Process", href: "#process" },
  { label: "About", href: "#about" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <a href="#" className="font-display text-2xl font-bold tracking-wider text-warm-cream">
          TANDEE
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-body text-sm tracking-wide text-warm-cream-muted hover:text-gold transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 px-6 py-2.5 border border-gold text-gold text-sm font-medium tracking-wide hover:bg-gold hover:text-background transition-all"
          >
            Begin Your Journey
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="lg:hidden text-warm-cream">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-background border-t border-border px-6 pb-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block font-body text-sm text-warm-cream-muted hover:text-gold transition-colors py-2"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="inline-block px-6 py-2.5 border border-gold text-gold text-sm font-medium tracking-wide hover:bg-gold hover:text-background transition-all"
          >
            Begin Your Journey
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

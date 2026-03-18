import type { MouseEvent } from "react";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Collections", href: "#categories" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollToSection = (href: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    const id = href.replace("#", "");
    const section = document.getElementById(id);
    const nav = document.querySelector("nav");
    const navHeight = nav instanceof HTMLElement ? nav.offsetHeight : 0;

    if (section) {
      const top = section.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: "smooth" });
    }

    setOpen(false);
  };

  const scrollToTop = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        {/* Desktop: centered logo layout */}
        <div className="hidden lg:grid grid-cols-2 items-center py-6">

          <div className="text-left">
            <a href="#" onClick={scrollToTop} className="font-display text-3xl font-light tracking-[0.15em] text-charcoal">
              TANDEE
            </a>
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-taupe mt-0.5">
              Luxury Furniture Curator
            </p>
          </div>

          <div className="flex items-right gap-10">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={scrollToSection(link.href)}
                className="font-body text-sm tracking-[0.2em] uppercase text-taupe hover:text-charcoal transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile */}
        <div className="lg:hidden flex items-center justify-between py-5">
          <a href="#" onClick={scrollToTop} className="font-display text-2xl font-light tracking-[0.15em] text-charcoal">
            TANDEE
          </a>
          <button onClick={() => setOpen(!open)} className="text-charcoal">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Subtle bottom line */}
      <div className="h-px bg-divider" />

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-background border-b border-divider px-6 py-8 space-y-5">
          {[...leftLinks, ...rightLinks].map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={scrollToSection(link.href)}
              className="block font-body text-xs tracking-[0.2em] uppercase text-taupe hover:text-charcoal transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

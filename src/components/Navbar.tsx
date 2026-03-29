import type { MouseEvent } from "react";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Segments", href: "#categories" },
  { label: "Customisation", href: "#customisation" },
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-teal/95 backdrop-blur-sm"
    style={{ backgroundImage: "url('/Tandee_bg.png')" }}>
      <div className="container mx-auto px-6">
        {/* Desktop */}
        <div className="hidden min-[980px]:flex items-center justify-between gap-6 py-4">
        <div className="shrink-0 text-left">
          <a
            href="#"
            onClick={scrollToTop}
            className="flex h-12 shrink-0 items-center overflow-hidden opacity-90"
            aria-label="Tandee home"
          >
            <img
              src="/Tandee_Logo.png"
              alt="Tandee"
              className="h-16 w-auto max-w-none object-cover object-center"
            />
          </a>
            </div>

          <div className="flex min-w-0 flex-1 items-center justify-end gap-5">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={scrollToSection(link.href)}
                className="whitespace-nowrap font-body text-sm tracking-[0.2em] uppercase text-white transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile */}
        <div className="flex items-center justify-between py-4 min-[980px]:hidden">
          <a
            href="#"
            onClick={scrollToTop}
            className="flex h-12 items-center overflow-hidden opacity-90"
            aria-label="Tandee home"
          >
            <img
              src="/Tandee_Logo.png"
              alt="Tandee"
              className="h-12 w-auto max-w-none object-cover object-center"
            />
          </a>
          <button onClick={() => setOpen(!open)} className="text-warm-white">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Subtle bottom line */}
      <div className="h-px bg-divider" />

      {/* Mobile menu */}
      {open && (
        <div className="bg-teal border-b border-divider px-6 py-8 space-y-5 min-[980px]:hidden">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={scrollToSection(link.href)}
              className="block font-body text-xs tracking-[0.2em] uppercase text-white transition-colors hover:text-gold"
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

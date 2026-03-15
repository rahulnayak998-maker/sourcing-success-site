import type { MouseEvent } from "react";
import { Facebook, Instagram, Youtube } from "lucide-react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Collections", href: "#categories" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
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
  };

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
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={scrollToSection(link.href)}
              className="font-body text-xs tracking-[0.15em] uppercase text-cream/50 hover:text-cream transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="text-center space-y-2 mb-12">
          <p className="font-body text-xs text-cream/40">hello@tandee.in</p>
          <p className="font-body text-xs text-cream/40">+91 98765 43210</p>
          <p className="font-body text-xs text-cream/40">India · China</p>
          <div className="flex items-center justify-center gap-4 text-cream/40">
            <a href="https://youtube.com" className="hover:text-cream transition-colors"><Youtube size={25} className="text-inherit" /></a>
            <a href="https://facebook.com" className="hover:text-cream transition-colors"><Facebook size={20} className="text-inherit" /></a>
            <a href="https://instagram.com" className="hover:text-cream transition-colors"><Instagram size={20} className="text-inherit" /></a>
          </div>
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

import { Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="relative overflow-hidden bg-charcoal bg-cover bg-center py-16"
      style={{ backgroundImage: "url('/Tandee_bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-charcoal/82" aria-hidden="true" />

      <div className="relative container mx-auto px-6">
        <div className="mb-12 text-center">
          <img
            src="/Tandee_Logo_new.png"
            alt="Tandee"
            className="mx-auto h-28 w-auto max-w-none object-contain"
          />
        </div>

        <div className="mb-12 space-y-2 text-center">
          <p className="font-body text-xs text-cream/40">hello@tandee.in</p>
          <p className="font-body text-xs text-cream/40">+91 98765 43210</p>
          <p className="font-body text-xs text-cream/40">India · China</p>
          <div className="flex items-center justify-center gap-4 text-cream/40">
            <a href="https://youtube.com" className="transition-colors hover:text-taupe">
              <Youtube size={25} className="text-inherit" />
            </a>
            <a href="https://facebook.com" className="transition-colors hover:text-taupe">
              <Facebook size={20} className="text-inherit" />
            </a>
            <a href="https://instagram.com" className="transition-colors hover:text-taupe">
              <Instagram size={20} className="text-inherit" />
            </a>
          </div>
        </div>

        <div className="border-t border-cream/10 pt-8 text-center">
          <p className="font-body text-[11px] text-cream/30">
            Â© 2026 Tandee. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

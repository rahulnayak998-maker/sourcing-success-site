import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-surface-elevated">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <p className="font-body text-sm tracking-[0.3em] uppercase text-gold mb-4">Get In Touch</p>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-warm-cream mb-6">
              The room you want already exists somewhere.
            </h2>
            <p className="font-body text-warm-cream-muted text-lg mb-10">
              It is waiting to be made for you. Share your project with Tandee and we will show you exactly how.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-gold" />
                <span className="font-body text-warm-cream-muted">hello@tandee.in</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-gold" />
                <span className="font-body text-warm-cream-muted">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-5 h-5 text-gold" />
                <span className="font-body text-warm-cream-muted">India · China</span>
              </div>
            </div>
          </div>

          <div>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="font-body text-xs tracking-wide text-warm-cream-muted uppercase block mb-2">Name</label>
                  <input className="w-full bg-background border border-border px-4 py-3 font-body text-sm text-foreground focus:border-gold outline-none transition-colors" />
                </div>
                <div>
                  <label className="font-body text-xs tracking-wide text-warm-cream-muted uppercase block mb-2">Email</label>
                  <input type="email" className="w-full bg-background border border-border px-4 py-3 font-body text-sm text-foreground focus:border-gold outline-none transition-colors" />
                </div>
              </div>
              <div>
                <label className="font-body text-xs tracking-wide text-warm-cream-muted uppercase block mb-2">Phone</label>
                <input className="w-full bg-background border border-border px-4 py-3 font-body text-sm text-foreground focus:border-gold outline-none transition-colors" />
              </div>
              <div>
                <label className="font-body text-xs tracking-wide text-warm-cream-muted uppercase block mb-2">Tell us about your project</label>
                <textarea rows={5} className="w-full bg-background border border-border px-4 py-3 font-body text-sm text-foreground focus:border-gold outline-none transition-colors resize-none" />
              </div>
              <button
                type="submit"
                className="px-10 py-4 bg-gold text-background font-body font-semibold text-sm tracking-wide hover:bg-gold-light transition-colors w-full sm:w-auto"
              >
                Submit Your Project Brief
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

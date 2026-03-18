const Contact = () => {
  return (
    <section id="contact" className="py-28 md:py-36 bg-cream-dark">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-body text-xl tracking-[0.3em] uppercase text-taupe mb-6">Get In Touch</p>
            <h2 className="font-display text-3xl md:text-5xl font-light text-charcoal leading-tight mb-6">
              <em>Share your project with Tandee.</em>
            </h2>
            <p className="font-body text-lg text-taupe font-light">
              The room you want already exists somewhere. It is waiting to be made for you.
            </p>
          </div>

          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <label className="font-body tracking-[0.2em] uppercase text-taupe block mb-3">
                  Name
                </label>
                <input className="w-full bg-transparent border-b border-divider px-0 py-3 font-body text-charcoal focus:border-charcoal outline-none transition-colors placeholder:text-taupe/50" placeholder="Your name" />
              </div>
              <div>
                <label className="font-body tracking-[0.2em] uppercase text-taupe block mb-3">
                  Email
                </label>
                <input type="email" className="w-full bg-transparent border-b border-divider px-0 py-3 font-body text-charcoal focus:border-charcoal outline-none transition-colors placeholder:text-taupe/50" placeholder="your@email.com" />
              </div>
            </div>
            <div>
              <label className="font-body tracking-[0.2em] uppercase text-taupe block mb-3">
                Phone
              </label>
              <input className="w-full bg-transparent border-b border-divider px-0 py-3 font-body text-charcoal focus:border-charcoal outline-none transition-colors placeholder:text-taupe/50" placeholder="+91" />
            </div>
            <div>
              <label className="font-body tracking-[0.2em] uppercase text-taupe block mb-3">
                Tell us about your project
              </label>
              <textarea
                rows={4}
                className="w-full bg-transparent border-b border-divider px-0 py-3 font-body text-charcoal focus:border-charcoal outline-none transition-colors resize-none placeholder:text-taupe/50"
                placeholder="Describe your space, vision, and requirements..."
              />
            </div>
            <div className="text-center pt-4">
              <button
                type="submit"
                className="inline-block font-body text-sm tracking-[0.25em] uppercase text-cream bg-charcoal px-12 py-4 hover:bg-bronze transition-colors"
              >
                Submit Your Brief
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

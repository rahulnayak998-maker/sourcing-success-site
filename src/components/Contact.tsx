import { useState, type FormEvent } from "react";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!WEB3FORMS_ACCESS_KEY) {
      setStatus({
        type: "error",
        message: "Form is not configured yet. Add VITE_WEB3FORMS_ACCESS_KEY to enable submissions.",
      });
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "New Tandee website enquiry");

    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      });

      const result = (await response.json()) as { success?: boolean; message?: string };

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Unable to send your message right now.");
      }

      form.reset();
      setStatus({
        type: "success",
        message: "Your brief has been sent. We will get back to you shortly.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Unable to send your message right now.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-28 md:py-36 bg-cream-dark">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-body text-xl tracking-[0.3em] uppercase text-gold mb-6">Share your project with Tandee.</p>
            <h2 className="font-display text-5xl font-light text-teal leading-tight mb-6">
              <em>Get in Touch</em>
            </h2>
          </div>

          <form className="space-y-8" onSubmit={handleSubmit}>
            <input type="hidden" name="botcheck" />
            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <label className="font-body tracking-[0.2em] uppercase text-gold block mb-3">
                  Name
                </label>
                <input
                  name="name"
                  required
                  className="w-full bg-transparent border-b border-divider px-0 py-3 font-body text-teal focus:border-teal outline-none transition-colors placeholder:text-gold/50"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="font-body tracking-[0.2em] uppercase text-gold block mb-3">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-transparent border-b border-divider px-0 py-3 font-body text-teal focus:border-teal outline-none transition-colors placeholder:text-gold/50"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div>
              <label className="font-body tracking-[0.2em] uppercase text-gold block mb-3">
                Phone
              </label>
              <input
                name="phone"
                className="w-full bg-transparent border-b border-divider px-0 py-3 font-body text-teal focus:border-teal outline-none transition-colors placeholder:text-gold/50"
                placeholder="+91"
              />
            </div>
            <div>
              <label className="font-body tracking-[0.2em] uppercase text-gold block mb-3">
                Tell us about your project
              </label>
              <textarea
                name="message"
                required
                rows={4}
                className="w-full bg-transparent border-b border-divider px-0 py-3 font-body text-teal focus:border-teal outline-none transition-colors resize-none placeholder:text-gold/50"
                placeholder="Describe your space, vision, and requirements..."
              />
            </div>
            {status ? (
              <p
                className={`font-body text-sm ${
                  status.type === "success" ? "text-teal" : "text-red-700"
                }`}
              >
                {status.message}
              </p>
            ) : null}
            <div className="text-center pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="button inline-block font-body text-sm tracking-[0.25em] uppercase text-cream bg-teal px-12 py-4 hover:bg-gold transition-colors"
              >
                {isSubmitting ? "Sending..." : "Submit Your Brief"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

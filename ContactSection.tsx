import { useState, type FormEvent } from "react";
import { Mail, Send, Linkedin, Instagram, Globe, Phone } from "lucide-react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-16">
          {/* Left info - 2/5 */}
          <div className="lg:col-span-2">
            <span className="section-label">Contact</span>
            <h2 className="section-title mb-6">Get in Touch</h2>
            <div className="accent-bar" />
            <p className="text-muted-foreground text-[15px] leading-relaxed mb-8">
              Have questions about our chapter, events, or membership? We'd love
              to hear from you.
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <Mail size={16} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <span className="text-xs text-muted-foreground block mb-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>Email</span>
                  <a href="mailto:cass.kerala@ieee.org" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                    cass.kerala@ieee.org
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={16} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <span className="text-xs text-muted-foreground block mb-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>Phone</span>
                  <span className="text-sm font-medium text-foreground">
                    +91 471 2590XXX
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <span className="text-xs text-muted-foreground block mb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>Follow Us</span>
              <div className="flex gap-3">
                {[
                  { icon: Linkedin, label: "LinkedIn" },
                  { icon: Instagram, label: "Instagram" },
                  { icon: Globe, label: "Website" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href="#"
                    aria-label={s.label}
                    className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                  >
                    <s.icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right form - 3/5 */}
          <div className="lg:col-span-3">
            <div className="card-clean p-8 md:p-10">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-14 h-14 bg-primary/10 mx-auto mb-5 flex items-center justify-center">
                    <Send size={22} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Message Sent
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Thank you for reaching out. We'll respond within 48 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs font-medium text-foreground block mb-2 tracking-wide uppercase" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        Name
                      </label>
                      <input
                        required
                        type="text"
                        className="w-full border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-foreground block mb-2 tracking-wide uppercase" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        Email
                      </label>
                      <input
                        required
                        type="email"
                        className="w-full border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        placeholder="you@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-foreground block mb-2 tracking-wide uppercase" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      className="w-full border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                      placeholder="How can we help?"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full justify-center">
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

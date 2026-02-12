import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

import pagesHero from "@/assets/Pages Herosection.jpeg";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    toast.success("Thank you! We'll get back to you shortly.");
    setFormData({ name: "", email: "", phone: "", message: "" });
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <Layout>
      {/* Hero Banner (IMAGE + SD8 THEME OVERLAY) */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={pagesHero}
            alt="SD8 page hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071D26]/85 via-[#0B2E39]/70 to-[#0E4B57]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/15 to-transparent" />
        </div>

        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="relative container-wide px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70 font-sans">
              Get In Touch
            </span>
            <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-serif text-white">
              Contact Us
            </h1>
            <div className="h-1 w-16 rounded-full bg-white/40 mt-6" />
            <p className="mt-6 text-lg text-white/70 font-sans max-w-2xl">
              Ready to discuss your engineering project? We'd love to hear from you.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <h2 className="text-2xl sm:text-3xl font-serif text-foreground mb-6">
                  Let's Build<br />
                  <span className="gradient-text">Together</span>
                </h2>
                <div className="engineering-divider mb-8" />
              </ScrollReveal>

              <div className="space-y-6">
                <ScrollReveal >
                  <a href="mailto:sd8econ@gmail.com" className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors group">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground font-sans">Email</p>
                      <p className="text-sm text-muted-foreground font-sans">sd8econ@gmail.com</p>
                    </div>
                  </a>
                </ScrollReveal>

                <ScrollReveal >
                  <a href="tel:+917003000496" className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors group">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground font-sans">Phone</p>
                      <p className="text-sm text-muted-foreground font-sans">+91-7003000496</p>
                    </div>
                  </a>
                </ScrollReveal>

                <ScrollReveal>
                  <div className="flex items-start gap-4 p-4 rounded-xl">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground font-sans">Office Address</p>
                      <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                        Flat No.103, Rohini Apartment,<br />
                        74/1/C Purbachal Main Road,<br />
                        Kolkata – 700078
                      </p>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal >
                  <a
                    href="https://www.linkedin.com/in/sd8-engineering-consultancy-244347308/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                      <Linkedin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground font-sans">LinkedIn</p>
                      <p className="text-sm text-muted-foreground font-sans">SD8 Engineering Consultancy</p>
                    </div>
                  </a>
                </ScrollReveal>
              </div>

              {/* Map Placeholder */}
              <ScrollReveal >
                <div className="mt-8 rounded-xl overflow-hidden border border-border">
                  <iframe
  src="https://www.google.com/maps?q=74/1,+Purbachal+Main+Rd,+Purbachal,+Haltu,+Kolkata,+West+Bengal+700078&output=embed"
  width="100%"
  height="200"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="SD8 Office Location"
  className="grayscale hover:grayscale-0 transition-all duration-500"
/>
                </div>
              </ScrollReveal>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <ScrollReveal direction="right">
                <div className="glass-card p-8 sm:p-10">
                  <h3 className="text-xl font-serif text-foreground mb-2">Send us a Message</h3>
                  <p className="text-sm text-muted-foreground font-sans mb-8">
                    Fill out the form below and our team will get back to you within 24 hours.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground font-sans mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                          className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground font-sans text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground font-sans mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                          className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground font-sans text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground font-sans mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData((p) => ({ ...p, phone: e.target.value }))}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground font-sans text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
                        placeholder="+91-XXXXXXXXXX"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground font-sans mb-2">
                        Message *
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground font-sans text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-colors resize-none"
                        placeholder="Tell us about your project requirements..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitted}
                      className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold font-sans rounded-lg bg-primary text-primary-foreground hover:bg-steel-dark transition-all duration-200 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed w-full sm:w-auto justify-center"
                    >
                      {isSubmitted ? (
                        <>
                          <CheckCircle2 className="w-4 h-4" />
                          Message Sent!
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;

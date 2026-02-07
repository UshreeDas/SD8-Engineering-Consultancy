import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, ArrowUp } from "lucide-react";
import logo from "@/assets/sd8-logo.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container-wide section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img src={logo} alt="SD8 Engineering Consultancy" className="h-14 w-auto mb-4" />
            <p className="text-sm text-accent-foreground/70 leading-relaxed font-sans mb-4">
              A professionally managed civil engineering consultancy delivering excellence in infrastructure design and planning.
            </p>
            <p className="text-xs text-accent-foreground/50 font-sans">MSME Registered | KMC Registered</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-5 font-sans text-accent-foreground/90">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", path: "/" },
                { label: "Services", path: "/services" },
                { label: "Projects", path: "/projects" },
                { label: "Clients", path: "/clients" },
                { label: "Contact Us", path: "/contact" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-accent-foreground/60 hover:text-primary transition-colors font-sans"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-5 font-sans text-accent-foreground/90">Services</h4>
            <ul className="space-y-3">
              {[
                "Highway Bridges",
                "Railway Bridges",
                "Marine Structures",
                "Metro Infrastructure",
                "Industrial Structures",
                "3D Modelling",
              ].map((service) => (
                <li key={service}>
                  <Link to="/services" className="text-sm text-accent-foreground/60 hover:text-primary transition-colors font-sans">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-5 font-sans text-accent-foreground/90">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:sd8econ@gmail.com" className="flex items-start gap-3 text-sm text-accent-foreground/60 hover:text-primary transition-colors font-sans">
                  <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                  sd8econ@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+917003000496" className="flex items-start gap-3 text-sm text-accent-foreground/60 hover:text-primary transition-colors font-sans">
                  <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                  +91-7003000496
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-accent-foreground/60 font-sans">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>
                  Flat No.103, Rohini Apartment,<br />
                  74/1/C Purbachal Main Road,<br />
                  Kolkata – 700078
                </span>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/sd8-engineering-consultancy-244347308/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-accent-foreground/60 hover:text-primary transition-colors font-sans"
                >
                  <Linkedin className="w-4 h-4 shrink-0" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-accent-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-accent-foreground/40 font-sans">
            © {new Date().getFullYear()} SD8 Engineering Consultancy. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-full border border-accent-foreground/20 hover:bg-accent-foreground/10 transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4 text-accent-foreground/60" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { useEffect } from "react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { Building, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import pagesHero from "@/assets/Pages Herosection.jpeg";

// ✅ Client Logos (from: src/assets/Client logos/)
import cemindiaLogo from "@/assets/Client logos/Cemindia Projects Limited.png";
import paharpurLogo from "@/assets/Client logos/Paharpur Cooling Towers Ltd..png";
import abciLogo from "@/assets/Client logos/ABCI Infrastructures Pvt. Ltd..png";
import rajbirLogo from "@/assets/Client logos/Rajbir Construction Pvt. Ltd..png";
import tribeniLogo from "@/assets/Client logos/Tribeni Constructions Ltd.png";
import innofiedLogo from "@/assets/Client logos/Innofied.png";

const clients = [
  {
    name: "Cemindia Projects Limited",
    desc: "Since 1931 — One of India's oldest and most respected construction companies.",
    logo: cemindiaLogo,
  },
  {
    name: "Paharpur Cooling Towers Ltd.",
    desc: "Leading manufacturer and contractor of cooling towers for power and industrial sectors.",
    logo: paharpurLogo,
  },
  {
    name: "ABCI Infrastructures Pvt. Ltd.",
    desc: "Infrastructure development company focused on road and bridge construction.",
    logo: abciLogo,
  },
  {
    name: "Rajbir Construction Pvt. Ltd.",
    desc: "Construction company specializing in water treatment and infrastructure projects.",
    logo: rajbirLogo,
  },
  {
    name: "Innofied",
    desc: "Product engineering and digital transformation company.",
    logo: innofiedLogo,
  },
  {
    name: "Tribeni Constructions Ltd",
    desc: "Specializes in turnkey civil construction, infrastructure projects, and design.",
    logo: tribeniLogo,
  },
];

const associates = [
  {
    name: "Pradipta Pal",
    role: "Principal Architect",
    org: "Archipelago",
  },
  {
    name: "Barun Ghosh",
    role: "Principal Consultant, MEP",
    org: "SM Service Consultancy",
  },
  {
    name: "Sumant Gupta",
    role: "Executive Director",
    org: "SG Infra Space Pvt. Ltd.",
  },
  {
    name: "B.N Basak",
    role: "Director",
    org: "Constell Consultants Pvt. Ltd.",
  },
  {
    name: "Saumya Banerjee",
    role: "CEO & Managing Director",
    org: "KAILASO Enterprises",
  },
];

const Clients = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      {/* Hero Banner (IMAGE + SD8 THEME OVERLAY) */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img src={pagesHero} alt="SD8 page hero" className="w-full h-full object-cover" />
          {/* SD8 theme overlay (match Home hero style) */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#071D26]/85 via-[#0B2E39]/70 to-[#0E4B57]/60" />
          {/* Vignette for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/15 to-transparent" />
        </div>

        {/* Subtle grid overlay */}
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
              Our Network
            </span>

            <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-serif text-white">
              Clients & Associates
            </h1>

            <div className="h-1 w-16 rounded-full bg-white/40 mt-6" />

            <p className="mt-6 text-lg text-white/70 font-sans max-w-2xl">
              We collaborate with leading construction companies, infrastructure developers, and specialized consultants
              to deliver world-class engineering solutions.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Clients */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-10">
              <Building className="w-6 h-6 text-primary" />
              <h2 className="text-2xl sm:text-3xl font-serif text-foreground">Our Clients</h2>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {clients.map((client, i) => (
              <ScrollReveal key={client.name} delay={i * 80}>
                {/* ✅ Same card size + professional logo area */}
                <div className="glass-card hover-lift p-8 h-full min-h-[260px] flex flex-col items-center text-center group">
                  {/* Logo container (fixed height so all cards match) */}
                  <div className="w-full h-24 flex items-center justify-center mb-5">
                    <div className="h-24 w-full flex items-center justify-center rounded-xl bg-white/60 border border-border/50 px-5">
                      <img
                        src={client.logo}
                        alt={`${client.name} logo`}
                        className="h-16 w-auto object-contain"
                        loading="eager"
                        decoding="async"
                        draggable={false}
                        style={{
                          imageRendering: "auto",
                          transform: "translateZ(0)",
                          backfaceVisibility: "hidden",
                          WebkitFontSmoothing: "antialiased",
                        }}
                      />
                    </div>
                  </div>

                  <h3 className="text-lg font-serif text-foreground mb-2">{client.name}</h3>
                  <p className="text-sm text-muted-foreground font-sans">{client.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Associates */}
      <section className="section-padding bg-muted/50">
        <div className="container-wide">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-10">
              <Users className="w-6 h-6 text-primary" />
              <h2 className="text-2xl sm:text-3xl font-serif text-foreground">Associates & Consultants</h2>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {associates.map((assoc, i) => (
              <ScrollReveal key={assoc.name} delay={i * 80}>
                <div className="glass-card hover-lift p-6 h-full">
                  <div className="w-12 h-12 rounded-full bg-steel-light flex items-center justify-center mb-4">
                    <span className="text-lg font-serif text-primary font-bold">
                      {assoc.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <h3 className="text-base font-serif text-foreground">{assoc.name}</h3>
                  <p className="text-sm font-semibold text-primary font-sans mt-1">{assoc.role}</p>
                  <p className="text-xs text-muted-foreground font-sans mt-1">{assoc.org}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={200}>
            <div className="mt-16 text-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold font-sans rounded-lg bg-primary text-primary-foreground hover:bg-steel-dark transition-all duration-200 hover:shadow-lg"
              >
                Partner With Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Clients;

// ✅ src/pages/Projects.jsx
import { useEffect } from "react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

import pagesHero from "@/assets/Pages Herosection.jpeg";

// ✅ Project Images (from: src/assets/Projects/)
import p1 from "@/assets/Projects/1.png";
import p2 from "@/assets/Projects/2.png";
import p3 from "@/assets/Projects/3.png";
import p4 from "@/assets/Projects/4.png";
import p5 from "@/assets/Projects/5.png";
import p6 from "@/assets/Projects/6.png";
import p7 from "@/assets/Projects/7.png";
import p8 from "@/assets/Projects/8.png";
import p9 from "@/assets/Projects/9.png";
import p10 from "@/assets/Projects/10.png";
import p11 from "@/assets/Projects/11.jpg";
import p12 from "@/assets/Projects/12.png";

const projects = [
  {
    id: 1,
    title: "Cable Trestle for Cooling Tower — Haldia Petrochemical Complex",
    client: "Paharpur Cooling Towers Ltd.",
    location: "HPL Link Road, Durgachak, Haldia, Purba Medinipur",
    image: p1,
  },
  {
    id: 2,
    title:
      "Staircase, Outlet & Sludge Pit — 2×800MW Ultra Supercritical Thermal Power Project",
    client: "Paharpur Cooling Towers Ltd.",
    location: "Mirzapur, Chhattisgarh",
    image: p2,
  },
  {
    id: 3,
    title: "Cooling Tower Foundation Design — Caster ICW KPO Phase II",
    client: "Paharpur Cooling Towers Ltd.",
    image: p3,
  },
  {
    id: 4,
    title: "3D Modelling & Architectural Planning — Residential Building",
    client: "Independent House Owner",
    location: "Tarakeswar, Hooghly",
    image: p4,
  },
  {
    id: 5,
    title:
      "Piling Platform Design — Shalimar Intake Jetty (30MLD Water Treatment Plant)",
    client: "Rajbir Construction Pvt. Ltd.",
    image: p5,
  },
  {
    id: 6,
    title: "Connecting Approach Road — Shalimar Intake Jetty",
    client: "Rajbir Construction Pvt. Ltd.",
    image: p6,
  },
  {
    id: 7,
    title: "Minor Bridge at km 44+500 — Assam SASEC Corridor",
    client: "ABCI Infrastructures Pvt. Ltd.",
    location: "Hailakandi-Dwarbond, Assam",
    image: p7,
  },
  {
    id: 8,
    title: "Minor Bridge at km 29+291 — Assam SASEC Corridor",
    client: "ABCI Infrastructures Pvt. Ltd.",
    location: "Hailakandi-Dwarbond, Assam",
    image: p8,
  },
  {
    id: 9,
    title: "MIDAS Model Review — Balanced Cantilever Bridge (583.6m)",
    client: "Gawar Shimla Highway Pvt. Ltd.",
    image: p9,
  },
  {
    id: 10,
    title: "Client Office & South Traffic Guard Building — Birati Metro Project",
    client: "Cemindia Projects Limited",
    image: p10,
  },
  {
    id: 11,
    title: "7×44.850m Bridge at Pathri — Uttarakhand",
    client: "Doon Infrastructure",
    location: "Hetampur, Haridwar, Uttarakhand",
    image: p11,
  },
  {
    id: 12,
    title: "Six Lane Elevated Road — Thane to NMIA",
    client: "Cemindia Projects Limited",
    location: "Thane to Navi Mumbai, Maharashtra",
    image: p12,
  },
];

function safeText(v) {
  return (v ?? "").toString().trim();
}

const Projects = () => {
  useEffect(() => window.scrollTo(0, 0), []);

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
              Our Portfolio
            </span>
            <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-serif text-white">
              Our Projects
            </h1>
            <div className="h-1 w-16 rounded-full bg-white/40 mt-6" />
            <p className="mt-6 text-lg text-white/70 font-sans max-w-2xl">
              A showcase of our engineering work across India — bridges, metro
              infrastructure, industrial structures, and architectural planning.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Projects (Image-first, full image visible, no faded look, no deliverables) */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <ScrollReveal>
            <div className="flex items-center justify-between gap-6 mb-10 flex-wrap">
              <h2 className="text-2xl sm:text-3xl font-serif text-foreground">
                Project Experience
              </h2>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold font-sans rounded-lg bg-primary text-primary-foreground hover:bg-steel-dark transition-all duration-200 hover:shadow-lg"
              >
                Discuss Your Project
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>

          {/* ✅ Modern cards: fixed card height, full image visible via object-contain */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <ScrollReveal >
                <div className="glass-card hover-lift overflow-hidden h-full flex flex-col">
                  {/* Image area (same size for all) */}
                  <div className="relative w-full h-[210px] bg-white">
                    {/* subtle top shine */}
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/30 via-transparent to-transparent" />
                    <img
                      src={p.image}
                      alt={`${p.title} preview`}
                      className="w-full h-full object-contain p-3"
                      loading="lazy"
                      decoding="async"
                      draggable="false"
                      style={{
                        imageRendering: "auto",
                        transform: "translateZ(0)",
                        filter: "contrast(1.06) saturate(1.05)", // ✅ remove “faded” look
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col gap-3 flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-base font-serif text-foreground leading-snug">
                        {p.title}
                      </h3>
                      <span className="text-xs text-muted-foreground font-sans shrink-0">
                        #{p.id}
                      </span>
                    </div>

                    <p className="text-sm font-semibold text-primary font-sans">
                      {p.client}
                    </p>

                    {!!safeText(p.location) && (
                      <div className="flex items-start gap-2 text-xs text-muted-foreground font-sans">
                        <MapPin className="w-4 h-4 mt-[2px] text-primary/80" />
                        <span className="leading-relaxed">{p.location}</span>
                      </div>
                    )}

                    {/* small accent divider */}
                    <div className="mt-auto pt-2">
                      <div className="h-px w-full bg-border/60" />
                      <div className="mt-3 flex items-center justify-between">
                        <span className="text-xs text-muted-foreground font-sans">
                          Engineering Consultancy
                        </span>
                        <span className="text-xs font-semibold text-primary font-sans">
                          SD8
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal >
            <div className="mt-16 text-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold font-sans rounded-lg bg-primary text-primary-foreground hover:bg-steel-dark transition-all duration-200 hover:shadow-lg"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;

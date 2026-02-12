import { useEffect } from "react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight, Building2, TrainFront, Waves, Factory, Ruler, Boxes, HardHat } from "lucide-react";
import { Link } from "react-router-dom";

import pagesHero from "@/assets/Pages Herosection.jpeg";

const services = [
  {
    icon: Building2,
    title: "Highway Bridges",
    items: [
      "RCC T, I, Box girder, voided slab",
      "PSC box girder, I girder, segmental box",
      "Balance cantilever & extradosed bridges",
      "Continuous bridges",
      "Steel concrete composite superstructures",
      "Pile foundation and well foundation",
    ],
  },
  {
    icon: TrainFront,
    title: "Railway Bridges",
    items: [
      "Steel concrete composite superstructures",
      "Open web, Through truss",
      "Substructure & foundation",
    ],
  },
  {
    icon: Waves,
    title: "Marine Structures",
    items: [
      "Cargo Berth & Container Terminal",
      "Back up yard & Wet Basin",
      "Passenger Jetty",
    ],
  },
  {
    icon: TrainFront,
    title: "Metro Infrastructure",
    items: [
      "Elevated metro viaduct & station building",
      "Underground metro station building",
      "Cut & cover tunnel",
    ],
  },
  {
    icon: Factory,
    title: "Industrial Structures",
    items: [
      "Factory shed & equipment support structure",
      "Cable gallery & conveyer gallery",
      "Junction tower design",
    ],
  },
  {
    icon: Ruler,
    title: "Structural Design of Buildings",
    items: [
      "Structural design of building elements",
      "Reinforcement detailing",
      "Foundation design & analysis",
    ],
  },
  {
    icon: HardHat,
    title: "Enabling Structures & Construction Methods",
    items: [
      "Marine piling platform & EOT",
      "Launching truss & mechanized shuttering",
      "Formwork & segmental erection methods",
      "Critical execution solutions",
    ],
  },
  {
    icon: Boxes,
    title: "3D Modelling & Architectural Planning",
    items: [
      "3D modelling (Google SketchUp & others)",
      "Architectural plan and layout",
      "Finish schedule & detail BOQ",
      "Cost estimation",
    ],
  },
];

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
              What We Do
            </span>

            <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-serif text-white">
              Our Services
            </h1>

            <div className="h-1 w-16 rounded-full bg-white/40 mt-6" />

            <p className="mt-6 text-lg text-white/70 font-sans max-w-2xl">
              Comprehensive civil engineering consultancy covering bridges, marine structures, metro infrastructure,
              industrial structures, and architectural planning.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <ScrollReveal >
                <div className="glass-card hover-lift p-8 h-full flex flex-col group">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-serif text-foreground mb-4">{service.title}</h3>
                  <ul className="space-y-2 flex-1">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground font-sans">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* CTA */}
          <ScrollReveal >
            <div className="mt-16 text-center">
              <p className="text-muted-foreground font-sans mb-6">
                Have a project that needs expert engineering consultancy?
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold font-sans rounded-lg bg-primary text-primary-foreground hover:bg-steel-dark transition-all duration-200 hover:shadow-lg"
              >
                Discuss Your Project
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Services;

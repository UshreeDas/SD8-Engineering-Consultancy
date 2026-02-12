import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, FolderOpen, Users } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const ctaCards = [
  {
    icon: Briefcase,
    title: "Our Services",
    desc: "From bridge engineering to metro infrastructure — explore our full range of civil engineering consultancy services.",
    link: "/services",
    label: "View Services",
  },
  {
    icon: FolderOpen,
    title: "Our Projects",
    desc: "Discover our portfolio of completed and ongoing infrastructure projects across India.",
    link: "/projects",
    label: "View Projects",
  },
  {
    icon: Users,
    title: "Our Clients",
    desc: "We work with leading construction companies and infrastructure developers.",
    link: "/clients",
    label: "View Clients",
  },
];

const CTASection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <ScrollReveal>
            <span className="section-label">Explore More</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-serif text-foreground">
              Discover What We <span className="gradient-text">Deliver</span>
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {ctaCards.map((card, i) => (
            <ScrollReveal>
              <Link
                to={card.link}
                className="group glass-card hover-lift p-8 flex flex-col items-start h-full"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <card.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-serif text-foreground mb-3">{card.title}</h3>
                <p className="text-sm text-muted-foreground font-sans leading-relaxed flex-1">{card.desc}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary font-sans group-hover:gap-3 transition-all">
                  {card.label}
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTASection;

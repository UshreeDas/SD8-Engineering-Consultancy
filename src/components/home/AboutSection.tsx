import { Target, Shield, Users, TrendingUp } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import aboutImg from "@/assets/about-engineering.jpg";

const pillars = [
  {
    icon: Target,
    title: "Construction Oriented Solutions",
    desc: "Engineering solutions that use lesser material, facilitate faster construction, and feature construction-friendly detailing.",
  },
  {
    icon: Shield,
    title: "SDG-8 Commitment",
    desc: "Focused on sustainable economic growth, full and productive employment, and decent work for all.",
  },
  {
    icon: Users,
    title: "Experienced Professionals",
    desc: "Team with hands-on construction and design experience, ensuring practical engineering solutions.",
  },
  {
    icon: TrendingUp,
    title: "Capacity Building",
    desc: "Employment generation at local level for overall economic growth and social upliftment.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <ScrollReveal>
              <span className="section-label">About Us</span>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-serif text-foreground leading-tight">
                Engineering Excellence<br />
                <span className="gradient-text">With Purpose</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="engineering-divider mt-6 mb-8" />
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <p className="text-muted-foreground font-sans leading-relaxed mb-6">
                SD8 Engineering Consultancy is a professionally managed firm, registered under Kolkata Municipal Corporation 
                and registered as MSME under Ministry of Micro, Small and Medium Enterprises, Government of India, 
                specializing in Civil Engineering Consultancy.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-muted-foreground font-sans leading-relaxed mb-8">
                Our philosophy centers on delivering excellency in quality and cost with local capability and international expertise. 
                We develop trustworthy service pools in engineering with primary focus on customer satisfaction through decent work 
                and quality delivery. Construction planning is an integral part of our service — delivering micro steps of design 
                solutions to meet the need of fast track projects.
              </p>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 gap-4">
              {pillars.map((pillar, i) => (
                <ScrollReveal key={pillar.title} delay={250 + i * 80}>
                  <div className="group p-4 rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-md bg-card">
                    <pillar.icon className="w-8 h-8 text-primary mb-3" strokeWidth={1.5} />
                    <h4 className="text-sm font-semibold font-sans text-foreground mb-1.5">{pillar.title}</h4>
                    <p className="text-xs text-muted-foreground font-sans leading-relaxed">{pillar.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Image */}
          <ScrollReveal direction="right" delay={200}>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
  src={aboutImg}
  alt="Engineering workspace"
  className="w-full h-[500px] object-cover animate-[aboutZoom_18s_ease-in-out_infinite]"
/>
              </div>
              {/* Accent card */}
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg max-w-[220px]">
                <div className="text-3xl font-serif font-bold">23+</div>
                <div className="text-sm font-sans mt-1 opacity-90">Years of Combined Leadership Experience</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

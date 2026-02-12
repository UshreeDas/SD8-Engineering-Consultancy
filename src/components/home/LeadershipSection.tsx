import { Linkedin } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

import subhadipImg from "@/assets/Subhadip Bairi.png";
import parthaImg from "@/assets/Partha Sarathi Sengupta.png";
import sudhanwaImg from "@/assets/Sudhanwa Pal.png";

const leaders = [
  {
    name: "Subhadip Bairi",
    role: "Technical Director & Head of Business",
    qualifications: "ME Struct Eng., C Eng. (UK), MICE, PMP®",
    bio: "Over 23 years of experience in Detail Engineering and Management of major transportation infrastructure projects involving port structures, bridges, flyovers, viaducts, highways, railways, and metros. Key roles at AECOM, SYSTRA, and on prestigious international projects including NEOM (Saudi Arabia) and Male–Thilaphushi Bridge (Maldives).",
    initial: "SB",
    image: subhadipImg,
  },
  {
    name: "Partha Sarathi Sengupta",
    role: "Technical Advisor (Geotechnical)",
    qualifications: "B.Tech (IITK), M.Tech Geotech (IITK), Ex-Member BIS, Ex-Chairman IGS Kolkata",
    bio: "More than 44 years of experience in civil engineering. Former Joint Executive Vice President at ITD Cementation India Ltd. Pioneer in ISO standard implementation. Expertise in geotechnical & structural works, commercial & contract management of infrastructure projects in India and abroad.",
    initial: "PS",
    image: parthaImg,
  },
  {
    name: "Sudhanwa Pal",
    role: "Principal Consultant (Building & Industrial)",
    qualifications: "BE (Const. Eng.), ME (Geotech, Gold Medallist), C Eng. (IEI), GMICE (UK)",
    bio: "Over 20 years of experience in building sector as Structural Engineer across India, Middle East, UK, and South Africa. Extensive experience in residential, commercial, industrial, and educational structures using IS, BS, Euro, SABS and ACI Codes. Proficient in STAAD-Pro, ETABS, SAFE, Revit and more.",
    initial: "SP",
    image: sudhanwaImg,
  },
];

const LeadershipSection = () => {
  return (
    <section className="section-padding bg-muted/50">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <ScrollReveal>
            <span className="section-label">Our Leadership</span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-serif text-foreground">
              Meet the <span className="gradient-text">Experts</span>
            </h2>
            <div className="engineering-divider mx-auto mt-6" />
            <p className="mt-6 text-muted-foreground font-sans">
              Our leadership team brings decades of international engineering expertise across bridges, infrastructure, and building sectors.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {leaders.map((leader, i) => (
            <ScrollReveal >
              <div className="glass-card hover-lift p-8 h-full flex flex-col">
                
                {/* PHOTO AVATAR */}
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary/30 mb-5 mx-auto shadow-md">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="text-center mb-4">
                  <h3 className="text-lg font-serif text-foreground">{leader.name}</h3>
                  <p className="text-sm font-semibold text-primary font-sans mt-1">{leader.role}</p>
                  <p className="text-xs text-muted-foreground font-sans mt-1">{leader.qualifications}</p>
                </div>

                <div className="engineering-divider-wide mx-auto mb-4" />

                <p className="text-sm text-muted-foreground font-sans leading-relaxed flex-1">
                  {leader.bio}
                </p>

              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;

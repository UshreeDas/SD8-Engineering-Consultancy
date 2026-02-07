import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Building2, Target } from "lucide-react";
import heroBridge from "@/assets/hero-bridge.jpg";
import ScrollReveal from "@/components/ScrollReveal";

const NAV_H = 80;

const HeroSection = () => {
  return (
    <section
      className="
        relative w-full overflow-hidden
        h-[calc(100svh-80px)] min-h-[calc(100svh-80px)]
        lg:h-[calc(100vh-80px)] lg:min-h-[calc(100vh-80px)]
      "
      style={{ scrollMarginTop: `${NAV_H}px` }}
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBridge}
          alt="Bridge infrastructure"
          className="w-full h-full object-cover scale-[1.03]"
        />

        {/* Brand gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071D26]/90 via-[#0B2E39]/78 to-[#0E4B57]/62" />

        {/* Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/15 to-transparent" />

        {/* 🔹 Animated grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.07] animate-[gridMove_20s_linear_infinite]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* 🔹 Soft animated glow */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-[#00A6C2]/20 blur-[120px] rounded-full animate-[pulseGlow_12s_ease-in-out_infinite]" />

        <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-[#0FD0B0]/15 blur-[120px] rounded-full animate-[pulseGlow_14s_ease-in-out_infinite]" />

        {/* 🔹 Light sweep animation */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-[120%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg] animate-[lightSweep_10s_linear_infinite]" />
        </div>
      </div>

      {/* LEFT CONTENT */}
      <div className="relative h-full w-full flex items-center px-6 sm:px-10 lg:px-16">
        <div className="max-w-3xl w-full text-left">
          <ScrollReveal>
            <h1 className="text-white font-serif font-semibold leading-[1.05]
                           text-4xl sm:text-6xl lg:text-7xl">
              SD8 Engineering Consultancy
            </h1>

            <h2 className="mt-4 font-serif italic font-semibold leading-[1.05]
                           text-[#6FD6E4] text-4xl sm:text-6xl lg:text-5xl">
              “Impossible is Possible”
            </h2>

            <p className="mt-6 max-w-2xl text-white/80 text-base sm:text-lg lg:text-xl leading-relaxed">
              A professionally managed civil engineering consultancy delivering
              construction-oriented engineering solutions across India — from
              highway bridges to metro infrastructure.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/projects"
                className="
                  inline-flex items-center gap-2 rounded-xl px-8 py-4 font-semibold
                  bg-[#118CA3] text-white hover:bg-[#0E778B]
                  transition-colors shadow-lg
                "
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/contact"
                className="
                  inline-flex items-center rounded-xl px-10 py-4 font-semibold
                  border border-white/35 text-white hover:bg-white/10
                  transition-colors
                "
              >
                Contact Us
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-8 text-white/75">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#6FD6E4]" />
                <span className="font-medium">MSME Registered</span>
              </div>

              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#6FD6E4]" />
                <span className="font-medium">KMC Licensed</span>
              </div>

              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-[#6FD6E4]" />
                <span className="font-medium">SDG-8 Focused</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* 🔹 Animation keyframes */}

    </section>
  );
};

export default HeroSection;

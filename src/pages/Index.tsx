import { useEffect } from "react";
import Layout from "@/components/Layout";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import LeadershipSection from "@/components/home/LeadershipSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <LeadershipSection />
      <CTASection />
    </Layout>
  );
};

export default Index;

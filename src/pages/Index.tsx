
import { useState, useEffect } from "react";
import Header from "@/components/portfolio/Header";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import ContactSection from "@/components/portfolio/ContactSection";
import Footer from "@/components/portfolio/Footer";
import { skillGroupsData, projectsData } from "@/components/portfolio/data";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Имитация загрузки данных
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header scrollY={scrollY} />
      <ProjectsSection projects={projectsData} />
      <SkillsSection isLoaded={isLoaded} skillGroups={skillGroupsData} />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;

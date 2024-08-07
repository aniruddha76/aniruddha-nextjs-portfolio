import HeroSection from "@/components/HeroSection";
import AboutMe from "@/components/AboutMe";
import TechStack from "@/components/TechStack";
import ProjectSection from "@/components/ProjectSection";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.9]">
      <HeroSection />
      <AboutMe />
      <TechStack />
      <ProjectSection />
      <Contact />
    </main>
  );
}

import HeroSection from "@/components/HeroSection";
import ProjectSection from "@/components/ProjectSection";
import TechStack from "@/components/TechStack";
import AboutMe from "@/components/AboutMe";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.9]">
      <HeroSection />
      <ProjectSection />
      <TechStack />
      <AboutMe />
    </main>
  );
}

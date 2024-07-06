import HeroSection from "@/components/HeroSection";
import ProjectSection from "@/components/ProjectSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.9]">
      <HeroSection />
      <ProjectSection />
    </main>
  );
}

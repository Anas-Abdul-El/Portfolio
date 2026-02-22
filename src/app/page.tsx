import HeroSection from "@/components/hero-section";
import Navbar from "@/components/Navbar";
import SkillsSection from "@/components/skills-sections";
import TechStackSection from "@/components/tech-stack-section";
import ProjectsSection from "@/components/projects-section";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-black text-white overflow-x-hidden" >
        {/* Grid pattern background */}
        <div className="  fixed inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px) linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        <div className="relative z-10 py-20 ">

          <Navbar />
          <HeroSection />
          <SkillsSection />
          <TechStackSection />
          <ProjectsSection />

        </div>
      </div>
    </>
  );
}
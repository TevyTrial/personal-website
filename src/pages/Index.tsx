import HeroSection from "@/components/HeroSection";
import SimpleProjectsSection from "@/components/SimpleProjectsSection";
import SimpleSkillsSection from "@/components/SimpleSkillsSection";
import SimpleGallerySection from "@/components/SimpleGallerySection";
import SimpleContactSection from "@/components/SimpleContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <SimpleProjectsSection />
      <SimpleSkillsSection />
      <SimpleGallerySection />
      <SimpleContactSection />
    </div>
  );
};

export default Index;

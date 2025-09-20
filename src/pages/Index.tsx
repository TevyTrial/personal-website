import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import SimpleGallerySection from "@/components/SimpleGallerySection";
import SimpleContactSection from "@/components/SimpleContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProjectsSection />
      <SimpleGallerySection />
      <SimpleContactSection />
    </div>
  );
};

export default Index;

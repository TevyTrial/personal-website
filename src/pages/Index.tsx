import HeroSection from "@/components/HeroSection";
import SimpleProjectsSection from "@/components/SimpleProjectsSection";
import SimpleGallerySection from "@/components/SimpleGallerySection";
import SimpleContactSection from "@/components/SimpleContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <SimpleProjectsSection />
      <SimpleGallerySection />
      <SimpleContactSection />
    </div>
  );
};

export default Index;

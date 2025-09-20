import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SimpleGallerySection from "@/components/SimpleGallerySection";
import SimpleContactSection from "@/components/SimpleContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div id="home">
        <HeroSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="projects">
        <ProjectsSection />
      </div>
      <div id="gallery">
        <SimpleGallerySection />
      </div>
      <div id="contact">
        <SimpleContactSection />
      </div>
    </div>
  );
};

export default Index;

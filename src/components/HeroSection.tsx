import { Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-background pt-16">
      <div className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Hero Content */}
          <div className="space-y-12 animate-fade-in">
            {/* Title */}
            <div className="space-y-4">
              <h1 className="text-2xl font-normal text-primary tracking-wide">
                WELCOME TO MY
              </h1>
              <h2 className="text-4xl md:text-5xl font-serif italic text-primary leading-tight">
                Creative Portfolio
              </h2>
            </div>
            
            {/* About Section */}
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-serif text-primary">
                About
              </h3>
              <div className="space-y-4">
                <h4 className="text-xl font-medium text-primary">
                  Hi! I am Alex Thompson.
                </h4>
                <p className="text-base text-primary leading-relaxed max-w-md">
                  I'm a Second-year student, major in Computing for Digital Media and Games BSc (Hons) at University of Sussex.
                </p>
                <p className="text-base text-primary leading-relaxed max-w-md">
                  Based in <span className="bg-accent px-1 rounded">United Kingdom</span>.
                </p>
              </div>
            </div>
            
            {/* Social Icons */}
            <div className="flex items-center gap-6 pt-4">
              <a href="#" className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center hover:scale-110 transition-transform">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center hover:scale-110 transition-transform">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center hover:scale-110 transition-transform">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Hero Image with Organic Cutout */}
          <div className="relative animate-scale-in lg:justify-self-end">
            <div className="relative w-full max-w-md mx-auto">
              {/* Organic shaped mask */}
              <div className="relative w-full h-[500px] overflow-hidden" style={{
                clipPath: "ellipse(45% 40% at 60% 45%)",
                borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%"
              }}>
                <img 
                  src={heroImage} 
                  alt="Alex Thompson - Creative Computing Student" 
                  className="w-full h-full object-cover scale-110" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
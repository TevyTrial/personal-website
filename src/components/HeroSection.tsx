import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="min-h-screen flex items-center justify-center bg-gradient-hero">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="hero-text text-gradient">
                Alex Thompson
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
                Creative Computing Student | UI/UX & Game Design
              </h2>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-foreground/80 leading-relaxed max-w-lg">Passionate about creating meaningful digital experiences through innovative design and cutting-edge technology. Currently pursuingComputing for Digital Media and Games BSc (Hons) at University of Sussex, specializing in UI/UX design, 3D modeling, and interactive media.</p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={scrollToProjects} className="creative-button group">
                  View My Work
                  <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                </Button>
                
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
              </div>
            </div>
            
            <div className="flex items-center gap-6 pt-4">
              <div className="text-sm text-muted-foreground">
                Available for internships & collaborations
              </div>
              <Button variant="ghost" size="sm" className="hover:bg-accent hover:text-accent-foreground">
                <Mail className="h-4 w-4 mr-2" />
                Get in touch
              </Button>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative animate-scale-in">
            <div className="relative">
              <img src={heroImage} alt="Creative workspace showing design and development tools" className="w-full h-[500px] object-cover rounded-2xl shadow-hover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl" />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 animate-float">
              <div className="bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium shadow-soft">
                Available Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;
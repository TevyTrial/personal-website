import { Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/heroImg.png";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-background pt-16">
      <div className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Hero Content */}
          <div className="space-y-12 animate-fade-in">
            {/* Title */}
            <div className="space-y-4">
              <h1 className="text-2xl md:text-3xl font-normal text-primary tracking-wide">
                WELCOME TO MY
              </h1>
              <h2 className="text-4xl md:text-5xl font-serif italic text-primary leading-tight">
                Portfolio Website
              </h2>
            </div>
            
            {/* About Section */}
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-serif text-primary">
                About
              </h3>
              <div className="space-y-4">
                <h4 className="text-2xl font-medium text-primary">
                  Hi! I am Tevy Ho.
                </h4>
                <p className="text-lg text-primary leading-relaxed max-w-md">
                  I'm a Third-year student, major in Computing for Digital Media and Games BSc (Hons) at University of Sussex.
                </p>
                <p className="text-lg text-primary leading-relaxed max-w-md">
                  Based in{" "}
                  <span className="relative inline-block strikethrough-text">
                    Hong Kong
                  </span>{" "}
                  <span className="bg-accent px-1 rounded">United Kingdom</span>.
                </p>
              </div>
            </div>
            
            {/* Social Icons */}
            <div className="flex items-center gap-6 pt-4">
              <a href="https://github.com/TevyTrial" className="w-10 h-10 bg-primary text-primary-foreground rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300 hover:bg-primary/90 group social-icon-github">
                <Github className="h-5 w-5 transition-colors duration-300" />
              </a>
              <a href="http://www.linkedin.com/in/tevy-ho" className="w-10 h-10 bg-primary text-primary-foreground rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300 hover:bg-primary/90 group social-icon-linkedin">
                <Linkedin className="h-5 w-5 transition-colors duration-300" />
              </a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=tevy.cl.ho@gmail.com&su=Portfolio%20Inquiry"
               target="_blank"
                rel="noopener noreferrer"
               className="w-10 h-10 bg-primary text-primary-foreground rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300 hover:bg-primary/90 group social-icon-mail">
                <Mail className="h-5 w-5 transition-colors duration-300" />
              </a>
            </div>
          </div>
          
          {/* Hero Image with Drawing Effect */}
          <div className="relative animate-scale-in lg:justify-self-end">
            <div className="relative w-full max-w-xl mx-auto">
              <img 
                src={heroImage} 
                alt="Tevy Ho" 
                className="w-full h-auto object-cover rounded-lg drawing-reveal-effect" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
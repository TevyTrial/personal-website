import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail } from "lucide-react";

const SimpleContactSection = () => {
  return (
    <section id="contact" className="bg-background py-20">
      <div className="max-w-4xl mx-auto px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">
            Get In Touch
          </h2>
          <p className="text-base text-primary max-w-2xl mx-auto">
            Available for internships, collaborations, and creative projects. 
            Let's create something amazing together.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-0 shadow-soft">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-primary">Name</label>
                  <Input 
                    placeholder="Your name" 
                    className="border-primary/20 focus:border-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-primary">Email</label>
                  <Input 
                    type="email" 
                    placeholder="your.email@example.com" 
                    className="border-primary/20 focus:border-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-primary">Message</label>
                  <Textarea 
                    placeholder="Tell me about your project..." 
                    className="border-primary/20 focus:border-primary min-h-[120px]"
                  />
                </div>
                
                <Button className="w-full bg-primary hover:bg-primary-hover text-white">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-xl font-serif text-primary">Let's Connect</h3>
              <p className="text-base text-primary leading-relaxed">
                I'm always excited to work on creative projects and collaborate with like-minded individuals. 
                Whether you have a project in mind or just want to chat about design and technology, 
                feel free to reach out.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-medium text-primary">Find me on</h4>
              <div className="flex items-center gap-4">
                <a 
                  href="#" 
                  className="flex items-center gap-3 p-3 bg-card rounded-lg shadow-soft hover:shadow-card transition-all duration-300 group"
                >
                  <Github className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-primary">GitHub</span>
                </a>
                
                <a 
                  href="#" 
                  className="flex items-center gap-3 p-3 bg-card rounded-lg shadow-soft hover:shadow-card transition-all duration-300 group"
                >
                  <Linkedin className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-primary">LinkedIn</span>
                </a>
                
                <a 
                  href="#" 
                  className="flex items-center gap-3 p-3 bg-card rounded-lg shadow-soft hover:shadow-card transition-all duration-300 group"
                >
                  <Mail className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-primary">Email</span>
                </a>
              </div>
            </div>
            
            {/* Availability */}
            <div className="bg-accent/20 p-6 rounded-lg">
              <h4 className="text-lg font-medium text-primary mb-2">Current Status</h4>
              <p className="text-primary text-sm">
                Available for internships and part-time projects starting January 2024.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleContactSection;
import { Download, Eye, Code, Palette, Video, Gamepad2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const skills = [
    {
      icon: Gamepad2,
      title: "Game Design",
      level: 85,
      description: "Creating engaging game mechanics and player experiences"
    },
    {
      icon: Palette,
      title: "UI/UX Design", 
      level: 90,
      description: "Crafting intuitive and beautiful user interfaces"
    },
    {
      icon: Code,
      title: "3D Modeling",
      level: 75,
      description: "Building detailed 3D assets and environments"
    },
    {
      icon: Video,
      title: "Animation",
      level: 80,
      description: "Bringing characters and scenes to life through motion"
    }
  ];

  const handleDownloadCV = () => {
    // Create a dummy PDF download - replace with actual CV file
    const link = document.createElement('a');
    link.href = '#'; // Replace with actual CV file path
    link.download = 'Alex_Thompson_CV.pdf';
    link.click();
  };

  const handlePreviewCV = () => {
    // Open CV in new tab - replace with actual CV file
    window.open('#', '_blank'); // Replace with actual CV file path
  };

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-8">
        <div className="space-y-16">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif text-primary">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate about creating digital experiences that combine creativity with technology
            </p>
          </div>

          {/* My Story */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-3xl font-serif text-primary">My Story</h3>
              <div className="space-y-4 text-foreground leading-relaxed">
                <p>
                  As a second-year Computing for Digital Media and Games student at the University of Sussex, 
                  I'm passionate about the intersection of technology and creativity. My journey began with a 
                  fascination for how digital worlds are built and how they can tell compelling stories.
                </p>
                <p>
                  Through my studies, I've developed expertise in game design, 3D modeling, UI/UX design, 
                  and animation. I believe that great digital experiences come from understanding both the 
                  technical foundations and the human emotions they're meant to evoke.
                </p>
                <p>
                  When I'm not coding or designing, you'll find me exploring new gaming experiences, 
                  sketching character concepts, or experimenting with the latest creative technologies.
                </p>
              </div>
            </div>

            {/* CV Section */}
            <div className="space-y-6 animate-scale-in">
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/10 border-2 border-primary/20">
                <CardContent className="space-y-6 p-0">
                  <div className="text-center space-y-2">
                    <h4 className="text-2xl font-serif text-primary">Curriculum Vitae</h4>
                    <p className="text-muted-foreground">
                      Download or preview my complete professional profile
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      onClick={handleDownloadCV}
                      className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download CV
                    </Button>
                    <Button 
                      onClick={handlePreviewCV}
                      variant="outline"
                      className="flex-1"
                    >
                      <Eye className="mr-2 h-4 w-4" />
                      Preview CV
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-12">
            <div className="text-center space-y-4 animate-fade-in">
              <h3 className="text-3xl font-serif text-primary">Skills & Expertise</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A blend of creative and technical skills developed through academic projects and personal exploration
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <Card 
                    key={skill.title} 
                    className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <h4 className="font-semibold text-primary">{skill.title}</h4>
                      </div>
                      
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {skill.description}
                      </p>
                      
                      {/* Proficiency Bar */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Proficiency</span>
                          <span className="text-primary font-medium">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-secondary rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-primary to-primary/80 h-2 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
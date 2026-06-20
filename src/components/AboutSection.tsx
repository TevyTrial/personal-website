import { Download, Eye, Code, Palette, Gamepad2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const cvUrl = `${import.meta.env.BASE_URL}Tevy-Ho_CV.pdf`;

  const skills = [
    {
      icon: Gamepad2,
      title: "Game Design",
      description: "Creating engaging game mechanics and player experiences!",
      cardHoverClass: "hover:border-[hsl(var(--aqua)/0.5)] hover:shadow-[0_10px_30px_-12px_hsl(var(--aqua)/0.35)]",
      titleHoverClass: "hover-aqua",
      iconBgClass: "bg-[hsl(var(--aqua)/0.12)]",
      iconHoverBgClass: "group-hover:bg-[hsl(var(--aqua)/0.2)]",
      iconTextClass: "text-aqua"
    },
    {
      icon: Palette,
      title: "UI/UX Design", 
      description: "Crafting intuitive, easy-to-use and beautiful user interfaces.",
      cardHoverClass: "hover:border-[hsl(var(--olive)/0.5)] hover:shadow-[0_10px_30px_-12px_hsl(var(--olive)/0.35)]",
      titleHoverClass: "hover-olive",
      iconBgClass: "bg-[hsl(var(--olive)/0.12)]",
      iconHoverBgClass: "group-hover:bg-[hsl(var(--olive)/0.2)]",
      iconTextClass: "text-olive"
    },
    {
      icon: Code,
      title: "3D Modeling",
      description: "Building detailed or cute 3D assets and environments.",
      cardHoverClass: "hover:border-[hsl(var(--golden)/0.5)] hover:shadow-[0_10px_30px_-12px_hsl(var(--golden)/0.35)]",
      titleHoverClass: "hover-golden",
      iconBgClass: "bg-[hsl(var(--golden)/0.12)]",
      iconHoverBgClass: "group-hover:bg-[hsl(var(--golden)/0.2)]",
      iconTextClass: "text-golden"
    }
  ];

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "TevyHo_CV.pdf";
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const handlePreviewCV = () => {
    window.open(cvUrl, "_blank", "noopener,noreferrer");
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
                  I'm a First Class graduate in Computing for Digital Media and Games from the University of Sussex, 
                  with a strong interest in the intersection of technology, creativity and user experience.
                </p>
                <p>
                  Throughout my degree, I developed experience across a range of creative and technical disciplines,
                  including UI/UX design, web development, 3D modelling, game design, animation and interactive media. 
                  I enjoy combining problem-solving with creative thinking to design engaging digital experiences that are both functional and meaningful.
                </p>
                <p>
                  Alongside my technical interests, I have a passion for hands-on making and creative projects. 
                  In my spare time, I enjoy arts and crafts, painting, crochet, 3D printing and other forms of creative making. 
                  These experiences have strengthened my attention to detail, visual communication skills and design thinking, 
                  while giving me a broader perspective on how ideas can be developed from concept to finished product.
                </p>
                <p>
                  I am particularly interested in opportunities that combine creativity, technology and education, 
                  and I am always keen to learn new skills, collaborate with others and contribute to projects that make a positive impact!!
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
                      Download or preview my complete profile!
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
              <h3 className="text-3xl font-serif text-primary">Skills & Things I am learning</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A blend of creative and technical skills developed through academic projects and personal exploration
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <Card 
                    key={skill.title} 
                    className={`group border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg animate-scale-in ${skill.cardHoverClass}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${skill.iconBgClass} ${skill.iconHoverBgClass}`}>
                          <Icon className={`h-6 w-6 ${skill.iconTextClass}`} />
                        </div>
                        <h4 className={`font-semibold text-primary transition-colors duration-300 ${skill.titleHoverClass}`}>
                          {skill.title}
                        </h4>
                      </div>
                      
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {skill.description}
                      </p>
                      
                     
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
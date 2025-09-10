import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Palette, 
  Video, 
  Box, 
  Gamepad2, 
  Layers3, 
  Pen,
  Code,
  Figma
} from "lucide-react";

const skills = [
  {
    icon: Pen,
    title: "UI/UX Design",
    description: "User-centered design, wireframing, prototyping, and user research",
    tools: ["Figma", "Adobe XD", "Sketch", "InVision"],
    level: 90
  },
  {
    icon: Video,
    title: "Video Editing",
    description: "Motion graphics, color grading, and storytelling through video",
    tools: ["After Effects", "Premiere Pro", "DaVinci Resolve"],
    level: 85
  },
  {
    icon: Box,
    title: "3D Modeling",
    description: "Character modeling, environment design, and realistic rendering",
    tools: ["Blender", "Maya", "3ds Max", "Substance Painter"],
    level: 80
  },
  {
    icon: Layers3,
    title: "Animation",
    description: "2D/3D animation, rigging, and motion design principles",
    tools: ["After Effects", "Blender", "Lottie", "Spine"],
    level: 75
  },
  {
    icon: Gamepad2,
    title: "Game Design",
    description: "Level design, game mechanics, and interactive storytelling",
    tools: ["Unity", "Unreal Engine", "Godot", "GameMaker"],
    level: 70
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Brand identity, poster design, and visual communication",
    tools: ["Illustrator", "Photoshop", "InDesign", "Procreate"],
    level: 88
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="bg-background">
      <div className="section-container">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
            Skills & Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Combining technical expertise with creative vision to deliver 
            compelling digital experiences across multiple disciplines.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <Card 
                key={skill.title} 
                className="project-card animate-scale-in group hover:bg-gradient-card border-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-accent transition-colors">
                    {skill.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm text-center leading-relaxed">
                    {skill.description}
                  </p>
                  
                  {/* Skill Level Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Proficiency</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-gradient-accent h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                  
                  {/* Tools */}
                  <div className="pt-2">
                    <p className="text-xs text-muted-foreground mb-2">Tools & Software:</p>
                    <div className="flex flex-wrap gap-1">
                      {skill.tools.map((tool) => (
                        <span 
                          key={tool} 
                          className="skill-tag text-xs"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* Additional Services */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8">Available for</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Freelance Projects",
              "Internships",
              "Collaborations",
              "Design Consultations",
              "Creative Partnerships"
            ].map((service) => (
              <div 
                key={service}
                className="skill-tag animate-fade-in"
              >
                {service}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
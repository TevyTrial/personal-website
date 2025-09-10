import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Video, 
  Box, 
  Layers3, 
  Pen,
  Palette
} from "lucide-react";

const skills = [
  {
    icon: Video,
    title: "Video Editing",
    description: "Motion graphics, color grading, and storytelling through video",
    level: 85
  },
  {
    icon: Pen,
    title: "UI/UX Design",
    description: "User-centered design, wireframing, prototyping, and user research",
    level: 90
  },
  {
    icon: Layers3,
    title: "Animation",
    description: "2D/3D animation, rigging, and motion design principles",
    level: 75
  },
  {
    icon: Box,
    title: "3D Design",
    description: "Character modeling, environment design, and realistic rendering",
    level: 80
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Brand identity, poster design, and visual communication",
    level: 88
  }
];

const SimpleSkillsSection = () => {
  return (
    <section id="skills" className="bg-background py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">
            Skills & Services
          </h2>
          <p className="text-base text-primary max-w-2xl mx-auto">
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
                className="group hover:shadow-card transition-all duration-300 border-0 bg-card animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <CardTitle className="text-xl text-primary group-hover:text-accent-foreground transition-colors">
                    {skill.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-primary/80 text-sm text-center leading-relaxed">
                    {skill.description}
                  </p>
                  
                  {/* Skill Level Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs text-primary/60">
                      <span>Proficiency</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-accent h-2 rounded-full transition-all duration-1000 ease-out"
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
    </section>
  );
};

export default SimpleSkillsSection;
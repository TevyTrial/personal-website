import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const categories = ["All", "Game Design", "UI/UX Design", "3D & Animation", "Graphic & Logo Design", "Video Editing"];

const projects = [
  {
    id: 1,
    title: "A Hero's Redemption",
    description: "Immersive 3D environment design with detailed texturing and atmospheric lighting for indie game project.",
    image: "src/assets/AHR_thumbnail.png",
    tags: ["Game Design", "3D Modelling","UI/UX Design"],
    category: "Game Design"
  },
  {
    id: 2,
    title: "Bloom with Dorcas",
    description: "Bloom with Dorcas is a cozy music farming game that combines plant care guidance with gamification elements to encourage users to nurture their green spaces.",
    image: "src/assets/BWD_thumbnail.png",
    tags: ["Game Design", "3D Modelling","UI/UX Design"],
    category: "Game Design"
  },
  {
    id: 3,
    title: "Lamp Story",
    description: "Complete 3D modeling and animation pipeline featuring character rigs, environmental design, and motion graphics for various media projects.",
    image: "src/assets/Lampstory_thumbnail.png",
    tags: ["3D Modelling", "Animation"],
    category: "3D & Animation"
  },
  {
    id: 4,
    title: "Property Tycoon",
    description: "Complete visual identity for tech startup including logo design and comprehensive brand guidelines.",
    image: "src/assets/Monopoly_thumbnail.png",
    tags: ["Graphic & Logo Design"],
    category: "Graphic & Logo Design"
  },
  {
    id: 5,
    title: "CoffeeWizard",
    description: "A user-friendly mobile app interface for a coffee delivery service, designed to enhance the user experience and streamline the ordering process.",
    image: "src/assets/CoffeeWizard_thumbnail.png",
    tags: ["UI/UX Design", "Graphic Design"],
    category: "UI/UX Design"
  },
  {
    id: 6,
    title: "3D Storytelling e-commerce website",
    description: "Data visualization dashboard for UX research insights focused on user behavior analytics.",
    image: "src/assets/3dWeb_thumbnail.png",
    tags: ["UI/UX Design"],
    category: "UI/UX Design"
  }
];

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const navigate = useNavigate();

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : activeFilter === "3D & Animation"
      ? projects.filter(project => project.category === "3D & Animation")
      : projects.filter(project => project.tags.includes(activeFilter));

  const handleProjectClick = (projectId: number) => {
    navigate(`/projects/${projectId}`);
  };

  return (
    <section id="projects" className="bg-background py-20">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">
            My Projects
          </h2>
          <p className="text-lg text-primary max-w-2xl mx-auto">
            A showcase of my creative work spanning multiple disciplines and technologies.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => {
            const colorClasses = [
              'project-btn-default',   // All - Default dark brown
              'project-btn-aqua',      // Game Design - Aqua
              'project-btn-olive',     // UI/UX Design - Olive
              'project-btn-golden',    // 3D & Animation - Golden
              'project-btn-orange',    // Graphic & Logo Design - Orange
              'project-btn-teal'       // Video Editing - Teal
            ];
            const colorClass = colorClasses[index % colorClasses.length];
            const isActive = activeFilter === category;
            const activeClass = isActive ? `${colorClass}-active` : '';
            
            return (
              <Button
                key={category}
                variant="outline"
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 text-sm font-medium transition-all duration-300 ${colorClass} ${activeClass}`}
                style={isActive ? (
                  colorClass === 'project-btn-default' ? {
                    // Default dark brown for "All" button
                    backgroundColor: `hsl(var(--primary))`,
                    borderColor: `hsl(var(--primary))`,
                    color: `hsl(var(--primary-foreground))`
                  } : {
                    // Solid colors for other buttons (no glow)
                    backgroundColor: `hsl(var(--${colorClass.split('-')[2]}))`,
                    borderColor: `hsl(var(--${colorClass.split('-')[2]}))`,
                    color: `white`
                  }
                ) : {}}
              >
                {category}
              </Button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id}
              className="bg-card border-0 shadow-soft overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-hover hover:-translate-y-1 animate-scale-in hover:border-colorful-teal/30 dark:hover:border-colorful-aqua/30"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => handleProjectClick(project.id)}
            >
              <div className="aspect-[4/3] overflow-hidden flex">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              
              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-serif text-primary mb-2">
                    {project.title}
                  </h3>
                  <p className="text-base text-primary leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => {
                    const tagColors = [
                      'hover:border-colorful-teal/50 hover:text-colorful-teal',
                      'hover:border-colorful-aqua/50 hover:text-colorful-aqua', 
                      'hover:border-colorful-olive/50 hover:text-colorful-olive',
                      'hover:border-colorful-golden/50 hover:text-colorful-golden',
                      'hover:border-colorful-orange/50 hover:text-colorful-orange'
                    ];
                    const tagColorClass = tagColors[tagIndex % tagColors.length];
                    
                    return (
                      <Badge 
                        key={tag} 
                        variant="outline" 
                        className={`text-xs border-primary/30 text-primary transition-all duration-300 ${tagColorClass}`}
                      >
                        {tag}
                      </Badge>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import ahrThumbnail from "@/assets/AHR_thumbnail.png";
import bwdThumbnail from "@/assets/BWD_thumbnail.png";
import lampStoryThumbnail from "@/assets/Lampstory_thumbnail.png";
import monopolyThumbnail from "@/assets/Monopoly_thumbnail.png";
import coffeeWizardThumbnail from "@/assets/CoffeeWizard_thumbnail.png";
import web3dThumbnail from "@/assets/3dWeb_thumbnail.png";
import gameBurstThumbnail from "@/assets/GameBurst_thumbnail.png";
import visualThumbnail from "@/assets/Visual_thumbnail.png";
import craftInsightThumbnail from "@/assets/CraftInsight_thumbnail.png";
import medbuddyThumbnail from "@/assets/MedBuddy_thumbnail.png";
import hkThumbnail from "@/assets/HK_thumbnail.png";

const categories = ["All", "Game Design", "UI/UX Design", "3D & Animation", "Graphic & Logo Design", "Video Editing"];

const projects = [
  {
    id: 1,
    title: "3D Storytelling e-commerce website",
    description: "Final year project building an interactive browser-based 3D experience using Three.js, bringing handmade characters to life through immersive storytelling and web-based interaction design.",
    image: web3dThumbnail,
    tags: ["UI/UX Design", "3D & Animation", "Web Design"],
    category: "3D & Animation"
  },
  {
    id: 2,
    title: "Bloom with Dorcas",
    description: "Bloom with Dorcas is a cozy music farming game that combines plant care guidance with gamification elements to encourage users to nurture their green spaces.",
    image: bwdThumbnail,
    tags: ["Game Design", "3D & Animation"],
    category: "Game Design"
  },
  {
    id: 3,
    title: "A Hero's Redemption",
    description: "Immersive 3D environment design with detailed texturing and atmospheric lighting for indie game project.",
    image: ahrThumbnail,
    tags: ["Game Design", "3D & Animation"],
    category: "Game Design"
  },
  {
    id: 4,
    title: "Property Tycoon",
    description: "Monopoly-inspired strategy game with custom UI design, property management mechanics, and competitive multiplayer decision-making.",
    image: monopolyThumbnail,
    tags: ["Game Design", "3D & Animation","Agile methodology"],
    category: "Game Design"
  },
  {
    id: 5,
    title: "CoffeeWizard",
    description: "Mobile app UI/UX concept featuring branded logo design, interactive prototypes, and an intuitive user journey for a seamless coffee ordering experience.",
    image: coffeeWizardThumbnail,
    tags: ["UI/UX Design", "Graphic & Logo Design"],
    category: "UI/UX Design"
  },
  {
    id: 6,
    title: "HK Bites 3D",
    description: "An interactive Web 3D experience showcasing iconic Hong Kong street food through real-time 3D models and animations.",
    image: hkThumbnail,
    tags: ["UI/UX Design"],
    category: "UI/UX Design"
  },
  {
    id: 7,
    title: "GameBurst",
    description: "Full broadcast graphics package for a live 25-minute multi-camera eSports show, including title sequences, lower thirds, stings, and real-time animation in After Effects and Singular.live.",
    image: gameBurstThumbnail,
    tags: ["Animation", "Graphic & Logo Design"],
    category: "Graphic & Logo Design"
  },
  {
    id: 8,
    title: "MedBuddy",
    description: "A mobile learning app prototype designed to improve medical literacy and symptom communication through interactive lessons, AI-supported speaking practice, quizzes, and gamified learning.",
    image: medbuddyThumbnail,
    tags: ["Mobile App", "UI/UX Design", "Educational Technology"],
    category: "UI/UX Design"
  },
  {
    id: 9,
    title: "CraftInsight (in progress)",
    description: "UX case study for a mobile app that helps crafters discover reliable materials, record product experiences, and read community reviews. Designed through a full UX process using Figma.",
    image: craftInsightThumbnail,
    tags: ["Graphic & Logo Design","UI/UX Design"],
    category: "Graphic & Logo Design"
  },
  {
    id: 10,
    title: "Visual Effects",
    description: "Multi-assignment VFX showcase exploring camera tracking, compositing, matte acquisition, and 3D integration using Adobe After Effects and Cinema 4D.",
    image: visualThumbnail,
    tags: ["Video Editing", "3D & Animation"],
    category: "3D & Animation"
  },
  {
    id: 11,
    title: "Lamp Story",
    description: "30-second character animation in Cinema 4D bringing a desk lamp to life through expressive keyframe animation, rigging, and storyboard-driven storytelling.",
    image: lampStoryThumbnail,
    tags: ["3D & Animation"],
    category: "3D & Animation"
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
              <div className="aspect-[3/2] overflow-hidden flex">
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
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const categories = ["All", "Game Design", "UI/UX Design", "Animation", "3D Modelling", "Graphic & Logo Design", "Video Editing"];

const projects = [
  {
    id: 1,
    title: "Fantasy Game Environment",
    description: "Immersive 3D environment design with detailed texturing and atmospheric lighting for indie game project.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
    tags: ["Game Design", "3D Modelling"],
    category: "Game Design"
  },
  {
    id: 2,
    title: "EcoTrack Mobile App",
    description: "Sustainable living tracker with gamification elements. UI/UX design focused on user engagement.",
    image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=400&h=300&fit=crop",
    tags: ["UI/UX Design"],
    category: "UI/UX Design"
  },
  {
    id: 3,
    title: "Motion Graphics Reel",
    description: "Collection of animated sequences for social media and advertising showcasing 2D animation skills.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
    tags: ["Animation", "Video Editing"],
    category: "Animation"
  },
  {
    id: 4,
    title: "Virtual Gallery 3D",
    description: "Interactive 3D art gallery built with realistic material rendering and dynamic lighting systems.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=300&fit=crop",
    tags: ["3D Modelling"],
    category: "3D Modelling"
  },
  {
    id: 5,
    title: "Brand Identity System",
    description: "Complete visual identity for tech startup including logo design and comprehensive brand guidelines.",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop",
    tags: ["Graphic & Logo Design"],
    category: "Graphic & Logo Design"
  },
  {
    id: 6,
    title: "Documentary Film Edit",
    description: "Professional video editing for environmental documentary with color grading and sound design.",
    image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=400&h=300&fit=crop",
    tags: ["Video Editing"],
    category: "Video Editing"
  },
  {
    id: 7,
    title: "UX Research Dashboard",
    description: "Data visualization dashboard for UX research insights focused on user behavior analytics.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    tags: ["UI/UX Design"],
    category: "UI/UX Design"
  },
  {
    id: 8,
    title: "Character Animation Rigs",
    description: "3D character rigs with smooth animations for game development and cinematic sequences.",
    image: "https://images.unsplash.com/photo-1551739440-5dd934d3a94a?w=400&h=300&fit=crop",
    tags: ["Animation", "3D Modelling"],
    category: "Animation"
  },
  {
    id: 9,
    title: "Poster Design Collection",
    description: "Creative poster designs for various events showcasing typography and visual composition skills.",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop",
    tags: ["Graphic & Logo Design"],
    category: "Graphic & Logo Design"
  }
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const navigate = useNavigate();

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));

  const handleProjectClick = (projectId: number) => {
    navigate(`/projects/${projectId}`);
  };

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-primary mb-6">
            My Projects
          </h1>
          <p className="text-lg text-primary max-w-2xl mx-auto">
            A showcase of my creative work spanning multiple disciplines and technologies.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? "default" : "outline"}
              onClick={() => setActiveFilter(category)}
              className="px-6 py-2 text-sm font-medium transition-all duration-200"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id}
              className="bg-card border-0 shadow-soft overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-hover hover:-translate-y-1 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => handleProjectClick(project.id)}
            >
              <div className="aspect-[4/3] overflow-hidden">
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
                  {project.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="outline" 
                      className="text-xs border-primary/30 text-primary"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Back to Home */}
        <div className="text-center mt-16">
          <Button 
            variant="outline" 
            onClick={() => navigate("/")}
            className="px-8 py-3"
          >
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
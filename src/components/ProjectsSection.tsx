import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "EcoTrack Mobile App",
    description: "Sustainable living tracker with gamification elements. UI/UX design focused on user engagement and environmental awareness.",
    image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=600&h=400&fit=crop",
    tags: ["UI/UX Design", "Mobile App", "Sustainability"],
    category: "UI/UX Design"
  },
  {
    id: 2,
    title: "Virtual Gallery 3D",
    description: "Interactive 3D art gallery built with Three.js. Features dynamic lighting and realistic material rendering.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=400&fit=crop",
    tags: ["3D Modeling", "WebGL", "Interactive Design"],
    category: "3D Design"
  },
  {
    id: 3,
    title: "Brand Identity System",
    description: "Complete visual identity for a tech startup including logo, color palette, and brand guidelines.",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&h=400&fit=crop",
    tags: ["Branding", "Logo Design", "Visual Identity"],
    category: "Graphic Design"
  },
  {
    id: 4,
    title: "Motion Graphics Reel",
    description: "Collection of animated sequences for social media and advertising. Showcasing 2D animation and video editing skills.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    tags: ["Motion Graphics", "Video Editing", "Animation"],
    category: "Animation"
  },
  {
    id: 5,
    title: "Game Environment Design",
    description: "Fantasy game environment with detailed texturing and atmospheric lighting. Created for indie game project.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop",
    tags: ["Game Design", "3D Environment", "Texturing"],
    category: "Game Design"
  },
  {
    id: 6,
    title: "UX Research Dashboard",
    description: "Data visualization dashboard for UX research insights. Focus on user behavior analytics and conversion optimization.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    tags: ["UX Research", "Data Visualization", "Dashboard"],
    category: "UI/UX Design"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-background-alt">
      <div className="section-container">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my creative work spanning UI/UX design, 3D modeling, 
            animation, and interactive experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="project-card animate-scale-in group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Badge variant="secondary" className="bg-white/90 text-black">
                    {project.category}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="outline" 
                      className="text-xs border-accent/30 text-accent-foreground"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-2 pt-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    <ExternalLink className="h-3 w-3 mr-2" />
                    Live Demo
                  </Button>
                  <Button size="sm" variant="ghost">
                    <Github className="h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="creative-button">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
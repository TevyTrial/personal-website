import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

const projectData = {
  1: {
    title: "Fantasy Game Environment",
    category: "Game Design",
    description: "An immersive 3D environment design created for an indie fantasy RPG. This project showcases detailed texturing, atmospheric lighting, and environmental storytelling through visual design.",
    fullDescription: "This project involved creating a complete game environment from concept to final implementation. Starting with mood boards and concept sketches, I developed a cohesive visual style that supports the game's narrative. The environment features dynamic lighting systems, detailed texture work, and optimized geometry for real-time rendering.",
    images: [
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551739440-5dd934d3a94a?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800&h=600&fit=crop"
    ],
    tags: ["Game Design", "3D Modelling"],
    tools: ["Blender", "Unity", "Substance Painter", "Photoshop"],
    duration: "3 months",
    role: "Environment Artist & Designer"
  },
  2: {
    title: "EcoTrack Mobile App",
    category: "UI/UX Design",
    description: "A sustainable living tracker with gamification elements, designed to encourage eco-friendly habits through engaging user experience design.",
    fullDescription: "EcoTrack is a comprehensive mobile application designed to help users track and improve their environmental impact. The design process included extensive user research, wireframing, prototyping, and usability testing. The app features a clean, intuitive interface with gamification elements to motivate users toward sustainable behaviors.",
    images: [
      "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=600&fit=crop"
    ],
    tags: ["UI/UX Design"],
    tools: ["Figma", "Adobe XD", "Principle", "InVision"],
    duration: "2 months",
    role: "UI/UX Designer"
  },
  3: {
    title: "Motion Graphics Reel",
    category: "Animation",
    description: "A collection of animated sequences created for social media campaigns and advertising, showcasing 2D animation and motion design skills.",
    fullDescription: "This motion graphics reel demonstrates proficiency in creating engaging animated content for various media platforms. Each piece was designed with specific target audiences and brand guidelines in mind, incorporating smooth transitions, dynamic typography, and compelling visual narratives.",
    images: [
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=600&fit=crop"
    ],
    tags: ["Animation", "Video Editing"],
    tools: ["After Effects", "Premiere Pro", "Cinema 4D", "Illustrator"],
    duration: "4 months",
    role: "Motion Designer & Animator"
  }
};

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectData[Number(id) as keyof typeof projectData];

  const handleBackToProjects = () => {
    navigate("/");
    // Use setTimeout to ensure navigation completes before scrolling
    setTimeout(() => {
      const projectsSection = document.getElementById("projects");
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: "instant" });
      }
    }, 100);
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-serif text-primary mb-4">Project Not Found</h1>
          <Button onClick={handleBackToProjects}>
            Back to Projects
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="max-w-4xl mx-auto px-8">

        {/* Project Header */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-primary border-primary/30">
                {tag}
              </Badge>
            ))}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-serif text-primary mb-4">
            {project.title}
          </h1>
          
          <p className="text-lg text-primary leading-relaxed mb-8">
            {project.description}
          </p>

          {/* Project Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-card border-0 shadow-soft">
              <CardContent className="p-6">
                <h3 className="font-serif text-primary mb-2">Duration</h3>
                <p className="text-primary">{project.duration}</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-0 shadow-soft">
              <CardContent className="p-6">
                <h3 className="font-serif text-primary mb-2">Role</h3>
                <p className="text-primary">{project.role}</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-0 shadow-soft">
              <CardContent className="p-6">
                <h3 className="font-serif text-primary mb-2">Tools</h3>
                <p className="text-primary">{project.tools.join(", ")}</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Main Image */}
        <div className="aspect-[16/10] rounded-lg overflow-hidden shadow-soft mb-8">
          <img 
            src={project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Project Description */}
        <Card className="bg-card border-0 shadow-soft mb-8">
          <CardContent className="p-8">
            <h2 className="text-2xl font-serif text-primary mb-6">Project Overview</h2>
            <p className="text-primary leading-relaxed text-lg">
              {project.fullDescription}
            </p>
          </CardContent>
        </Card>

        {/* Additional Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {project.images.slice(1).map((image, index) => (
            <div key={index} className="aspect-[4/3] rounded-lg overflow-hidden shadow-soft">
              <img 
                src={image}
                alt={`${project.title} ${index + 2}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <Button className="px-6 py-3">
            <ExternalLink className="h-4 w-4 mr-2" />
            Live Demo
          </Button>
          <Button variant="outline" className="px-6 py-3">
            <Github className="h-4 w-4 mr-2" />
            View Code
          </Button>
        </div>

        {/* Back Button - Bottom Left */}
        <div className="flex justify-start">
          <Button 
            variant="outline" 
            onClick={handleBackToProjects}
            className="px-6 py-3"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Projects
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useLayoutEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import AHR1 from "@/assets/projects/AHR1.png";
import AHR2 from "@/assets/projects/AHR2.png";
import AHR3 from "@/assets/projects/AHR3.png";
import AHR4 from "@/assets/projects/AHR4.png";
import AHR5 from "@/assets/projects/AHR5.png";
import BWD1 from "@/assets/projects/BWD1.png";
import BWD2 from "@/assets/projects/BWD2.png";
import BWD3 from "@/assets/projects/BWD3.png";
import BWD4 from "@/assets/projects/BWD4.png";
import BWD5 from "@/assets/projects/BWD5.png";

const projectData = {
  1: {
    title: "A Hero's Redemption",
    category: "Game Design",
    description: "Our game is a rogue-like RPG. Players control a fallen hero who must descend into a dangerous dungeon to rescue a kidnapped princess and defeat the Demon Lord. ",
    fullDescription: "It features fast-paced combat, 2 levels progression-based gameplay, and hidden secrets to explore. To survive, players must collect loot from treasure chests and equip better weapons and armor to restore the hero's strength. The dungeon also has hidden secrets for players to discover. With AI enemies that adapt to player strategies, the game offers a challenging and rewarding experience for fans of the rogue-like genre.",
    images: [AHR1, AHR2, AHR3, AHR4, AHR5],
    tags: ["Game Design", "3D Modelling","UI/UX Design"],
    tools: ["Unity", "C#", "Figma"],
    duration: "10 months",
    role: "Environment Artist & Designer",
    videoUrl: "https://youtu.be/1lPwvhXLD8s?si=F9fiCA_3-EOD5SWk",
    codeRepo: "https://github.com/vibecoding/a-heros-redemption"
  },

  2: {
    title: "Bloom with Dorcas",
    category: "Game Design",
    description: "Bloom with Dorcas is a music gardening game that combines plant care guidance with gamification elements to encourage users to nurture their green spaces.",
    fullDescription: "EcoTrack is a comprehensive mobile application designed to help users track and improve their environmental impact. The design process included extensive user research, wireframing, prototyping, and usability testing. The app features a clean, intuitive interface with gamification elements to motivate users toward sustainable behaviors.",
    images: [ BWD1, BWD2, BWD3, BWD4, BWD5],
    tags: ["Game Design", "3D Modelling","UI/UX Design"],
    tools: ["Figma", "Adobe XD", "Principle", "InVision"],
    duration: "6 months",
    role: "All-round Designer",
    videoUrl: "https://youtu.be/PNwZzf_AkXY?si=IW8M5osAHhRyIluE",
    codeRepo: "https://github.com/TevyTrial/Bloom-With-Dorcas.git"
  },
  3: {
    title: "Lamp Story",
    category: "3D & Animation",
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
    role: "Motion Designer & Animator",
    videoUrl: undefined,
    codeRepo: undefined
  },
  4: {
    title: "Property Tycoon",
    category: "Graphic & Logo Design",
    description: "A comprehensive brand identity system for a fictional company, including logo design, color palette, and typography guidelines.",
    fullDescription: "This brand identity system was developed to establish a strong visual presence for the company. It includes a versatile logo design, a carefully selected color palette, and consistent typography that reflects the brand's personality and values.",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop"
    ],
    tags: ["Graphic Design", "Logo Design"],
    tools: ["Adobe Illustrator", "Adobe Photoshop", "Figma"],
    duration: "6 months",
    role: "UI/UX Designer & Programmer",
    videoUrl: undefined,
    codeRepo: "https://github.com/vvlolicon/software_asm_project.git"
  },
  5: {
    title: "CoffeeWizard",
    category: "UI/UX Design",
    description: "A user-friendly mobile app interface for a coffee delivery service, designed to enhance the user experience and streamline the ordering process.",
    fullDescription: "This mobile app interface was designed to provide a seamless and enjoyable user experience for a coffee delivery service. The design focuses on intuitive navigation, visually appealing aesthetics, and efficient ordering processes to enhance customer satisfaction.", 
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop"
    ],  
    tags: ["UI/UX Design", "Graphic Design"],
    tools: ["Procreate", "Adobe XD","Canva"],
    duration: "3 months",
    role: "UI/UX Designer",
    videoUrl: undefined,
    codeRepo: undefined
  }
};

const getYouTubeEmbedUrl = (url: string) => {
  const videoIdMatch = url.match(/(?:https?:\/\/)?(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-]+)/);
  return videoIdMatch ? `https://www.youtube.com/embed/${videoIdMatch[1]}` : null;
}

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectData[Number(id) as keyof typeof projectData];

useLayoutEffect(() => {
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}, [id]);

  const handleBackToProjects = () => {
    navigate("/");
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

<Card className="bg-card border-0 shadow-soft mb-8">
  <CardContent className="p-8">
    <h2 className="text-2xl font-serif text-primary mb-6">Project Overview</h2>
    <p className="text-primary leading-relaxed text-lg mb-6">
      {project.fullDescription}
    </p>
    
    {/* YouTube Video */}
    {project.videoUrl && (
      <div className="mt-6">
        <h3 className="text-xl font-serif text-primary mb-4">Gameplay Video</h3>
        <div className="aspect-video rounded-lg overflow-hidden shadow-soft">
          <iframe
            width="100%"
            height="100%"
            src={getYouTubeEmbedUrl(project.videoUrl) || ''}
            title={`${project.title} Gameplay`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </div>
    )}
  </CardContent>
</Card>
        {/* Additional Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {project.images.slice(1).map((image, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-soft">
              <img 
                src={image}
                alt={`${project.title} ${index + 2}`}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        {project.codeRepo && (
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Button 
              variant="default" 
              className="px-6 py-3"
              onClick={() => window.open(project.codeRepo, '_blank')}
            >
              <Github className="h-4 w-4 mr-2" />
              View Code
            </Button>
          </div>
        )}

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
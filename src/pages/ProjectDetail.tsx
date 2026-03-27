import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useLayoutEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

//#region Project Images
import AHR1 from "@/assets/projects/AHR/AHR1.png";
import AHR2 from "@/assets/projects/AHR/AHR2.png";
import AHR3 from "@/assets/projects/AHR/AHR3.png";
import AHR4 from "@/assets/projects/AHR/AHR4.png";
import AHR5 from "@/assets/projects/AHR/AHR5.png";
import AHR6 from "@/assets/projects/AHR/AHR6.png";
import AHR7 from "@/assets/projects/AHR/AHR7.png";

import BWD1 from "@/assets/projects/BWD/BWD1.png";
import BWD2 from "@/assets/projects/BWD/BWD2.png";
import BWD3 from "@/assets/projects/BWD/BWD3.png";
import BWD4 from "@/assets/projects/BWD/BWD4.png";
import BWD5 from "@/assets/projects/BWD/BWD5.png";

import lamp2 from "@/assets/projects/lamp/lamp2.jpg";
import lamp3 from "@/assets/projects/lamp/lamp3.jpg";
import lamp4 from "@/assets/projects/lamp/lamp4.jpg";
import lamp5 from "@/assets/projects/lamp/lamp5.jpg";
import lamp7 from "@/assets/projects/lamp/lamp7.png";
import lamp8 from "@/assets/projects/lamp/lamp8.png";
import lamp9 from "@/assets/projects/lamp/lamp9.png";

import PT1 from "@/assets/Monopoly_thumbnail.png";
import PT2 from "@/assets/projects/PT/PT2.png";
import PT3 from "@/assets/projects/PT/PT3.png"; 
import PT4 from "@/assets/projects/PT/PT4.png";
import PT5 from "@/assets/projects/PT/PT5.png";
import PT6 from "@/assets/projects/PT/PT6.png"; 
import PT7 from "@/assets/projects/PT/PT7.png";
import PT8 from "@/assets/projects/PT/PT8.png";
import PT9 from "@/assets/projects/PT/PT9.png";

import CW1 from "@/assets/projects/CW/CW1.png";
import CW2 from "@/assets/projects/CW/CW2.mp4";
import CW3 from "@/assets/projects/CW/CW3.mp4";
import CW4 from "@/assets/projects/CW/CW4.mp4";
import CW5 from "@/assets/projects/CW/CW5.mp4";

import GB1 from "@/assets/projects/GB/GB1.mp4";
import GB2 from "@/assets/projects/GB/GB2.mp4";
import GB3 from "@/assets/projects/GB/GB3.mp4";
import GB4 from "@/assets/projects/GB/GB4.mp4";
import GB5 from "@/assets/projects/GB/GB5.mp4";
import GB6 from "@/assets/projects/GB/GB6.mp4";
import GB7 from "@/assets/projects/GB/GB7.mp4";

import CI1 from "@/assets/projects/CI/CI1.png";
import CI2 from "@/assets/projects/CI/CI2.png";
import CI3 from "@/assets/projects/CI/CI3.png";
import CI4 from "@/assets/projects/CI/CI4.png";
import CI5 from "@/assets/projects/CI/CI5.png";
import CI6 from "@/assets/projects/CI/CI6.png";
import CI7 from "@/assets/projects/CI/CI7.png";
import CI8 from "@/assets/projects/CI/CI8.png";

import VFX from "@/assets/Visual_thumbnail.png";
import VFX1 from "@/assets/projects/VFX/VFX1.mp4";
import VFX2 from "@/assets/projects/VFX/VFX2.mp4";
import VFX3 from "@/assets/projects/VFX/VFX3.mp4";
import VFX4 from "@/assets/projects/VFX/VFX4.mp4";
import VFX5 from "@/assets/projects/VFX/VFX5.mp4";
import VFX6 from "@/assets/projects/VFX/VFX6.mp4";
import VFX7 from "@/assets/projects/VFX/VFX7.png";
import VFX8 from "@/assets/projects/VFX/VFX8.png";

import FYP1 from "@/assets/projects/FYP/FYP1.mp4";
import FYP2 from "@/assets/projects/FYP/FYP2.mp4";
import FYP3 from "@/assets/projects/FYP/FYP3.png";
import FYP4 from "@/assets/projects/FYP/FYP4.png";
import FYP5 from "@/assets/projects/FYP/FYP5.png";

// #endregion


const projectData = {
  1: {
    title: "A Hero's Redemption",
    category: "Game Design",
    description: "Rogue-like action RPG built in a team of 5 using Unity, where I led all environment building, contributed to UI design, and assisted in level design coding to create an immersive multi-level dungeon experience.",
    fullDescription: "It features fast-paced combat, 2 levels progression-based gameplay, and hidden secrets to explore. To survive, players must collect loot from treasure chests and equip better weapons and armor to restore the hero's strength. The dungeon also has hidden secrets for players to discover. With AI enemies that adapt to player strategies, the game offers a challenging and rewarding experience for fans of the rogue-like genre.",
    images: [AHR1, AHR2, AHR3, AHR4, AHR5, AHR6, AHR7],
    tags: ["Game Design", "3D Modelling","UI/UX Design"],
    tools: ["Unity", "C#"],
    duration: "10 months",
    role: "Environment Artist & Designer",
    videoUrl: "https://youtu.be/1lPwvhXLD8s?si=F9fiCA_3-EOD5SWk",
    codeRepo: "https://github.com/vvlolicon/software_asm_project"
  },

  2: {
    title: "Bloom with Dorcas",
    category: "Game Design",
    description: "Solo-developed cozy farming game built entirely in Unity with C#, character rigging via Mixamo and a music system where every harvest adds a new layer to a living musical composition.",
    fullDescription: "Bloom with Dorcas is a cozy music-based farming game inspired by titles such as Harvest Moon, Stardew Valley, and Mutazione. Players take control of Dorcas, who has been left in charge of a small farm while Grandma travels away. Through daily farming activities such as planting, watering, and harvesting crops, players gradually develop the farm while discovering their own rhythm within the peaceful environment."+
    "\n\nThe gameplay combines simple farming mechanics with a musical system. Each crop produces a unique musical instrument when it becomes ready to harvest, such as piano, drums, bass, or violin. As more crops grow across the farm, these sounds gradually form a natural musical composition. In addition, every season features its own background music, allowing the atmosphere of the farm to evolve throughout the year."+
    "\n\nBy blending farming mechanics with sound and seasonal change, the game creates a relaxing and reflective experience. The gameplay encourages players to slow down, explore routines, and watch both the farm and Dorcas grow over time. ",
    images: [ BWD1, BWD2, BWD3, BWD4, BWD5],
    tags: ["Game Design", "3D Modelling","UI/UX Design"],
    tools: ["Unity", "Figma","Canva", "C#","Suno.ai"],
    duration: "6 months",
    role: "All-round Designer",
    videoUrl: "https://youtu.be/PNwZzf_AkXY?si=IW8M5osAHhRyIluE",
    codeRepo: "https://github.com/TevyTrial/Bloom-With-Dorcas.git"
  },
  3: {
    title: "Lamp Story",
    category: "3D & Animation",
    description: "Solo Cinema 4D animation project where I modelled, rigged, and animated a expressive desk lamp from scratch, planning the entire sequence through hand-drawn storyboards to bring the character to life through movement.",
    fullDescription: "Lamp Story is a short 30-second animation created using Cinema 4D. In this project, I modelled a desk lamp inspired by real-life references and rigged it so it could move in a character-like way. As this was my first time using Cinema 4D, the project helped me understand the basics of keyframe animation, timing, and simple rig controls. The goal was to make the lamp feel expressive and alive through movement, even without dialogue or complex characters. By planning the animation with a storyboard, I was able to organise the sequence of actions and create a clear flow for the final animation. ",
    images: [lamp9, lamp2, lamp3, lamp4, lamp5, lamp7, lamp8],
    tags: ["Animation", "Video Editing"],
    tools: ["After Effects", "Premiere Pro", "Cinema 4D", "Illustrator"],
    duration: "2 months",
    role: "3D Modeler & Animator",
    videoUrl: "https://youtu.be/AoGzO_OO6dk?si=-2iYCfCVcFqjcCNL",
    codeRepo: undefined
  },
  4: {
    title: "Property Tycoon",
    category: "Graphic & Logo Design",
    description: "Monopoly-inspired strategy game developed in a team of 6 using C#, where I led UI design and championed agile methodology, contributing to requirements analysis, user diagrams, and testing as part of a Software Engineering coursework.",
    fullDescription: "Property Tycoon is a Monopoly-inspired strategy game where players buy, manage, and develop properties while competing to build the most successful real estate empire. The project focuses on game mechanics, UI design, and player decision-making, creating an engaging board-game style experience that combines strategy, risk management, and interactive gameplay. \n\n*It is also a final project of the Software Engineering Module ",
    images: [PT1, PT2, PT5, PT3, PT4, PT6, PT7, PT8, PT9],
    tags: ["Graphic Design", "Logo Design"],
    tools: ["Adobe Illustrator", "Adobe Photoshop", "Figma"],
    duration: "6 months",
    role: "UI/UX Designer & Programmer",
    videoUrl: "https://youtu.be/B1oYu-ej5_A?si=fYomIFW9zUCcKPK0",
    codeRepo: "https://github.com/vvlolicon/software_asm_project.git"
  },
  5: {
    title: "CoffeeWizard",
    category: "UI/UX Design",
    description: "Team-based mobile app project where I led UI/UX design using Adobe XD for the first time, crafting the app's logo, layout, and interactive prototypes, alongside filming an advertisement for the fictional brand.",
    fullDescription: "CoffeeWizard is a fictional mobile app concept that allows users to customise and order coffee anytime and anywhere, with the idea that their drink appears instantly. The project focused on designing an engaging and user-friendly interface for a coffee ordering experience. I designed the app’s logo, layout, typography, and icons, and created interactive prototypes to simulate how users would navigate the app. Through this project, I strengthened my UI design and user experience skills, learning how to create visually appealing interfaces while keeping the user journey clear, intuitive, and realistic. ", 
    images: [CW1, CW2, CW3, CW4, CW5],  
    tags: ["UI/UX Design", "Graphic Design"],
    tools: ["Procreate", "Adobe XD","Canva"],
    duration: "3 months",
    role: "UI/UX Designer",
    videoUrl: undefined,
    codeRepo: undefined
  },
  6: {
    title: "3D Storytelling e-commerce website",
    category: "UI/UX Design",
    description: "Solo final year project building an interactive browser-based 3D experience using Three.js, with original characters sculpted in Nomad Sculpt and modelled for the web, combining 3D storytelling and UX design to bring a series of handmade sheep dolls to life digitally.",
    fullDescription: "This project is my Final Year Project, where I am developing a playable and interactive 3D storytelling website inspired by a series of handmade sheep dolls. The aim of the project is to bring these characters to life in a digital space, allowing visitors to explore the story and interact with the characters in a more engaging way than a traditional website. The dolls are used as references for creating 3D models, helping to preserve their handmade charm while translating them into a digital environment."+
    "\n\nThe website is currently being developed using Three.js to create interactive 3D scenes directly in the browser. Users will be able to explore the environment, interact with characters, and experience the story through visual elements and small interactive moments. This project combines my interests in 3D modelling, storytelling, and user experience design, and explores how web technology can be used to create immersive and meaningful digital experiences. The project is currently in progress, with ongoing work on 3D assets, interaction design. ",
    images: [FYP1, FYP2, FYP3, FYP4, FYP5],
    tags: ["UI/UX Design", "Data Visualization"],
    tools: ["Blender","Three.js"],
    duration: "Ongoing",
    role: "3D modeller, Programmer, UX Designer",
    videoUrl: undefined,
    codeRepo: "https://github.com/TevyTrial/3DPortfolioWebsite"
  },  
  7: {
    title: "GameBurst",
    category: "Graphic & Logo Design",
    description: "Led the complete broadcast graphics package for a live 25-minute multi-camera eSports show as part of a two-person graphics team, maintaining a consistent colour palette and brand identity across title sequences, lower thirds, stings, and real-time animations in After Effects and Singular.live.",
    fullDescription: "GameBurst was a live 25-minute multi-camera eSports-themed TV show where I designed the complete graphics package for the broadcast. This included creating the title sequence, lower thirds, full-screen graphics, stings, and end credits, as well as animation used during the live production using After Effects, Singular.live . The show also featured two main sections, RageQuit and CozyCorner, each with its own visual style to match the segment’s tone. Working on this project gave me hands-on experience in a live production gallery environment and helped me understand the importance of timing, coordination, and clear visual communication in broadcast production, as well as planning graphics to fit within a production schedule. ",
    images: [GB1, GB2, GB3, GB4, GB7, GB6, GB5],
    tags: ["Animation", "Graphic & Logo Design"],
    tools: ["After Effects", "Adobe Illustrator", "Blender"],
    duration: "6 months",
    role: "Animator, Graphic Designer",
    videoUrl: undefined,
    codeRepo: undefined
  },
  8: {
    title: "Visual Effects",
    category: "Video Editing",
    description: "Solo VFX module exploring how real footage and computer-generated elements combine, using Adobe After Effects and Cinema 4D to develop practical skills in compositing, camera tracking, and matte acquisition across three assignments.",
    fullDescription: "This projects showcases work completed in the Visual Effects module, which focuses on creating and manipulating video using professional visual effects techniques. Across three assignments, I explored motion-based compositing that combines real footage with computer-generated elements. Using Adobe After Effects and Cinema 4D, I experimented with techniques such as matte acquisition, colour correction, camera tracking, compositing, and motion graphics. Through these projects, I developed practical skills in integrating 3D elements with video footage and learned how visual effects can enhance storytelling and create more engaging visual experiences. ",
    images: [VFX, VFX1, VFX2, VFX3, VFX4, VFX5, VFX6, VFX7, VFX8],
    tags: ["Visual Effects", "Color Grading"],
    tools: ["After Effects", "DaVinci Resolve", "Blender"],
    duration: "4 months",
    role: "Visual Effects Artist",
    videoUrl: undefined,
    codeRepo: undefined
  },
  9: {
    title: "CraftInsight",
    category: "UI/UX Design",
    description: "CraftInsight is a mobile app UX case study developed as part of the Google UX Design course. The project focuses on helping crafters find high-quality crafting materials and make better purchasing decisions. Many crafters struggle to choose the right yarns and supplies because product descriptions do not always match the real experience. The idea behind CraftInsight is to create a platform where users can record their own product experiences and view honest reviews from other crafters before buying materials.",
    fullDescription: "Many crafters struggle to choose the right yarns and supplies because product descriptions do not always match the real experience. The idea behind CraftInsight is to create a platform where users can record their own product experiences and view honest reviews from other crafters before buying materials."+
    "\n\nDuring this project, I followed a full UX design process for the first time, including defining the user problem, creating user personas and journey maps, developing wireframes, and building a high-fidelity prototype using Figma. The goal is to design a simple and user-friendly interface where crafters can easily search for materials, read reviews, and keep personal records of products they have used. The project is currently in progress, and it has helped me develop a deeper understanding of user-centred design and UX research methods.",
    
    images: [CI4, CI1, CI2, CI8, CI3, CI5, CI6, CI7],
    tags: ["UI/UX Design", "Data Visualization"],
    tools: ["Figma"],
    duration: "Ongoing",
    role: "UI/UX Designer",
    videoUrl: undefined,
    codeRepo: undefined
  }
};

const getYouTubeEmbedUrl = (url: string) => {
  const videoIdMatch = url.match(/(?:https?:\/\/)?(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-]+)/);
  return videoIdMatch ? `https://www.youtube.com/embed/${videoIdMatch[1]}` : null;
}

const isVideoFile = (src: string) => /.(mp4|webm|ogg)$/i.test(src);

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectData[Number(id) as keyof typeof projectData];

  useLayoutEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    const previousHtmlScrollBehavior = html.style.scrollBehavior;
    const previousBodyScrollBehavior = body.style.scrollBehavior;

    // Override global smooth scrolling so route changes jump instantly.
    html.style.scrollBehavior = "auto";
    body.style.scrollBehavior = "auto";
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    return () => {
      html.style.scrollBehavior = previousHtmlScrollBehavior;
      body.style.scrollBehavior = previousBodyScrollBehavior;
    };
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
        <div className="aspect-[16/9] rounded-lg overflow-hidden shadow-soft mb-8">
          {isVideoFile(project.images[0]) ? (
            <video 
              src={project.images[0]}
              className="w-full h-full object-cover"
              controls
              muted
              playsInline
              preload="metadata"
            />
          ) : (
            <img 
              src={project.images[0]}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          )}
        </div>

<Card className="bg-card border-0 shadow-soft mb-8">
  <CardContent className="p-8">
    <h2 className="text-2xl font-serif text-primary mb-6">Project Overview</h2>
    <p className="text-primary leading-relaxed text-lg mb-6 whitespace-pre-line">
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
              {isVideoFile(image) ? (
                <video 
                  src={image}
                  className="w-full h-full object-cover"
                  controls
                  muted
                  playsInline
                  preload="metadata"
                />
              ) : (
                <img 
                  src={image}
                  alt={`${project.title} ${index + 2}`}
                  className="w-full h-auto object-contain"
                />
              )}
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
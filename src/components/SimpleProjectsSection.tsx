import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    id: 1,
    title: "3D Modelling & Animation",
    subtitle: "Using Cinema4D",
    images: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1551739440-5dd934d3a94a?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop"
    ],
    mainImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=400&fit=crop",
    description: [
      "Modelled from scratch to closely replicate the reference.",
      "The springs move smoothly with the rig."
    ],
    details: [
      "The work received high praise for its detail and performance, the overall proportions are spot on.",
      "Overall, this project shows my dedication to clear, precise modelling and rigging."
    ]
  },
  {
    id: 2,
    title: "UI/UX Design Projects",
    subtitle: "Mobile & Web Interfaces",
    images: [
      "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop"
    ],
    mainImage: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=600&h=400&fit=crop",
    description: [
      "User-centered design approach with focus on accessibility.",
      "Wireframing and prototyping using Figma and Adobe XD."
    ],
    details: [
      "Created comprehensive design systems and style guides.",
      "Conducted user research and usability testing sessions."
    ]
  },
  {
    id: 3,
    title: "Motion Graphics & Animation",
    subtitle: "Video Content Creation",
    images: [
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop"
    ],
    mainImage: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    description: [
      "2D and 3D animation sequences for various media.",
      "Motion graphics for social media and advertising."
    ],
    details: [
      "Proficient in After Effects, Premiere Pro, and Blender.",
      "Created engaging visual narratives with smooth transitions."
    ]
  }
];

const SimpleProjectsSection = () => {
  return (
    <section id="projects" className="bg-background-alt py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">
            Featured Projects
          </h2>
          <p className="text-base text-primary max-w-2xl mx-auto">
            A showcase of my creative work spanning UI/UX design, 3D modeling, 
            animation, and interactive experiences.
          </p>
        </div>
        
        <div className="space-y-16">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="bg-card border-0 shadow-soft overflow-hidden animate-scale-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Project Content */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-serif text-primary mb-2">
                        {project.title}
                      </h3>
                      <p className="text-lg text-primary font-medium">
                        {project.subtitle}
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      {project.description.map((desc, i) => (
                        <p key={i} className="text-base text-primary leading-relaxed flex items-start">
                          <span className="mr-3 mt-2 w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                          {desc}
                        </p>
                      ))}
                    </div>
                    
                    <div className="space-y-4 pt-4">
                      {project.details.map((detail, i) => (
                        <p key={i} className="text-base text-primary leading-relaxed flex items-start">
                          <span className="mr-3 mt-2 w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                  
                  {/* Project Images */}
                  <div className="space-y-4">
                    {/* Main Image */}
                    <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-soft">
                      <img 
                        src={project.mainImage}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Image Grid */}
                    <div className="grid grid-cols-3 gap-2">
                      {project.images.slice(0, 6).map((image, i) => (
                        <div key={i} className="aspect-square rounded-md overflow-hidden shadow-soft">
                          <img 
                            src={image}
                            alt={`${project.title} ${i + 1}`}
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimpleProjectsSection;
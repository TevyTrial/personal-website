import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, Heart, Download } from "lucide-react";

const artworks = [
  {
    id: 1,
    title: "Digital Portrait Series",
    category: "Digital Art",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=600&fit=crop",
    description: "Character design exploration using digital painting techniques",
    likes: 234,
    year: "2024"
  },
  {
    id: 2,
    title: "Abstract Compositions",
    category: "Graphic Design",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop",
    description: "Experimental color and form studies",
    likes: 156,
    year: "2024"
  },
  {
    id: 3,
    title: "Isometric Illustrations",
    category: "Illustration",
    image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=600&h=600&fit=crop",
    description: "Technical illustration with creative storytelling",
    likes: 189,
    year: "2023"
  },
  {
    id: 4,
    title: "Logo Collection",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=600&h=600&fit=crop",
    description: "Brand identity designs for various clients",
    likes: 298,
    year: "2024"
  },
  {
    id: 5,
    title: "3D Character Models",
    category: "3D Art",
    image: "https://images.unsplash.com/photo-1551739440-5dd934d3a94a?w=600&h=600&fit=crop",
    description: "Stylized character models for animation",
    likes: 145,
    year: "2023"
  },
  {
    id: 6,
    title: "Motion Graphics",
    category: "Animation",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=600&fit=crop",
    description: "Animated sequences and transitions",
    likes: 267,
    year: "2024"
  },
  {
    id: 7,
    title: "Environmental Concepts",
    category: "Concept Art",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=600&fit=crop",
    description: "Game environment and level design concepts",
    likes: 178,
    year: "2023"
  },
  {
    id: 8,
    title: "Typography Experiments",
    category: "Typography",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=600&fit=crop",
    description: "Custom typeface and lettering exploration",
    likes: 203,
    year: "2024"
  }
];

const categories = ["All", "Digital Art", "Graphic Design", "3D Art", "Animation", "Branding"];

const GallerySection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedArtwork, setSelectedArtwork] = useState<typeof artworks[0] | null>(null);

  const filteredArtworks = selectedCategory === "All" 
    ? artworks 
    : artworks.filter(artwork => artwork.category === selectedCategory);

  return (
    <section id="gallery" className="bg-background">
      <div className="section-container">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
            Creative Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            A collection of selected artworks showcasing creativity across 
            various mediums and design disciplines.
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "creative-button" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredArtworks.map((artwork, index) => (
            <Dialog key={artwork.id}>
              <DialogTrigger asChild>
                <div 
                  className="gallery-item cursor-pointer group animate-scale-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => setSelectedArtwork(artwork)}
                >
                  <div className="relative aspect-square overflow-hidden">
                    <img 
                      src={artwork.image}
                      alt={artwork.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <Badge className="w-fit mb-2 bg-white/20 text-white border-white/30">
                        {artwork.category}
                      </Badge>
                      <h3 className="text-white font-semibold text-sm mb-1">
                        {artwork.title}
                      </h3>
                      <div className="flex items-center gap-4 text-white/80 text-xs">
                        <div className="flex items-center gap-1">
                          <Heart className="h-3 w-3" />
                          {artwork.likes}
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          View
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              
              <DialogContent className="max-w-4xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="aspect-square">
                    <img 
                      src={artwork.image}
                      alt={artwork.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  
                  <div className="space-y-6 p-4">
                    <div>
                      <Badge className="mb-3">
                        {artwork.category}
                      </Badge>
                      <h3 className="text-2xl font-bold mb-2">
                        {artwork.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {artwork.description}
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-6 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Heart className="h-4 w-4" />
                        {artwork.likes} likes
                      </div>
                      <div>
                        Year: {artwork.year}
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <Button className="creative-button flex-1">
                        <Eye className="h-4 w-4 mr-2" />
                        View Full Size
                      </Button>
                      <Button variant="outline">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="creative-button">
            View Full Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
const artworks = [
  {
    id: 1,
    title: "Digital Portrait Series",
    category: "Digital Art",
    description: "Expressive digital portraits exploring human emotion through vibrant colors and dynamic brushwork.",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=600&fit=crop",
    height: "tall"
  },
  {
    id: 2,
    title: "Abstract Compositions",
    category: "Graphic Design",
    description: "Geometric abstractions that blend modern design principles with creative experimentation.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    height: "medium"
  },
  {
    id: 3,
    title: "Isometric Illustrations",
    category: "Illustration",
    description: "Technical illustrations featuring precise isometric perspectives and detailed architectural elements.",
    image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=400&h=500&fit=crop",
    height: "medium"
  },
  {
    id: 4,
    title: "Logo Collection",
    category: "Branding",
    description: "A curated collection of brand identities showcasing versatile logo design approaches.",
    image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=400&h=300&fit=crop",
    height: "short"
  },
  {
    id: 5,
    title: "3D Character Models",
    category: "3D Art",
    description: "Stylized 3D characters with detailed texturing and expressive poses for interactive media.",
    image: "https://images.unsplash.com/photo-1551739440-5dd934d3a94a?w=400&h=650&fit=crop",
    height: "tall"
  },
  {
    id: 6,
    title: "Motion Graphics",
    category: "Animation",
    description: "Dynamic motion graphics combining typography, shapes, and fluid animations for digital platforms.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=400&fit=crop",
    height: "medium"
  },
  {
    id: 7,
    title: "Environmental Concepts",
    category: "Concept Art",
    description: "Imaginative environment designs for fantasy worlds, featuring detailed landscapes and atmospheric lighting.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=350&fit=crop",
    height: "short"
  },
  {
    id: 8,
    title: "Typography Experiments",
    category: "Typography",
    description: "Experimental typography exploring the intersection of letterforms, texture, and visual hierarchy.",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=550&fit=crop",
    height: "medium"
  },
  {
    id: 9,
    title: "Product Design",
    category: "Industrial Design",
    description: "Minimalist product designs focused on user experience and sustainable materials.",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=450&fit=crop",
    height: "medium"
  },
  {
    id: 10,
    title: "Digital Paintings",
    category: "Digital Art",
    description: "Atmospheric digital paintings inspired by nature and contemporary art movements.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=320&fit=crop",
    height: "short"
  }
];

const SimpleGallerySection = () => {
  return (
    <section id="gallery" className="bg-background-alt py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">
            Creative Gallery
          </h2>
          <p className="text-base text-primary max-w-2xl mx-auto mb-8">
            A collection of selected artworks showcasing creativity across 
            various mediums and design disciplines.
          </p>
        </div>
        
        {/* Masonry Gallery Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {artworks.map((artwork, index) => (
            <div 
              key={artwork.id}
              className="group cursor-pointer break-inside-avoid mb-6 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`relative overflow-hidden rounded-lg shadow-soft bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                artwork.height === 'tall' ? 'min-h-[400px]' : 
                artwork.height === 'short' ? 'min-h-[200px]' : 
                'min-h-[300px]'
              }`}>
                <img 
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Hover Overlay with Description */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                  {/* Category Badge */}
                  <div className="mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                    <span className="inline-block bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-primary">
                      {artwork.category}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-white font-semibold text-lg mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                    {artwork.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-white/90 text-sm leading-relaxed transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-200">
                    {artwork.description}
                  </p>
                  
  
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimpleGallerySection;
const artworks = [
  {
    id: 1,
    title: "Digital Portrait Series",
    category: "Digital Art",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=600&fit=crop",
  },
  {
    id: 2,
    title: "Abstract Compositions",
    category: "Graphic Design",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop",
  },
  {
    id: 3,
    title: "Isometric Illustrations",
    category: "Illustration",
    image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=600&h=600&fit=crop",
  },
  {
    id: 4,
    title: "Logo Collection",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=600&h=600&fit=crop",
  },
  {
    id: 5,
    title: "3D Character Models",
    category: "3D Art",
    image: "https://images.unsplash.com/photo-1551739440-5dd934d3a94a?w=600&h=600&fit=crop",
  },
  {
    id: 6,
    title: "Motion Graphics",
    category: "Animation",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=600&fit=crop",
  },
  {
    id: 7,
    title: "Environmental Concepts",
    category: "Concept Art",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=600&fit=crop",
  },
  {
    id: 8,
    title: "Typography Experiments",
    category: "Typography",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=600&fit=crop",
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
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {artworks.map((artwork, index) => (
            <div 
              key={artwork.id}
              className="group cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="relative aspect-square overflow-hidden rounded-lg shadow-soft">
                <img 
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Simple Overlay */}
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <div className="bg-white/90 px-2 py-1 rounded text-xs text-primary w-fit mb-2">
                    {artwork.category}
                  </div>
                  <h3 className="text-white font-medium text-sm">
                    {artwork.title}
                  </h3>
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
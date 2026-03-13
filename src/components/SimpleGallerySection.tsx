import gallery1 from "@/assets/gallery/gallery1.png";
import gallery2 from "@/assets/gallery/gallery2.png";
import gallery3 from "@/assets/gallery/gallery3.png";
import gallery4 from "@/assets/gallery/gallery4.png";
import gallery5 from "@/assets/gallery/gallery5.png";
import gallery6 from "@/assets/gallery/gallery6.png";
import gallery7 from "@/assets/gallery/gallery7.png";
import gallery8 from "@/assets/gallery/gallery8.png";
import gallery9 from "@/assets/gallery/gallery9.png";
import gallery10 from "@/assets/gallery/gallery10.png";
import gallery11 from "@/assets/gallery/gallery11.png";
import gallery12 from "@/assets/gallery/gallery12.png";

const artworks = [
  {
    id: 1,
    title: "Brighton Trip Poster",
    category: "Graphic Design",
    description: "Poster designed for a church Brighton half-day trip to help new students become familiar with the area. Brighton-themed visual elements were used to attract attention. Created with Canva and Photoshop.",
    image: gallery1,
    height: "tall"
  },
  {
    id: 2,
    title: "Church Event Leaflet",
    category: "Graphic Design",
    description: "Informational leaflet designed for church activities. The layout focuses on clear structure and readability. Created using Canva and Photoshop.",
    image: gallery2,
    height: "medium"
  },
  {
    id: 3,
    title: "Easter Worship Poster",
    category: "Graphic Design",
    description: "Promotional poster created for an Easter worship meeting, using visual elements and typography to communicate the theme of the event.",
    image: gallery3,
    height: "medium"
  },
  {
    id: 4,
    title: "Seagull Rock Painting",
    category: "Acrylic Painting",
    description: "Acrylic painting of a seagull eating chips on a small rock, inspired by Brighton’s seaside culture.",
    image: gallery4,
    height: "short"
  },
  {
    id: 5,
    title: "Owl Couple Rock Painting",
    category: "Acrylic Painting",
    description: "Acrylic painting of two owls on a rock, exploring simple character expression and decorative painting.",
    image: gallery5,
    height: "medium"
  },
  {
    id: 6,
    title: "Portrait Sketch Study",
    category: "Sketching",
    description: "Hand-drawn portrait sketch used as practice for studying facial proportions and expression.",
    image: gallery6,
    height: "medium"
  },
  {
    id: 7,
    title: "Hand Embroidery Piece",
    category: "Embroidery",
    description: "A small embroidery craft project exploring stitching techniques and textile-based decoration.",
    image: gallery7,
    height: "short"
  },
  {
    id: 8,
    title: "Titan Head (Attack on Titan)",
    category: "Mixed Media",
    description: "A Titan head sculpture inspired by Attack on Titan, created using 3D printing, clay for structural filling, and acrylic paint for surface details.",
    image: gallery8,
    height: "medium"
  },
  {
    id: 9,
    title: "Otter Pancake Plush",
    category: "Crochet",
    description: "A handmade crochet plush designed as a cute otter pancake character, exploring soft toy crafting.",
    image: gallery9,
    height: "medium"
  },
  {
    id: 10,
    title: "Snowman Crystal Ball",
    category: "Upcycled Craft",
    description: "An upcycled salt and pepper shaker turned into a miniature snow globe. Clay, small decorations, and twisting sticks were used to create the snowman scene.",
    image: gallery10,
    height: "medium"
  },
  {
    id: 11,
    title: "Painting on Guitar",
    category: "Acrylic Painting",
    description: "Acrylic painting created on a guitar surface, experimenting with painting on non-traditional materials.",
    image: gallery11,
    height: "medium"
  },
  {
    id: 12,
    title: "Mushroom Lip Balm Holder",
    category: "Crochet",
    description: "A small crochet mushroom designed to hold lip balm, combining decorative craft with everyday functionality.",
    image: gallery12,
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
                    <span className="inline-block bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-900">
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
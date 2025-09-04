import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, MessageCircle } from "lucide-react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";

const PortfolioGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const portfolioItems = [
    {
      image: portfolio1,
      title: "Elegant Ethnic Collection",
      category: "Lehengas & Suits",
      description: "Beautiful ethnic outfits crafted with precision"
    },
    {
      image: portfolio2,
      title: "Bridal Collection",
      category: "Wedding Wear",
      description: "Intricate bridal lehengas with hand embroidery"
    },
    {
      image: portfolio3,
      title: "Saree Blouse Collection",
      category: "Blouses",
      description: "Custom saree blouses in various designs"
    }
  ];

  const handleWhatsAppInquiry = () => {
    const message = "Hi! I loved your portfolio. I'd like to discuss a custom order.";
    window.open(`https://wa.me/+91XXXXXXXXXX?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <>
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Our Work
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Every piece tells a story of craftsmanship, attention to detail, 
              and the joy of creating something beautiful just for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Card key={index} className="group overflow-hidden border-border/50 hover:shadow-elegant transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button 
                      variant="hero" 
                      size="sm"
                      onClick={() => setSelectedImage(item.image)}
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                  </div>
                  <Badge className="absolute top-4 left-4 bg-gold text-primary">
                    {item.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button variant="elegant" size="lg" onClick={handleWhatsAppInquiry}>
              <MessageCircle className="w-5 h-5 mr-2" />
              Discuss Your Custom Order
            </Button>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <img 
              src={selectedImage} 
              alt="Portfolio item" 
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute -top-4 -right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-100 transition-colors"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PortfolioGallery;
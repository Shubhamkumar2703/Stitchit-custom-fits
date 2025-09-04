import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Scissors, 
  Clock, 
  Star, 
  Ruler,
  MessageCircle,
  ShirtIcon as Shirt
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      name: "Blouse Stitching",
      price: "₹500 - ₹800",
      time: "2-3 days",
      description: "Perfect fit saree blouses with custom designs",
      icon: Shirt,
      popular: true
    },
    {
      name: "Lehenga & Suits",
      price: "₹1500 - ₹3000",
      time: "5-7 days",
      description: "Elegant ethnic suits and bridal lehengas",
      icon: Scissors,
      popular: true
    },
    {
      name: "Alterations",
      price: "₹200 - ₹500",
      time: "1-2 days",
      description: "Perfect fitting adjustments for existing clothes",
      icon: Ruler,
      popular: false
    },
    {
      name: "Custom Designs",
      price: "₹2000+",
      time: "7-10 days",
      description: "Bring your unique design ideas to life",
      icon: Star,
      popular: false
    }
  ];

  const handleWhatsAppOrder = (service: string) => {
    const message = `Hi! I'm interested in ${service}. Can you provide more details?`;
    window.open(`https://wa.me/+91XXXXXXXXXX?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section className="py-20 bg-gradient-elegant">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From traditional saree blouses to contemporary ethnic wear, 
            we bring your vision to life with expert craftsmanship.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-border/50">
              <CardContent className="p-6 text-center">
                {service.popular && (
                  <Badge className="mb-4 bg-gold text-primary">Most Popular</Badge>
                )}
                
                <div className="mb-4 p-3 rounded-full bg-gold/10 inline-flex">
                  <service.icon className="w-8 h-8 text-gold" />
                </div>
                
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {service.name}
                </h3>
                
                <p className="text-muted-foreground mb-4 text-sm">
                  {service.description}
                </p>
                
                <div className="flex justify-between items-center mb-4 text-sm">
                  <span className="flex items-center text-maroon font-medium">
                    <Clock className="w-4 h-4 mr-1" />
                    {service.time}
                  </span>
                  <span className="font-bold text-gold text-lg">
                    {service.price}
                  </span>
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full group-hover:bg-gold group-hover:text-primary group-hover:border-gold transition-all"
                  onClick={() => handleWhatsAppOrder(service.name)}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Order Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Measurement Guide CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 p-6 rounded-2xl bg-card shadow-soft">
            <Ruler className="w-8 h-8 text-gold" />
            <div className="text-left">
              <h3 className="font-semibold text-primary">Need help with measurements?</h3>
              <p className="text-muted-foreground text-sm">Get our detailed measurement guide</p>
            </div>
            <Button variant="golden" size="sm">
              Get Guide
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
import { Button } from "@/components/ui/button";
import { Scissors, Phone, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-tailoring.jpg";

const TailoringHero = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/+91XXXXXXXXXX?text=Hello! I'm interested in your tailoring services.", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="TrailerIT - Expert Tailoring Services" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
          <Scissors className="w-5 h-5 text-gold" />
          <span className="text-sm font-medium">Expert Tailoring Since 15+ Years</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="block">StitchIT</span>
          <span className="block text-gold text-3xl md:text-4xl font-normal">Learn • Earn • Empower</span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
          India's largest women empowerment platform through tailoring. Custom orders, expert training, 
          and career opportunities - all in one place.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="hero" 
            size="lg" 
            onClick={handleWhatsAppClick}
            className="group"
          >
            <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            Order on WhatsApp
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
          >
            <Phone className="w-5 h-5 mr-2" />
            Call Now
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-8 mt-12 text-white/80">
          <div className="text-center">
            <div className="text-2xl font-bold text-gold">500+</div>
            <div className="text-sm">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gold">15+</div>
            <div className="text-sm">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gold">48hr</div>
            <div className="text-sm">Quick Delivery</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TailoringHero;
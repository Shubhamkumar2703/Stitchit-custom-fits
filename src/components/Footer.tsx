import { Button } from "@/components/ui/button";
import { Scissors, MessageCircle, Phone, MapPin, Clock, Heart } from "lucide-react";

const Footer = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/+91XXXXXXXXXX?text=Hello! I'm interested in your tailoring services.", "_blank");
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-lg bg-gold">
                <Scissors className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">TrailerIT</h3>
                <p className="text-primary-foreground/80">Expert Tailoring Services</p>
              </div>
            </div>
            
            <p className="text-primary-foreground/90 mb-6 max-w-md leading-relaxed">
              Transforming fabric into perfectly fitted ethnic wear with 15+ years of expertise. 
              From elegant sarees to stunning lehengas, we craft each piece with precision and love.
            </p>
            
            <div className="flex gap-3">
              <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-primary">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
              <Button variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li>
                <button className="hover:text-gold transition-colors">Home</button>
              </li>
              <li>
                <button className="hover:text-gold transition-colors">Services</button>
              </li>
              <li>
                <button className="hover:text-gold transition-colors">Portfolio</button>
              </li>
              <li>
                <button className="hover:text-gold transition-colors">Contact</button>
              </li>
              <li>
                <button className="hover:text-gold transition-colors">Measurement Guide</button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">+91 XXXXX XXXXX</p>
                  <p className="text-sm">Call for quick inquiries</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">WhatsApp Orders</p>
                  <p className="text-sm">Quick & easy ordering</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">[Your Address]</p>
                  <p className="text-sm">Jabalpur, MP</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Mon-Sat: 10AM-7PM</p>
                  <p className="text-sm">Sunday: 11AM-5PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/70 text-sm">
              © 2024 TrailerIT. All rights reserved.
            </p>
            
            <div className="flex items-center gap-1 text-primary-foreground/70 text-sm">
              Made with <Heart className="w-4 h-4 text-gold mx-1" /> for beautiful fashion
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
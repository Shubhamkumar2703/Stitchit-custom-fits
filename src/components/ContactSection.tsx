import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { 
  MessageCircle, 
  Phone, 
  MapPin, 
  Clock,
  Star,
  Users,
  Award
} from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleWhatsAppSubmit = () => {
    const { name, phone, service, message } = formData;
    const whatsappMessage = `Hi! I'm ${name}. 
Phone: ${phone}
Service needed: ${service}
Message: ${message}`;
    
    window.open(`https://wa.me/+91XXXXXXXXXX?text=${encodeURIComponent(whatsappMessage)}`, "_blank");
  };

  const trustFactors = [
    { icon: Users, text: "500+ Happy Customers", color: "text-gold" },
    { icon: Award, text: "15+ Years Experience", color: "text-maroon" },
    { icon: Star, text: "4.9★ Customer Rating", color: "text-gold" },
  ];

  return (
    <section className="py-20 bg-gradient-elegant">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to create your perfect outfit? Let's discuss your requirements 
            and bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-elegant border-border/50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-primary mb-6">
                Send us a message
              </h3>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Your Name</Label>
                  <Input 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input 
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 XXXXX XXXXX"
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="service">Service Needed</Label>
                  <Input 
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    placeholder="Blouse, Lehenga, Alterations, etc."
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your requirements, design ideas, timeline, etc."
                    rows={4}
                    className="mt-1"
                  />
                </div>
                
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                  onClick={handleWhatsAppSubmit}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Send via WhatsApp
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Contact Info & Trust Factors */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <Card className="shadow-soft border-border/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-primary mb-6">
                  Quick Contact
                </h3>
                
                <div className="space-y-4">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full justify-start hover:bg-gold/10 hover:border-gold hover:text-gold"
                  >
                    <MessageCircle className="w-5 h-5 mr-3" />
                    WhatsApp: +91 XXXXX XXXXX
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full justify-start hover:bg-maroon/10 hover:border-maroon hover:text-maroon"
                  >
                    <Phone className="w-5 h-5 mr-3" />
                    Call: +91 XXXXX XXXXX
                  </Button>
                  
                  <div className="flex items-start p-4 rounded-lg bg-muted/50">
                    <MapPin className="w-5 h-5 text-gold mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-primary">Visit Our Workshop</p>
                      <p className="text-muted-foreground text-sm mt-1">
                        [Your Address], Jabalpur, MP<br />
                        Near [Landmark]
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-4 rounded-lg bg-muted/50">
                    <Clock className="w-5 h-5 text-gold mr-3" />
                    <div>
                      <p className="font-medium text-primary">Working Hours</p>
                      <p className="text-muted-foreground text-sm">
                        Mon-Sat: 10:00 AM - 7:00 PM<br />
                        Sunday: 11:00 AM - 5:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Trust Factors */}
            <Card className="shadow-soft border-border/50">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-primary mb-6">
                  Why Choose TrailerIT?
                </h3>
                
                <div className="space-y-4">
                  {trustFactors.map((factor, index) => (
                    <div key={index} className="flex items-center">
                      <factor.icon className={`w-6 h-6 mr-3 ${factor.color}`} />
                      <span className="text-foreground">{factor.text}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 rounded-lg bg-gold/10 border border-gold/20">
                  <Badge className="mb-2 bg-gold text-primary">Special Offer</Badge>
                  <p className="text-sm text-foreground">
                    First-time customers get 10% off on orders above ₹1000. 
                    Mention this offer when you contact us!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
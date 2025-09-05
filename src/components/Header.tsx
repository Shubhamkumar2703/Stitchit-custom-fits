import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Scissors, Menu, X, MessageCircle, Phone, GraduationCap, Briefcase, Users } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'Measurements', id: 'measurements' },
    { name: 'Courses', id: 'courses', icon: GraduationCap },
    { name: 'Jobs', id: 'jobs', icon: Briefcase },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Community', id: 'community', icon: Users },
    { name: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/+91XXXXXXXXXX?text=Hello! I'm interested in your tailoring services.", "_blank");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-gradient-hero">
              <Scissors className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">StitchIT</h1>
              <p className="text-xs text-muted-foreground">Learn • Earn • Empower</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="flex items-center gap-1 text-sm text-foreground hover:text-gold transition-colors"
              >
                {item.icon && <item.icon className="w-4 h-4" />}
                {item.name}
              </button>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" size="sm">
              <Phone className="w-4 h-4 mr-2" />
              Call
            </Button>
            <Button variant="hero" size="sm" onClick={handleWhatsAppClick}>
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border/50 max-h-screen overflow-y-auto">
            <nav className="flex flex-col gap-4">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center gap-2 text-left py-2 text-foreground hover:text-gold transition-colors"
                >
                  {item.icon && <item.icon className="w-4 h-4" />}
                  {item.name}
                </button>
              ))}
              
              <div className="flex gap-3 pt-4 border-t border-border/50">
                <Button variant="outline" size="sm" className="flex-1">
                  <Phone className="w-4 h-4 mr-2" />
                  Call
                </Button>
                <Button variant="hero" size="sm" className="flex-1" onClick={handleWhatsAppClick}>
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
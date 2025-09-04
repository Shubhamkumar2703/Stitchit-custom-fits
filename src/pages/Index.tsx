import Header from "@/components/Header";
import TailoringHero from "@/components/TailoringHero";
import ServicesSection from "@/components/ServicesSection";
import PortfolioGallery from "@/components/PortfolioGallery";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <section id="home">
          <TailoringHero />
        </section>
        
        <section id="services">
          <ServicesSection />
        </section>
        
        <section id="portfolio">
          <PortfolioGallery />
        </section>
        
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;

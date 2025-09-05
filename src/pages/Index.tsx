import Header from "@/components/Header";
import TailoringHero from "@/components/TailoringHero";
import ServicesSection from "@/components/ServicesSection";
import MeasurementGuide from "@/components/MeasurementGuide";
import CoursesSection from "@/components/CoursesSection";
import JobsSection from "@/components/JobsSection";
import PortfolioGallery from "@/components/PortfolioGallery";
import CommunitySection from "@/components/CommunitySection";
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
        
        <section id="measurements">
          <MeasurementGuide />
        </section>
        
        <section id="courses">
          <CoursesSection />
        </section>
        
        <section id="jobs">
          <JobsSection />
        </section>
        
        <section id="portfolio">
          <PortfolioGallery />
        </section>
        
        <section id="community">
          <CommunitySection />
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

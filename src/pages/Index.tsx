
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SpecialtiesSection from "@/components/SpecialtiesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Sponsored from "@/components/Sponsored";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SpecialtiesSection />
        
        <ContactSection />
        <Sponsored/>
      </main>
      <Footer />
    </div>
  );
};

export default Index;

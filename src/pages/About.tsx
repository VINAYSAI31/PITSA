import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Home Button - Fixed position */}
      {/* <button
        onClick={() => navigate("/")}
        className="fixed top-32 left-6 md:top-8 md:left-8 z-50 bg-pizza-red text-white px-5 py-3 rounded-full shadow-lg hover:bg-red-800 transition-colors duration-300 flex items-center gap-2 font-semibold cursor-pointer"
        aria-label="Go to Home"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>HOME</span>
      </button> */}

      <Header />
      <main>
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default About;

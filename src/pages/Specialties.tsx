import Header from "@/components/Header";
import SpecialtiesSection from "@/components/SpecialtiesSection";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Specialties = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Home Button - Fixed position */}
      {/* <button
        onClick={() => navigate("/")}
        className="fixed top-12 left-6 md:top-8 md:left-8 z-50 bg-pizza-red text-white px-4 py-2 rounded-full shadow-lg hover:bg-red-800 transition-colors duration-300 flex items-center gap-2 font-semibold"
        aria-label="Go to Home"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>HOME</span>
      </button> */}

      <Header />
      <main>
        <SpecialtiesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Specialties;

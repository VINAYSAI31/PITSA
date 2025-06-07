import { Button } from "@/components/ui/button";
const OneDriveLink = "https://drive.google.com/file/d/1ARR6r3R8RvSmyk4PDg6nIoQ5MdbsNgA6/view?usp=drive_link";


const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 w-full z-50 border-border">
      <div className="container-max">
        <div className="flex items-center justify-between h-16 px-4">
          {/* Logo */}
          <div className="flex items-center space-x-4 translate-y-5">
            <img 
              src="/Images/logo.png" 
              alt="PITSA Logo" 
              className="w-16 h-16 object-contain"
            />
            <div className="text-2xl font-bold">PITSA</div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-20 translate-y-5">
            <button  
              onClick={() => scrollToSection('home')}
              className="text-xl font-semibold relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-xl font-semibold relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('specialties')}
              className="text-xl font-semibold relative group"
            >
              Specialties
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-xl font-semibold relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
          </nav>

          {/* CTA Button */}
          <Button 
            className="pizza-button"
              onClick={() => window.open(OneDriveLink, "_blank")}
          >
            VIEW MENU
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

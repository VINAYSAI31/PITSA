import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Specialties", to: "/specialties" },
    { name: "Contact", to: "/#contact" },
  ];

  const handleNav = (to: string) => {
    if (to.startsWith("/#")) {
      navigate("/");
      // Delay to allow navigation back to home then scroll
      setTimeout(() => {
        const id = to.replace("/#", "");
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      navigate(to);
    }
    setIsOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 border-border transition-colors ${isScrolled ? "bg-pizza-cream/80 backdrop-blur-md shadow-sm" : "bg-transparent"}`}>
      <div className="container-max">
        <div className="flex items-center justify-between h-28">
          {/* Home Button / Logo */}
          <button
            aria-label="Go to Home"
            onClick={() => handleNav("/")}
            className="flex items-center space-x-4 translate-y-5 focus:outline-none"
          >
            <img
              src="/Images/logo.png"
              alt="PITSA Logo"
              className="w-16 h-16 object-contain"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10 translate-y-9">
            {navItems.map((item) => (
              <button
                key={item.to}
                onClick={() => handleNav(item.to)}
                className="text-2xl text-pizza-red font-bold font-mandora relative group"

              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-foreground">
                  <Menu className="h-8 w-8" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <button
                      key={item.to}
                      onClick={() => handleNav(item.to)}
                      className="text-left text-2xl font-semibold py-2 hover:text-orange-400 transition-colors"
                    >
                      {item.name}
                    </button>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* CTA Button */}
          
        </div>
      </div>
    </header>
  );
};

export default Header;

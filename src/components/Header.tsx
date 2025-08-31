import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [inContact, setInContact] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 👇 detect when contact section is in view
  useEffect(() => {
    const contactEl = document.getElementById("contact");
    if (!contactEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInContact(entry.isIntersecting),
      { threshold: 0.3 }
    );

    observer.observe(contactEl);
    return () => observer.disconnect();
  }, []);

  const navItems = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Contact", to: "/#contact" },
  ];

  const handleNav = (to: string) => {
    if (to.startsWith("/#")) {
      navigate("/");
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

  // 👇 Desktop + Hamburger color logic
  const linkColor =
    location.pathname === "/" && !inContact
      ? "text-pizza-cream"
      : "text-pizza-red";

  // 👇 Mobile hamburger color
  const mobileMenuColor =
    location.pathname === "/" && !inContact ? "text-pizza-cream" : "text-black";

  return (
    <header
      className={`fixed top-0 w-full z-50 border-border transition-colors ${
        isScrolled ? "bg-transparent  shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container-max">
        <div className="flex items-center justify-between h-28">
          {/* Home Button / Logo */}
          <button
            aria-label="Go to Home"
            onClick={() => handleNav("/")}
            className="flex items-center space-x-4 translate-y-5 focus:outline-none"
          >
            <img
    src="/Images/logo.png" // 👈 place your logo here
    alt="Pitsa Logo"
    className="h-20 w-auto object-contain"
  />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10 translate-y-9">
            {navItems.map((item) => (
              <button
                key={item.to}
                onClick={() => handleNav(item.to)}
                className={`text-2xl font-bold font-mandora relative group ${linkColor}`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`transition-colors ${mobileMenuColor}`}
                >
                  <Menu className="h-20 w-20" /> {/* 👈 bigger size */}
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[320px] sm:w-[420px]">
                <nav className="flex flex-col space-y-6 mt-10">
                  {navItems.map((item) => (
                    <button
                      key={item.to}
                      onClick={() => handleNav(item.to)}
                      className="text-left text-2xl font-semibold py-2 text-black hover:text-pizza-red transition-colors"
                    >
                      {item.name}
                    </button>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

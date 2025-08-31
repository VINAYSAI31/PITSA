const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-max">
        <div className="section-padding">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center justify-center md:justify-start">
                {/* Replace SVG + Text with Logo */}
                <img
                  src="/Images/logo.png"
                  alt="Pitsa Logo"
                  className="w-30 md:w-36 object-contain"
                />
              </div>
              
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <div className="space-y-2">
                <button 
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors font-bebas tracking-widest"
                >
                  Home
                </button>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors font-bebas tracking-widest"
                >
                  About
                </button>
                <button 
                  onClick={() => document.getElementById('specialties')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors font-bebas tracking-widest"
                >
                  Specialties
                </button>
                <button 
                  onClick={() => window.open('/menu.pdf', '_blank')}
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors font-bebas tracking-widest"
                >
                  Menu
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg text-white font-bebas tracking-widest">Contact Us</h3>
              <div className="space-y-2 text-sm">
                <a 
                  href="tel:9867595695"
                  className="flex items-center justify-center md:justify-start space-x-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <span className="text-xl font-mandora text-white drop-shadow-md">+91 9867595695</span>
                </a>
                <a 
                  href="https://instagram.com/pitsaindia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center md:justify-start space-x-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <span className="text-xl font-mandora text-white drop-shadow-md">@pitsaindia</span>
                </a>
                <p className="text-xl font-mandora text-white drop-shadow-md">
                  Mon - Sun: 02:00 PM - 11:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
            <p className="text-xl font-bebas tracking-widest text-white drop-shadow-md">
              © 2025 PITSA - All rights reserved. | Made with love for pizza lovers
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-max">
        <div className="section-padding">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-primary-foreground">
                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1V3C15 4.1 14.1 5 13 5H11C9.9 5 9 4.1 9 3V1L3 7V9C3 10.1 3.9 11 5 11H8L8.5 12L9 11H15L15.5 12L16 11H19C20.1 11 21 10.1 21 9Z"/>
                  </svg>
                </div>
                <div className="text-2xl font-bold font-bold font-mandora  drop-shadow-md">PITSA</div>
              </div>
              <p className="text-white font-bebas tracking-widest">
                The Woodfire Pizza
              </p>
              <p className="text-sm text-white font-bebas tracking-widest">
                Authentic flavors, fresh ingredients, unforgettable taste.
              </p>
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
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  <span className="text-xl font-mandora text-white drop-shadow-md">+91 9867595695</span>
                </a>
                <a 
                  href="https://instagram.com/pitsaindia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center md:justify-start space-x-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
                  </svg>
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
              © 2025 PITSA - The Woodfire Pizza. All rights reserved. | Made with ❤️ for pizza lovers
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Instagram } from "lucide-react";
import { motion } from "framer-motion";


const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-pizza-cream">
      <div className="container-max">
        <div className="text-center mb-16">
        <motion.h1
          className="text-4xl md:text-6xl font-mandora text-pizza-red drop-shadow-md"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Get In Touch
        </motion.h1>
          
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-primary">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                  </div>
                  <span className="font-bold font-mandora text-pizza-red drop-shadow-md">Phone</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href="tel:9867595695"
                  className="text-2xl font-bold text-foreground hover:text-primary transition-colors font-bold font-mandora  drop-shadow-md"
                >
                  +91 9867595695
                </a>
                <p className="text-muted-foreground mt-2 font-bebas tracking-widest">
                  Call us for orders, reservations, or any queries
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-primary">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-primary"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>
                  <span className="font-bold font-mandora text-pizza-red drop-shadow-md">Visit Us</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-foreground">
                  PITSA - The Woodfire Pizza
                </p>
                <p className="text-muted-foreground mt-2 font-bebas tracking-widest">
                  Come experience our authentic woodfire pizzas in our cozy
                  restaurant
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-primary">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-primary"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
                    </svg>
                  </div>
                  <span className="font-bold font-mandora text-pizza-red drop-shadow-md">Follow Us</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href="https://instagram.com/pitsaindia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-foreground hover:text-primary transition-colors inline-flex items-center space-x-2"
                >
                  <Instagram className="w-5 h-5" />
                  <span>@pitsaindia</span>
                </a>
                <p className="text-muted-foreground mt-2 font-bebas tracking-widest">
                  Follow us for daily specials and behind-the-scenes content
                </p>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="lg:pl-8">
          

            <div className="mt-20 text-center space-y-6">
  <p className="text-2xl font-bold font-mandora text-pizza-red drop-shadow-md">
    <strong>Operating Hours:</strong>
    <br />
    Monday - Sunday: 02:00 PM - 11:00 PM
  </p>

  {/* Address */}
  <div className="text-lg font-semibold text-foreground">
    <p className="font-mandora text-pizza-red drop-shadow-md text-2xl mb-4">
      Visit Us
    </p>
    <p>
      Vertex Solitaire, Rd, opp. fitness prophecy, Gandhar Nagar, Khadakpada,  
      Kalyan, Maharashtra 421301
    </p>
  </div>

  {/* Google Maps Embed */}
  <div className="w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-md mt-6">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.8134555812735!2d73.12873367493395!3d19.253547296375242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7970e13116685%3A0xaf5497dca71a98a3!2sPITSA-%20Authentic%20Italian%20pizza%20place!5e1!3m2!1sen!2sin!4v1756649328127!5m2!1sen!2sin"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

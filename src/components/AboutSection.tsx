import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="pt-28 md:pt-36 section-padding bg-pizza-cream">
      <div className="container-max">
        <div className="text-center mb-12 md:mb-16">
          <motion.h1
            className="text-6xl md:text-6xl font-mandora text-pizza-red drop-shadow-md"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            ABOUT US
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-3xl md:text-4xl font-bold font-mandora text-pizza-red drop-shadow-md">
                Our Story
              </h3>
              <p className="text-xl text-muted-foreground font-bebas tracking-widest">
                Where tradition meets flavor
              </p>
            </div>

            <div className="space-y-4 text-lg leading-relaxed p-6 rounded-2xl shadow-sm font-bebas tracking-widest">
              <p>
                Founded by Chef Krunal Kumbhar and Chef Mansi Kumbhar, Pitsa is
                a passion project that brings the authentic taste of local
                Italian pizza to life.
              </p>
              <p>
                With years of experience in 5-star hotels and top bakeries, Chef
                Krunal crafts every pizza using a 24-hour fermented dough,
                house-made sauce, and premium ingredients.
              </p>
              <p>
                Chef Mansi, a skilled pastry chef, brings her expertise to
                Pitsa's desserts and daily operations, ensuring quality in every
                bite—from our wood-fired pizzas to handcrafted treats.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold font-mandora text-pizza-red mb-2">5+</div>
                <div className="text-muted-foreground font-bebas tracking-widest">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold font-mandora text-pizza-red mb-2">50+</div>
                <div className="text-muted-foreground font-bebas tracking-widest">Menu Items</div>
              </div>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="relative">
            {/* Single Image */}
            <motion.div
              className="relative overflow-hidden rounded-2xl shadow-2xl mx-auto max-w-md"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <img
                src="/Images/about1.jpg"
                alt="Pitsa restaurant ambiance and atmosphere"
                className="w-full h-[32rem] object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </motion.div>

            {/* Decorative accent */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-pizza-red/20 rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-pizza-red"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9.5 2A1.5 1.5 0 0 0 8 3.5v1A1.5 1.5 0 0 0 9.5 6h5A1.5 1.5 0 0 0 16 4.5v-1A1.5 1.5 0 0 0 14.5 2h-5zm2.5 14.5c0-.28.22-.5.5-.5s.5.22.5.5-.22.5-.5.5-.5-.22-.5-.5zm0-2c0-.28.22-.5.5-.5s.5.22.5.5-.22.5-.5.5-.5-.22-.5-.5zm0-2c0-.28.22-.5.5-.5s.5.22.5.5-.22.5-.5.5-.5-.22-.5-.5z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="pt-20 md:pt-20 section-padding bg-pizza-cream"
    >
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
                Where tradition meets flavour
              </p>
            </div>

            <div className="space-y-4 text-lg leading-relaxed p-6 rounded-2xl shadow-sm font-bebas tracking-widest">
              <p>
                The story of Pitsa culminates in a powerful resolution. The
                brand’s purpose is not merely to feed people but to create a
                space for connection, a place where the simple act of sharing a
                meal becomes a profound, shared experience. The founders Chef
                Krunal Kumbhar and Mansi Kumbhar pilgrimage for authenticity
                ultimately brought them back home, they built a community around
                the very table that symbolizes gathering and joy. Pitsa is an
                invitation to this community, a space for shared memories,
                laughter, and the simple pleasure of an honest, authentic meal.
              </p>
              <p>
                The journey led him to the cobblestone streets of Naples, the
                birthplace of the modern pizza. He immersed himself in the
                time-honored traditions, learning the ancient craft from
                artisans who had perfected it over generations. He studied the
                alchemy of simple, pristine ingredients: the robust, sun-kissed
                sweetness of San Marzano tomatoes, the delicate, milky tang of
                fior di latte mozzarella, and the verdant fragrance of fresh
                basil.
              </p>
              <p>
                To experience Pitsa is to step into a sensory sanctuary. The
                moment the doors open, a powerful narrative is conveyed not
                through words, but through the senses. The warmth of the room
                envelops the skin, a palpable and comforting presence that
                emanates from the heart of the restaurant: a massive,
                brick-lined wood-fired oven. The air itself tells a story, thick
                with a complex, inviting bouquet. There is the yeasty, earthy
                scent of rising dough, the pungent, savory notes of simmering
                tomato and garlic, and the sweet, almost-caramelized aroma of
                melting mozzarella. This rich, fragrant air weaves together a
                tapestry of anticipation, a promise of the culinary journey to
                come.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold font-mandora text-pizza-red mb-2">
                  5+
                </div>
                <div className="text-muted-foreground font-bebas tracking-widest">
                  Years of Excellence
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold font-mandora text-pizza-red mb-2">
                  50+
                </div>
                <div className="text-muted-foreground font-bebas tracking-widest">
                  Menu Items
                </div>
              </div>
            </div>
          </div>

          {/* Image Gallery */}
          <motion.div
className="relative overflow-hidden rounded-2xl shadow-2xl mx-auto max-w-md -mt-40"
  initial={{ opacity: 0, x: 30 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.7, delay: 0.2 }}
>
  <img
    src="/Images/about1.jpg"
    alt="Pitsa restaurant ambiance and atmosphere"
    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
</motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;

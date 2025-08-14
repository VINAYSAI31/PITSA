import { motion } from "framer-motion";

const OneDriveLink =
  "https://drive.google.com/file/d/1ARR6r3R8RvSmyk4PDg6nIoQ5MdbsNgA6/view?usp=drive_link";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-pizza-cream flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Pizza Image (faded) */}
      {/* <div className="absolute inset-0">
        <img
          src="/Images/pizza.png"
          alt="Woodfire pizza"
          className="w-full h-full object-cover opacity-30"
        />
      </div> */}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
        {/* Logo / Title */}
        <motion.h1
          className="text-6xl md:text-8xl font-mandora text-pizza-red drop-shadow-md"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          PITSA
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="mt-4 text-lg md:text-2xl font-bebas text-black tracking-widest"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          The Woodfire Pizza 🍕 | Fresh • Handmade • Authentic
        </motion.p>

        {/* Large Navigation Links */}
        <motion.nav
          className="mt-12 flex flex-col sm:flex-row gap-8 sm:gap-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <motion.a
            href="/about"
            whileHover={{ scale: 1.05 }}
            className="text-5xl md:text-7xl font-bebas text-pizza-red tracking-wider relative group"
          >
            INFO
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-pizza-red transition-all duration-300 group-hover:w-full"></span>
          </motion.a>

          <motion.a
            href={OneDriveLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="text-5xl md:text-7xl font-mandora text-pizza-red tracking-wider relative group"
          >
            MENU
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-pizza-red transition-all duration-300 group-hover:w-full"></span>
          </motion.a>

          <motion.a
            href="/specialties"
            whileHover={{ scale: 1.05 }}
            className="text-5xl md:text-7xl font-bebas text-pizza-red tracking-wider relative group"
          >
            ITEMS
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-pizza-red transition-all duration-300 group-hover:w-full"></span>
          </motion.a>
        </motion.nav>
      </div><motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 15px rgba(179, 32, 37, 0.4)",
          }}
          transition={{ type: "spring", stiffness: 300 }}
          onClick={() => window.open(OneDriveLink, "_blank")}
          className="mt-12 px-8 py-3 bg-pizza-red text-white font-bebas text-xl tracking-wide rounded-full shadow-md hover:bg-red-800 transition-colors"
        >
          🍕 VIEW OUR MENU
        </motion.button>

      {/* Decorative brush stroke at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-12 sm:h-20 opacity-20">
        <img
          src="/Images/6448c581-7fff-4753-a774-fc91f14cf53b.png"
          alt="Orange brush stroke"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;

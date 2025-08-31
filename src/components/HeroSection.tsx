import { motion } from "framer-motion";

const OneDriveLink =
  "https://drive.google.com/file/d/1AcHaJvdAe3aqa8Q8F6X5C3AgbNScbbs3/view?usp=sharing";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-pizza-cream flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Pizza Image */}
      <div className="absolute inset-0">
        <img
          src="/Images/back5.jpg"
          alt="Woodfire pizza"
          className="w-full h-full object-cover"
          style={{ objectPosition: "center 70%" }}
        />
      </div>

      {/* Logo on Top-Left */}
      <div className="absolute top-6 left-6 z-20">
        <button
          aria-label="Go to Home"
          onClick={() => (window.location.href = "/")}
          className="focus:outline-none"
        >
          <img
            src="/Images/logo.png" // 👈 your logo file
            alt="Pitsa Logo"
            className="h-16 w-auto object-contain md:h-20"
          />
        </button>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 mt-16 md:mt-28">
        {/* Title */}
        <motion.h1
          className="text-6xl md:text-8xl font-mandora text-pizza-cream drop-shadow-md mt-[-30px] md:mt-0"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          PITSA
        </motion.h1>

        {/* Navigation Links */}
        <motion.nav
          className="mt-12 flex flex-col sm:flex-row gap-8 sm:gap-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <motion.a
            href="/about"
            whileHover={{ scale: 1.05 }}
            className="text-5xl md:text-8xl font-mandora font-thin text-pizza-cream tracking-wider relative group"
          >
            INFO
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-pizza-cream transition-all duration-300 group-hover:w-full"></span>
          </motion.a>

          <motion.a
            href={OneDriveLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="text-5xl md:text-8xl font-mandora font-thin text-pizza-cream tracking-wider relative group"
          >
            MENU
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-pizza-red transition-all duration-300 group-hover:w-full"></span>
          </motion.a>
        </motion.nav>

        {/* CTA Button */}
        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 15px rgba(179, 32, 37, 0.4)",
          }}
          transition={{ type: "spring", stiffness: 300 }}
          onClick={() => window.open(OneDriveLink, "_blank")}
          className="mt-12 px-8 py-3 bg-pizza-red text-white font-bebas text-xl tracking-wide rounded-full shadow-md hover:bg-red-800 transition-colors"
        >
          VIEW OUR MENU
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
const OneDriveLink = "https://onedrive.live.com/YOUR_LINK_HERE";


const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden "
      style={
        {
          "--pizza-size": "950px",
          "--pizza-bottom": "68%",
          "--leaf-1-size": "140px",
          "--leaf-1-top": "329px",
          "--leaf-1-right": "500px",
          "--leaf-2-size": "175px",
          "--leaf-2-bottom": "240px",
          "--leaf-2-left": "845px",
          "--leaf-3-size": "240px",
          "--leaf-3-top": "440px",
          "--leaf-3-left": "-70px",
          "--leaf-4-size": "350px",
          "--leaf-4-top": "270px",
          "--leaf-4-left": "750px",
        } as React.CSSProperties
      }
    >
      {/* <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/Images/chef-bg-1-Photoro.png')" }}
      ></div> */}

      <div className="absolute inset-0 pizza-gradient opacity-20"></div>
      <div className="absolute top-20 left-10 w-20 h-20 bg-pizza-orange/20 rounded-full animate-float"></div>
      <div
        className="absolute bottom-20 right-10 w-16 h-16 bg-pizza-red/20 rounded-full animate-float"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/2 right-20 w-12 h-12 bg-pizza-gold/30 rounded-full animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
      <div className="container-max section-padding relative z-20 -mt-20">
        {/* Content Section */}
        <div className="relative z-30 text-center mb-20">
          <h1 className="text-6xl md:text-8xl font-extrabold text-primary mb-4 tracking-tight drop-shadow-lg animate-slide-down">
            PITSA
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground mb-6 font-light italic">
            The Woodfire Pizza 🍕
          </p>

          {/* Stylized Tagline */}
          <div className="text-xl md:text-2xl text-foreground mb-14">
            <div className="flex flex-wrap justify-center items-center gap-4 font-semibold tracking-wide">
              <span className="px-2 border-b-2 border-orange-400">
                Authentic Flavors
              </span>
              <span className="text-orange-400 text-2xl">•</span>
              <span className="px-2 border-b-2 border-green-500">
                Fresh Ingredients
              </span>
              <span className="text-orange-400 text-2xl">•</span>
              <span className="px-2 border-b-2 border-yellow-400">
                Unforgettable Taste
              </span>
            </div>
            {/* <p className="mt-4 text-lg text-muted-foreground font-light animate-fadeInUp">
              🔥 Experience the magic of traditional woodfire cooking!
            </p> */}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-7 justify-center items-center relative z-50">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(255, 100, 0, 0.5)" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-orange-500 hover:bg-orange-600 text-white text-xl px-12 py-4 rounded-full transition-all duration-300 cursor-pointer"
              onClick={() => window.open(OneDriveLink, "_blank")}
            >
              🍕 VIEW OUR MENU
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(255, 100, 0, 0.5)" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-lg px-8 py-4 border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white rounded-full transition-all duration-300 cursor-pointer"
              onClick={() => {
                const element = document.getElementById("contact");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              📍 ORDER NOW
            </motion.button>
          </div>

          <div
            className="absolute bottom-5 left-1/2 transform -translate-x-1/2"
            style={{ transform: "translate(-50%, var(--pizza-bottom))" }}
          >
            <div className="relative mt-10">
              {/* Pizza Image with glow animation - made much larger */}
              <div
                className="relative animate-glow animate-slide-up"
                style={{
                  width: "var(--pizza-size)",
                  height: "var(--pizza-size)",
                }}
              >
                <img
                  src="/Images/pizza.png"
                  alt="Delicious pizza with fresh basil and tomatoes"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Additional floating basil around pizza */}
              <div
                className="absolute"
                style={{
                  width: "var(--leaf-1-size)",
                  height: "var(--leaf-1-size)",
                  top: "var(--leaf-1-top)",
                  right: "var(--leaf-1-right)",
                }}
              >
                <img
                  src="/Images/97f9871d-b61a-4433-b72e-fbbdef867965.png"
                  alt="Basil leaves"
                  className="w-full h-full object-contain opacity-90 animate-slide-down"
                />
              </div>

              <div
                className="absolute"
                style={{
                  width: "var(--leaf-2-size)",
                  height: "var(--leaf-2-size)",
                  bottom: "var(--leaf-2-bottom)",
                  left: "var(--leaf-2-left)",
                }}
              >
                <img
                  src="/Images/l1.png"
                  alt="Basil leaves"
                  className="w-full h-full object-contain opacity-90 animate-slide-down"
                />
              </div>

              <div
                className="absolute"
                style={{
                  width: "var(--leaf-3-size)",
                  height: "var(--leaf-3-size)",
                  top: "var(--leaf-3-top)",
                  left: "var(--leaf-3-left)",
                }}
              >
                <img
                  src="/Images/e6fa6a03-dee3-4aba-b848-960aeb6aef56.png"
                  alt="Basil leaves"
                  className="w-full h-full object-contain opacity-90 animate-slide-down"
                />
              </div>

              <div
                className="absolute"
                style={{
                  width: "var(--leaf-4-size)",
                  height: "var(--leaf-4-size)",
                  top: "var(--leaf-4-top)",
                  left: "var(--leaf-4-left)",
                }}
              >
                <img
                  src="/Images/30eae99c-2b09-4a69-9096-8a68235591f9.png"
                  alt="Basil leaves"
                  className="w-full h-full object-contain opacity-90 animate-slide-down"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-20 opacity-20">
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

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-primary">
                Our Story
              </h2>
              <p className="text-xl text-muted-foreground">
                Where tradition meets flavor
              </p>
            </div>

            <div className="space-y-4 text-lg leading-relaxed">
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
                Pitsa’s desserts and daily operations, ensuring quality in every
                bite—from our wood-fired pizzas to handcrafted treats.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-muted-foreground">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Menu Items</div>
              </div>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-pizza-cream to-pizza-orange/20 rounded-3xl p-8 h-96">
              {/* Decorative Elements */}
              <div className="absolute top-6 right-6 w-16 h-16 bg-pizza-red/20 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-pizza-red"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9.5 2A1.5 1.5 0 0 0 8 3.5v1A1.5 1.5 0 0 0 9.5 6h5A1.5 1.5 0 0 0 16 4.5v-1A1.5 1.5 0 0 0 14.5 2h-5zm2.5 14.5c0-.28.22-.5.5-.5s.5.22.5.5-.22.5-.5.5-.5-.22-.5-.5zm0-2c0-.28.22-.5.5-.5s.5.22.5.5-.22.5-.5.5-.5-.22-.5-.5zm0-2c0-.28.22-.5.5-.5s.5.22.5.5-.22.5-.5.5-.5-.22-.5-.5z" />
                </svg>
              </div>

              <div className="absolute bottom-6 left-6 w-20 h-20 bg-pizza-gold/30 rounded-full flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-pizza-warm"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1V3C15 4.1 14.1 5 13 5H11C9.9 5 9 4.1 9 3V1L3 7V9C3 10.1 3.9 11 5 11H8L8.5 12L9 11H15L15.5 12L16 11H19C20.1 11 21 10.1 21 9Z" />
                </svg>
              </div>

              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center animate-pulse">
                    <svg
                      className="w-12 h-12 text-primary-foreground"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

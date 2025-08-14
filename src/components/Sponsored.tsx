
import React, { useEffect, useRef, useState } from 'react';

const Sponsored = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-16 px-4 bg-gradient-to-b from-cream to-warm-cream">
      <div className="container mx-auto max-w-4xl">
        <div className={`text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="text-3xl font-bold font-bold font-mandora text-pizza-red drop-shadow-mdtext-pizza-red mb-4 font-pizza">
            Sponsored
          </h2>
          <div className="w-16 h-1 bg-pizza-red mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-warm-brown font-medium font-bebas tracking-widest">
            Mangowood hospitality
          </p>
        </div>
      </div>
    </section>
  );
};

export default Sponsored;

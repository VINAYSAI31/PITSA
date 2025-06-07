import React, { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
const OneDriveLink = "https://drive.google.com/file/d/1ARR6r3R8RvSmyk4PDg6nIoQ5MdbsNgA6/view?usp=drive_link";


const SpecialtiesSection = () => {
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

  const specialties = [
    {
      name: "Classic Margherita",
      description: "San marzano tomato, buffalo mozzarella, parmesan, basil, olive oil",
      price: "349/-",
      emoji: "🍕",
      color: "from-red-400 to-red-600"
    },
    {
      name: "Chicken Tikka Pizza",
      description: "Marinara, chicken tikka, capsicum, onion, mozzarella, pineapple",
      price: "499/-",
      emoji: "🐔",
      color: "from-orange-400 to-orange-600"
    },
    {
      name: "Pesto Chicken Pizza",
      description: "Pesto, cherry tomato, roast chicken, kalamata olives, parmesan, mozzarella",
      price: "469/-",
      emoji: "🌿",
      color: "from-green-400 to-green-600"
    },
    {
      name: "Italian Tiramisu",
      description: "Mascarpone cheese, ladyfinger, coffee liquid, dust with rich cocoa powder",
      price: "319/-",
      emoji: "🍰",
      color: "from-amber-400 to-amber-600"
    }
  ];

  return (
    <section id='specialties' ref={ref} className="py-20 px-4 bg-gradient-to-b from-cream to-warm-cream">
      <div className="container mx-auto max-w-6xl">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="text-5xl font-bold text-pizza-red mb-6 font-pizza">
            Our Specialties
          </h2>
          <p className="text-xl text-warm-brown mb-8">
            Handcrafted favorites that keep our customers coming back
          </p>
          <div className="w-24 h-1 bg-pizza-red mx-auto mb-8 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specialties.map((item, index) => (
            <Card 
              key={index}
              className={`relative overflow-hidden bg-white shadow-xl hover-lift-strong transition-all duration-500 group cursor-pointer ${
                isVisible ? `animate-fade-in-up animation-delay-${index * 200}` : ''
              }`}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
              
              <div className="relative p-6 text-center">
                {/* Emoji with Animation */}
                <div className="text-6xl mb-4 animate-bounce-gentle group-hover:animate-spin-slow transition-all duration-300">
                  {item.emoji}
                </div>
                
                {/* Item Name */}
                <h3 className="text-xl font-bold text-pizza-red mb-3 group-hover:scale-105 transition-transform duration-300">
                  {item.name}
                </h3>
                
                {/* Description */}
                <p className="text-warm-brown text-sm leading-relaxed mb-4 min-h-[60px]">
                  {item.description}
                </p>
                
                {/* Price */}
                <div className="text-2xl font-bold text-pizza-red mb-4 animate-pulse-gentle">
                  ₹{item.price}
                </div>
                
                {/* Order Button */}
                <Button 
                  size="sm"
                                onClick={() => window.open(OneDriveLink, "_blank")}

                  className="bg-pizza-red hover:bg-pizza-red-dark text-cream font-bold rounded-full opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                >
                  Order Now
                </Button>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-2 right-2 w-4 h-4 bg-golden rounded-full opacity-50 animate-pulse"></div>
              <div className="absolute bottom-2 left-2 w-3 h-3 bg-pizza-red rounded-full opacity-30 animate-bounce-slow"></div>
            </Card>
          ))}
        </div>

        {/* View Full Menu CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-800 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <Button 
            size="lg"
                          onClick={() => window.open(OneDriveLink, "_blank")}

            className="bg-pizza-red hover:bg-pizza-red-dark text-cream font-bold py-4 px-12 text-xl rounded-full shadow-xl hover-lift animate-pulse-gentle"
          >
            🍕 VIEW COMPLETE MENU
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
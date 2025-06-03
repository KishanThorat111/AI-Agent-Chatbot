import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import testimonials from '../data/testimonials';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-bg-secondary">
      <div className="container mx-auto px-4">
        <h2 
          className="text-3xl md:text-4xl font-bold text-center mb-16 font-poppins"
          data-aos="fade-up"
        >
          What Our <span className="gradient-text">Clients Say</span>
        </h2>

        <div className="relative">
          <div className="flex overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`w-full flex-shrink-0 transition-opacity duration-500 ${
                  activeIndex === index ? 'opacity-100' : 'opacity-0 absolute'
                }`}
                data-aos="fade-up"
                data-aos-delay={100 * index}
                style={{ transform: activeIndex === index ? 'translateX(0)' : 'translateX(100%)' }}
              >
                <div className="max-w-3xl mx-auto glassmorphism rounded-lg p-8 text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={20} className="text-primary-500 fill-primary-500" />
                    ))}
                  </div>
                  <p className="text-text-secondary mb-6 italic">"{testimonial.quote}"</p>
                  <p className="font-semibold font-poppins">{testimonial.name}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index ? 'bg-primary-500 w-6' : 'bg-gray-600'
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
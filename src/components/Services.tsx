import React from 'react';
import * as LucideIcons from 'lucide-react';
import services from '../data/services';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-bg-primary">
      <div className="container mx-auto px-4">
        <h2 
          className="text-3xl md:text-4xl font-bold text-center mb-4 font-poppins"
          data-aos="fade-up"
        >
          Our Services
        </h2>
        <div 
          className="w-20 h-1 mx-auto mb-16 gradient-bg rounded-full"
          data-aos="fade-up"
          data-aos-delay="100"
        ></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            // Dynamically get the icon component
            const IconComponent = LucideIcons[service.icon as keyof typeof LucideIcons];
            
            return (
              <div
                key={service.id}
                className="glassmorphism rounded-lg p-6 tilt-card relative overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={100 * service.id}
              >
                <div className="mb-4 gradient-bg inline-flex p-3 rounded-full">
                  {IconComponent && <IconComponent size={24} className="text-white" />}
                </div>
                <h3 className="text-xl font-semibold mb-3 font-poppins">{service.title}</h3>
                <p className="text-text-secondary">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
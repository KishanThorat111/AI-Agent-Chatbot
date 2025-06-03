import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-poppins" data-aos="fade-up">
          About <span className="gradient-text">Us</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2" data-aos="fade-right">
            <img 
              src="https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Cleaning professionals at work" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          <div className="md:w-1/2" data-aos="fade-left">
            <h3 className="text-2xl font-semibold mb-4 font-poppins">Our Story</h3>
            <p className="text-text-secondary mb-6">
              Founded in 2020, Connor's Cleaning Agency began with a simple mission: to provide exceptional cleaning services with a focus on customer satisfaction and environmental responsibility. What started as a small family business has grown into a trusted cleaning service provider across the metropolitan area.
            </p>

            <h3 className="text-2xl font-semibold mb-4 font-poppins">Our Mission</h3>
            <ul className="list-disc pl-5 text-text-secondary mb-6 space-y-2">
              <li>To deliver impeccable cleaning services that exceed client expectations</li>
              <li>To use environmentally friendly products and sustainable practices</li>
              <li>To provide transparent pricing and instant quotes through our innovative AI system</li>
              <li>To treat every space as if it were our own, with care and attention to detail</li>
            </ul>

            <p className="text-text-secondary italic mt-8" data-aos="fade-up" data-aos-delay="300">
              Need instant answers? Click the chat icon below!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { MessageCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home"
      className="parallax-bg relative min-h-screen flex items-center"
      style={{
        backgroundImage: 'linear-gradient(rgba(240, 249, 255, 0.9), rgba(224, 242, 254, 0.9)), url("https://images.pexels.com/photos/4108714/pexels-photo-4108714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
      }}
      data-aos="fade-up"
    >
      <div className="container mx-auto px-4 text-center">
        <h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-poppins text-primary-900"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Welcome to Connor's Cleaning Agency
        </h1>
        
        <p 
          className="text-xl md:text-2xl text-text-secondary mb-6 font-opensans"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Instant Quotes & 24/7 Support via Our AI Chat
        </p>
        
        <div 
          className="text-lg md:text-xl mb-8 text-primary-700 min-h-16"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <TypeAnimation
            sequence={[
              'Residential Cleaning Experts',
              2000,
              'Commercial & Office Cleaning',
              2000,
              'Eco-Friendly Disinfection',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="font-medium"
          />
        </div>
        
        <button 
          className="uppercase py-3 px-8 gradient-bg text-white font-bold rounded-md transition-all duration-300 transform hover:scale-105 shadow-glow"
          data-aos="fade-up"
          data-aos-delay="400"
          onClick={() => {
            window.dispatchEvent(new CustomEvent('openChat'));
          }}
        >
          Test Our Agent & Get a Quote
        </button>
        
        <div 
          className="fixed bottom-6 right-6 w-16 h-16 rounded-full gradient-bg flex items-center justify-center cursor-pointer pulse-animation shadow-glow z-40"
          aria-label="Open Chat"
          onClick={() => {
            window.dispatchEvent(new CustomEvent('openChat'));
          }}
        >
          <MessageCircle size={28} className="text-white" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
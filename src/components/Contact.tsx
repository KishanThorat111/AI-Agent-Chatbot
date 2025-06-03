import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-bg-primary">
      <div className="container mx-auto px-4">
        <h2 
          className="text-3xl md:text-4xl font-bold text-center mb-16 font-poppins"
          data-aos="fade-up"
        >
          Contact <span className="gradient-text">Us</span>
        </h2>

        <div className="flex flex-col lg:flex-row gap-12">
          <div 
            className="lg:w-1/2"
            data-aos="fade-right"
          >
            <form className="glassmorphism p-8 rounded-lg">
              <div className="mb-6">
                <label htmlFor="contact-name" className="block mb-2 text-text-primary">Your Name</label>
                <input
                  type="text"
                  id="contact-name"
                  className="w-full bg-bg-tertiary border border-gray-700 rounded-md p-3 text-text-primary focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50 transition-all"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="contact-email" className="block mb-2 text-text-primary">Your Email</label>
                <input
                  type="email"
                  id="contact-email"
                  className="w-full bg-bg-tertiary border border-gray-700 rounded-md p-3 text-text-primary focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50 transition-all"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="contact-message" className="block mb-2 text-text-primary">Message</label>
                <textarea
                  id="contact-message"
                  rows={5}
                  className="w-full bg-bg-tertiary border border-gray-700 rounded-md p-3 text-text-primary focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50 transition-all resize-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full gradient-bg py-3 rounded-md text-white font-bold transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
            
            <p 
              className="text-text-secondary mt-6 text-center flex items-center justify-center gap-2"
              data-aos="fade-up"
            >
              Prefer chatting? Click the chat icon
              <span className="inline-block transform translate-y-1 animate-bounce">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 5v14M19 12l-7 7-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </p>
          </div>

          <div 
            className="lg:w-1/2"
            data-aos="fade-left"
          >
            <div className="glassmorphism p-8 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-6 font-poppins">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="gradient-bg p-3 rounded-full">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Phone</h4>
                    <p className="text-text-secondary">(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="gradient-bg p-3 rounded-full">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <p className="text-text-secondary">info@connorscleaningagency.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="gradient-bg p-3 rounded-full">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Address</h4>
                    <p className="text-text-secondary">123 Cleaning Street, Suite 101<br />San Francisco, CA 94107</p>
                  </div>
                </div>
              </div>
            </div>

            <div 
              className="h-72 rounded-lg overflow-hidden"
              data-aos="fade-up"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555098464!2d-122.50764020375188!3d37.75781499659348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1635704504259!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="Google Maps"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
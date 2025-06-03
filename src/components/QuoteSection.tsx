import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

const QuoteSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    serviceType: '',
    homeSize: '',
    phone: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // In a real app, this would submit the data to a backend
  };

  return (
    <section className="py-20 bg-bg-tertiary relative">
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/4108807/pexels-photo-4108807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 
          className="text-3xl md:text-4xl font-bold text-center mb-16 font-poppins"
          data-aos="fade-up"
        >
          Get Your <span className="gradient-text">Instant Quote</span>
        </h2>

        <div className="flex flex-col items-center justify-center mb-12">
          <button 
            className="gradient-bg py-4 px-8 rounded-full text-white font-bold flex items-center space-x-3 shadow-glow transition-all duration-300 transform hover:scale-105 pulse-animation"
            data-aos="fade-up"
            data-aos-delay="100"
            onClick={() => {
              // This would trigger the chat widget in a real app
              window.dispatchEvent(new CustomEvent('openChat'));
            }}
          >
            <MessageCircle size={24} />
            <span>Chat with AI</span>
          </button>
          <p 
            className="text-text-secondary mt-4 text-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Get an instant quote through our AI assistant, or fill out the form below
          </p>
        </div>

        {!isSubmitted ? (
          <form 
            onSubmit={handleSubmit} 
            className="max-w-2xl mx-auto glassmorphism p-8 rounded-lg"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="col-span-1">
                <label htmlFor="name" className="block mb-2 text-text-primary">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-bg-tertiary border border-gray-700 rounded-md p-3 text-text-primary focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50 transition-all"
                />
              </div>
              <div className="col-span-1">
                <label htmlFor="address" className="block mb-2 text-text-primary">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full bg-bg-tertiary border border-gray-700 rounded-md p-3 text-text-primary focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50 transition-all"
                />
              </div>
              <div className="col-span-1">
                <label htmlFor="serviceType" className="block mb-2 text-text-primary">Service Type</label>
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  required
                  className="w-full bg-bg-tertiary border border-gray-700 rounded-md p-3 text-text-primary focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50 transition-all"
                >
                  <option value="">Select a service</option>
                  <option value="residential">Residential Cleaning</option>
                  <option value="commercial">Commercial Cleaning</option>
                  <option value="deep">Deep Cleaning</option>
                  <option value="moveInOut">Move-In/Out Cleaning</option>
                  <option value="eco">Eco-Friendly Cleaning</option>
                  <option value="sanitization">Sanitization Services</option>
                </select>
              </div>
              <div className="col-span-1">
                <label htmlFor="homeSize" className="block mb-2 text-text-primary">Home Size</label>
                <input
                  type="text"
                  id="homeSize"
                  name="homeSize"
                  value={formData.homeSize}
                  onChange={handleChange}
                  placeholder="Sq. ft. or # of bedrooms"
                  required
                  className="w-full bg-bg-tertiary border border-gray-700 rounded-md p-3 text-text-primary focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50 transition-all"
                />
              </div>
              <div className="col-span-2">
                <label htmlFor="phone" className="block mb-2 text-text-primary">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-bg-tertiary border border-gray-700 rounded-md p-3 text-text-primary focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50 transition-all"
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-6 w-full gradient-bg py-3 rounded-md text-white font-bold transition-all duration-300 transform hover:scale-105"
            >
              Submit
            </button>
          </form>
        ) : (
          <div 
            className="max-w-2xl mx-auto glassmorphism p-8 rounded-lg text-center"
            data-aos="fade-up"
          >
            <h3 className="text-2xl font-semibold mb-4 font-poppins">Thank you!</h3>
            <p className="text-text-secondary mb-4">
              We've received your request and our AI assistant will reach out to you shortly with a customized quote.
            </p>
            <div className="w-20 h-20 mx-auto mb-4">
              <svg className="w-full h-full text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default QuoteSection;
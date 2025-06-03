import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import navLinks from '../data/navLinks';

const Footer: React.FC = () => {
  return (
    <footer className="bg-bg-tertiary pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 font-poppins">Quick Links</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a 
                    href={link.url} 
                    className="text-text-secondary hover:text-text-primary transition-colors duration-300"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6 font-poppins">Contact Info</h3>
            <ul className="space-y-3 text-text-secondary">
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@connorscleaningagency.com</li>
              <li>Address: 123 Cleaning Street, Suite 101<br />San Francisco, CA 94107</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-6 font-poppins">Follow Us</h3>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                className="bg-gray-800 p-3 rounded-full hover:bg-primary-600 transition-all duration-300 transform hover:scale-110"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={20} className="text-white" />
              </a>
              <a 
                href="https://instagram.com" 
                className="bg-gray-800 p-3 rounded-full hover:bg-primary-600 transition-all duration-300 transform hover:scale-110"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={20} className="text-white" />
              </a>
              <a 
                href="https://linkedin.com" 
                className="bg-gray-800 p-3 rounded-full hover:bg-primary-600 transition-all duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} className="text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-text-secondary">
          <p>© 2025 Connor's Cleaning Agency – Chat with us anytime!</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import QuoteSection from './components/QuoteSection';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Import AOS for animations
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    // Initialize AOS animation library
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    });

    // Update document title
    document.title = "Connor's Cleaning Agency";

    // Add Voiceflow chat widget script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = `
      (function(d, t) {
        var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
        v.onload = function() {
          window.voiceflow.chat.load({
            verify: { projectID: '683a35591e5229bfd26fa9dc' },
            url: 'https://general-runtime.voiceflow.com',
            versionID: 'production',
            voice: {
              url: "https://runtime-api.voiceflow.com"
            }
          });
        }
        v.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs"; 
        v.type = "text/javascript"; 
        s.parentNode.insertBefore(v, s);
      })(document, 'script');
    `;
    document.body.appendChild(script);

    // Add event listener for custom openChat event
    window.addEventListener('openChat', () => {
      if (window.voiceflow && window.voiceflow.chat) {
        window.voiceflow.chat.open();
      }
    });

    return () => {
      // Clean up
      document.body.removeChild(script);
      window.removeEventListener('openChat', () => {});
    };
  }, []);

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <QuoteSection />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
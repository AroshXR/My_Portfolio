import React from 'react'
import Navbar from './sections/navbar'
import Hero from './sections/Hero'
import { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import About from './sections/About';
import Projects from './sections/Projects';
import ContactMe from './sections/ContactMe';
import Footer from './sections/Footer';

function App() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex-grow">
        <Navbar />
        <Hero id="home" />
        <About id="about" />
        <Projects id="projects" />
        <ContactMe />
      </div>
      <Footer />

      {/* Scroll to Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300 z-50"
          aria-label="Scroll to top"
        >
          <i className="fas fa-arrow-up"></i>
        </button>
      )}
    </div>
  )
}

export default App
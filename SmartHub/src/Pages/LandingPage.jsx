import React, { useEffect, useState } from 'react'
import '../styles/LandingPage.css';
import Navbar from '../Components/Navbar';
import Home from '../Components/Home';
import AboutUs from '../Components/AboutUs';
import LearnWithUs from '../Components/LearnWithUs';
function LandingPage() {
    const [activeSection, setActiveSection] = useState('home');
    
      useEffect(() => {
        const handleScroll = () => {
          const sections = document.querySelectorAll('.section');
          let currentSection = 'home';
    
          sections.forEach((section) => {
            const rect = section.getBoundingClientRect(); // Get the section's position relative to the viewport
    
            // Check if the section is in the viewport at all
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
              section.classList.add('in-view');
              currentSection = section.getAttribute('id');
            } else {
              section.classList.remove('in-view');
            }
          });
    
          setActiveSection(currentSection);
        };
    
        // Call handleScroll on mount to ensure home is active and in view
        handleScroll();
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
    
  return (
    <>
        <Navbar activeSection={activeSection} />
      <div id="home" className="section">
        <Home />
      </div>
      <div id="about" className="section">
        <AboutUs />
      </div>
      <div id="auth" className="section">
        <LearnWithUs />
      </div>
      
    </>
  )
}

export default LandingPage

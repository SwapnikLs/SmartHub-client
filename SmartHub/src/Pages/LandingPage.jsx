import React, { useEffect, useState } from 'react'
import '../Components/LandingPageComponents/LandingPage.css';
import Navbar from '../Components/LandingPageComponents/Navbar/Navbar';
import LearnWithUs from '../Components/LandingPageComponents/LearnWithUs/LearnWithUs';
import AboutUs from '../Components/LandingPageComponents/AboutUs/AboutUs';
import Footer from '../Components/LandingPageComponents/Footer/Footer';
import Home from '../Components/LandingPageComponents/Home/Home';
function LandingPage() {
    const [activeSection, setActiveSection] = useState('home');

      useEffect(() => {
        const handleScroll = () => {
          const sections = document.querySelectorAll('.section');
          let currentSection = 'home';
    
          sections.forEach((section) => {
            const rect = section.getBoundingClientRect(); // Get the section's position relative to the viewport
            // Check if the section is in the viewport at all
            if (rect.top < window .innerHeight && rect.bottom >= 0) {
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
        <Home/>
      </div>
      <div id="about" className="section">
        <AboutUs />
      </div>
      <div id="learn" className="section">
        <LearnWithUs />
      </div>
      <Footer/>
    </>
  )
}

export default LandingPage

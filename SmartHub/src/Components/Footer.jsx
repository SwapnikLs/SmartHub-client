import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Logo Section */}
        <div className="footer-logo">
          <div className="logo-grid">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((_, i) => (
              <div key={i} className="diamond"></div>
            ))}
          </div>
        </div>

        {/* Middle Content Section */}
        <div className="footer-content">
          <h2 className="footer-title">SmartKnowledgeHub</h2>
          <div className="footer-links">
            <div className="footer-column">
              <h3>About Us</h3>
              <ul>
                <li>Mission</li>
                <li>Team</li>
                <li>Newsletter</li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Support</h3>
              <ul>
                <li>Contact</li>
                <li>Refund Policy</li>
                <li>FAQ’s</li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Social</h3>
              <ul>
                <li>Instagram</li>
                <li>LinkedIn</li>
                <li>YouTube</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>Copyright © SmartKnowledgeHub</p>
        <p>Terms of Service</p>
        <p className="back-to-top">Back to top ⬆</p>
      </div>
    </footer>
  );
}

export default Footer;

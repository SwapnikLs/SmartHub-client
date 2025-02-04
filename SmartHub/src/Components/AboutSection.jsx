import React from 'react'
import "../styles/AboutSection.css"
function AboutSection({head,desc}) {
  return (
    <div className="about-section">
          <h3>{head}</h3>
          <p>
            {desc}
          </p>
        </div>
  )
}

export default AboutSection

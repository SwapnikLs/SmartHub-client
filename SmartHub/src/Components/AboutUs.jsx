import React from "react";
import "../styles/AboutUs.css"; // Import the corresponding CSS file
import tracker from "../assets/tracker.png";
import search from "../assets/search.png";
import share from "../assets/share.png";
import analysis from "../assets/analytics.png";
import reward from "../assets/reward.png";
import Feature from "./Feature";
import AboutSection from "./AboutSection";
function AboutUs() {
  const featuresData = [
    {
      image: reward,
      desc: "Personalized Recommendation System"
    },
    {
      image: tracker,
      desc: "Progressive Reading Analytics"
    },
    {
      image: search,
      desc: "Advanced Search with Filters"
    },
    {
      image: share,
      desc: "Peer Resource Sharing"
    },
    {
      image: analysis,
      desc: "Admin Analytics Dashboard"
    }
  ];
  
  const aboutSections = [
    {
      head: "Our Story",
      desc: "In a fast-paced world, finding time to visit a library was a challenge for many youngsters. To make reading more accessible, our app introduced a feature allowing users to virtually rent books from various genres. No longer needing to leave their homes, readers can now enjoy a vast collection of books online, with just a few clicks. This feature has revolutionized the way young readers engage with books, making it easier than ever to explore new genres and stories without the hassle of traditional library visits."
    },
    {
      head: "Our Vision",
      desc: "To revolutionize the way people access and enjoy books by creating a seamless, digital library experience that breaks down geographical barriers and promotes a culture of continuous learning. Our goal is to make literature accessible to everyone, anytime, and anywhere, ensuring that readers, especially youngsters, have the power to explore endless genres through the convenience of virtual book rentals. We envision a world where knowledge is always at your fingertips, and the love for reading thrives without limits."
    },
    {
      head: "Our Intent",
      desc: "To bring the world of books right to your fingertips, transforming the traditional library experience into a modern, virtual adventure. With the power of online book rentals, we aim to break the barriers of time and space, allowing readers of all ages to explore countless genres from the comfort of their own homes. No more searching for libraries or waiting for a book to become available; our platform offers instant access to a vast collection, fostering a love for reading and making knowledge, stories, and imagination accessible to everyone, anywhere. Our mission is to create a seamless, digital space where the magic of books is just a click away."
    }
  ];
  
  return (
    <div className="about-container">
      {/* Header Section */}
      <header className="about-header">
        <h1>About</h1>
      </header>

      {/* Top Section */}
      <div className="top-section">
        {aboutSections.map((aboutS,index)=>{
          return <AboutSection key={index} head={aboutS.head} desc={aboutS.desc} />
        })}
      </div>

      {/* Middle Section */}
      <div className="other-sections">
        <h2>Offerings</h2>
        <div className="feature-row">
          {featuresData.map((feature,index)=>{
          return <Feature key={index} image={feature.image} desc={feature.desc} />
          })}
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

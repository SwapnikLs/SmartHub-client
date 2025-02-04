import React from 'react';
import '../styles/Home.css';
import Button from './Button';
import flipbook from "../assets/Flipbook.gif";

function Home() {
  return ( 
    <div className="home-container">

      < h1>Smart Knowledge Hub</h1 >
      <div className="content-wrapper">
        <div className="text-container">
          <h1>Your gateway to a world of knowledge – manage, explore, and cherish every book!</h1>
          <div>
          <Button text="Get Started" />
          </div>
        </div>
        <div className="image-container">
          <img src={flipbook} alt="Flipbook" width="500px" />
        </div>
      </div>
    </div>
  );
}

export default Home;

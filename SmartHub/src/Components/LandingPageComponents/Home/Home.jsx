import React from 'react';
import './Home.css';
import Button from '../../GlobalComponents/Button/Button';
import flipbook from "../../../assets/flipbook.gif";
import { NavLink, useParams } from 'react-router-dom';

function Home() {
  const params = useParams();
  return ( 
    <div className="home-container">

      < h1>Smart Knowledge Hub</h1 >
      <div className="content-wrapper">
        <div className="text-container">
          <h1>Your gateway to a world of knowledge – manage, explore, and cherish every book!</h1>
          <div>
            <NavLink to="/Explore"> <Button text="Get Started" /> </NavLink>
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

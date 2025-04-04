import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Carousel.css";
import CarouselButton from "../CarouselButton/CarouselButton";

function Carousel({ books,addTowishList }) {
  const carouselRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    if (isHovered) return; // Stop scrolling if hovered
    const interval = setInterval(() => {
      if (carouselRef.current) {
        if (
          carouselRef.  current.scrollLeft + carouselRef.current.clientWidth >=
          carouselRef.current.scrollWidth
        ) {
          carouselRef.current.scrollLeft = 0; // Reset to start
        } else {
          carouselRef.current.scrollLeft += carouselRef.current.offsetWidth;
        }
      }
    }, 3000); // Adjust the timing

    return () => clearInterval(interval);
  }, [isHovered]);

  const handleQuickView = (bookId) => {
      navigate(`/bookdetails?id=${bookId}`);
  };

  return (
    <div 
      className="carousel-wrapper"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Left and Right Buttons */}
      <button className="carousel-btn left-btn" onClick={() => {
        if (carouselRef.current) carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth;
      }}>
        &#10094;
      </button>

      <button className="carousel-btn right-btn" onClick={() => {
        if (carouselRef.current) carouselRef.current.scrollLeft += carouselRef.current.offsetWidth;
      }}>
        &#10095;
      </button>

      {/* Carousel */}
      <div className="carousel" ref={carouselRef}>
        {books.map((book, index) => (
          <div className="carousel-item" key={index}>
            <div className="carousel-card">
              {/* Front Side */}
              <div className="carousel-front">
                <img src={book.src} alt={book.alt} />
              </div>
              {/* Back Side */}
              <div className="carousel-back">
                <div className="button-container">
                  <CarouselButton text="Add to WishList" onClick={()=>addTowishList(book.id)} />
                  <CarouselButton text="Quick View" onClick={() => handleQuickView(book.id)} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;

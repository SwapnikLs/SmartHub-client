import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Components/GenresPageComponents/Genres.css";
import { useBooks } from "../Context/BookContext";
import "../Components/GenresPageComponents/Genres.css"
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  adaptiveHeight: false,
  centerMode: true,
  centerPadding: "0px"
};

const Genres = () => {
  const { genres } = useBooks();

  return (
    <div className="genre-container">
      {genres.map((category, index) => (
        <div key={index} className="genre-section">
          <h2 className="genre-title1">{category.genre}</h2>
          <Slider {...settings} className="slider">
            {category.books.map((book, bookIndex) => (
              <div key={bookIndex} className="book-item1">
                <div className="book-card1">
                  {/* Front Side (Book Cover) */}
                  <div className="book-front">
                    <img src={book.cover} alt={book.title} className="book-cover1" />
                  </div>
                  {/* Back Side (Buttons/Info) */}
                  <div className="book-back">
                    <div className="button-container">
                      <button className="book-button">Add to WishList</button>
                      <button className="book-button">Quick View</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      ))}
    </div>
  );
};

export default Genres;

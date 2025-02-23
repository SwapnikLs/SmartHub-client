import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import "../Components/GenresPageComponents/Genres.css";

const genres = {
  "Science Fiction": [
    {
      title: "Dune",
      author: "Frank Herbert",
      description: "A sci-fi epic set in a desert world.",
      cover: "https://i1.wp.com/www.tor.com/wp-content/uploads/2019/07/Dune-cover-1.jpg?resize=740%2C1117&type=vertical&quality=100&ssl=1"
    },
    {
      title: "Neuromancer",
      author: "William Gibson",
      description: "A cyberpunk masterpiece.",
      cover: "https://images.penguinrandomhouse.com/cover/700jpg/9781101536698"
    }
  ],
  "Fantasy": [
    {
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      description: "A journey through Middle-earth.",
      cover: "https://m.media-amazon.com/images/I/91b0C2YNSrL._SL1500_.jpg"
    },
    {
      title: "Harry Potter",
      author: "J.K. Rowling",
      description: "The story of a young wizard.",
      cover: "https://m.media-amazon.com/images/I/81YOuOGFCJL._SL1500_.jpg"
    }
  ]
};

const Genres = () => {
  const [hoveredBook, setHoveredBook] = useState(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true
  };

  return (
    <div className="carousel-container">
      {Object.entries(genres).map(([genre, books]) => (
        <div key={genre} className="genre-section">
          <h2 className="genre-title">{genre}</h2>
          <Slider {...settings} className="slider">
            {books.map((book, index) => (
              <div
                key={index}
                className="book-item"
                onMouseEnter={() => setHoveredBook(book)}
                onMouseLeave={() => setHoveredBook(null)}
              >
                <div className="book-card">
                  <img src={book.cover} alt={book.title} className="book-cover" />
                </div>
                {hoveredBook === book && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="book-popup"
                  >
                    <h3 className="book-title">{book.title}</h3>
                    <p className="book-author">by {book.author}</p>
                    <p className="book-description">{book.description}</p>
                  </motion.div>
                )}
              </div>
            ))}
          </Slider>
        </div>
      ))}
    </div>
  );
};

export default Genres;

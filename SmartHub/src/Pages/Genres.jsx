import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
    },
    
    {
      title: "Snow Crash",
      author: "Neal Stephenson",
      description: "A cyberpunk thriller about a virtual world.",
      cover: "https://www.isfdb.org/wiki/images/4/4a/BKTG17399.jpg"
    },
    {
    title: "Hunger Games",
    author: "Suzanne Collins",
    description: "A Survival Thriller with deathly games",
    cover: "https://media.npr.org/assets/bakertaylor/covers/t/the-hunger-games/9780545425117_custom-c220dca852341153703cf3b610bef0687c0ed7e7-s6-c30.jpg"
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
    },
    {
      title: "The Name of the Wind",
      author: "Patrick Rothfuss",
      description: "A lyrical fantasy novel of a young magician.",
      cover: "https://bestfantasyaudio.com/wp-content/uploads/2015/11/The-Name-of-the-Wind.jpg"
    },
    {
      title: "Mistborn",
      author: "Brandon Sanderson",
      description: "A world where the dark lord won.",
      cover: "https://i.cbc.ca/1.4053121.1491578126!/fileImage/httpImage/image.jpg_gen/derivatives/original_780/book-cover-mistborn-by-brandon-sanderson.jpg"
    }
  ],
  "Self-Help": [
    {
      title: "Atomic Habits",
      author: "James Clear",
      description: "A guide to building good habits and breaking bad ones.",
      cover: "https://m.media-amazon.com/images/I/91bYsX41DVL._SL1500_.jpg"
    },
    {
      title: "The 7 Habits of Highly Effective People",
      author: "Stephen R. Covey",
      description: "Timeless principles for personal and professional success.",
      cover: "https://m.media-amazon.com/images/I/71UypkUjStL.jpg"
    },
    {
      title: "The Power of Now",
      author: "Eckhart Tolle",
      description: "A guide to spiritual enlightenment.",
      cover: "https://is5-ssl.mzstatic.com/image/thumb/Publication4/v4/65/87/83/658783da-e7cd-eb8d-8498-a0d4a3acebda/source/1200x630bb.jpg"
    },
    {
      title: "Mindset",
      author: "Carol S. Dweck",
      description: "Explores the power of a growth mindset.",
      cover: "https://images.thenile.io/r1000/9781472139955.jpg"
    }
  ],
  "Psychological": [
    {
      title: "Thinking, Fast and Slow",
      author: "Daniel Kahneman",
      description: "A deep dive into human decision-making and biases.",
      cover: "https://d1cm35kbp068hs.cloudfront.net/ryu02uv7oi/cover.jpg"
    },
    {
      title: "The Lucifer Effect",
      author: "Philip Zimbardo",
      description: "Understanding how good people turn evil.",
      cover: "https://m.media-amazon.com/images/I/71HMyqG6MRL.jpg"
    },
    {
      title: "Predictably Irrational",
      author: "Dan Ariely",
      description: "The hidden forces that shape our decisions.",
      cover: "https://i.harperapps.com/covers/9780061854545/y450-274.jpg"
    },
    {
      title: "Influence: The Psychology of Persuasion",
      author: "Robert B. Cialdini",
      description: "Why people say 'yes' and how to apply it.",
      cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1608967434i/56419468.jpg"
    }
  ]
};

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
  return (
    <div className="carousel-container">
      {Object.entries(genres).map(([genre, books]) => (
        <div key={genre} className="genre-section">
          <h2 className="genre-title">{genre}</h2>
          <Slider {...settings} className="slider">
            {books.map((book, index) => (
              <div key={index} className="book-item">
                <div className="book-card">
                  <img src={book.cover} alt={book.title} className="book-cover" />
                </div>
                <div className="book-popup">
                  <h3 className="book-title">{book.title}</h3>
                  <p className="book-author">by {book.author}</p>
                  <p className="book-description">{book.description}</p>
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

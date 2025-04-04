import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../Components/ResultsPage/ResultsPage.css";
import CarouselButton from "../Components/GlobalComponents/CarouselButton/CarouselButton";
import { useNavigate } from "react-router-dom"; 
const ResultsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const searchQuery = params.get("query");
  
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (searchQuery) {
      fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.items) {
            const formattedBooks = data.items.map((book) => ({
              id: book.id,
              src: book.volumeInfo.imageLinks ?.thumbnail || "https://via.placeholder.com/150",
              alt: book.volumeInfo.title || "Book Cover",
              title: book.volumeInfo.title || "No Title Available",
              author: book.volumeInfo.authors?.join(", ") || "Unknown Author",
              category: book.volumeInfo.categories?.join(", ") || "Uncategorized",
              rating: book.volumeInfo.averageRating || "N/A",
              total: book.volumeInfo.pageCount || "N/A",
              available: book.accessInfo?.accessViewStatus === "FULL_PUBLIC_DOMAIN" ? "Yes" : "No",
              description: book.volumeInfo.description || "No Description Available",
            }));
            setBooks(formattedBooks);
          }
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching books:", error);
          setLoading(false);
        });
    }
  }, [searchQuery]);
  
  const handleQuickView = (book) => {
    const queryString = new URLSearchParams({
      title: book.title,
      author: book.author,
      category: book.category,
      rating: book.rating,
      total: book.total,
      available: book.available,
      description: book.description,
      src: book.src, 
      alt: book.alt || "Book Cover"
    }).toString();
  
    navigate(`/bookdetails?${queryString}`);
  
};
  return (
    <div className="results-container">
      <h1 className="results-heading">Search Results for: "{searchQuery}"</h1>
      {loading ? (
        <p className="loading-text">Loading...</p>
      ) : books.length > 0 ? (
        <div className="book-list">
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
                  <CarouselButton text="Add to WishList" />
                  <CarouselButton text="Quick View" onClick={() => handleQuickView(book)} />
                </div>
              </div>
            </div>
          </div>
        ))}
        </div>
      ) : (
        <p className="no-results-text">No results found.</p>
      )}
    </div>
  );
};

export default ResultsPage;

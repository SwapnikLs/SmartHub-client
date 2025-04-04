import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserDashboard } from "../../../../Context/UserDashboardContext";
import { getDashboardBooks } from "../../../../Service/getDashboardBooks";
import "./MyLibrary.css";

function MyLibrary() {
  const { myLibrary, setMyLibrary, setDashboardBooks } = useUserDashboard();
  const navigate = useNavigate();

  // Function to determine progress bar color
  const getProgressBarColor = (percentage) => {
    if (percentage <= 25) return "#FF6347";
    if (percentage <= 50) return "#FFA500";
    if (percentage <= 75) return "#32CD32";
    return "#4CAF50";
  };

  const handleBookClick = (bookId) => {
    navigate(`/bookdetails?id=${bookId}`);
  };

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const books = await getDashboardBooks();
        if (!books || books.length === 0) {
          setMyLibrary([]); // Set an empty library if no books are found
          return;
        }

        setDashboardBooks(books);
        setMyLibrary(
          books.map((book) => ({
            id: book.id,
            title: book.title || "Untitled Book",
            image: book.image || "/default-cover.jpg", // Fallback to a default image
            percentage: book.percentage >= 0 && book.percentage <= 100 ? book.percentage : 0, // Ensure percentage is valid
            author: book.author || "Unknown Author",
          }))
        );
      } catch (error) {
        console.error("Failed to fetch books:", error);
        setMyLibrary([]); // Set an empty library in case of an error
      }
    };

    fetchBooks();
  }, [setDashboardBooks, setMyLibrary]);

  return (
    <div className="library-container">
      <h1 className="library-title">My Library</h1>
      <div className="book-list">
        {myLibrary.length === 0 ? (
          <div className="no-books-container">
            <p className="no-books-message">No books found in your library.</p>
            <button className="browse-button" onClick={() => navigate("/browse")}>
              Browse
            </button>
          </div>
        ) : (
          myLibrary.map((book, index) => (
            <div
              key={book.id || `book-${index}`}
              className="library-book-item"
            >
              <img
                className="library-book-cover"
                width="200px"
                src={book.image}
                alt={book.title || "Book cover"}
                onClick={() => handleBookClick(book.id)}
                onError={(e) => (e.target.src = "/default-cover.jpg")} // Fallback for broken image links
              />
              <h2 className="library-book-title">{book.title}</h2>
              <p className="library-book-author">{book.author}</p>
              <div
                className="reading-progress"
                onClick={() => handleBookClick(book.id)}
              >
                <div
                  className="reading-progress-bar"
                  style={{
                    width: `${Math.min(Math.max(book.percentage, 0), 100)}%`, // Clamp percentage between 0 and 100
                    backgroundColor: getProgressBarColor(book.percentage),
                  }}
                ></div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default MyLibrary;

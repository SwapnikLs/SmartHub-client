import React from "react";
import { useBooks } from "../../../../Context/BookContext";
import "./MyLibrary.css";

function MyLibrary() {
  const { borrowedBooks } = useBooks();

  // Function to determine progress bar color
  const getProgressBarColor = (progress) => {
    if (progress <= 25) return "#FF6347"; // Red for low progress
    if (progress <= 50) return "#FFA500"; // Orange for medium progress
    if (progress <= 75) return "#32CD32"; // Lime Green for high progress
    return "#4CAF50"; // Green for complete progress
  };

  return (
    <div className="library-container">
      <h1 className="library-title">My Library</h1>
      <div className="book-list">
        {borrowedBooks.map((book) => (
          <div key={book.id} className="library-book-item">
            <img className="library-book-cover" width="200px" src={book.cover} alt={book.title} />
            <h2 className="library-book-title">{book.title}</h2>
            <p className="library-book-author">{book.author}</p>
            <div className="reading-progress">
              <div
                className="reading-progress-bar"
                style={{
                  width: `${book.progress}%`,
                  backgroundColor: getProgressBarColor(book.progress),
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyLibrary;

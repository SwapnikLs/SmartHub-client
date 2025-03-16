import React, { useContext } from "react";
import { useBooks } from "../../../../Context/BookContext"; // Adjust the import path if needed
import { ArrowRight } from 'lucide-react'; // Import the Lucide ArrowRight icon
import './CurrentlyReading.css'; // Import the CSS file

const CurrentlyReading = () => {
  const { currentBook } = useBooks(); // Assuming currentBook is available in the context

  return (
    <div className="current-reading-container">
      <div className="inner-current-reading-container">
        <div className="left-side">
          <h1>{currentBook.title}</h1>
          <div className="continue-reading">
            <p>Currently Reading</p>
            <ArrowRight className="arrow-icon" /> {/* Use the Lucide ArrowRight icon */}
          </div>
        </div>
        <div className="right-side">
          <img
            className="book-image"
            src={currentBook.cover}
            alt={currentBook.title} // Use the book title as alt text
          />
        </div>
      </div>
    </div>
  );
};

export default CurrentlyReading;

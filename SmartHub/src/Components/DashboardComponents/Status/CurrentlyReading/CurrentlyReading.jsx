import React from "react";
import { ArrowRight } from "lucide-react"; // Import the Lucide ArrowRight icon
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./CurrentlyReading.css"; // Import the CSS file
import { useUserDashboard } from "../../../../Context/UserDashboardContext";
import { ReturnBook } from "../../../../Service/BorrowApi";

const CurrentlyReading = () => {
  const { currentBook } = useUserDashboard(); // Destructure returnBook
  const navigate = useNavigate(); // Initialize navigate

  // ✅ Handle missing book safely
  const bookTitle = currentBook?.title || "";
  const bookImage = currentBook?.image || "";
  const bookId = currentBook?.id || ""; // Get book ID

  const handleRedirect = () => {
    if (bookId) {
      navigate(`/bookdetails?id=${bookId}`);
    }
  };

  const handleReturnBook = async () => { // Make the function asynchronous
    if (bookId) {
      await ReturnBook(bookId); // Call ReturnBook with the book ID
    }
  };

  return (
    <div className="current-reading-container">
      <div className="inner-current-reading-container">
        <div className="left-side" onClick={handleRedirect}> {/* Add onClick */}
          <h1>{bookTitle || "No Book Selected"}</h1> {/* ✅ Display fallback text */}
          <div className="continue-reading">
            <p>Currently Reading</p>
            <ArrowRight className="arrow-icon" />
          </div>
        </div>
        <div className="right-side">
          {bookImage ? (
            <img
              className="book-image"
              src={bookImage}
              alt={bookTitle || "No Book Image"}
              onClick={handleRedirect} // Add onClick
            />
          ) : (
            <p className="no-image-message">No cover available</p> // ✅ Show message if no image
          )}
        </div>
      </div>
    </div>
  );
};

export default CurrentlyReading;

import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "../Components/BookDetailsComponents/BookDetails.css";
import Button from "../Components/GlobalComponents/Button/Button";

const BookDetails = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const book = {
    title: searchParams.get("title") || "No Title",
    author: searchParams.get("author") || "Unknown",
    category: searchParams.get("category") || "Genre Not Available",
    rating: searchParams.get("rating") || "N/A",
    total: searchParams.get("total") || "N/A",
    available: searchParams.get("available") || "N/A",
    description: searchParams.get("description") || "No description available.",
    src: searchParams.get("src"),
    alt: searchParams.get("alt") || "Book Cover",
  };

  const [reviews, setReviews] = useState([
    { name: "Alice", comment: "Amazing book! A must-read." },
    { name: "Bob", comment: "Loved the plot twists!" },
  ]);
  const [newReview, setNewReview] = useState("");
  const [reviewerName, setReviewerName] = useState("");

  const handleAddReview = () => {
    if (newReview.trim() && reviewerName.trim()) {
      setReviews([...reviews, { name: reviewerName, comment: newReview }]);
      setNewReview("");
      setReviewerName("");
    }
  };

  return (
    <div className="book-details-container">
      {/* Back Button */}
      <div className="back-button-container" onClick={() => navigate(-1)}>
        <Button text="⬅ Back" />
      </div>

      <div className="book-header">
        <div className="book-info">
          <h1 className="book-title">{book.title}</h1>
          <p className="book-author">By {book.author}</p>
          <p className="book-category">{book.category} ⭐ {book.rating}/5</p>
          <p className="book-availability">
            Total: <strong>{book.total}</strong> | Available: <strong>{book.available}</strong>
          </p>
          <p className="book-description">{book.description}</p>
          <Button text="Borrow this book" />
        </div>
        <div className="book-cover">
          <img src={book.src} alt={book.alt} />
        </div>
      </div>

      <div className="book-footer">
        <div className="reviews-section">
          <h2 className="reviews-title">Reviews</h2>
          <div className="reviews-list">
            {reviews.map((review, index) => (
              <p key={index}>
                <strong>{review.name}:</strong> {review.comment}
              </p>
            ))}
          </div>
          <div className="review-form">
            <input
              type="text"
              placeholder="Your Name"
              value={reviewerName}
              onChange={(e) => setReviewerName(e.target.value)}
            />
            <textarea
              placeholder="Write a review..."
              value={newReview}
              onChange={(e) => setNewReview(e.target.value)}
            />
            <Button text="Submit Review" onClick={handleAddReview} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;

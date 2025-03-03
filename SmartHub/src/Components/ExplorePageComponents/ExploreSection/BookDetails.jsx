import React, { useState } from "react";
import "./ExploreSection.css";
import image5 from "../../../assets/5.jpg";
import Button from "../../GlobalComponents/Button/Button";

const BookDetails = () => {
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
      <div className="book-header">
        <div className="book-info">
          <h1>Origin</h1>
          <p className="author">By Dan Brown</p>
          <p className="category">Thriller / Suspense ⭐ 4.5/5</p>
          <p>
            Total books: <strong>100</strong> Available books: <strong>42</strong>
          </p>
          <p className="description">
            Origin is a 2017 mystery-thriller novel by American author Dan
            Brown. It is the fifth installment in the Robert Langdon series,
            following previous bestsellers such as The Da Vinci Code and Angels
            & Demons.
          </p>
          <Button text="Borrow this book" />
        </div>
        <div className="book-cover">
          <img src={image5} alt="Origin Book" />
        </div>
      </div>
      <div className="book-footer">
        <div className="book-footer-reviews">
          <h2 className="reviews-heading">Reviews</h2>
          <div className="reviews-container">
            {reviews.map((review, index) => (
              <p key={index}>
                <strong>{review.name}:</strong> {review.comment}
              </p>
            ))}
          </div>
          <div className="star-rating">
            <input
              className="review-input"
              type="text"
              placeholder="Your Name"
              value={reviewerName}
              onChange={(e) => setReviewerName(e.target.value)}
            />
            <textarea
              className="review-input"
              placeholder="Write a review..."
              value={newReview}
              onChange={(e) => setNewReview(e.target.value)}
            />
            <div className="x">
              <Button text="Submit Review" onClick={handleAddReview} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default BookDetails;

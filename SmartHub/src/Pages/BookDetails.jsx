import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "../Components/BookDetailsComponents/BookDetails.css";
import Button from "../Components/GlobalComponents/Button/Button";
import Modal from "../Components/ProfilePageComponents/Modal/Modal";
import { ViewBook } from "../Service/QuickViewBook";
import { addToWishList, BorrowBook, ReturnBook } from "../Service/BorrowApi";

const BookDetails = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [book, setBook] = useState({});
  const [bookId, setBookId] = useState(null);
  const [borrowed, setBorrowed] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");
  const [reviews, setReviews] = useState([
    { name: "Alice", comment: "Amazing book! A must-read." },
    { name: "Bob", comment: "Loved the plot twists!" },
  ]);
  const [newReview, setNewReview] = useState("");
  const [reviewerName, setReviewerName] = useState("");

  useEffect(() => {
    const id = searchParams.get("id");
    if (id) {
      setBookId(id);
      ViewBook(id).then((data) => {
        setBook(data);
        setBorrowed(data.borrowed);
      });
    }
  }, [searchParams]);

  const borrowBook = useCallback((bookId) => {
    if (!bookId) return;
    BorrowBook(bookId)
      .then(() => {
        setMessage("Borrowed Book");
        setBorrowed(true);
        setShowModal(true);
        setTimeout(() => 
          {
            setShowModal(false)
            navigate("/dashboard");
          }
        , 2000);
      })
      .catch(error => console.log("Network error:", error));
  }, []);

  const returnBook = useCallback((bookId) => {
    if (!bookId) return;
    ReturnBook(bookId)
      .then(() => {
    setMessage("Returned Book");
    setBorrowed(false);
    setShowModal(true);
    setTimeout(() => setShowModal(false), 2000);
      })
      .catch(error => console.log("Network error:", error));
  }, []);

  const addToWishlist = useCallback((bookId) => {
    if (!bookId) return;
    addToWishList(bookId)
      .then(() => {
        setMessage("Added to Wishlist");
        setShowModal(true);
        setTimeout(() => {
          setShowModal(false);
          navigate("/dashboard");
        }, 2000);
      })
      .catch(error => console.error("❌ Error adding to wishlist:", error));
  }, [navigate]);

  const handleAddReview = () => {
    if (newReview.trim() && reviewerName.trim()) {
      setReviews([...reviews, { name: reviewerName, comment: newReview }]);
      setNewReview(""); 
      setReviewerName("");
    }
  };

  return (
    <div className="book-details-container">
      <div className="back-button-container" onClick={() => navigate(-1)}>
        <Button text="⬅ Back" />
      </div>
      <div className="book-header">
        <div className="book-info">
          <h1 className="book-title">{book.title}</h1>
          <p className="book-author">By {book.author}</p>
          <p className="book-category">{book.category} ⭐ {book.rating}/5</p>
          <p className="book-description">{book.description}</p>
          <div className="book-details-button-container">
            {!borrowed ? (
              <>
                <div onClick={() => borrowBook(bookId)}>
                  <Button text="Borrow this book" />
                </div>
                <div onClick={() => addToWishlist(bookId)}>
                  <Button text="Add to Wishlist" />
                </div>
              </>
            ) : (
              <>
              <div onClick={() => returnBook(bookId)}>
                <Button text="Return this book" />
              </div>
                <div  onClick={() => navigate(`/view?id=${bookId}`)}>
                  <Button text="Open Book" />
                </div>
              </>
            )}
          </div>
        </div>
        <div className="book-cover">
          <img src={book.image} alt={book.alt} />
        </div>
      </div>
      <div className="book-footer">
        <div className="reviews-section">
          <h2 className="reviews-title">Reviews</h2>
          <div className="reviews-list">
            {reviews.map((review, index) => (
              <p key={index}><strong>{review.name}:</strong> {review.comment}</p>
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
      <Modal show={showModal} message={message} />
    </div>
  );
};

export default BookDetails;
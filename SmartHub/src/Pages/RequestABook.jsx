import React, { useState } from "react";
import "../Components/RequestABook/RequestABook.css"; // Import the CSS file for styling
import Button from "../Components/GlobalComponents/Button/Button";

const RequestABook = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "",
    reason: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Book Request Submitted:", formData);
    alert("Your request has been submitted!");
  };

  return (
    <div className="request-book-container">
      <h2>Request a Book</h2>
      <form onSubmit={handleSubmit}>
        <label>Book Title:</label>
        <input type="text" name="title" value={formData.title} onChange={handleChange} required />

        <label>Author:</label>
        <input type="text" name="author" value={formData.author} onChange={handleChange} required />

        <label>Genre:</label>
        <input type="text" name="genre" value={formData.genre} onChange={handleChange} required />

        <label>Reason for Request:</label>
        <textarea name="reason" value={formData.reason} onChange={handleChange} required></textarea>

        <label>Your Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <div className="request-book-submit"><Button text="Submit"/></div>
      </form>
    </div>
  );
};

export default RequestABook;
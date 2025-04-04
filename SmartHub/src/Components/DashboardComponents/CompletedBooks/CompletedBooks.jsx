import React from 'react';
import { useBooks } from '../../../Context/BookContext';  // Adjust the import path if needed
import './CompletedBooks.css';
import { useUserDashboard } from '../../../Context/UserDashboardContext';

const CompletedBooks = () => {
  const { completed } = useUserDashboard();  // Fetch completed books from the useBooks context

  return (
    <div className="completed-books-container">
      <h2>📚 Completed Books</h2>
      <div className="completed-book-list">
        {completed.map((book, index) => (
          <div key={index} className="completed-book-card">
            <img src={book.cover} alt={book.title} className="completed-book-cover" />
            <div className="completed-book-info">
              <h3 className="completed-book-title">{book.title}</h3>
              <p className="completed-book-author">by {book.author}</p>
            </div>
            <div className="completed-book-days">{book.daysTaken} Days</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompletedBooks;

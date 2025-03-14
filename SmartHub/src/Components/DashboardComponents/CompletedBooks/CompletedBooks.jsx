import React from 'react';
import './CompletedBooks.css';

const completedBooks = [
  {
    id: 1,
    title: "The Alchemist",
    author: "Paulo Coelho",
    cover: "https://example.com/alchemist.jpg",
    daysTaken: 10
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    cover: "https://example.com/atomic-habits.jpg",
    daysTaken: 15
  },
  {
    id: 3,
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    cover: "https://example.com/rich-dad.jpg",
    daysTaken: 7
  }
];

const CompletedBooks = () => {
  return (
    <div className="completed-books-container">
      <h2>📚 Completed Books</h2>
      <div className="completed-book-list">
        {completedBooks.map((book) => (
          <div key={book.id} className="completed-book-card">
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

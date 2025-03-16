import React from 'react';
import { FaClock, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';
import './OverDues.css';
import { useBooks } from '../../../Context/BookContext';

const statusStyles = {
  OVERDUE: { color: '#D9534F', icon: <FaExclamationTriangle />, label: 'Overdue' },
  PENDING: { color: '#F0AD4E', textColor: '#8A6D3B', icon: <FaClock />, label: 'Pending' },
  SCHEDULED: { color: '#5BC0DE', textColor: '#31708F', icon: <FaClock />, label: 'Scheduled' },
  PAID: { color: '#5CB85C', textColor: '#3C763D', icon: <FaCheckCircle />, label: 'Paid' },
};

const OverdueTable = () => {
  const { borrowedBooks } = useBooks(); // Accessing books from context

  const getDaysOverdue = (dueDate) => {
    const due = new Date(dueDate);
    const today = new Date();
    const diffTime = today - due;
    return diffTime > 0 ? Math.ceil(diffTime / (1000 * 60 * 60 * 24)) : '-';
  };

  // Calculate summary counts
  const summary = borrowedBooks.reduce(
    (acc, book) => {
      acc[book.status] = (acc[book.status] || 0) + 1;
      return acc;
    },
    { OVERDUE: 0, PENDING: 0, SCHEDULED: 0, PAID: 0 }
  );

  return (
    <div className="container1">
      {/* Summary Section */}
      <div className="summary">
        <span className="summary-item" style={{ color: statusStyles.OVERDUE.color }}>
          Overdue: {summary.OVERDUE}
        </span>
        <span className="summary-item" style={{ color: statusStyles.PENDING.color }}>
          Pending: {summary.PENDING}
        </span>
        <span className="summary-item" style={{ color: statusStyles.SCHEDULED.color }}>
          Scheduled: {summary.SCHEDULED}
        </span>
        <span className="summary-item" style={{ color: statusStyles.PAID.color }}>
          Paid: {summary.PAID}
        </span>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Borrow Date</th>
            <th>Due Date</th>
            <th>Status</th>
            <th>Book</th>
            <th>Days Overdue</th>
          </tr>
        </thead>
        <tbody>
          {borrowedBooks.map((book, index) => {
            const borrowDate = new Date(book.borrowDate);
            const dueDate = new Date(book.dueDate);
            const daysOverdue = getDaysOverdue(dueDate);
            const isOverdue = daysOverdue !== '-';
            const status = statusStyles[book.status] || { color: '#ccc', textColor: '#000', label: book.status };

            return (
              <tr key={index} className={isOverdue ? 'overdueRow' : ''}>
                <td>{borrowDate.toDateString()}</td>
                <td>{dueDate.toDateString()}</td>
                <td>
                  <span className="status" style={{ backgroundColor: status.color, color: status.textColor || 'white' }}>
                    {status.label} {status.icon}
                  </span>
                </td>
                <td className="bookInfo">
                  {book.cover && <img src={book.cover} alt={book.title} className="bookImage" />}
                  <span>{book.title}</span>
                </td>
                <td>{isOverdue ? `${daysOverdue} days overdue` : '-'}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default OverdueTable;

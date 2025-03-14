import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faBookmark, faBookOpen } from '@fortawesome/free-solid-svg-icons';
import './BooksStats.css';

function BooksStats() {
  return (
    <div className="books-stats-box">
      <h2>📚 Books Stats</h2>
      <div className="stats">
        <div className="stat-item">
          <div className="icon-box">
            <FontAwesomeIcon icon={faBookOpen} className="stat-icon" />
          </div>
          <div className="text-box">
            <h3>Reading Books</h3>
            <p>5</p>
          </div>
        </div>
        <div className="divider"></div>

        <div className="stat-item">
          <div className="icon-box">
            <FontAwesomeIcon icon={faBookmark} className="stat-icon" />
          </div>
          <div className="text-box">
            <h3>Read Books</h3>
            <p>12</p>
          </div>
        </div>
        <div className="divider"></div>

        <div className="stat-item">
          <div className="icon-box">
            <FontAwesomeIcon icon={faBook} className="stat-icon" />
          </div>
          <div className="text-box">
            <h3>Total Books</h3>
            <p>17</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BooksStats;

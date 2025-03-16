import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faBookmark, faBookOpen } from '@fortawesome/free-solid-svg-icons';
import './UserStats.css';
import { useBooks } from '../../../../Context/BookContext';

function UserStats() {
 
  const {userStats} = useBooks();
  return (
    <div className="books-stats-box">
      <h2>📚 Books Stats</h2>
      <div className="stats">
        {/* Reading Books */}
        <div className="stat-item">
          <div className="icon-box">
            <FontAwesomeIcon icon={faBookOpen} className="stat-icon" />
          </div>
          <div className="text-box">
            <h3>Reading Books</h3>
            <p>{userStats.readingBooks}</p>
          </div>
        </div>
        <div className="divider"></div>

        {/* Read Books */}
        <div className="stat-item">
          <div className="icon-box">
            <FontAwesomeIcon icon={faBookmark} className="stat-icon" />
          </div>
          <div className="text-box">
            <h3>Read Books</h3>
            <p>{userStats.readBooks}</p>
          </div>
        </div>
        <div className="divider"></div>

        {/* Total Books */}
        <div className="stat-item">
          <div className="icon-box">
            <FontAwesomeIcon icon={faBook} className="stat-icon" />
          </div>
          <div className="text-box">
            <h3>Total Books</h3>
            <p>{userStats.totalBooks}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserStats;

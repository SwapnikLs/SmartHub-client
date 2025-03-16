import React from 'react';
import Carousel from '../../GlobalComponents/Carousel/Carousel';

function SmartPicks({ books }) {
  return (
    <div className="Carousel">
      <div className="all-books-section">
        <h3 className='book-title'>Smart Picks</h3>
      </div>
      <Carousel books={books} />
    </div>
  );
}

export default SmartPicks;

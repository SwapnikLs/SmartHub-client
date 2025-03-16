import React from 'react';
import Carousel from '../../GlobalComponents/Carousel/Carousel';

function TopPicks({ books }) {
  return (
    <div className="Carousel">
      <div className="all-books-section">
        <h3 className='book-title'>Top Picks</h3>
      </div>
      <Carousel books={books} />
    </div>
  );
}

export default TopPicks;

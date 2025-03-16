import React from 'react';
import Carousel from '../../GlobalComponents/Carousel/Carousel';

function ContinueReading({ books }) {
  return (
    <div className="Carousel">
      <div className="all-books-section">
        <h3 className='book-title'>Continue Reading</h3>
      </div>
      <Carousel books={books} />
    </div>
  );
}

export default ContinueReading;

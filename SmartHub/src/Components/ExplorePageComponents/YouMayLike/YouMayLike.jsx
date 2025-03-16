import React from 'react';
import Carousel from '../../GlobalComponents/Carousel/Carousel';

function YouMayLike({ books }) {
  return (
    <div className="Carousel">
      <div className="all-books-section">
        <h3 className='book-title'>You May Like</h3>
      </div>
      <Carousel books={books} />
    </div>
  );
}

export default YouMayLike;

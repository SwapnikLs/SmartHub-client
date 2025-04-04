import React from 'react';
import Carousel from '../../GlobalComponents/Carousel/Carousel';

function ContinueReading({ books,addToWishList }) {
  return (
    <div className="Carousel">
      <div className="all-books-section">
        <h3 className='book-title'>Continue Reading</h3>
      </div>
      <Carousel books={books} addToWishList={addToWishList} />
    </div>
  );
}

export default ContinueReading;

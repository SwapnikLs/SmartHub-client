import React from 'react';
import TopPickCarousel from '../../GlobalComponents/Carousel/Carousel';
import './TrendingBooks.css';

function TrendingBooks({books}) {

  return (
    <div className='explore-trending'>
      <div className='Carousel'>
        <div className='all-books-section'>
          <h3 className='book-title'>Trending</h3>
        </div>
        <TopPickCarousel books={books} />
      </div>
    </div>
  );
}

export default TrendingBooks;

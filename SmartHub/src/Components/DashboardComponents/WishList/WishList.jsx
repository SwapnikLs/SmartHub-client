import React from 'react';
import './WishList.css';

const products = [
  { id: 1, image: 'https://m.media-amazon.com/images/I/91bYsX41DVL.jpg' },
  { id: 2, image: 'https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg' },
  { id: 3, image: 'https://m.media-amazon.com/images/I/71QKQ9mwV7L.jpg' },
  { id: 4, image: 'https://m.media-amazon.com/images/I/91bYsX41DVL.jpg' },
  { id: 5, image: 'https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg' },
  { id: 6, image: 'https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg' },
  { id: 7, image: 'https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg' },
  { id: 8, image: 'https://m.media-amazon.com/images/I/91bYsX41DVL.jpg' },
];

const WishList = () => {
  return (
    <div className="favorites-container">
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt="Product" className="product-image" />
            <button className="borrow-btn">Borrow Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishList;

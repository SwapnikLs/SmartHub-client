import React, { useContext } from 'react';
import './WishList.css';
import {  useBooks } from '../../../Context/BookContext'; // Assuming you have the context

const WishList = () => {
  const { wishList } = useBooks();; // Fetch wishlist from context

  return (
    <div className="favorites-container">
      <h2 className="wishlist-heading">Wishlist</h2>
      <div className="product-grid">
        {wishList.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.cover} alt={product.title} className="product-image" />
            <h3 className="product-title">{product.title}</h3>
            <p className="product-author">By {product.author}</p>
            <button className="borrow-btn">Borrow Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishList;

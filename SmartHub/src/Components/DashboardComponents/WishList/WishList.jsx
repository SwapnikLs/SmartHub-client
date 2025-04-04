import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './WishList.css';
import { useUserDashboard } from '../../../Context/UserDashboardContext';
import { removeFromWishList } from '../../../Service/BorrowApi'; // Import the API function

const WishList = () => {
  const { wishList, setWishList } = useUserDashboard(); // Fetch and update wishlist from context
  const navigate = useNavigate(); // Initialize navigate

  const handleRemove = async (productId) => {
    try {
      await removeFromWishList(productId); // Call the API to remove the item
      setWishList((prevList) => prevList.filter((item) => item.id !== productId)); // Update the wishlist locally
    } catch (error) {
      console.error('Failed to remove item from wishlist:', error);
    }
  };

  return (
    <div className="favorites-container">
      <h2 className="wishlist-heading">Wishlist</h2>
      <div className="product-grid">
        {wishList.map((product) => (
          <div 
            key={product.id} 
            className="product-card" 
            onClick={() => navigate(`/bookdetails?id=${product.id}`)} // Add onClick handler
          >
            <img src={product.image} alt={product.title} className="product-image" />
            <h3 className="product-title">{product.title}</h3>
            <p className="product-author">By {product.author}</p>
            <button 
              className="remove-btn" 
              onClick={(e) => {
                e.stopPropagation(); // Prevent triggering the card's onClick
                handleRemove(product.id); // Call the remove handler
              }}
            >
              Remove from Wishlist
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishList;

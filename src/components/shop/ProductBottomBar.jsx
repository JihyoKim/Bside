import React from 'react';
import './ProductBottomBar.css';

const ProductBottomBar = ({ 
  isWishlist, 
  onWishlistToggle, 
  onCartClick, 
  onPurchaseClick, 
  soldOut 
}) => {
  return (
    <div className="product-bottom-bar">
      <div className="bottom-bar-content">
        {/* 찜 버튼 */}
        <button 
          className={`wishlist-button ${isWishlist ? 'active' : ''}`}
          onClick={onWishlistToggle}
        >
          <span className="heart-icon">
            {isWishlist ? '♥' : '♡'}
          </span>
        </button>

        {/* 장바구니 버튼 */}
        <button 
          className="cart-button"
          onClick={onCartClick}
          disabled={soldOut}
        >
          장바구니
        </button>

        {/* 구매하기 버튼 */}
        <button 
          className={`purchase-button ${soldOut ? 'sold-out' : ''}`}
          onClick={onPurchaseClick}
          disabled={soldOut}
        >
          {soldOut ? '품절' : '구매하기'}
        </button>
      </div>
    </div>
  );
};

export default ProductBottomBar;
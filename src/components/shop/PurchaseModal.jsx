import React, { useState } from 'react';
import './PurchaseModal.css';

const PurchaseModal = ({ product, onClose, onConfirm }) => {
  const [quantity, setQuantity] = useState(1);

  const handleConfirm = () => {
    onConfirm({ quantity });
  };

  return (
    <div className="purchase-modal-overlay" onClick={onClose}>
      <div className="purchase-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>구매하기</h3>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        
        <div className="product-summary">
          <img src={product.image} alt={product.name} />
          <div className="product-info">
            <h4>{product.name}</h4>
            <p>₩ {product.price.toLocaleString()}</p>
          </div>
        </div>

        <div className="quantity-selector">
          <label>수량</label>
          <div className="quantity-controls">
            <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
            <span>{quantity}</span>
            <button className=" guide" onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>
        </div>

        <div className="modal-footer">
          <div className="total-price">
            총 ₩ {(product.price * quantity).toLocaleString()}
          </div>
          <button className="confirm-button guide" onClick={handleConfirm}>
            구매하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default PurchaseModal;
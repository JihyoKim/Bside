import React from 'react';
import './FloatingAddButton.css';

const FloatingAddButton = ({ onClick, bgColor = '#cd3134', lineColor = '#fff' }) => {
  return (
    <button
      className="floating-add-btn guide"
      onClick={onClick}
      style={{ backgroundColor: bgColor }}
    >
      <span
        className="plus-line"
        style={{ backgroundColor: lineColor }}
      />
    </button>
  );
};

export default FloatingAddButton;

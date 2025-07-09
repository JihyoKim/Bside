import React from 'react';
import header from '../assets/header.png';
import './Header.css';

const Header = () => {
  return (
    <header className="fixed-header">
      <h1 className="logo">
        <img className="tempImgTop" src={header} alt="Header" />
      </h1>
    </header>
  );
};

export default Header;

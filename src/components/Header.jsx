import React, { useEffect, useState } from 'react';
import header from '../assets/header.png';
import './Header.css';

const Header = () => {
  const [dynamicStyle, setDynamicStyle] = useState({});

  useEffect(() => {
    const updatePosition = () => {
      const root = document.getElementById('root');
      if (root) {
        const rect = root.getBoundingClientRect();
        setDynamicStyle({
          left: `${rect.left}px`,
          width: `${rect.width}px`,
        });
      }
    };

    updatePosition();
    window.addEventListener('resize', updatePosition);

    return () => {
      window.removeEventListener('resize', updatePosition);
    };
  }, []);

  return (
    <header className="fixed-header" style={dynamicStyle}>
      <h1 className="logo">
        <img className="tempImgTop" src={header} alt="Header" />
      </h1>
    </header>
  );
};

export default Header;

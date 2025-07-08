import React, { useEffect, useState } from 'react';
import header from '../assets/header.png';
import './Header.css';

const Header = () => {
  const [style, setStyle] = useState({});

  useEffect(() => {
    const updatePosition = () => {
      const root = document.getElementById('root');
      if (root) {
        const rect = root.getBoundingClientRect();
        setStyle({
          position: 'fixed',
          top: 0,
          left: `${rect.left}px`,
          width: `${rect.width}px`,
          zIndex: 9990,
        });
      }
    };

    updatePosition(); // 초기 위치 계산
    window.addEventListener('resize', updatePosition); // 리사이즈 시 재계산

    return () => {
      window.removeEventListener('resize', updatePosition);
    };
  }, []);

  return (
    <header style={style}>
      <h1 className="logo">
        <img className="tempImgTop" src={header} alt="Header" />
      </h1>
    </header>
  );
};

export default Header;

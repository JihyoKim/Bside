import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './BottomNav.css';

import menuHome from '../assets/menuHome.png';
import menuMusic from '../assets/menuMusic.png';
import menuShop from '../assets/menuShop.png';
import menuMy from '../assets/menuMy.png';

const BottomNav = () => {
  const [navStyle, setNavStyle] = useState({});

  useEffect(() => {
    const updatePosition = () => {
      const root = document.getElementById('root');
      if (root) {
        const rect = root.getBoundingClientRect();
        setNavStyle({
          position: 'fixed',
          bottom: 0,
          left: `${rect.left}px`,
          width: `${rect.width}px`,
          zIndex: 9990,
        });
      }
    };

    updatePosition(); // 첫 렌더링 시 호출
    window.addEventListener('resize', updatePosition); // 브라우저 리사이즈 시

    return () => {
      window.removeEventListener('resize', updatePosition);
    };
  }, []);

  return (
    <div className="BottomNav" style={navStyle}>
      <Link to="/"><img src={menuHome} alt="Home" /></Link>
      <Link to="/music"><img src={menuMusic} alt="Music" /></Link>
      <Link to="/shop"><img src={menuShop} alt="Shop" /></Link>
      <Link to="/mypage"><img src={menuMy} alt="My Page" /></Link>
    </div>
  );
};

export default BottomNav;

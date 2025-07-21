import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './BottomNav.css';

import menuHomeOff from '../assets/symbol/homeOff.png';
import menuHomeOn from '../assets/symbol/homeOn.png';
import menuMusicOff from '../assets/symbol/musicOff.png';
import menuMusicOn from '../assets/symbol/musicOn.png';
import menuShopOff from '../assets/symbol/shopOff.png';
import menuShopOn from '../assets/symbol/shopOn.png';
import menuMyOff from '../assets/symbol/myOff.png';
import menuMyOn from '../assets/symbol/myOn.png';

const BottomNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const currentPath = location.pathname;

  const handleNavClick = (path) => {
    if (currentPath === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate(path);
    }
  };

  return (
    <div className="BottomNav">
      <button onClick={() => handleNavClick('/main')}>
        <img src={currentPath === '/main' ? menuHomeOn : menuHomeOff} alt="Home" />
      </button>
      <button onClick={() => handleNavClick('/main/music')}>
        <img src={currentPath === '/main/music' ? menuMusicOn : menuMusicOff} alt="Music" />
      </button>
      <button onClick={() => handleNavClick('/main/shop')}>
        <img src={currentPath === '/main/shop' ? menuShopOn : menuShopOff} alt="Shop" />
      </button>
      <button onClick={() => handleNavClick('/main/mypage')}>
        <img src={currentPath === '/main/mypage' ? menuMyOn : menuMyOff} alt="My Page" />
      </button>
    </div>
  );
};

export default BottomNav;

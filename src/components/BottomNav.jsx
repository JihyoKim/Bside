import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './BottomNav.css';

import menuHomeOff from '../assets/symbol/homeOff.svg';
import menuHomeOn from '../assets/symbol/homeOn.svg';
import menuMusicOff from '../assets/symbol/musicOff.svg';
import menuMusicOn from '../assets/symbol/musicOn.svg';
import menuShopOff from '../assets/symbol/shopOff.svg';
import menuShopOn from '../assets/symbol/shopOn.svg';
import menuMyOff from '../assets/symbol/myOff.svg';
import menuMyOn from '../assets/symbol/myOn.svg';

const BottomNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const currentPath = location.pathname;

  const handleNavClick = (path) => {
    if (currentPath === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      sessionStorage.setItem('fromTabClick', 'true');
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

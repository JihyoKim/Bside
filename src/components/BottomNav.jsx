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
      // 이미 현재 페이지일 경우 -> 맨 위로 스크롤
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate(path);
    }
  };

  return (
    <div className="BottomNav">
      <button onClick={() => handleNavClick('/')}>
        <img src={currentPath === '/' ? menuHomeOn : menuHomeOff} alt="Home" />
      </button>
      <button onClick={() => handleNavClick('/music')}>
        <img src={currentPath === '/music' ? menuMusicOn : menuMusicOff} alt="Music" />
      </button>
      <button onClick={() => handleNavClick('/shop')}>
        <img src={currentPath === '/shop' ? menuShopOn : menuShopOff} alt="Shop" />
      </button>
      <button onClick={() => handleNavClick('/mypage')}>
        <img src={currentPath === '/mypage' ? menuMyOn : menuMyOff} alt="My Page" />
      </button>
    </div>
  );
};

export default BottomNav;

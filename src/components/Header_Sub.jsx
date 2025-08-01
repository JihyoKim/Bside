import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Header.css';

import goback from '../assets/symbol/white/goback.svg';
import alarm from '../assets/symbol/alarmIcon_white_pink.svg';
import cart from '../assets/symbol/header_cartIcon.svg';

import gobackBlack from '../assets/symbol/black/goback.svg';
import cartBlack from '../assets/symbol/header_cartIcon_black.svg';

import AlarmDetail from './AlarmDetail';

const Header_Sub = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isAlarmOpen, setIsAlarmOpen] = useState(false);
  const toggleAlarm = () => setIsAlarmOpen(prev => !prev);

  const handleGoBack = () => {
    const panel = document.querySelector('.lyrics-panel.show');
    if (panel) {
      window.dispatchEvent(new Event('closeLyricsPanel'));
    } else if (
      location.pathname === '/main/music' ||
      (location.pathname.startsWith('/main/shop') && !location.pathname.startsWith('/main/shop/product')) ||
      (location.pathname.startsWith('/main/artistPage') && location.pathname !== '/main/artistPage/blackpink/media/live-rose')
    ) {
      navigate('/main');
    } else if (
      location.pathname === '/main/mypage/ticket' ||
      location.pathname === '/main/mypage/point'
    ) {
      navigate('/main/mypage');
    } else if (location.pathname === '/main/message') {
      navigate('/main/mypage'); 
    } else {
      navigate(-1);
    }
  };

  const isShopPage = location.pathname.startsWith('/main/shop');
  const isShopProductPage = location.pathname.startsWith('/main/shop/product');
  const isMediaDetailPage = /^\/main\/artistPage\/[^/]+\/media\/[^/]+$/.test(location.pathname);

  return (
    <>
      <header className={`fixed-header ${isShopProductPage ? 'white' : 'pink'}`}>
        <div className="header-left">
          <img
            src={isShopProductPage ? gobackBlack : goback}
            alt="BackBtn"
            className="BackBtn"
            onClick={handleGoBack}
          />
        </div>
        <div className="header-right">
          {!isMediaDetailPage && (
            <div className="alarm-wrapper">
              <img
                src={isShopProductPage ? cartBlack : isShopPage ? cart : alarm}
                alt={isShopProductPage ? 'cartBlack' : isShopPage ? 'cart' : 'alarm'}
                className={isShopPage ? 'cart-icon' : 'alarm-icon'}
                onClick={!isShopPage ? toggleAlarm : undefined}
              />
            </div>
          )}
        </div>
      </header>

      {!isShopPage && (
        <AlarmDetail isOpen={isAlarmOpen} onToggle={toggleAlarm} />
      )}
    </>
  );
};

export default Header_Sub;

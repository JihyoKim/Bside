import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Header.css';

import goback from '../assets/symbol/white/goback.svg';
import alarm from '../assets/symbol/alarmIcon_white_pink.svg';
import cart from '../assets/symbol/header_cartIcon.svg';
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
    } else {
      if (
        location.pathname === '/main/mypage/ticket' ||
        location.pathname === '/main/mypage/point'
      ) {
        navigate('/main/mypage');
      } else {
        navigate(-1);
      }
    }
  };

  const isShopPage = location.pathname.startsWith('/main/shop');

  return (
    <>
      <header className="fixed-header pink">
        <div className="header-left">
          <img
            src={goback}
            alt="BackBtn"
            className="BackBtn"
            onClick={handleGoBack}
          />
        </div>
        <div className="header-right">
          <div className="alarm-wrapper">
            <img
              src={isShopPage ? cart : alarm}
              alt={isShopPage ? 'cart' : 'alarm'}
              className={isShopPage ? 'cart-icon' : 'alarm-icon'}
              onClick={!isShopPage ? toggleAlarm : undefined}
            />
          </div>
        </div>
      </header>

      {!isShopPage && (
        <AlarmDetail isOpen={isAlarmOpen} onToggle={toggleAlarm} />
      )}
    </>
  );
};

export default Header_Sub;

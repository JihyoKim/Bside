import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Header.css';
import goback from '../assets/symbol/white/goback.png';
import alarm from '../assets/symbol/alarmIcon_white_pink.svg';

const Header_Sub = () => {
  const navigate = useNavigate();
  const location = useLocation();

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

  return (
    <header className="fixed-header pink">
      <div className="header-left">
        <img
          src={goback}
          alt="BackBtn"
          className="BackBtn"
          onClick={handleGoBack} // ✅ 여기에 함수 연결
        />
      </div>
      <div className="header-right">
        <div className="alarm-wrapper">
          <img src={alarm} alt="alarm" className="alarm-icon" />
        </div>
      </div>
    </header>
  );
};

export default Header_Sub;

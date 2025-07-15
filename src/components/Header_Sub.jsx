import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import goback from '../assets/symbol/black/goback.png';
import alarm from '../assets/symbol/alarmIcon_black.svg';

const Header_Sub = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    // 가사창이 열려있는지 여부 판단
    const lyricsPanel = document.querySelector('.lyrics-panel.show');
    if (lyricsPanel) {
      // 가사창 닫기
      const closeEvent = new CustomEvent('closeLyrics');
      window.dispatchEvent(closeEvent);
    } else {
      navigate('/');
    }
  };

  return (
    <header className="fixed-header pink">
      <div className="header-left">
      <img
  src={goback}
  alt="BackBtn"
  className="BackBtn"
  onClick={() => {
    const panel = document.querySelector('.lyrics-panel.show');
    if (panel) {
      // 열려있으면 닫기 (상태를 Music.jsx에서 관리할 경우에는 prop으로 받아야함)
      window.dispatchEvent(new Event('closeLyricsPanel'));
    } else {
      window.location.href = '/'; // 홈으로 이동
    }
  }}
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

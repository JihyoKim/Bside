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
    const path = location.pathname;
  
    // 1) 가사 패널 열려 있으면 닫기
    if (panel) {
      window.dispatchEvent(new Event('closeLyricsPanel'));
      return;
    }
  
    // 2) /main으로 보내는 기준들
    const isMusic = path === '/main/music';
    const isShopList = path.startsWith('/main/shop') && !path.startsWith('/main/shop/product');
  
    // 3) artistPage에서 /main으로 보내되, '예외 경로'는 제외
    const artistPageExceptions = [
      '/main/artistPage/blackpink/media/live-rose',
      '/main/artistPage/aespa/media/live-giselle',
    ];
    const isArtistPageButNotException =
      path.startsWith('/main/artistPage') && !artistPageExceptions.includes(path);
  
    if (isMusic || isShopList || isArtistPageButNotException) {
      navigate('/main');
      return;
    }
  
    // 4) 마이페이지 티켓/포인트 -> 마이페이지 메인으로
    if (path === '/main/mypage/ticket' || path === '/main/mypage/point') {
      navigate('/main/mypage');
      return;
    }
  
    // 5) 메시지 페이지 -> 마이페이지 메인으로
    if (path === '/main/message') {
      navigate('/main/mypage');
      return;
    }
  
    // 6) 그 외에는 히스토리 뒤로
    navigate(-1);
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

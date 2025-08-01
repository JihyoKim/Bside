import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams, Outlet } from 'react-router-dom';

import Header from './Header';
import HeaderSub from './Header_Sub';
import HeaderMypage from './Header_Mypage';
import HeaderPost from './Header_Post';
import BottomNav from './BottomNav';
import FloatingAddButton from './FloatingAddButton';

import { artistData } from '../data/artistData';
import './Layout.css';

const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { artistId } = useParams();
  const path = location.pathname;

  const [isMobileDevice, setIsMobileDevice] = useState(false);

  // ✅ 온보딩 페이지 여부
  const isOnboarding = path === '/' || path.startsWith('/onboarding');

  // ✅ Vote 상세페이지 여부
  const isVoteDetailPage =
    path.includes('/vote/list') ||
    path.includes('/vote/result') ||
    path.includes('/vote/complete') ||
    path.includes('/message/room/');

  // ✅ Header 컴포넌트 결정
  let HeaderComponent = null;
  if (!isOnboarding) {
    if (
      isVoteDetailPage ||
      path.includes('/write') ||
      path.includes('/shop/payment')
    ) {
      HeaderComponent = null;
    } else if (path.includes('/post/')) {
      HeaderComponent = HeaderPost;
    } else if (
      path.startsWith('/main/mypage/ticket') ||
      path.startsWith('/main/mypage/point') ||
      path.startsWith('/main/mypage/following') ||
      path.startsWith('/main/moreArtist') ||
      path.startsWith('/main/message')
    ) {
      HeaderComponent = HeaderSub;
    } else if (path.startsWith('/main/mypage')) {
      HeaderComponent = HeaderMypage;
    } else if (
      path.startsWith('/main/music') ||
      path.startsWith('/main/artistPage') ||
      path.startsWith('/main/shop')
    ) {
      HeaderComponent = HeaderSub;
    } else {
      HeaderComponent = Header;
    }
  }

  // ✅ BottomNav 숨김 여부
  const hideBottomNav =
    isOnboarding ||
    isVoteDetailPage ||
    path.includes('/write') ||
    path.includes('/post/') ||
    path.includes('/shop/payment') ||
    path.includes('/shop/product');

  // ✅ Floating 버튼 표시 조건
  const isFanPage =
    (path.includes('/artistPage') && path.includes('/fan')) ||
    path === '/main/mypage';

  const artist = artistData[artistId];
  const bgColor = artist?.addButtonColor || '#FFA3EB';
  const lineColor = artist?.addButtonLine || '#ffffff';

  const handleAddClick = () => {
    navigate(`/main/artistPage/${artistId}/write`);
  };

  // ✅ 모바일 디바이스 여부 (상태로 관리)
  useEffect(() => {
    const isMobile = typeof navigator !== 'undefined' &&
      /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isMobile && window.innerWidth <= 900) {
      document.documentElement.classList.add('mobile-device');
      setIsMobileDevice(true);
    } else {
      document.documentElement.classList.remove('mobile-device');
      setIsMobileDevice(false);
    }
  }, []);

  // ✅ vh 단위 동적 설정
  useEffect(() => {
    const setVh = () => {
      const vh = (window.visualViewport?.height || window.innerHeight) * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setVh();
    const target = window.visualViewport || window;
    target.addEventListener('resize', setVh);
    return () => target.removeEventListener('resize', setVh);
  }, []);


  

  // ✅ 레이아웃 클래스 정리
  const layoutClass = [
    'layout-container',
    hideBottomNav && 'no-bottom-nav',
    isMobileDevice && 'vh-fix'
  ].filter(Boolean).join(' ');

  return (
    <div className="layout-wrapper">
      {HeaderComponent && <HeaderComponent />}
      <div className={layoutClass}>
        <div className="layout-scroll">
          <Outlet />
        </div>
        {/* ✅ BottomNav */}
        {!hideBottomNav && <BottomNav />}
        {/* ✅ 플로팅 버튼 */}
        {!hideBottomNav && isFanPage && (
          <FloatingAddButton onClick={handleAddClick} bgColor={bgColor} lineColor={lineColor} />
        )}
      </div>
    </div>
  );
};

export default Layout;

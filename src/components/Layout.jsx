import React, { useEffect } from 'react';
import { useLocation, useNavigate, useParams, Outlet } from 'react-router-dom';
import Header from './Header';
import HeaderSub from './Header_Sub';
import HeaderMypage from './Header_Mypage';
import HeaderPost from './Header_Post';
import BottomNav from './BottomNav';
import SideMenu from './SideMenu';
import FloatingAddButton from './FloatingAddButton';
import { artistData } from '../data/artistData';
import './Layout.css';

const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { artistId } = useParams();
  const path = location.pathname;

  // ✅ 온보딩 경로 포함 확인
  const isOnboarding = path === '/' || path.startsWith('/onboarding');

  // ✅ vote 상세 페이지 숨김 조건
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

  // ✅ BottomNav 숨기기 조건
  const hideBottomNav =
    isOnboarding ||
    isVoteDetailPage ||
    path.includes('/write') ||
    path.includes('/post/') ||
    path.includes('/shop/payment') ||
    path.includes('/shop/product');

  // ✅ FloatingAddButton 노출 조건
  const isFanPage =
    (path.includes('/artistPage') && path.includes('/fan')) ||
    path === '/main/mypage';

  const artist = artistData[artistId];
  const bgColor = artist?.addButtonColor || '#FFA3EB';
  const lineColor = artist?.addButtonLine || '#ffffff';

  const handleAddClick = () => {
    navigate(`/main/artistPage/${artistId}/write`);
  };

  // ✅ 모바일 여부 class 부여
  const isMobileDevice = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  if (isMobileDevice && window.innerWidth <= 900) {
    document.documentElement.classList.add('mobile-device');
  }

  // ✅ JS 기반 vh 세팅
  useEffect(() => {
    const setVh = () => {
      const vh = window.visualViewport?.height || window.innerHeight;
      document.documentElement.style.setProperty('--vh', `${vh * 0.01}px`);
    };
    setVh();
    window.visualViewport?.addEventListener('resize', setVh);
    return () => {
      window.visualViewport?.removeEventListener('resize', setVh);
    };
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        minHeight: '100vh',
        flexDirection: 'column',
        position: 'relative',
      }}
    >
      {HeaderComponent && <HeaderComponent />}
      <div className={`layout-container ${hideBottomNav ? 'no-bottom-nav' : 'vh-fix'}`}>
        <div className="layout-scroll">
          <Outlet />
        </div>

        {/* ✅ 하단 네비게이션 */}
        {!hideBottomNav && <BottomNav />}

        {/* ✅ 플로팅 버튼 */}
        {!hideBottomNav && isFanPage && (
          <FloatingAddButton
            onClick={handleAddClick}
            bgColor={bgColor}
            lineColor={lineColor}
          />
        )}
      </div>
    </div>
  );
};

export default Layout;

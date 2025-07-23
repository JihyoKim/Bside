import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import HeaderSub from './Header_Sub';
import HeaderMypage from './Header_Mypage';
import BottomNav from './BottomNav';
import SideMenu from './SideMenu';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();
  const path = location.pathname;

  let HeaderComponent;

  if (
    path.startsWith('/main/mypage/ticket') ||
    path.startsWith('/main/mypage/point') ||
    path.startsWith('/main/moreArtist')
  ) {
    HeaderComponent = HeaderSub;
  } else if (path.startsWith('/main/mypage')) {
    HeaderComponent = HeaderMypage;
  } else if (
    path.startsWith('/main/music') ||
    path.startsWith('/main/artistPage')
  ) {
    HeaderComponent = HeaderSub;
  } else {
    HeaderComponent = Header;
  }

  // ✅ mediaDetail 또는 postDetail 페이지일 때는 BottomNav 숨기기
  const hideBottomNav =
    // path.includes('/media/') || 
    path.includes('/post/');

  return (
    <div style={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
      <HeaderComponent />
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
      {!hideBottomNav && <BottomNav />}
    </div>
  );
};

export default Layout;

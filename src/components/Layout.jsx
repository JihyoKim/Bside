import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import HeaderSub from './Header_Sub';
import HeaderMypage from './Header_Mypage';
import BottomNav from './BottomNav';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();
  const path = location.pathname;

  let HeaderComponent;

  if (path.startsWith('/mypage')) {
    HeaderComponent = HeaderMypage;
  } else if (path.startsWith('/music')) {
    HeaderComponent = HeaderSub;
  } else {
    HeaderComponent = Header;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <HeaderComponent />
      <main style={{ flex: 1, /*padding: '20px'*/ }}>
        <Outlet />
      </main>
      <BottomNav />
    </div>
  );
};

export default Layout;

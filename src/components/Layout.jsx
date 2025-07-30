import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Header from './Header';
import HeaderSub from './Header_Sub';
import HeaderMypage from './Header_Mypage';
import HeaderPost from './Header_Post';
import BottomNav from './BottomNav';
import SideMenu from './SideMenu';
import FloatingAddButton from './FloatingAddButton';
import { Outlet } from 'react-router-dom';
import { artistData } from '../data/artistData';
import './Layout.css';

const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { artistId } = useParams();
  const path = location.pathname;

  // ✅ vote 상세 페이지에서는 header, nav 모두 숨김
  const isVoteDetailPage =
    path.includes('/vote/list') ||
    path.includes('/vote/result') ||
    path.includes('/vote/complete') ||
    path.includes('/message/room/')
    ;

  // ✅ Header 구성
  let HeaderComponent;

  if (
    isVoteDetailPage
    || path.includes('/write')
    || path.includes('/shop/payment')
  ) {
    HeaderComponent = null;

   } else if (
    path.includes('/post/')    
  ) {
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

   // ✅ BottomNav 숨기기 조건
  const hideBottomNav =
   // path.includes('/media/') || 
    path.includes('/post/') ||
    path.includes('/write') ||
    path.includes('/shop/payment') ||
    path.includes('/shop/product') ||
    isVoteDetailPage ;

  const isFanPage =
    (path.includes('/artistPage') && path.includes('/fan')) ||
    path === '/main/mypage';  const artist = artistData[artistId];
  const bgColor = artist?.addButtonColor || '#FFA3EB';
  const lineColor = artist?.addButtonLine || '#ffffff';

  const handleAddClick = () => {
    navigate(`/main/artistPage/${artistId}/write`);
  };

  const isLiveDetailPage = path.includes('/media/live-');


  return (
    <div style={{ display: 'flex', minHeight: '100vh', flexDirection: 'column', position: 'relative' }}>
      {HeaderComponent && <HeaderComponent />}
      <div className="layout-container">
        <div className="layout-scroll" >
          <Outlet />
        </div>
        
        {!hideBottomNav && <BottomNav />}
        {isFanPage && (
          <FloatingAddButton onClick={handleAddClick} bgColor={bgColor} lineColor={lineColor} />
        )}
      </div>
      {!hideBottomNav && <BottomNav />}
      {isFanPage && (
        <FloatingAddButton onClick={handleAddClick} bgColor={bgColor} lineColor={lineColor} />
      )}
    </div>
  );
};

export default Layout;
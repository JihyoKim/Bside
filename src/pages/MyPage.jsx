import React, { useState } from 'react';
import Profile from '../components/mypage/Profile';
import Post from '../components/mypage/Post';
import SideMenu from '../components/SideMenu';
import './MyPage.css';

const MyPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="mypage-container">
      <div className="mypage-scroll">
        <Profile onToggleMenu={toggleMenu} />
        <Post onScrollToTop={scrollToTop} />
      </div>
      <SideMenu isOpen={isMenuOpen} onToggle={toggleMenu} />
    </div>
  );
};

export default MyPage;
import React, { useRef, useState } from 'react';
import Profile from '../components/mypage/Profile';
import Post from '../components/mypage/Post';
import SideMenu from '../components/SideMenu';
import './MyPage.css';

const MyPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollRef = useRef(null); // ✅ ref 생성

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  const scrollToTop = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="mypage-container">
      <div className="mypage-scroll" ref={scrollRef}> 
        <Profile onToggleMenu={toggleMenu} />
        <Post onScrollToTop={scrollToTop} />
      </div>
    </div>
  );
};

export default MyPage;

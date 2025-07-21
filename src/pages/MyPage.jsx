import React from 'react';
import Profile from '../components/mypage/Profile';
import Post from '../components/mypage/Post';

const MyPage = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="mypage-container">
      <Profile />
      <Post onScrollToTop={scrollToTop} />
    </div>
  );
};

export default MyPage;

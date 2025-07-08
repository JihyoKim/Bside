import React from 'react';
import headerMypage from '../assets/headerMypage.png';
import './Header.css';

const Header_Mypage = () => {
  return (
    <header>
      <h1 className='logo'><img className='tempImgTop' src={headerMypage} alt="HeaderMyPage"/></h1>
    </header>
  );
}

export default Header_Mypage

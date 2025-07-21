import React, { useEffect, useState } from 'react';
import './Header.css';

import menuIcon from '../assets/symbol/white/menu.png';   
import alarmIcon from '../assets/symbol/alarmIcon_white_pink.svg'; 
import messageIcon from '../assets/symbol/message_white.svg'; 

const Header_Mypage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 330);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed-header ${isScrolled ? 'black' : 'pink'}`}>
      <div className="header-left">
        <img src={menuIcon} alt="menu" className="menu-icon" />
      </div>
      <div className="header-right">
        <div className="icon-badge-wrapper">
          <img src={messageIcon} alt="message" className="message-icon" />
          <img src={alarmIcon} alt="alarm" className="alarm-icon" />
        </div>
      </div>
    </header>
  );
};

export default Header_Mypage;

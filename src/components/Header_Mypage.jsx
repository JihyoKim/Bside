import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import SideMenu from './SideMenu';
import AlarmDetail from './AlarmDetail';

import menuIcon from '../assets/symbol/white/menu.png';   
import alarmIcon from '../assets/symbol/alarmIcon_white_pink.svg'; 
import messageIcon from '../assets/symbol/message_white.svg'; 

// ✅ scrolledBlack prop 받기
const Header_Mypage = ({ scrolledBlack = false }) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAlarmOpen, setIsAlarmOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const toggleAlarm = () => setIsAlarmOpen(prev => !prev);
  const goToMessage = () => navigate('message');

  return (
    <>
      <header className={`fixed-header ${scrolledBlack ? 'black' : 'pink'}`}>
        <div className="header-left">
          <img
            src={menuIcon}
            alt="menu"
            className="menu-icon"
            onClick={toggleMenu}
          />
        </div>
        <div className="header-right">
          <div className="icon-badge-wrapper">
            <img src={messageIcon} alt="message" className="message-icon" onClick={goToMessage} />
            <img src={alarmIcon} alt="alarm" className="alarm-icon" onClick={toggleAlarm} />
          </div>
        </div>
      </header>

      <SideMenu isOpen={isMenuOpen} onToggle={toggleMenu} />
      <AlarmDetail isOpen={isAlarmOpen} onToggle={toggleAlarm} />
    </>
  );
};

export default Header_Mypage;

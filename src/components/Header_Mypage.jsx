import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import SideMenu from './SideMenu';
import AlarmDetail from './AlarmDetail';

import menuIcon from '../assets/symbol/white/menu.svg';   
import alarmIcon from '../assets/symbol/alarmIcon_white_pink.svg'; 
import messageIcon from '../assets/symbol/message_white.svg'; 

// ✅ scrolledBlack prop 받기
const Header_Mypage = ({ scrolledBlack = false }) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAlarmOpen, setIsAlarmOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const toggleAlarm = () => setIsAlarmOpen(prev => !prev);
  const goToMessage = () => navigate('/main/message');

  return (
    <>
      <header className={`fixed-header ${scrolledBlack ? 'black' : 'pink'}`}>
        <div className="header-left">
          <div className="guide">
          <img
            src={menuIcon}
            alt="menu"
            className="menu-icon"
            onClick={toggleMenu}
          />
          </div>
        </div>
        <div className="header-right">
          <div className="icon-badge-wrapper">
            <span className="guide">
              <img src={messageIcon} alt="message" className="message-icon" onClick={goToMessage} />
            </span>
            <span className="guide">
              <img src={alarmIcon} alt="alarm" className="alarm-icon " onClick={toggleAlarm} />
            </span>
          </div>
        </div>
      </header>

      <SideMenu isOpen={isMenuOpen} onToggle={toggleMenu} />
      <AlarmDetail isOpen={isAlarmOpen} onToggle={toggleAlarm} />
    </>
  );
};

export default Header_Mypage;

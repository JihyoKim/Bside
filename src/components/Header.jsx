import React, { useState, useEffect } from 'react';
import './Header.css';

import logo from '../assets/symbol/logo.svg';
import alarm from '../assets/symbol/alarmIcon_white_pink.svg';
import downWhite from '../assets/symbol/white/down.png';
import AlarmDetail from './AlarmDetail';

const Header = () => {
  const [isAlarmOpen, setIsAlarmOpen] = useState(false);
  const toggleAlarm = () => setIsAlarmOpen(prev => !prev);

  useEffect(() => {
    if (isAlarmOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = ''; 
    };
  }, [isAlarmOpen]);

  return (
    <>
      <header className="fixed-header">
        <div className="header-left">
          <img src={logo} alt="B-side" className="logo" />
          {/* <img src={downWhite} alt="dropdown" className="dropdown-icon" /> */}
        </div>
        <div className="header-right">
          <div className="alarm-wrapper">
            <img
              src={alarm}
              alt="alarm"
              className="alarm-icon"
              onClick={toggleAlarm}
            />
          </div>
        </div>
      </header>

      <AlarmDetail isOpen={isAlarmOpen} onToggle={toggleAlarm} />
    </>
  );
};

export default Header;

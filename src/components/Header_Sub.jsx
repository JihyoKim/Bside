import React from 'react';
import './Header.css';

import headerSub from '../assets/headerSub.png';
import goback from '../assets/symbol/black/goback.png'
import alarm from '../assets/symbol/alarmIcon_black.svg'



const Header_Sub = () => {
  return (
      <header className="fixed-header pink">
        <div className="header-left">
          <img src={goback} alt="BackBtn" className="BackBtn" />
        </div>
        <div className="header-right">
          <div className="alarm-wrapper">
            <img src={alarm} alt="alarm" className="alarm-icon" />
          </div>
        </div>
      </header>
    );
  };

export default Header_Sub;
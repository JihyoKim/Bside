import React from 'react';
import './Header.css';

import header from '../assets/header.png';
import logo from '../assets/symbol/logo.png'
import alarm from '../assets/symbol/alarmIcon.svg'
import downWhite from '../assets/symbol/white/down.png'

const Header = () => {
  return (
    <header className="fixed-header black">
      <div className="header-left">
        <img src={logo} alt="B-side" className="logo" />
        <img src={downWhite} alt="dropdown" className="dropdown-icon" />
      </div>
      <div className="header-right">
        <div className="alarm-wrapper">
          <img src={alarm} alt="alarm" className="alarm-icon" />
        </div>
      </div>
    </header>
  );
};

export default Header;

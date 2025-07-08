import React from 'react';
// import {Link} from 'react-router-dom';
import header from '../assets/header.png';
import './Header.css';


const Header = () => {
  return (
    <header>
      <h1 className='logo'><img className='tempImgTop' src={header} alt="Header"/></h1>
    </header>
  );
}

export default Header

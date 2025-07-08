import React from 'react';
import {Link} from 'react-router-dom';
import headerSub from '../assets/headerSub.png';
import './Header.css';

const Header_Sub = () => {
  return (
    <header>
      <h1 className='logo'><img className='tempImgTop' src={headerSub} alt="HeaderSub"/></h1>
    </header>
  );
}

export default Header_Sub

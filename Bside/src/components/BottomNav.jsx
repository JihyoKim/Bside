import React from 'react';
import {Link} from 'react-router-dom';
import './BottomNav.css';
import menu from '../assets/menu.png';


const BottomNav = () => {
  return (
    <div className='BottomNav'>
      <img className='tempImgBtm' src={menu} alt="Menu"/>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/music'>Music</Link>
        <Link to='/shop'>Shop</Link>
        <Link to='/mypage'>My</Link>
      </nav>
    </div>
  )
}

export default BottomNav

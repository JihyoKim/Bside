import React from 'react';
import {Link} from 'react-router-dom';
import './BottomNav.css';
import menuHome from '../assets/menuHome.png';
import menuMusic from '../assets/menuMusic.png';
import menuShop from '../assets/menuShop.png';
import menuMy from '../assets/menuMy.png';


const BottomNav = () => {
  return (
    <div className='BottomNav'>
      <Link to="/">
        <img src={menuHome} alt="Home" />
      </Link>
      <Link to="/music">
        <img src={menuMusic} alt="Music" />
      </Link>
      <Link to="/shop">
        <img src={menuShop} alt="Shop" />
      </Link>
      <Link to="/mypage">
        <img src={menuMy} alt="My Page" />
      </Link>
    </div>
  )
}



export default BottomNav

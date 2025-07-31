import React, { useEffect } from 'react';
import Logo from '../assets/BsideAppLogo.svg'; 
import './WidthToggle.css'

const WidthToggle = () => {
  useEffect(() => {
    const savedWidth = localStorage.getItem('app-max-width');
    if (savedWidth === '768px') {
      document.documentElement.classList.add('tablet-mode');
    }
  }, []);
  
  const setMaxWidth = (size) => {
    document.documentElement.style.setProperty('--max-width', size);
    localStorage.setItem('app-max-width', size);
  
    const leftSide = document.querySelector('.leftSide');
    if (!leftSide) return;
  
    if (size === '768px') {
      leftSide.classList.add('tablet-left');
      document.documentElement.classList.add('tablet-mode'); 
    } else {
      leftSide.classList.remove('tablet-left');
      document.documentElement.classList.remove('tablet-mode');
    }
  };

  return (
    <div className='leftSide'>
      <img src={Logo} alt="Logo" className='logo'/>
      <div className='toogleBtn'>
        <button className='mobileBtn' onClick={() => setMaxWidth('390px')}>모바일</button>
        <button className='tabletBtn' onClick={() => setMaxWidth('768px')}>태블릿</button>
      </div>
    </div>
  );
};

export default WidthToggle;

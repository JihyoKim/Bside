// src/components/WidthToggle.jsx
import React from 'react';
import Logo from '../assets/BsideAppLogo.svg'; // 경로는 상황에 따라 조정
import './WidthToggle.css'

const WidthToggle = () => {
  const setMaxWidth = (size) => {
    document.documentElement.style.setProperty('--max-width', size);
    localStorage.setItem('app-max-width', size); // 선택 기억용 (선택 사항)
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

// src/pages/onboarding/Step6_AddArtists.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Step6_AddArtists.css';
import searchIcon from '../../assets/search.png';
import heartIcon from '../../assets/heart.png';

import aespa from '../../assets/onboarding/aespa.png';
import ALLDAYPRO from '../../assets/onboarding/ALLDAYPRO.png';
import BLACKPINK from '../../assets/onboarding/BLACKPINK.png';
import BTS from '../../assets/onboarding/BTS.png';
import ENHYPEN from '../../assets/onboarding/ENHYPEN.png';
import EXO from '../../assets/onboarding/EXO.png';
import GDRAGON from '../../assets/onboarding/G-DRAGON.png';
import ILLIT from '../../assets/onboarding/ILLIT.png';
import IVE from '../../assets/onboarding/IVE.png';
import ITZY from '../../assets/onboarding/ITZY.png';
import LESSERAFIM from '../../assets/onboarding/LE SSERAFIM.png';
import MEOVV from '../../assets/onboarding/MEOVV.png';
import NewJeans from '../../assets/onboarding/NewJeans.png';
import RIIZE from '../../assets/onboarding/RIIZE.png';
import StrayKids from '../../assets/onboarding/Stray Kids.png';
import TOMORROW from '../../assets/onboarding/TOMORROW.png';
import TWICE from '../../assets/onboarding/TWICE.png';

const artistImages = {
  'aespa': aespa,
  'ALLDAYPRO': ALLDAYPRO,
  'BLACKPINK': BLACKPINK,
  'BTS': BTS,
  'ENHYPEN': ENHYPEN,
  'EXO': EXO,
  'G-DRAGON': GDRAGON,
  'ILLIT': ILLIT,
  'IVE': IVE,
  'ITZY': ITZY,
  'LE SSERAFIM': LESSERAFIM,
  'MEOVV': MEOVV,
  'NewJeans': NewJeans,
  'RIIZE': RIIZE,
  'Stray Kids': StrayKids,
  'TOMORROW': TOMORROW,
  'TWICE': TWICE,
};

const Step6_AddArtists = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState([]);

  const toggleSelect = (name) => {
    if (selected.includes(name)) {
      setSelected(selected.filter((item) => item !== name));
    } else if (selected.length < 3) {
      setSelected([...selected, name]);
    }
  };

  const column1 = ['Stray Kids', 'G-DRAGON', 'TWICE'];
  const column2 = ['ALLDAYPRO', 'RIIZE', 'IVE'];
  const column3 = ['aespa', 'BLACKPINK', 'BTS'];
  const column4 = ['EXO', 'MEOVV', 'ILLIT'];
  const column5 = ['ENHYPEN', 'LE SSERAFIM'];
  const column6 = ['NewJeans', 'TOMORROW', 'ITZY'];

  const renderColumn = (list, columnIndex) => (
    <div className={`artist-column-wrapper ${columnIndex === 2 || columnIndex === 5 ? 'extra-margin' : ''}`}>
      <div className="artist-column">
        {list.map((name) => (
          <div
            key={name}
            className={`artist-box ${selected.includes(name) ? 'selected' : ''}`}
            onClick={() => toggleSelect(name)}
          >
            <img src={artistImages[name]} alt={name} className="artist-img" />
            {selected.includes(name) && (
              <div className="overlay">
                <img src={heartIcon} alt="하트" className="heart-icon" />
              </div>
            )}
            <p className="artist-name">{name}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="step6-container">
      {/* ✅ 상단 헤더 */}
      <div className="step6-header">
        <button className="step6-skip" onClick={() => navigate('/onboarding/complete')}>건너뛰기</button>
      </div>

      {/* ✅ 인디케이터 */}
      <div className="step-indicator">
        {[1, 2, 3, 4, 5].map((step, index) => (
          <div
            key={index}
            className={`step-bar ${index < 4 ? 'filled' : index === 4 ? 'active' : ''}`}
            style={{ animationDelay: `${index * 0.1}s` }}
          ></div>
        ))}
      </div>

      <p className="step6-subtitle">이제 마지막 단계예요!</p>
      <h2 className="step6-title">나만의 아티스트를 추가해 주세요</h2>

      <div className="step6-search-bar">
        <input type="text" placeholder="검색" />
        <img src={searchIcon} alt="검색" className="search-icon-img" />
      </div>

      <div className="step6-tabs">
        <button className="active">GROUP</button>
        <button>SOLO</button>
      </div>

      <div className="step6-artist-layout">
        <div className="artist-row">
          {renderColumn(column1, 1)}
          {renderColumn(column2, 2)}
          {renderColumn(column3, 3)}
        </div>
        <div className="artist-row">
          {renderColumn(column4, 4)}
          {renderColumn(column5, 5)}
          {renderColumn(column6, 6)}
        </div>
      </div>

      <div className="step6-gradient-overlay" />

      {/* ✅ 다음 버튼 → 로딩 페이지로 이동 */}
      <button className="step6-next-btn guide" onClick={() => navigate('/onboarding/loading')}>
        다음
      </button>
    </div>
  );
};

export default Step6_AddArtists;

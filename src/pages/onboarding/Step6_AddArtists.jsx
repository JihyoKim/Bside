import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Step6_AddArtists.css';
import searchIcon from '../../assets/search.png';
import artistImg from '../../assets/addArtists.png';
import heartIcon from '../../assets/heart.png';

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

  const column1 = ['MEOVV', 'G-DRAGON', 'G-DRAGOs'];
  const column2 = ['ALLDAYPRO...', 'RIIZE'];
  const column3 = ['CATSEYE', 'BLACKPINK', 'LE SSERAFIM'];

  const renderColumn = (list) => (
    <div className="artist-column">
      {list.map((name) => (
        <div
          key={name}
          className={`artist-box ${selected.includes(name) ? 'selected' : ''}`}
          onClick={() => toggleSelect(name)}
        >
          <img src={artistImg} alt={name} className="artist-img" />
          {selected.includes(name) && (
            <div className="overlay">
              <img src={heartIcon} alt="하트" className="heart-icon" />
            </div>
          )}
          <p className="artist-name">{name}</p>
        </div>
      ))}
    </div>
  );

  return (
    <div className="step6-container">
      <div className="step6-header">
        <button className="step6-skip">건너뛰기</button>
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
        {renderColumn(column1)}
        {renderColumn(column2)}
        {renderColumn(column3)}
      </div>

      <button className="step6-next-btn" onClick={() => navigate('/onboarding/complete')}>
        다음
      </button>
      <div className="step6-gradient-overlay" />
    </div>
  );
};

export default Step6_AddArtists;

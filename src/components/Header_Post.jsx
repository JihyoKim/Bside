import React, { useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import './Header.css';

import goback from '../assets/symbol/white/goback.png';
import down from '../assets/symbol/downBtn.svg';

const Header_Post = ({ onSubmit }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { artistId } = useParams();
  const [showArtistModal, setShowArtistModal] = useState(false);

  const isPostDetail = location.pathname.includes('/post/');

  const routeMap = {
    'AESPA': 'aespa',
    'G-DRAGON': 'gdragon',
    'ALLDAY PROJECT': 'alldayproject',
    'RIIZE': 'riize',
    'BLACKPINK': 'blackpink',
  };

  const displayName = Object.keys(routeMap).find(
    key => routeMap[key] === artistId) || 'Select';

  
  const artists = Object.keys(routeMap); // ['AESPA', 'G-DRAGON', ...]

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleArtistSelect = (name) => {
    const newId = routeMap[name];
    setShowArtistModal(false);
    navigate(`/main/artistPage/${newId}/write`);
  };

  return (
    <>
      <header className="fixed-header pink">
        <div className="header-left">
          <img src={goback} alt="BackBtn" className="BackBtn" onClick={handleGoBack} />
        </div>

        <div className="header-center">
          <div className="header-title">
            {displayName}
            <img
              src={down}
              alt="down"
              className="down-btn"
              onClick={() => setShowArtistModal(true)}
            />
          </div>
        </div>

        <div className="header-right">
          {!isPostDetail && (
            <button className="submit-button" onClick={onSubmit}>
              등록
            </button>
          )}
        </div>
      </header>

      {showArtistModal && (
        <div className="artist-modal-overlay" onClick={() => setShowArtistModal(false)}>
          <div className="artist-modal" onClick={(e) => e.stopPropagation()}>
            {artists.map((name, idx) => (
              <div
                key={idx}
                className="artist-modal-item"
                onClick={() => handleArtistSelect(name)}
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Header_Post;

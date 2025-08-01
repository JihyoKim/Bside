import React, { useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import './Header.css';

import goback from '../assets/symbol/white/goback.svg';
import down from '../assets/symbol/downBtn.svg';

const Header_Post = ({ onSubmit }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { artistId } = useParams();
  const [showArtistModal, setShowArtistModal] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

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
  const from = location.state?.from;

const handleGoBack = () => {
    if (from) {
      navigate(from); // ✅ 지정된 이전 경로로 무조건 이동
    } else {
      // fallback
      if (location.pathname.includes('/post/')) {
        navigate(`/main/artistPage/${artistId}/fan`);
      } else if (!artistId || artistId === 'undefined') {
        navigate('/main/mypage');
      } else {
        navigate(-1); 
      }
    }
  };

  const handleArtistSelect = (name) => {
    const newId = routeMap[name];
    setShowArtistModal(false);
  
    navigate(`/main/artistPage/${newId}/write`, {
      state: { from },
      replace: true,
    });
  };

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowArtistModal(false);
      setIsClosing(false);
    }, 300); 
  };

  return (
    <>
      <header className="fixed-header pink">
        <div className="header-left">
          <img src={goback} alt="BackBtn" className="BackBtn" onClick={handleGoBack} />
        </div>

        <div className="header-center">
          <div
            className="header-title"
            onClick={() => {
              if (!isPostDetail) setShowArtistModal(true);
            }}
            style={{
              pointerEvents: !isPostDetail ? 'auto' : 'none',
              cursor: !isPostDetail ? 'pointer' : 'default'
            }}
          >
            {displayName}
            {!isPostDetail && (
              <span className="guide">
                <img
                  src={down}
                  alt="down"
                  className={`down-btn ${showArtistModal && !isClosing ? 'rotated' : ''}`}
                />
              </span>
            )}
          </div>
        </div>

        <div className="header-right">
          {!isPostDetail && (
            <button className="submit-button guide" onClick={onSubmit}>
              등록
            </button>
          )}
        </div>
      </header>

      {showArtistModal && (
        <div className={`artist-modal-overlay ${isClosing ? 'fade-out' : ''}`} onClick={closeModal}>
          <div
            className={`artist-modal ${isClosing ? 'slide-down' : ''}`}
            onClick={(e) => e.stopPropagation()}
          >
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

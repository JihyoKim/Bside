import React from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import './Header.css';
import goback from '../assets/symbol/white/goback.png';

const Header_Post = ({ onSubmit }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { artistId } = useParams();

  const handleGoBack = () => {
    navigate(-1);
  };

  const isPostDetail = location.pathname.includes('/post/');

  return (
    <header className="fixed-header pink">
      <div className="header-left">
        <img
          src={goback}
          alt="BackBtn"
          className="BackBtn"
          onClick={handleGoBack}
        />
      </div>

      <div className="header-center">
        <div className="header-title">Fan</div>
        <div className="header-subtitle">{artistId}</div>
      </div>

      <div className="header-right">
        {/* ✅ postDetail 페이지일 때는 등록 버튼 숨김 */}
        {!isPostDetail && (
          <button className="submit-button" onClick={onSubmit}>
            등록
          </button>
        )}
      </div>
    </header>
  );
};

export default Header_Post;

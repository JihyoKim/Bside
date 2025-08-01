import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SideMenu.css';

import friendIcon from '../assets/symbol/searchFriendsIcon.svg';
import pointIcon from '../assets/mypage/point_white.svg';
import likeIcon from '../assets/ArtistPage/like.svg';
import commentIcon from '../assets/ArtistPage/comment.svg';
import bookmarkIcon from '../assets/ArtistPage/save.svg';
import historyIcon from '../assets/symbol/historyIcon.svg';
import orderIcon from '../assets/symbol/orderIcon.svg';
import cartIcon from '../assets/symbol/cartIcon.svg';
import privacyIcon from '../assets/symbol/privacyIcon.svg';
import inviteIcon from '../assets/symbol/inviteIcon.svg';
import supportIcon from '../assets/symbol/supportIcon.svg';
import settingsIcon from '../assets/symbol/settingIcon.svg';
import goback from '../assets/symbol/white/goback.svg';

const SideMenu = ({ isOpen, onToggle }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/onboarding');
  };

  return (
    <div className="mypage-side-container">
      <div className={`side-overlay ${isOpen ? 'show' : ''}`} onClick={onToggle} />
      <div className={`side-menu ${isOpen ? 'open' : ''}`}>
        <div className="side-menu-inner">
          <button className="close-btn" onClick={onToggle}>
            <img src={goback} alt="back" />
          </button>

          <div className="menu-group">
            <ul className="menu-list">
              <li><img src={friendIcon} alt="" /> 친구 발견</li>
            </ul>
          </div>

          <div className="menu-group">
            <ul className="menu-list">
              <li><img src={pointIcon} alt="" /> 미션 현황</li>
              <li><img src={likeIcon} alt="" /> 좋아요</li>
              <li><img src={commentIcon} alt="" /> 나의 댓글</li>
              <li><img src={bookmarkIcon} alt="" /> 저장됨</li>
              <li><img src={historyIcon} alt="" /> 내가 본 콘텐츠</li>
            </ul>
          </div>

          <div className="menu-group">
            <ul className="menu-list">
              <li><img src={orderIcon} alt="" /> 주문내역</li>
              <li><img src={cartIcon} alt="" /> 장바구니</li>
            </ul>
          </div>

          <div className="menu-group">
            <ul className="menu-list">
              <li><img src={privacyIcon} alt="" /> 계정공개범위</li>
            </ul>
          </div>

          <p className="logout guide" onClick={handleLogout}>로그아웃</p>

          <div className="bottom-actions">
            <div>
              <div className="action-circle">
                <img src={inviteIcon} alt="" />
              </div>
              <p>초대하기</p>
            </div>
            <div>
              <div className="action-circle">
                <img src={supportIcon} alt="" />
              </div>
              <p>고객센터</p>
            </div>
            <div>
              <div className="action-circle">
                <img src={settingsIcon} alt="" />
              </div>
              <p>설정</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
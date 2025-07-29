import React from 'react';
import './MessageHeader.css';
import goback from '../../assets/symbol/white/goback.svg';

const MessageHeader = ({ userInfo, isTranslateMode, onTranslateToggle, onGoBack }) => {
  return (
    <div className="message-header-container">
      <div className="message-header-content">
        {/* 왼쪽: BackBtn 이미지 */}
        <div className="header-left">
          <img
            src={goback}
            alt="BackBtn"
            className="BackBtn"
            onClick={onGoBack}
          />
        </div>

        {/* 가운데: 프로필 + 닉네임 + 상태 */}
        <div className="user-info-section">
          <div className="user-profile">
            <img
              src={userInfo.profileImage}
              alt={`${userInfo.nickname} profile`}
              className="user-profile-image"
              onError={(e) => {
                e.target.src = '/assets/profiles/default.png';
              }}
            />
            {userInfo.isOnline && <div className="online-dot"></div>}
          </div>
          <div className="user-details">
            <div className="user-nickname">{userInfo.nickname}</div>
            <div className="user-status">
              {userInfo.isOnline ? '온라인' : '오프라인'}
            </div>
          </div>
        </div>

        {/* 오른쪽: 번역 버튼 */}
        {userInfo.showTranslate && (
          <button
            className={`translate-button ${isTranslateMode ? 'active' : ''}`}
            onClick={onTranslateToggle}
          >
            {isTranslateMode ? '번역끄기' : '번역하기'}
          </button>
        )}
      </div>
    </div>
  );
};

export default MessageHeader;

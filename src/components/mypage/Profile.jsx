import React from 'react';
import './Profile.css';

import profileHeader from '../../assets/mypage/profile_header.png';
import profilePhoto from '../../assets/mypage/profile.png';
import settingIcon from '../../assets/mypage/setting.png';
import ticketIcon from '../../assets/mypage/ticket.svg';
import pointIcon from '../../assets/mypage/point_white.svg';

const preventLink = (e) => {
  e.preventDefault();
};

const Profile = () => {
  return (
    <div className="profile-section">
      {/* 배경 이미지 + 그라데이션 */}
      <div className="profile-bg">
        <img src={profileHeader} alt="header" className="bg-img" />
        <div className="bg-gradient" />
      </div>

      {/* 프로필 사진 영역 */}
      <div className="profile-center">
        <div className="profile-photo-wrap">
          <img src={profilePhoto} alt="profile" className="profile-photo" />
          
          <a href="#" onClick={preventLink}>
            <img src={settingIcon} alt="setting" className="setting-icon" />
          </a>

          <div className="today-badge">Today 18</div>
        </div>

        <div className="nickname">쥐들에곤히잠들다</div>
        <div className="status">이번에는 기필코 티켓팅 성공한다ㅜ</div>
      </div>

      {/* 하단 스탯 */}
      <div className="profile-stats">
        <div className="stat">
          <div className="stat-top">
            <a href="#" onClick={preventLink}>
              <img src={ticketIcon} alt="ticket" className="ticket" />
            </a>
          </div>
          <div className="stat-bottom">3</div>
        </div>

        <div className="stat">
          <div className="stat-top">
            <a href="#" onClick={preventLink}>
              <img src={pointIcon} alt="point" className="point" />
            </a>
          </div>
          <div className="stat-bottom">1075</div>
        </div>

        <div className="stat">
          <div className="stat-top stat-label">
            <a href="#" onClick={preventLink}>80</a>
          </div>
          <div className="stat-bottom">팔로워</div>
        </div>

        <div className="stat">
          <div className="stat-top stat-label">
            <a href="#" onClick={preventLink}>88</a>
          </div>
          <div className="stat-bottom">팔로잉</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

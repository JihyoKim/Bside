import React from 'react';
import './FollowingList.css';

const FollowingList = ({ data }) => {
  if (!data || data.length === 0) {
    return (
      <div className="following-list-empty">
        <p>팔로잉 목록이 없습니다.</p>
      </div>
    );
  }

  return (
    <div className="following-list-container">
      <div className="following-list">
        {data.map((user) => (
          <div key={user.id} className="profile-item">
            <div className="profile-image-container">
              <img 
                src={user.profileImage} 
                alt={`${user.nickname} profile`}
                className="profile-image"
                onError={(e) => {
                  e.target.src = '/assets/profiles/default.png'; // 기본 이미지
                }}
              />
            </div>
            <div className="profile-info">
              <div className="profile-nickname">
                {user.nickname}
              </div>
              {user.statusMessage && (
                <div className="profile-status">
                  {user.statusMessage}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FollowingList;
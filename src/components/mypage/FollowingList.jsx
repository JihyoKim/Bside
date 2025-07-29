import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FollowingList.css';

const FollowingList = ({ data }) => {
    const navigate = useNavigate();
  
    const handleDMClick = (user) => {
      console.log('DM 클릭됨!', user.nickname);
      console.log('바로 채팅방으로 이동:', `/main/message/room/${user.id}`);
      
      // MessageRoom.jsx로 바로 이동
      navigate(`/main/message/room/${user.id}`, { 
        state: { 
          userInfo: {
            id: user.id,
            nickname: user.nickname,
            profileImage: user.profileImage,
            isOnline: true // Following에서 오는 사람은 온라인으로 가정
          }
        } 
      });
    };  

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
            {/* a 태그 제거하고 div만 사용 */}
            <div className="dm-button" onClick={() => handleDMClick(user)}>
            DM
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FollowingList;
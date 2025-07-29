import React from 'react';
import './ChatRoomItem.css';

const ChatRoomItem = ({ chatRoom, onClick }) => {
  const {
    profileImage,
    nickname,
    lastMessage,
    lastMessageTime,
    unreadCount,
    isOnline
  } = chatRoom;

  return (
    <div className="chat-room-item" onClick={onClick}>
      <div className="chat-room-profile">
        <div className="profile-image-wrapper">
          <img 
            src={profileImage} 
            alt={`${nickname} profile`}
            className="profile-image"
            onError={(e) => {
              e.target.src = '/assets/profiles/default.png';
            }}
          />
          {isOnline && <div className="online-indicator"></div>}
        </div>
      </div>
      
      <div className="chat-room-content">
        <div className="chat-room-header">
          <div className="nickname">{nickname}</div>
          <div className="last-message-time">{lastMessageTime}</div>
        </div>
        
        <div className="chat-room-footer">
          <div className="last-message">
            {lastMessage}
          </div>
          {unreadCount > 0 && (
            <div className="unread-badge">
              {unreadCount > 99 ? '99+' : unreadCount}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatRoomItem;
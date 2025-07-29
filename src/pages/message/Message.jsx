import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Message.css';
import ChatRoomItem from '../../components/message/ChatRoomItem';

// 프로필 이미지 import (기존 Following.jsx와 동일)
import fff1 from '../../assets/profiles/fff1.png';
import fff2 from '../../assets/profiles/fff2.png';
import fff5 from '../../assets/profiles/fff5.png';
import fff7 from '../../assets/profiles/fff7.png';
import fff14 from '../../assets/profiles/fff14.png';

const Message = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [chatRooms, setChatRooms] = useState([]);

  // 샘플 채팅방 데이터 (실제 대화 내용 반영)
  const sampleChatRooms = [
    {
      id: 5,
      profileImage: fff5,
      nickname: 'mizuharakiko',
      lastMessage: '新しいアルバムが待ちきれない✨', // 일본어 원문
      lastMessageTime: '오후 2:34',
      unreadCount: 3,
      isOnline: true
    },
    {
      id: 7,
      profileImage: fff7,
      nickname: 'namako88',
      lastMessage: '韓国の文化が好きです', // 일본어 원문
      lastMessageTime: '오후 1:22',
      unreadCount: 1,  
      isOnline: false
    },
    {
      id: 14,
      profileImage: fff14,
      nickname: 'yehyehxing',
      lastMessage: '韩国音乐真的很棒', // 중국어 원문
      lastMessageTime: '오전 11:45',
      unreadCount: 0, // 모든 메시지 읽음
      isOnline: true
    },
    {
      id: 2,
      profileImage: fff2,
      nickname: 'bunayamin',
      lastMessage: 'K-pop sangat popular di sini', // 말레이시아어 원문
      lastMessageTime: '어제',
      unreadCount: 2,
      isOnline: false
    },
    {
      id: 1,
      profileImage: fff1,
      nickname: '라이즈브리즈뜬다',
      lastMessage: '좋은 하루 되세요~', // 한국어
      lastMessageTime: '3일 전',
      unreadCount: 0, // 모든 메시지 읽음
      isOnline: false
    }
  ];

  useEffect(() => {
    // 기본 채팅방 목록만 표시
    setChatRooms(sampleChatRooms);
  }, []);

  const handleChatRoomClick = (chatRoom) => {
    // 채팅방 페이지로 이동
    navigate(`/main/message/room/${chatRoom.id}`, {
      state: {
        userInfo: {
          id: chatRoom.id,
          nickname: chatRoom.nickname,
          profileImage: chatRoom.profileImage,
          isOnline: chatRoom.isOnline
        }
      }
    });
  };

  return (
    <div className="message-container">
      <div className="message-header">
        <h1>메시지</h1>
      </div>
      
      <div className="chat-rooms-list">
        {chatRooms.length === 0 ? (
          <div className="empty-message">
            <p>아직 대화한 친구가 없어요.</p>
            <p>팔로잉 목록에서 DM을 보내보세요!</p>
          </div>
        ) : (
          chatRooms.map((chatRoom) => (
            <ChatRoomItem
              key={chatRoom.id}
              chatRoom={chatRoom}
              onClick={() => handleChatRoomClick(chatRoom)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Message;
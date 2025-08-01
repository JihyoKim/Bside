import React, { useState, useEffect, useRef } from 'react';
import './LiveChat.css';

import xBTN from '../../../assets/live/xBTN.png';

import profile1 from '../../../assets/live/profile1.png';
import profile2 from '../../../assets/live/profile2.png';
import profile3 from '../../../assets/live/profile3.png';
import profile4 from '../../../assets/live/profile4.png';
import profile5 from '../../../assets/live/profile5.png';
import profile6 from '../../../assets/live/profile6.png';
import profile7 from '../../../assets/live/profile7.png';
import profile8 from '../../../assets/live/profile8.png';
import profile9 from '../../../assets/live/profile9.png';
import profile10 from '../../../assets/live/profile10.png';
import profile11 from '../../../assets/live/profile11.png';
import profile12 from '../../../assets/live/profile12.png';
import profile13 from '../../../assets/live/profile13.png';
import profile14 from '../../../assets/live/profile14.png';
import profile15 from '../../../assets/live/profile15.png';
import profile16 from '../../../assets/live/profile16.png';
import profile17 from '../../../assets/live/profile17.png';
import profile18 from '../../../assets/live/profile18.png';

const profiles = [
  profile1, profile2, profile3, profile4, profile5,
  profile6, profile7, profile8, profile9, profile10,
  profile11, profile12, profile13, profile14, profile15,
  profile16, profile17, profile18
];

const dummyMessages = [
  { nickname: '앎strong', text: '언니 너무 예뻐요ㅎㅎ' },
  { nickname: 'Justin', text: 'I love your hair color❤️ looks like Orange' },
  { nickname: '美妆！', text: '到什么时候才能见到你呜呜呜我哭了' },
  { nickname: '에스파팬', text: '와 언니 저 오늘 언니 봤는데!! 더운 날 화이팅><' },
  { nickname: '응원해요', text: '몸조심 하세요!!' },
  { nickname: 'n.young.k', text: 'my eye weird see all people cute' },
  { nickname: '小太阳', text: '我去过几次她们的演唱会' },
  { nickname: 'yuki', text: 'もうすぐ友達とあなたのコンサー！' },
  { nickname: '기대중', text: '이번 신곡 너무 기대됩니다 얼른 컴백해주세요💗' },
  { nickname: 'alsldk412', text: '오늘 화장 너무 찰떡이에요ㅠㅠㅠ' },
  { nickname: '홍서진', text: '다음주 콘서트 때 봬요!!!!!!!!' },
  { nickname: 'strong', text: '언니 너무 예뻐요ㅎㅎ' },
  { nickname: 'Justin', text: 'I love your hair color❤️ looks like Orange' },
  { nickname: '美妆！', text: '到什么时候才能见到你呜呜呜我哭了' },
  { nickname: '에스파팬', text: '와 언니 저 오늘 언니 봤는데!! 더운 날 화이팅><' },
  { nickname: '응원해요', text: '몸조심 하세요!!' },
  { nickname: 'mimi', text: 'my eye weird see all people cute' },
  { nickname: '小太阳', text: '她们长得真绝美' },
  { nickname: 'yuki', text: '友達とあなたのコンサートに行きます！' },
  { nickname: '기대중', text: '이번 신곡 너무 기대됩니다 얼른 컴백해주세요💗' },
  { nickname: '뷰티연구소', text: '오늘 화장 너무 찰떡이에요ㅠㅠㅠ' },
  { nickname: '홍서진', text: '다음주 콘서트 때 봬요!!!!!!!!' },
  { nickname: '앎strong', text: '언니 너무 예뻐요ㅎㅎ' },
  { nickname: 'Justin', text: 'I love your hair color❤️ looks like Orange' },
  { nickname: '美妆！', text: '到什么时候才能见到你呜呜呜我哭了' },
  { nickname: '에스파팬', text: '와 언니 저 오늘 언니 봤는데!! 더운 날 화이팅><' },
  { nickname: '응원해요', text: '몸조심 하세요!!' },
  { nickname: 'mimi', text: 'my eye weird see all people cute' },
  { nickname: '小太阳', text: '我去过几次她们的演唱会 她们长得真绝美' },
  { nickname: 'yuki', text: 'もうとあなたのコンサ行きます！' },
  { nickname: '기대중', text: '이번 신곡 너무 기대됩니다 얼른 컴백해주세요💗' },
  { nickname: '뷰티연구소', text: '오늘 화장 너무 찰떡이에요ㅠㅠㅠ' },
  { nickname: '홍서진', text: '다음주 콘서트 때 봬요!!!!!!!!' },

  // 필요 시 더 추가
];

const LiveChat = ({ onClose }) => {
  const [inputFocused, setInputFocused] = useState(false);
  const chatListRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (chatListRef.current) {
        chatListRef.current.scrollTop += 1;
        if (
          chatListRef.current.scrollTop + chatListRef.current.clientHeight >=
          chatListRef.current.scrollHeight
        ) {
          chatListRef.current.scrollTop = 0;
        }
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`live-chat-container ${inputFocused ? 'fullscreen' : ''}`}>
      <div className="chat-header">
        <span>실시간 채팅</span>
        <span className="guide">
          <img src={xBTN} alt="닫기" className="chat-close" onClick={onClose} />
        </span>
      </div>

      <div className="chat-list" ref={chatListRef}>
        {dummyMessages.map((msg, i) => (
          <div className="chat-item" key={i}>
            <img
              src={profiles[i % profiles.length]}
              alt="profile"
              className="chat-profile"
            />
            <div className="chat-text">
              <span className="chat-nickname">{msg.nickname}</span>
              <span className="chat-message">: {msg.text}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="chat-input-area">
        <input
          type="text"
          placeholder="내용 입력..."
          onFocus={() => setInputFocused(true)}
          onBlur={() => setInputFocused(false)}
        />
        <button className="send-btn">전송</button>
      </div>
    </div>
  );
};

export default LiveChat;

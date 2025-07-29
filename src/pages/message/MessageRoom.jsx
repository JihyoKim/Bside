import React, { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import './MessageRoom.css';
import MessageHeader from '../../components/message/MessageHeader';
import MessageBubble from '../../components/message/MessageBubble';
import MessageInput from '../../components/message/MessageInput';

const MessageRoom = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { userId } = useParams();
  const messagesEndRef = useRef(null);
  
  // 상태 관리
  const [messages, setMessages] = useState([]);
  const [isTranslateMode, setIsTranslateMode] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  // 사용자별 언어 및 자동 응답 메시지
  const getUserLanguageData = (userId) => {
    const languageData = {
      5: { // mizuharakiko - 일본어
        name: 'mizuharakiko',
        language: 'japanese',
        showTranslate: true,
        responses: [
          { original: "まじで！？", korean: "진짜!?" },
          { original: "それな〜", korean: "인정ㅠㅠ" },
          { original: "やばいwww", korean: "미쳤다ㅋㅋㅋ" },
          { original: "わかる〜", korean: "ㅇㅈㅇㅈ" },
          { original: "ㅋㅋㅋ日本語勉強してる", korean: "ㅋㅋㅋ일본어 공부하고 있어" },
          { original: "韓国語むずい💦", korean: "한국어 어려워💦" },
          { original: "오빠 사랑해〜", korean: "오빠 사랑해〜" },
          { original: "今度日本来て！", korean: "이번에 일본 와!" }
        ]
      },
      7: { // namako88 - 일본어
        name: 'namako88',
        language: 'japanese',
        showTranslate: true,
        responses: [
          { original: "アニョハセヨ〜", korean: "안녕하세요~" },
          { original: "한국어 어려워ㅠㅠ", korean: "한국어 어려워ㅠㅠ" },
          { original: "오빠 존잘♡", korean: "오빠 존잘♡" },
          { original: "일본 놀러와〜", korean: "일본 놀러와~" },
          { original: "ファイティン！", korean: "파이팅!" },
          { original: "なるほど〜", korean: "아하~" },
          { original: "やったー！", korean: "야호!" },
          { original: "멘붕ㅋㅋㅋ", korean: "멘붕ㅋㅋㅋ" }
        ]
      },
      14: { // yehyehxing - 중국어
        name: 'yehyehxing',
        language: 'chinese',
        showTranslate: true,
        responses: [
          { original: "真的吗？", korean: "진짜야?" },
          { original: "哈哈哈太好笑了", korean: "ㅋㅋㅋ개웃김" },
          { original: "我懂了！", korean: "ㅇㅈ!" },
          { original: "太帅了吧", korean: "개존잘ㅠㅠ" },
          { original: "화이팅！", korean: "화이팅!" },
          { original: "好羡慕啊", korean: "개부러워" },
          { original: "完全同意", korean: "완전 공감" },
          { original: "笑死了hhh", korean: "웃어죽겠네ㅋㅋㅋ" }
        ]
      },
      2: { // bunayamin - 말레이시아어  
        name: 'bunayamin',
        language: 'malay',
        showTranslate: true,
        responses: [
          { original: "Betul ke?", korean: "진짜야?" },
          { original: "Hahahaha lawak gila", korean: "ㅋㅋㅋ개웃김" },
          { original: "Setuju sangat!", korean: "완전 동의!" },  
          { original: "Gila handsome", korean: "개잘생겼어" },
          { original: "화이팅 bro!", korean: "화이팅 형!" },
          { original: "Best lah", korean: "최고야" },
          { original: "Jealous betul", korean: "개부러워" },
          { original: "Tak boleh tahan", korean: "못참겠어ㅋㅋ" }
        ]
      },
      1: { // 라이즈브리즈뜬다 - 한국어
        name: '라이즈브리즈뜬다',
        language: 'korean', 
        showTranslate: false,
        responses: [
          { original: "ㅋㅋㅋㅋ인정", korean: "ㅋㅋㅋㅋ인정" },
          { original: "아 진짜?? 대박", korean: "아 진짜?? 대박" },
          { original: "성찬이 미쳤다ㅠㅠ", korean: "성찬이 미쳤다ㅠㅠ" },
          { original: "ㅇㅈㅇㅈ", korean: "ㅇㅈㅇㅈ" },
          { original: "개부러워 진심", korean: "개부러워 진심" },
          { original: "나도 가고싶다ㅠ", korean: "나도 가고싶다ㅠ" },
          { original: "미치겠네 진짜", korean: "미치겠네 진짜" },
          { original: "어떡해ㅠㅠ 너무좋아", korean: "어떡해ㅠㅠ 너무좋아" }
        ]
      }
    };
    
    return languageData[parseInt(userId)] || languageData[1];
  };

  // 사용자별 초기 메시지 데이터
  const getUserInitialMessages = (userId) => {
    const messageData = {
      5: [ // mizuharakiko - unreadCount: 3 (최근 3개가 안읽음)
        {
          id: 1,
          text: "안녕하세요! 한국 팬이에요",
          sender: 'me',
          timestamp: new Date(Date.now() - 300000).toLocaleTimeString('ko-KR', {
            hour: '2-digit',
            minute: '2-digit'
          })
        },
        {
          id: 2,
          text: "こんにちは！",
          translatedText: "안녕하세요!",
          sender: 'other',
          timestamp: new Date(Date.now() - 180000).toLocaleTimeString('ko-KR', {
            hour: '2-digit',
            minute: '2-digit'
          })
        },
        {
          id: 3,
          text: "K-POPファンですか？",
          translatedText: "K-POP 팬이신가요?",
          sender: 'other',
          timestamp: new Date(Date.now() - 120000).toLocaleTimeString('ko-KR', {
            hour: '2-digit',
            minute: '2-digit'
          })
        },
        {
          id: 4,
          text: "新しいアルバムが待ちきれない✨",
          translatedText: "새 앨범이 너무 기대돼요✨",
          sender: 'other',
          timestamp: new Date(Date.now() - 60000).toLocaleTimeString('ko-KR', {
            hour: '2-digit',
            minute: '2-digit'
          })
        }
      ],
      7: [ // namako88 - unreadCount: 1 (최근 1개가 안읽음)
        {
          id: 1,
          text: "일본에서 왔어요!",
          sender: 'me',
          timestamp: new Date(Date.now() - 180000).toLocaleTimeString('ko-KR', {
            hour: '2-digit',
            minute: '2-digit'
          })
        },
        {
          id: 2,
          text: "はじめまして！",
          translatedText: "처음 뵙겠습니다!",
          sender: 'other',
          timestamp: new Date(Date.now() - 150000).toLocaleTimeString('ko-KR', {
            hour: '2-digit',
            minute: '2-digit'
          })
        },
        {
          id: 3,
          text: "한국어 배우고 있어요",
          sender: 'me',
          timestamp: new Date(Date.now() - 120000).toLocaleTimeString('ko-KR', {
            hour: '2-digit',
            minute: '2-digit'
          })
        },
        {
          id: 4,
          text: "韓国の文化が好きです",
          translatedText: "한국 문화를 좋아해요",
          sender: 'other',
          timestamp: new Date(Date.now() - 90000).toLocaleTimeString('ko-KR', {
            hour: '2-digit',
            minute: '2-digit'
          })
        }
      ],
      14: [ // yehyehxing - unreadCount: 0 (모든 메시지 읽음)
        {
          id: 1,
          text: "중국에서 인사드려요!",
          sender: 'me',
          timestamp: new Date(Date.now() - 240000).toLocaleTimeString('ko-KR', {
            hour: '2-digit',
            minute: '2-digit'
          })
        },
        {
          id: 2,
          text: "你好！很高兴认识你",
          translatedText: "안녕하세요! 만나서 반가워요",
          sender: 'other',
          timestamp: new Date(Date.now() - 210000).toLocaleTimeString('ko-KR', {
            hour: '2-digit',
            minute: '2-digit'
          })
        },
        {
          id: 3,
          text: "K-POP 정말 좋아해요",
          sender: 'me',
          timestamp: new Date(Date.now() - 180000).toLocaleTimeString('ko-KR', {
            hour: '2-digit',
            minute: '2-digit'
          })
        },
        {
          id: 4,
          text: "韩国音乐真的很棒",
          translatedText: "한국 음악 정말 좋아요",
          sender: 'other',
          timestamp: new Date(Date.now() - 150000).toLocaleTimeString('ko-KR', {
            hour: '2-digit',
            minute: '2-digit'
          })
        }
      ],
      2: [ // bunayamin - unreadCount: 2 (최근 2개가 안읽음)
        {
          id: 1,
          text: "말레이시아 팬이에요",
          sender: 'me',
          timestamp: new Date(Date.now() - 90000).toLocaleTimeString('ko-KR', {
            hour: '2-digit',
            minute: '2-digit'
          })
        },
        {
          id: 2,
          text: "Hai! Apa khabar?",
          translatedText: "안녕하세요! 어떻게 지내세요?",
          sender: 'other',
          timestamp: new Date(Date.now() - 60000).toLocaleTimeString('ko-KR', {
            hour: '2-digit',
            minute: '2-digit'
          })
        },
        {
          id: 3,
          text: "K-pop sangat popular di sini",
          translatedText: "K-pop이 여기서 정말 인기에요",
          sender: 'other',
          timestamp: new Date(Date.now() - 30000).toLocaleTimeString('ko-KR', {
            hour: '2-digit',
            minute: '2-digit'
          })
        }
      ],
      1: [ // 라이즈브리즈뜬다 - unreadCount: 0 (모든 메시지 읽음)
        {
          id: 1,
          text: "라이즈 팬이신가요?",
          sender: 'me',
          timestamp: new Date(Date.now() - 300000).toLocaleTimeString('ko-KR', {
            hour: '2-digit',
            minute: '2-digit'
          })
        },
        {
          id: 2,
          text: "네! 라이즈 정말 좋아해요!",
          sender: 'other',
          timestamp: new Date(Date.now() - 270000).toLocaleTimeString('ko-KR', {
            hour: '2-digit',
            minute: '2-digit'
          })
        },
        {
          id: 3,
          text: "저도요! 어떤 멤버 좋아하세요?",
          sender: 'me',
          timestamp: new Date(Date.now() - 240000).toLocaleTimeString('ko-KR', {
            hour: '2-digit',
            minute: '2-digit'
          })
        },
        {
          id: 4,
          text: "성찬이 최고예요! ㅎㅎ",
          sender: 'other',
          timestamp: new Date(Date.now() - 210000).toLocaleTimeString('ko-KR', {
            hour: '2-digit',
            minute: '2-digit'
          })
        },
        {
          id: 5,
          text: "좋은 하루 되세요~",
          sender: 'other',
          timestamp: new Date(Date.now() - 180000).toLocaleTimeString('ko-KR', {
            hour: '2-digit',
            minute: '2-digit'
          })
        }
      ]
    };
    
    return messageData[parseInt(userId)] || [];
  };

  // 현재 사용자 언어 데이터
  const currentUserData = getUserLanguageData(userId);

  // 초기 메시지 설정
  useEffect(() => {
    if (location.state?.userInfo && userId) {
      setUserInfo({
        ...location.state.userInfo,
        showTranslate: currentUserData.showTranslate
      });
      
      // 사용자별 초기 메시지 설정
      const initialMessages = getUserInitialMessages(userId);
      setMessages(initialMessages);
    }
  }, [location.state, userId]);

  // 메시지 전송 핸들러
  const handleSendMessage = (messageData) => {
    // messageData가 문자열(기존)이면 텍스트로, 객체면 새 형식으로 처리
    const isLegacyTextMessage = typeof messageData === 'string';
    
    if (isLegacyTextMessage) {
      // 기존 텍스트만 있는 경우
      if (!messageData.trim()) return;
    } else {
      // 새 형식: 텍스트나 이미지 중 하나라도 있어야 함
      if (!messageData.text?.trim() && !messageData.image) return;
    }

    // 내가 보낸 메시지 추가
    const myMessage = {
      id: Date.now(),
      text: isLegacyTextMessage ? messageData : messageData.text,
      image: isLegacyTextMessage ? null : messageData.image,
      type: isLegacyTextMessage ? 'text' : messageData.type,
      sender: 'me',
      timestamp: new Date().toLocaleTimeString('ko-KR', {
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    setMessages(prev => [...prev, myMessage]);

    // 2초 후 친구의 자동 응답 (텍스트 메시지에만)
    if (isLegacyTextMessage || messageData.type === 'text') {
      setTimeout(() => {
        const responses = currentUserData.responses;
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        
        const responseMessage = {
          id: Date.now() + 1,
          text: randomResponse.original,
          translatedText: randomResponse.korean,
          type: 'text',
          sender: 'other',
          timestamp: new Date().toLocaleTimeString('ko-KR', {
            hour: '2-digit',
            minute: '2-digit'
          })
        };

        setMessages(prev => [...prev, responseMessage]);
      }, 2000);
    } else {
      // 이미지를 보냈을 때는 이미지로 응답
      setTimeout(() => {
        const imageResponses = [
          { original: "かわいい！", korean: "귀여워!" },
          { original: "いいね〜", korean: "좋아~" },
          { original: "すごい！", korean: "대박!" },
          { original: "きれい", korean: "예뻐" }
        ];
        
        const randomResponse = imageResponses[Math.floor(Math.random() * imageResponses.length)];
        
        const responseMessage = {
          id: Date.now() + 1,
          text: randomResponse.original,
          translatedText: randomResponse.korean,
          type: 'text',
          sender: 'other',
          timestamp: new Date().toLocaleTimeString('ko-KR', {
            hour: '2-digit',
            minute: '2-digit'
          })
        };

        setMessages(prev => [...prev, responseMessage]);
      }, 2000);
    }
  };

  // 번역 토글 핸들러
  const handleTranslateToggle = () => {
    setIsTranslateMode(prev => !prev);
  };

  // 뒤로가기 핸들러
  const handleGoBack = () => {
    navigate('/main/message');
  };

  // 새 메시지 시 스크롤 맨 아래로
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  if (!userInfo) {
    return (
      <div className="message-room-loading">
        <p>사용자 정보를 불러오는 중...</p>
      </div>
    );
  }

  return (
    <div className="message-room-container">
      {/* 헤더 */}
      <MessageHeader
        userInfo={userInfo}
        isTranslateMode={isTranslateMode}
        onTranslateToggle={handleTranslateToggle}
        onGoBack={handleGoBack}
      />

      {/* 메시지 영역 */}
      <div className="messages-container">
        <div className="messages-list">
          {messages.map((message) => (
            <MessageBubble
              key={message.id}
              message={message}
              isTranslateMode={isTranslateMode}
            />
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* 입력 영역 */}
      <MessageInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default MessageRoom;
import React from 'react';
import './MessageBubble.css';

const MessageBubble = ({ message, isTranslateMode }) => {
  const { text, translatedText, sender, timestamp, image, type } = message;
  
  // 표시할 텍스트 결정
  const displayText = isTranslateMode && translatedText && sender === 'other' 
    ? translatedText 
    : text;

  return (
    <div className={`message-bubble-wrapper ${sender}`}>
      <div className={`message-bubble ${sender}`}>
        {/* 이미지 메시지 */}
        {type === 'image' && image && (
          <div className="message-image-container">
            <img 
              src={image.url} 
              alt="전송된 이미지"
              className="message-image"
            />
          </div>
        )}

        {/* 텍스트 메시지 */}
        {text && (
          <div className="message-text">
            {displayText}
          </div>
        )}
        
        {/* 번역 모드일 때 원문도 작게 표시 */}
        {isTranslateMode && translatedText && sender === 'other' && text && (
          <div className="original-text">
            {text}
          </div>
        )}
        
        <div className="message-timestamp">
          {timestamp}
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;
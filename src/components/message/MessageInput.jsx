import React, { useState, useRef } from 'react';
import './MessageInput.css';

const MessageInput = ({ onSendMessage }) => {
  const [inputText, setInputText] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const inputRef = useRef(null);
  const fileInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 텍스트나 이미지 중 하나라도 있으면 전송
    if (inputText.trim() || selectedImage) {
      onSendMessage({
        text: inputText.trim(),
        image: selectedImage,
        type: selectedImage ? 'image' : 'text'
      });
      setInputText('');
      setSelectedImage(null);
      // 전송 후 포커스 유지
      inputRef.current?.focus();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const handleInputClick = () => {
    // 입력창 클릭시 강제로 포커스
    inputRef.current?.focus();
  };

  // 이미지 선택 핸들러
  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      // 파일을 URL로 변환
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage({
        file: file,
        url: imageUrl,
        name: file.name
      });
    }
  };

  // 갤러리 버튼 클릭
  const handleGalleryClick = () => {
    fileInputRef.current?.click();
  };

  // 이미지 제거
  const handleRemoveImage = () => {
    if (selectedImage) {
      URL.revokeObjectURL(selectedImage.url); // 메모리 해제
    }
    setSelectedImage(null);
  };

  return (
    <div className="message-input-container">
      {/* 이미지 미리보기 */}
      {selectedImage && (
        <div className="image-preview-container">
          <div className="image-preview">
            <img src={selectedImage.url} alt="선택된 이미지" />
            <button 
              className="remove-image-btn"
              onClick={handleRemoveImage}
              type="button"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="message-input-form  guide3">
        <div className="input-wrapper" onClick={handleInputClick}>
          {/* 갤러리 버튼 */}
          <button 
            type="button"
            className="gallery-button guide"
            onClick={handleGalleryClick}
          >
            📷
          </button>

          {/* 숨겨진 파일 입력 */}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageSelect}
            style={{ display: 'none' }}
          />

          <input
            ref={inputRef}
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="메시지를 입력하세요..."
            className="message-input-field"
            maxLength={500}
            autoFocus
          />
          <button 
            type="submit" 
            className={`send-button ${(inputText.trim() || selectedImage) ? 'active guide' : ''}`}
            disabled={!inputText.trim() && !selectedImage}
          >
            전송
          </button>
        </div>
      </form>
    </div>
  );
};

export default MessageInput;
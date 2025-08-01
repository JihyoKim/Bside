import React, { useEffect, useState, useRef } from 'react';
import './SubtitleBox.css';
import subtitlesData from './SubtitleData';

const SubtitleBox = ({ videoRef, language = 'kr' }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(null);
  const [isTyping, setIsTyping] = useState(false);
  const typingRef = useRef(null);

  // ✅ 자막 끄기 선택 시 아무것도 렌더링하지 않음
  if (language === 'off') return null;

  const getCurrentSubtitle = (subs, currentTime) => {
    return subs.find((item, index) => (
      currentTime >= item.time &&
      currentTime <= item.end &&
      index !== currentIndex
    ));
  };

  const typeText = (text) => {
    setDisplayText('');
    setIsTyping(true);
    let i = 0;

    clearInterval(typingRef.current); // 이전 타이핑 중지

    typingRef.current = setInterval(() => {
      if (i < text.length) {
        setDisplayText(prev => (prev || '') + text.charAt(i));
        i++;
      } else {
        clearInterval(typingRef.current);
        setIsTyping(false);
      }
    }, 80);
  };

  // ✅ 영상 재생 시간 기반으로 자막 업데이트
  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = videoRef?.current?.currentTime || 0;
      const subs = subtitlesData[language] || [];

      const subtitle = getCurrentSubtitle(subs, currentTime);
      const newIndex = subtitle ? subs.indexOf(subtitle) : null;

      if (subtitle && !isTyping && newIndex !== currentIndex) {
        setCurrentIndex(newIndex);
        typeText(subtitle.text);
      }
    }, 300);

    return () => clearInterval(interval);
  }, [videoRef, language, currentIndex, isTyping]);

  // ✅ 언어 변경 시 초기 자막 세팅
  useEffect(() => {
    const currentTime = videoRef?.current?.currentTime || 0;
    const subs = subtitlesData[language] || [];

    const subtitle = getCurrentSubtitle(subs, currentTime);
    if (subtitle) {
      const newIndex = subs.indexOf(subtitle);
      setCurrentIndex(newIndex);
      typeText(subtitle.text);
    } else {
      setDisplayText('');
      setCurrentIndex(null);
    }
  }, [language, videoRef]);

  return (
    <div className={`subtitle-box-container ${language}`}>
      <div className={`subtitle-box ${language}`}>
        <div className="language-tag">언어: {language?.toUpperCase() || 'OFF'}</div>
        <div className="subtitle-text">{displayText}</div>
      </div>
    </div>
  );
};

export default SubtitleBox;

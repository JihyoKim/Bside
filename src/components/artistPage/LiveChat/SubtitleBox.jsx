import React, { useEffect, useState, useRef } from 'react';
import './SubtitleBox.css';
import subtitlesData from './SubtitleData';

const SubtitleBox = ({ videoRef, language = 'kr' }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(null);
  const [isTyping, setIsTyping] = useState(false);
  const typingRef = useRef(null);

  const getCurrentSubtitle = (subs, currentTime) => {
    return subs.find(
      (item, index) =>
        currentTime >= item.time &&
        currentTime <= item.end &&
        index !== currentIndex
    );
  };

  const typeText = (text) => {
    setDisplayText('');
    setIsTyping(true);
    let i = 0;

    clearInterval(typingRef.current);
    typingRef.current = setInterval(() => {
      if (i < text.length) {
        setDisplayText((prev) => (prev || '') + text.charAt(i));
        i++;
      } else {
        clearInterval(typingRef.current);
        setIsTyping(false);
      }
    }, 80);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = videoRef?.current?.currentTime || 0;
      const subs = subtitlesData[language] || subtitlesData['kr'];
      const subtitle = getCurrentSubtitle(subs, currentTime);

      if (subtitle && !isTyping) {
        setCurrentIndex(subs.indexOf(subtitle));
        typeText(subtitle.text);
      }
    }, 300);

    return () => clearInterval(interval);
  }, [videoRef, language, currentIndex, isTyping]);

  useEffect(() => {
    const currentTime = videoRef?.current?.currentTime || 0;
    const subs = subtitlesData[language] || subtitlesData['kr'];
    const subtitle = getCurrentSubtitle(subs, currentTime);

    if (subtitle) {
      setCurrentIndex(subs.indexOf(subtitle));
      typeText(subtitle.text);
    } else {
      setDisplayText('');
      setCurrentIndex(null);
    }
  }, [language]);

  // ✅ 클래스명: 'subtitle-box-container cn' or 'subtitle-box jp'
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

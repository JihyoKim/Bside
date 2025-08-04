import React, { useEffect, useState, useRef } from 'react';
import './SubtitleBox.css';
import subtitlesData from './SubtitleData';
import subtitlesData2 from './SubtitleData2'; 

const SubtitleBox = ({ videoRef, language = 'kr', mediaId }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(null);
  const [isTyping, setIsTyping] = useState(false);
  const typingRef = useRef(null);

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
    clearInterval(typingRef.current);

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

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = videoRef?.current?.currentTime || 0;

      // ✅ mediaId에 따라 자막 데이터 선택
      const selectedData = mediaId === 'live-giselle' ? subtitlesData2 : subtitlesData;
      const subs = selectedData[language] || [];

      const subtitle = getCurrentSubtitle(subs, currentTime);
      const newIndex = subtitle ? subs.indexOf(subtitle) : null;

      if (subtitle && !isTyping && newIndex !== currentIndex) {
        setCurrentIndex(newIndex);
        typeText(subtitle.text);
      }
    }, 300);

    return () => clearInterval(interval);
  }, [videoRef, language, currentIndex, isTyping, mediaId]);

  useEffect(() => {
    const currentTime = videoRef?.current?.currentTime || 0;
    const selectedData = mediaId === 'live-giselle' ? subtitlesData2 : subtitlesData;
    const subs = selectedData[language] || [];

    const subtitle = getCurrentSubtitle(subs, currentTime);
    if (subtitle) {
      const newIndex = subs.indexOf(subtitle);
      setCurrentIndex(newIndex);
      typeText(subtitle.text);
    } else {
      setDisplayText('');
      setCurrentIndex(null);
    }
  }, [language, videoRef, mediaId]);

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

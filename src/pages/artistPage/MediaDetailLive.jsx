import React, { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import './MediaDetailLive.css';

import SubtitleBox from '../../components/artistPage/LiveChat/SubtitleBox';
import RightSideIcons from '../../components/artistPage/LiveChat/RightSideIcons';
import ShareModal from '../../components/artistPage/LiveChat/ShareModal';
import LanguageDropdown from '../../components/artistPage/LiveChat/LanguageDropdown';
import LiveChat from '../../components/artistPage/LiveChat/LiveChat';

import videoFile1 from '../../assets/idol-video.mp4'; //live-rose용
import videoFile2 from '../../assets/idol-video2.mp4'; // live-giselle용
import aespaLogo from '../../assets/live/aespaLogo.png';
import soundOn from '../../assets/live/soundOn.png';
import soundOff from '../../assets/live/soundOff.png';
import redBall from '../../assets/live/redBall.png'; // 🔴 빨간 점

const MediaDetailLive = () => {
  const { mediaId } = useParams();
  const videoRef = useRef(null);
  const [showChat, setShowChat] = useState(false);
  const [showShare, setShowShare] = useState(false);
  const [showTranslate, setShowTranslate] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [language, setLanguage] = useState('kr');

  const toggleSound = () => {
    setSoundEnabled((prev) => {
      const newState = !prev;
      if (videoRef.current) {
        videoRef.current.muted = !newState;
        videoRef.current.play();
      }
      return newState;
    });
  };

  const handleOverlayClick = () => {
    setShowChat(false);
    setShowShare(false);
    setShowTranslate(false);
  };

  const isGiselleLive = mediaId === 'live-giselle';
  const videoSrc = isGiselleLive ? videoFile2 : videoFile1;
  const groupName = isGiselleLive ? '에스파' : '블랙핑크';

  return (
    <div className="media-detail-container">
      {/* 🎥 배경 비디오 */}
      <video
        className="background-video"
        autoPlay
        loop
        muted={!soundEnabled}
        ref={videoRef}
        playsInline
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* 🌑 어두운 배경 오버레이 */}
      {(showChat || showShare || showTranslate) && (
        <div className="overlay" onClick={handleOverlayClick}></div>
      )}

      {/* 🧭 상단 헤더 */}
      <div className="live-header">
        <div className="left-info">
          <img src={aespaLogo} alt="aespa" className="aespa-logo" />
          <div className="text-box">
            <div className="group-name">{groupName}</div>
            <div className="viewer-count">
              5.3만 시청 중
              <img src={redBall} alt="live" className="live-dot" />
            </div>
          </div>
        </div>

        {/* 🔊 사운드 토글 버튼 */}
        <div className="sound-wrapper" onClick={toggleSound}>
          <div className="sound-bg" />
          <img
            src={soundEnabled ? soundOn : soundOff}
            alt="Sound Toggle"
            className="sound-icon"
          />
        </div>
      </div>

      {/* 🌐 언어 선택 드롭업 */}
      {showTranslate && (
        <LanguageDropdown
          language={language}
          setLanguage={setLanguage}
          onClose={() => setShowTranslate(false)}
        />
      )}

      {/* 💬 실시간 자막 */}
      <SubtitleBox videoRef={videoRef} language={language} mediaId={mediaId} />

      {/* ➡️ 우측 아이콘 */}
      <RightSideIcons
        onToggleChat={() => setShowChat(!showChat)}
        onToggleShare={() => setShowShare(!showShare)}
        onToggleTranslate={() => setShowTranslate(!showTranslate)}
      />

      {/* 📤 공유 모달 */}
      {showShare && <ShareModal onClose={() => setShowShare(false)} />}

      {/* 💬 실시간 채팅창 */}
      {showChat && <LiveChat onClose={() => setShowChat(false)} />}
    </div>
  );
};

export default MediaDetailLive;

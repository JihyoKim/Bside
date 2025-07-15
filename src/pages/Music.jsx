import React, { useState, useEffect } from 'react';
import './Music.css';
import albumImage from '../assets/sampleAlbum.png';
import albumIcon from '../assets/icon_album.png';
import questionIcon from '../assets/icon_question.png';
import LyricsPanel from '../components/music/LyricsPanel';

const Music = () => {
  const [showLyrics, setShowLyrics] = useState(false);
  const [lyricsStyle, setLyricsStyle] = useState({});

  useEffect(() => {
    const handler = () => setShowLyrics(false);
    window.addEventListener('closeLyricsPanel', handler);
    return () => window.removeEventListener('closeLyricsPanel', handler);
  }, []);
  
  useEffect(() => {
    const updateLyricsPosition = () => {
      const header = document.querySelector('header');
      const headerHeight = header?.offsetHeight || 80; // 헤더 높이
      const bottomNavHeight = 90;

      setLyricsStyle({
        top: `${headerHeight}px`,
        left: 0,
        width: '100%',
        height: `calc(100vh - ${headerHeight + bottomNavHeight}px)`,
      });
    };

    updateLyricsPosition();
    window.addEventListener('resize', updateLyricsPosition);
    return () => window.removeEventListener('resize', updateLyricsPosition);
  }, []);

  return (
    <div className="music-container">
      <div className="music-top">
        <h2 className="song-title">Last Dance</h2>
        <div className="time-bar">
          <span>00:06</span>
          <span>04:39</span>
        </div>
        <div className="album-art-wrap">
          <div className="album-art-frame">
            <img className="album-art" src={albumImage} alt="앨범" />
            <div className="album-center-hole"></div>
          </div>
        </div>
      </div>

      <div className="music-bottom">
        <div
          className="lyrics-preview"
          onClick={() => setShowLyrics(true)}
        >
          <p className="pink">영원할 줄 알았던 사람도 저물고</p>
          <p>이젠 그 흔한 친구마저 떠나 가네요</p>
        </div>

        <div className="bottom-row">
          <div className="album-card">
            <img src={albumIcon} alt="앨범 아이콘" className="top-icon" />
            <p className="card-title">앨범 등록하기</p>
            <button className="album-add-btn">＋</button>
            <p className="sub">
              <img src={questionIcon} alt="?" />
              앨범 등록 혜택 보기
            </p>
          </div>

          <div className="streaming-stats">
            <h4>나의 스트리밍</h4>
            <ul>
              <li><span>2025.07.02</span> <strong>12회</strong></li>
              <li><span>2025.07.01</span> <strong>40회</strong></li>
              <li><span>2025.06.30</span> <strong>32회</strong></li>
              <li><span>2025.06.28</span> <strong>36회</strong></li>
            </ul>
            <p className="reward-tip">
              <span className="highlight">15회</span> 더 재생하면 리워드가 지급돼요!
            </p>
          </div>
        </div>
      </div>

      {/* 가사 패널 */}
      {showLyrics && (
        <LyricsPanel
          visible={showLyrics}
          onClose={() => setShowLyrics(false)}
          style={lyricsStyle}
        />
      )}
    </div>
  );
};

export default Music;

import React, { useState } from 'react';
import MusicCover from '../components/music/MusicCover';
import MusicLyrics from '../components/music/MusicLyrics';
import SelectMusic from '../components/music/SelectMusic';
import LyricsPron from '../components/music/LyricsPron';
import LyricTrans from '../components/music/LyricTrans';
import './Music.css';

const Music = () => {
  const [showLyrics, setShowLyrics] = useState(false);
  const [selectedTab, setSelectedTab] = useState('pronunciation'); // 기본: 발음

  return (
    <div className="music-container">
      <MusicCover />
      <MusicLyrics onClick={() => setShowLyrics(true)} />
      <SelectMusic />

      <div className={`lyrics ${showLyrics ? 'show' : ''}`}>
        <div className="tab-buttons">
          <button
            className={selectedTab === 'pronunciation' ? 'active' : ''}
            onClick={() => setSelectedTab('pronunciation')}
          >
            발음
          </button>
          <button
            className={selectedTab === 'translation' ? 'active' : ''}
            onClick={() => setSelectedTab('translation')}
          >
            번역
          </button>
        </div>

        <div className="lyrics-content">
          {selectedTab === 'pronunciation' ? <LyricsPron /> : <LyricTrans />}
        </div>
      </div>
    </div>
  );
};

export default Music;

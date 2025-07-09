import React, { useState } from 'react';
import LyricsOnly from './LyricsOnly';
import LyricsTrans from './LyricsTrans';
import LyricsPron from './LyricsPron';
import './Lyrics.css';

const LyricsPanel = ({ style, onClose }) => {
  const [selectedTab, setSelectedTab] = useState('lyrics');

  const renderContent = () => {
    switch (selectedTab) {
      case 'lyrics':
        return <LyricsOnly />;
      case 'translation':
        return <LyricsTrans />;
      case 'pronunciation':
        return <LyricsPron />;
      default:
        return null;
    }
  };

  return (
    <div className="lyrics-panel show" style={style}>
      <div className="lyrics-tabs">
        <button
          className={selectedTab === 'lyrics' ? 'active' : ''}
          onClick={() => setSelectedTab('lyrics')}
        >
          가사
        </button>
        <button
          className={selectedTab === 'translation' ? 'active' : ''}
          onClick={() => setSelectedTab('translation')}
        >
          해석
        </button>
        <button
          className={selectedTab === 'pronunciation' ? 'active' : ''}
          onClick={() => setSelectedTab('pronunciation')}
        >
          발음
        </button>
      </div>
      <div className="lyrics-content">
        <div className="lyrics-scroll-inner">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default LyricsPanel;

import React, { useState } from 'react';
import LyricsOnly from './LyricsOnly';
import LyricsTrans from './LyricsTrans';
import LyricsPron from './LyricsPron';
import './Lyrics.css';

const LyricsPanel = ({ visible, onClose }) => {
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
    <div
      className={`lyrics-panel ${visible ? 'show' : ''}`}
    >
      <div className="lyrics-tabs">
        <button className={selectedTab === 'lyrics' ? 'active' : ''} onClick={() => setSelectedTab('lyrics')}>
          <span className="guide">가사</span>
        </button>
        <button className={selectedTab === 'translation' ? 'active' : ''} onClick={() => setSelectedTab('translation')}>
          <span className="guide">해석</span>
        </button>
        <button className={selectedTab === 'pronunciation' ? 'active' : ''} onClick={() => setSelectedTab('pronunciation')}>
          <span className="guide">발음</span>
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

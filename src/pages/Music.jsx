import React, { useState, useEffect } from 'react';
import MusicCover from '../components/music/MusicCover';
import MusicLyrics from '../components/music/MusicLyrics';
import SelectMusic from '../components/music/SelectMusic';
import LyricsPanel from '../components/music/LyricsPanel';
import './Music.css';
import '../components/music/Lyrics.css';

const Music = () => {
  const [showLyrics, setShowLyrics] = useState(false);
  const [lyricsStyle, setLyricsStyle] = useState({
    top: '60px',
    left: 0,
    width: '100%',
    height: 'calc(100vh - 60px)',
  });

  useEffect(() => {
    const updateLyricsPosition = () => {
      const root = document.getElementById('root');
      const header = document.querySelector('header');
      const rect = root?.getBoundingClientRect();
      const headerHeight = header?.offsetHeight || 60;
      const bottomNavHeight = 90;
      setLyricsStyle({
        top: `${headerHeight}px`,
        left: `${rect?.left || 0}px`,
        width: `${rect?.width}px`,
        height: `calc(100vh - ${headerHeight + bottomNavHeight}px)`,
      });
    };

    updateLyricsPosition();
    window.addEventListener('resize', updateLyricsPosition);
    return () => window.removeEventListener('resize', updateLyricsPosition);
  }, []);

  return (
    <div className="music-container">
      <MusicCover />
      <MusicLyrics onClick={() => setShowLyrics(true)} />
      <SelectMusic />
      {showLyrics && (
        <LyricsPanel
          style={{
            ...lyricsStyle,
            transform: 'translateY(0)',
            transition: 'transform 0.3s ease-in-out',
            position: 'fixed',
            zIndex: 1000,
          }}
          onClose={() => setShowLyrics(false)}
        />
      )}
    </div>
  );
};

export default Music;

import React, { useState, useEffect, useRef } from 'react';
import './Music.css';
import albumImage from '../assets/adpAlbum.png';
import albumCD from '../assets/album_cd.svg';
import shuffleIcon from '../assets/symbol/shuffleIcon.svg';
import previousTrack from '../assets/symbol/previousTrack.svg';
import playIcon from '../assets/symbol/playIcon.svg';
import pauseIcon from '../assets/symbol/pauseIcon.svg';
import nextTrack from '../assets/symbol/nextTrack.svg';
import repeatIcon from '../assets/symbol/repeatIcon.svg';
import upIconGray from '../assets/upIconGray.svg';
import downIconGray from '../assets/downIconGray.svg';
import alldayAlbum from '../assets/alldayAlbum1.png';
import gdAlbum1 from '../assets/gdAlbum1.png';
import gdAlbum2 from '../assets/gdAlbum2.png';
import option from '../assets/ArtistPage/option.svg';
import scanIcon from '../assets/symbol/scanIcon.svg';
import LyricsPanel from '../components/music/LyricsPanel';
import LyricsOnly from '../components/music/LyricsOnly';

const Music = () => {
  const [showLyrics, setShowLyrics] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isMissionOpen, setIsMissionOpen] = useState(false);
  const [visibleLines, setVisibleLines] = useState(2);
  const [currentLyricIndex, setCurrentLyricIndex] = useState(0);

  const audioRef = useRef(null);

  const fullLyrics = LyricsOnly().props.children.trim().split('\n').filter(line => line.trim() !== '');

  useEffect(() => {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const ratio = vh / vw;
    const minRatio = 2.093;
    const maxRatio = 2.535;
    const clampedRatio = Math.max(minRatio, Math.min(ratio, maxRatio));
    const lines = Math.round(((clampedRatio - minRatio) / (maxRatio - minRatio)) * 8 + 2);
    setVisibleLines(lines);

    const handleResize = () => {
      const newRatio = window.innerHeight / window.innerWidth;
      const cr = Math.max(minRatio, Math.min(newRatio, maxRatio));
      const newLines = Math.round(((cr - minRatio) / (maxRatio - minRatio)) * 8 + 2);
      setVisibleLines(newLines);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      if (!audio.paused) {
        const current = audio.currentTime;
        const duration = audio.duration;

        if (!isNaN(duration) && duration > 0) {
          setCurrentTime(current);
          setProgress((current / duration) * 100);

          const estimatedIndex = Math.floor((current / duration) * fullLyrics.length);
          setCurrentLyricIndex(estimatedIndex);
        }

        requestAnimationFrame(updateProgress);
      }
    };

    const handlePlay = () => requestAnimationFrame(updateProgress);
    const handlePause = () => cancelAnimationFrame(updateProgress);
    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, [fullLyrics.length]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) audio.pause();
    else audio.play();
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e) => {
    const audio = audioRef.current;
    if (!audio) return;
    const newProgress = e.target.value;
    const newTime = (newProgress / 1000) * duration;
    audio.currentTime = newTime;
    setProgress(newProgress / 10);
  };

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m < 10 ? '0' + m : m}:${s < 10 ? '0' + s : s}`;
  };

  useEffect(() => {
    const progressBar = document.querySelector('.progress-bar');
    if (progressBar) {
      progressBar.style.background = `linear-gradient(to right, #A7DAFF ${progress}%, #666 ${progress}%)`;
    }
  }, [progress]);

  return (
    <div className="music-container">
      <div className="music-top">
        <h2 className="song-title">FAMOUS</h2>
        <h3 className="artist-name">Allday project</h3>
        <div className="time-bar">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
        <div className="album-art-wrap">
          <div className="album-art-frame">
            <img className="album-art" src={albumImage} alt="앨범" />
            <div className="album-center-hole">
              <img className="album-cd" src={albumCD} alt="CD" />
            </div>
          </div>
        </div>
      </div>

      <div className="music-bottom">
        <div className="lyrics-preview" style={{ maxHeight: `${visibleLines * 1.75}em` }} onClick={() => setShowLyrics(true)}>
          {fullLyrics.slice(currentLyricIndex, currentLyricIndex + visibleLines).map((line, idx) => (
            <p key={idx} className={idx === 0 ? 'pink' : ''}>{line}</p>
          ))}
        </div>
        <div className="player-controls">
          <input
            type="range"
            className="progress-bar"
            min="0"
            max="1000"
            value={progress * 10}
            onChange={handleSeek}
          />
          <div className="control-icons">
            <img src={shuffleIcon} alt="셔플" />
            <img src={previousTrack} alt="이전곡" />
            <button className="play-button" onClick={togglePlay}>
              <img src={isPlaying ? pauseIcon : playIcon} alt="재생" />
            </button>
            <img src={nextTrack} alt="다음곡" />
            <img src={repeatIcon} alt="반복" />
          </div>
        </div>
      </div>

      <audio ref={audioRef} src="/FAMOUS.mp3" preload="metadata" />

      {/* 스트리밍 미션 탭 및 LyricsPanel 생략 */}
      <LyricsPanel visible={showLyrics} onClose={() => setShowLyrics(false)} />
    </div>
  );
};

export default Music;
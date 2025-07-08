import React from 'react';
import musicLyrics from '../../assets/music1-2.png';

const MusicLyrics = ({ onClick }) => {
  return (
    <div>
      <img src={musicLyrics} alt="" onClick={onClick} />
    </div>
  )
}

export default MusicLyrics;



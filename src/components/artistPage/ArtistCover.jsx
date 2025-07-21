import React, { useState } from 'react';
import './ArtistCover.css';

import followIcon from '../../assets/ArtistPage/follow_b.svg';
import followingIcon from '../../assets/ArtistPage/following.svg';

const ArtistCover = ({ data }) => {
  const { name, coverImg, followColor } = data;
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <div className="artist-cover-container" style={{ backgroundImage: `url(${coverImg})` }}>
      <div className="gradient-overlay" />
      <div className="artist-info">
        <h2>{name}</h2>
        <button
          className={`follow-btn ${isFollowing ? 'following' : 'follow'}`}
          onClick={() => setIsFollowing(!isFollowing)}
          style={{
            backgroundColor: isFollowing ? 'rgba(255,255,255,0.8)' : followColor,
            color: isFollowing ? '#000' : '#000',
          }}
        >
          <img src={isFollowing ? followingIcon : followIcon} alt="icon" />
          {isFollowing ? 'Following' : 'Follow'}
        </button>
      </div>
    </div>
  );
};

export default ArtistCover;

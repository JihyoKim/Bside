import React, { useState } from 'react';
import './ArtistCover.css';

import artistCover from '../../assets/ArtistPage/asepa/artistCover-aespa.png';
import followIcon from '../../assets/ArtistPage/follow_b.svg';
import followingIcon from '../../assets/ArtistPage/following.svg';
import member1 from '../../assets/ArtistPage/asepa/member1.png';
import member2 from '../../assets/ArtistPage/asepa/member2.png';
import member3 from '../../assets/ArtistPage/asepa/member3.png';
import member4 from '../../assets/ArtistPage/asepa/member4.png';

const ArtistCover = () => {
  const artistName = 'aespa';
  const defaultBg = artistCover;
  const followBgColor = '#FF8031'; 
  const followTextColor = '#000'; 
  const followingBgColor = 'rgba(255, 255, 255, 0.8)';
  const followingTextColor = '#000';

  const [isFollowing, setIsFollowing] = useState(false); // 처음에는 'Follow' 상태

  const toggleFollow = () => setIsFollowing(!isFollowing);

  return (
    <div className="artist-cover-container" style={{ backgroundImage: `url(${defaultBg})` }}>
      <div className="gradient-overlay" />
      <div className="artist-info">
        <h2>{artistName}</h2>
        <button
          className={`follow-btn ${isFollowing ? 'following' : 'follow'}`}
          onClick={toggleFollow}
          style={{
            backgroundColor: isFollowing ? followingBgColor : followBgColor,
            color: isFollowing ? followingTextColor : followTextColor,
          }}
        >
          <img
            src={isFollowing ? followingIcon : followIcon}
            alt="icon"
            className="follow-icon"
          />
          {isFollowing ? 'Following' : 'Follow'}
        </button>
      </div>
    </div>
  );
};

export default ArtistCover;

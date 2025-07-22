import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MoreArtist.css';

import moreArtistBG from '../assets/Home_moreArtist/moreArtistBG.png';
import artist1 from '../assets/Home_moreArtist/boynextdoor.png';
import artist2 from '../assets/Home_moreArtist/txt.png';
import artist3 from '../assets/Home_moreArtist/babymonster.png';
import artist4 from '../assets/Home_moreArtist/meovv.png';
import artist5 from '../assets/Home_moreArtist/katseye.png';
import artist6 from '../assets/Home_moreArtist/tws.png';
import artist7 from '../assets/Home_moreArtist/aespa.png';
import following from '../assets/ArtistPage/following_w.svg';

const artistList = [
  { id: 'aespa', name: 'AESPA', korean: '에스파', img: artist7 },
  { id: 'boynextdoor', name: 'BOYNEXTDOOR', korean: '보이넥스트도어', img: artist1 },
  { id: 'txt', name: 'TXT', korean: '투모로우바이투게더', img: artist2 },
  { id: 'babymonster', name: 'BABYMONSTER', korean: '베이비몬스터', img: artist3 },
  { id: 'meovv', name: 'MEOVV', korean: '미아오', img: artist4 },
  { id: 'katseye', name: 'KATSEYE', korean: '캣츠아이', img: artist5 },
  { id: 'tws', name: 'TWS', korean: '투어스', img: artist6 },
];

// 실제 존재하는 아티스트 ID 리스트 (이 페이지가 있는 아티스트만)
const availableArtistIds = ['aespa',];

const MoreArtist = () => {
  const navigate = useNavigate();
  const [added, setAdded] = useState({});

  const goToArtistPage = (artistId) => {
    if (availableArtistIds.includes(artistId)) {
      navigate(`/main/artistPage/${artistId}`);
    } else {
      alert('준비 중입니다.');
    }
  };

  const handleToggleAdd = (id) => {
    setAdded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div
      className="moreArtist-container"
      style={{ backgroundImage: `url(${moreArtistBG})` }}
    >
      <h2 className="moreArtist-title">
        B-SIDE의<br />모든 아티스트를<br />만나보세요 !
      </h2>

      <div className="artist-card-list">
        {artistList.map((artist) => (
          <div key={artist.id} className="artist-card">
            <img
              src={artist.img}
              alt={artist.name}
              className="artist-img"
              onClick={() => goToArtistPage(artist.id)}
            />
            <div className="artist-content">
            <div className="artist-info">
              <strong onClick={() => goToArtistPage(artist.id)}>{artist.name}</strong>
              <br></br>
              <p onClick={() => goToArtistPage(artist.id)}>{artist.korean}</p>
            </div>
              <div className="add-artist-button-wrap">
              <button
                className={`add-artist-button ${added[artist.id] ? 'added' : ''}`}
                onClick={() => handleToggleAdd(artist.id)}
              >
                {added[artist.id] && (
                  <img
                    src={following}
                    alt="following"
                    className="follow-icon"
                  />
                )}
                {added[artist.id] ? '추가 완료' : '+ 아티스트 추가하기'}
              </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreArtist;

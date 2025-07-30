import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ArtistAD.css';

import { artistData } from '../../data/artistData'; // artistData import

import ad1 from '../../assets/Home_Ad/01x2.png';
import ad2 from '../../assets/Home_Ad/02x2.png';
import ad3 from '../../assets/Home_Ad/03x2.png';
import ad4 from '../../assets/Home_Ad/04x2.png';

const adItems = [
  {
    img: ad1,
    // title: 'BLACKPINK',
    // desc: "2nd Single Album ‘Dearest’",
    // overlayColor: 'rgba(0, 150, 255, 0.3)',
    url: '/main/artistPage/blackpink',
  },
  {
    img: ad2,
    // title: 'KATSEYE',
    // desc: "1st Single Album ‘Debut’",
    // overlayColor: 'rgba(255, 0, 0, 0.3)',
    url: '/main/artistPage/katseye', // 존재하지 않는 artistId
  },
  {
    img: ad3,
    // title: 'TWS',
    // desc: 'AUGUST COMEBACK D-7',
    // overlayColor: 'rgba(0, 255, 0, 0.2)',
    url: '/main/artistPage/tws', // 존재하지 않는 artistId
  },
  {
    img: ad4,
    // title: 'B-SIDE YOU',
    // desc: '',
    // overlayColor: 'transparent',
    url: '/main/artistPage/bsideyou', // 존재하지 않는 artistId
  },
];

const ArtistAD = () => {
  const navigate = useNavigate();

  const handleClick = (url) => {
    if (!url) return;

    const segments = url.split('/');
    const artistId = segments[segments.length - 1]; // 마지막 segment가 artistId

    if (artistId in artistData) {
      navigate(url);
    } else {
      alert('해당 아티스트 페이지는 준비 중입니다.');
    }
  };

  return (
    <div className="artist-ad-wrapper">
      <div className="ad-header">
        ADS{' '}
        <span className="info-icon tooltip">
          ⓘ
          <span className="tooltip-text right">이 영역은 광고 콘텐츠입니다.</span>
        </span>
      </div>
      <div className="ad-grid">
        {adItems.map((item, idx) => (
          <div
            className="ad-card"
            key={idx}
            onClick={() => handleClick(item.url)}
            style={{ cursor: item.url ? 'pointer' : 'default' }}
          >
            <div className="ad-inner">
              <img src={item.img} alt={item.title} className="ad-image" />
              <div
                className="ad-overlay"
                style={{ backgroundColor: item.overlayColor }}
              ></div>
              <div className="ad-text">
                <div className="ad-title">{item.title}</div>
                {item.desc && <div className="ad-desc">{item.desc}</div>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtistAD;

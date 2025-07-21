import React from 'react';
import './ArtistAD.css';

import ad1 from '../../assets/Home_Ad/01x2.png';
import ad2 from '../../assets/Home_Ad/02x2.png';
import ad3 from '../../assets/Home_Ad/03x2.png';
import ad4 from '../../assets/Home_Ad/04x2.png';

const adItems = [
  {
    img: ad1,
    // title: 'RESCENE',
    // desc: "2nd Single Album ‘Dearest’",
    // overlayColor: 'rgba(0, 150, 255, 0.3)',
    url: '',
  },
  {
    img: ad2,
    // title: 'KATSEYE',
    // desc: "1st Single Album ‘Debut’",
    // overlayColor: 'rgba(255, 0, 0, 0.3)',
    url: '',
  },
  {
    img: ad3,
    // title: 'TWS',
    // desc: 'AUGUST COMEBACK D-7',
    // overlayColor: 'rgba(0, 255, 0, 0.2)',
    url: '',
  },
  {
    img: ad4,
    // title: 'B-SIDE YOU',
    // desc: '',
    // overlayColor: 'transparent',
    url: '',
  },
];

const ArtistAD = () => {
  return (
    <div className="artist-ad-wrapper">
      <div className="ad-header">
        AD <span className="info-icon tooltip">
  ⓘ
  <span className="tooltip-text right">이 영역은 광고 콘텐츠입니다.</span>
</span>

      </div>
      <div className="ad-grid">
        {adItems.map((item, idx) => (
          <a className="ad-card" key={idx} href={item.url} target="_blank" rel="noopener noreferrer"
          onClick={(e) => e.preventDefault()}>
          <div className="ad-inner">
            <img src={item.img} alt={item.title} className="ad-image" />
            <div className="ad-overlay" style={{ backgroundColor: item.overlayColor }}></div>
            <div className="ad-text">
              <div className="ad-title">{item.title}</div>
              {item.desc && <div className="ad-desc">{item.desc}</div>}
            </div>
          </div>
        </a>
        ))}
      </div>
    </div>
  );
};

export default ArtistAD;

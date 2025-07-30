import React from 'react'
import { useNavigate } from 'react-router-dom'; 

import moreArtistBanner from '../../assets/moreArtistBanner.png'
import './MoreArtistBanner.css'

const MoreArtistBanner = () => {

  const navigate = useNavigate();
  const goToMoreArtist = () => {
    navigate('/main/moreArtist'); // ✅ 페이지 이동
  };

  return (
    <div className="more-artist-container">
      <div className="top-spacer" />
      <div className="divider" />
      <div className="banner-wrapper">
        <img src={moreArtistBanner} alt="B-side's Artists" className="banner-image" onClick={goToMoreArtist} style={{ cursor: 'pointer' }} />
      </div>
      <div className="divider" />
    </div>
  )
}

export default MoreArtistBanner

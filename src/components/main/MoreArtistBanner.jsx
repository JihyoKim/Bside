import React from 'react'
import moreArtistBanner from '../../assets/moreArtistBanner.png'
import './MoreArtistBanner.css'

const MoreArtistBanner = () => {
  return (
    <div className="more-artist-container">
      <div className="top-spacer" />
      <div className="divider" />
      <div className="banner-wrapper">
        <img src={moreArtistBanner} alt="B-side's Artists" className="banner-image" />
      </div>
      <div className="divider" />
    </div>
  )
}

export default MoreArtistBanner

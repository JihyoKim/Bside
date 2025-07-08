import React from 'react';
import { NavLink } from 'react-router-dom';
import artistMenuMedia from '../../assets/ArtistMenu_media.png';
import artistMenuNotice from '../../assets/ArtistMenu_notice.png';
import artistMenuVote from '../../assets/ArtistMenu_vote.png';
import artistMenuFan from '../../assets/ArtistMenu_fan.png';

const ArtistMenu = () => {
  return (
    <div className="menu_container">
      <NavLink to="media">
        <img src={artistMenuMedia} alt="Artist Media" />
      </NavLink>
      <NavLink to="notice">
        <img src={artistMenuNotice} alt="Artist Notice" />
      </NavLink>
      <NavLink to="event">
        <img src={artistMenuVote} alt="Artist Event" />
      </NavLink>
      <NavLink to="fan">
        <img src={artistMenuFan} alt="Artist Fan" />
      </NavLink>
    </div>
  );
};

export default ArtistMenu;

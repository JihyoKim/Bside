import React from 'react';
import ArtistCover from '../components/artistPage/ArtistCover';
import ArtistMember from '../components/artistPage/ArtistMember';
import ArtistMenu from '../components/artistPage/ArtistMenu';
import { Outlet } from 'react-router-dom'; 

const ArtistPage = () => {
  return (
    <div className='artist-container'>
      <ArtistCover />
      <ArtistMember />
      <ArtistMenu />
      <Outlet />
    </div>
  )
}

export default ArtistPage;

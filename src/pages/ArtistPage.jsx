import React from 'react';
import './ArtistPage.css'
import ArtistCover from '../components/artistPage/ArtistCover';
import ArtistMember from '../components/artistPage/ArtistMember';
import { Outlet } from 'react-router-dom'; 

const ArtistPage = () => {
  return (
    <div className='artist-container'>
      <ArtistCover />
      <ArtistMember />
      <Outlet />
    </div>
  )
}

export default ArtistPage;

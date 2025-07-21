import React from 'react';
import './ArtistPage.css';

import { useParams } from 'react-router-dom';
import { artistData } from '../data/artistData';
import ArtistCover from '../components/artistPage/ArtistCover';
import ArtistMember from '../components/artistPage/ArtistMember';
import ArtistMenu from '../components/artistPage/ArtistMenu';
import { Outlet } from 'react-router-dom';

const ArtistPage = () => {
  const { artistId } = useParams(); // ex) /artistPage/aespa
  const data = artistData[artistId];

  if (!data) return <div>존재하지 않는 아티스트입니다.</div>;

  return (
    <div className="artist-container">
      <ArtistCover data={data} />
      <ArtistMember data={data} />
      <ArtistMenu data={{ ...data, id: artistId }} />
      <Outlet context={data} />
    </div>
  );
};

export default ArtistPage;

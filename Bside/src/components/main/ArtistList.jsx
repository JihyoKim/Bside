import React from 'react';
import artistList from '../../assets/artist_list.png'; // 경로에 실제 이미지가 있어야 함

const ArtistList = () => {
  return (
    <div>
      <img src={artistList} alt="Artist List" />
    </div>
  );
};

export default ArtistList;

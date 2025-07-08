import React from 'react';
import { useNavigate } from 'react-router-dom';  // import
import artistList from '../../assets/artist_list.png'; 
import artistList1 from '../../assets/artist_list1.png'; 
import artistList2 from '../../assets/artist_list2.png'; 
import artistList3 from '../../assets/artist_list3.png'; 
import artistList4 from '../../assets/artist_list copy.png'; 

const ArtistList = () => {
  const navigate = useNavigate();

  const artistPageClick = () => {
    navigate('/artistpage'); // ArtistPage.jsx가 라우팅된 경로로 변경하세요
  };
  const moreArtistClick = () => {
    navigate('/moreArtist'); 
  };

  return (
    <div>
      <img src={artistList1} alt="Artist List" />
      <img src={artistList2} alt="Artist Page" style={{ cursor: 'pointer' }} onClick={artistPageClick} />
      <img src={artistList3} alt="Artist List" />
      <img src={artistList4} alt="More Artist" style={{ cursor: 'pointer' }} onClick={moreArtistClick} />
    </div>
  );
};

export default ArtistList;

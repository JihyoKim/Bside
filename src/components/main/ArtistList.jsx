import React from 'react';
import { useNavigate } from 'react-router-dom';  // import
import artistList from '../../assets/artist_list.png'; 
import artistList2 from '../../assets/artist_list copy.png'; 

const ArtistList = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/artistpage'); // ArtistPage.jsx가 라우팅된 경로로 변경하세요
  };

  return (
    <div>
      <img src={artistList} alt="Artist List" />
      <img 
        src={artistList2} 
        alt="Artist List" 
        style={{ cursor: 'pointer' }} 
        onClick={handleClick} 
      />
    </div>
  );
};

export default ArtistList;

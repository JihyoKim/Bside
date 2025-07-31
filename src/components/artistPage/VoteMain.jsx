import React from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // useNavigate 추가
import { artistData } from '../../data/artistData';
import './VoteMain.css';

const VoteMain = () => {
  const { artistId } = useParams();
  const navigate = useNavigate(); 
  const data = artistData[artistId]?.voteMain;

  if (!data || !data.title || data.title.trim() === '') {
    return (
      <div className="vote-main-container">
        <h4 className="vote-title none">현재 진행중인 시즌 투표가 없습니다.</h4>
      </div>
    );
  }

  return (
    <div className="vote-main-container">
      <img
        src={data.voteBannerImage}
        alt="오늘의 투표 배너"
        className="vote-banner-image"
      />

      <div className="vote-info-box">
        <h4 className="vote-title">
          {data.title}
          {data.dDay && <span className="dday-badge">{data.dDay}</span>}
        </h4>
        <button
          className="vote-btn"
          onClick={() => navigate(`/main/artistPage/${artistId}/vote/list/`)}
          style={{
            backgroundColor: data.voteButtonColor || '#000',
            color: data.voteTextColor || '#fff'
          }}
        >
          {data.buttonLabel}
        </button>
      </div>
    </div>
  );
};

export default VoteMain;

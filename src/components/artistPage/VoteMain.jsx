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
      <h4 className="vote-title">
        {data.title}
        {data.dDay && (
          <span className="dday-badge">{data.dDay}</span>
        )}
      </h4>
      <ul className="vote-options">
        {data.options.map((option, idx) => (
          <li key={idx}>{option}</li>
        ))}
      </ul>
      <button
        className="vote-btn"
        onClick={() => navigate(`/main/artistPage/${artistId}/vote/list/`)}
        style={{
          backgroundColor: data.voteButtonColor || 'black',
          color: data.voteTextColor || 'white' 
        }}
      >
        {data.buttonLabel}
      </button>
    </div>
  );
};

export default VoteMain;

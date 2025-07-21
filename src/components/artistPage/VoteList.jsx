import React from 'react';
import './VoteList.css';

import { useParams } from 'react-router-dom';
import { artistData } from '../../data/artistData'; // ✅ 중괄호 사용 주의

import pointIconOrange from '../../assets/symbol/pointIcon_orange.svg';
import pointIconBlue from '../../assets/symbol/pointIcon_blue.svg';
import pointIconPink from '../../assets/symbol/pointIcon_pink.svg';

const iconMap = {
  orange: pointIconOrange,
  blue: pointIconBlue,
  pink: pointIconPink,
};

const pointColorMap = {
  orange: '#FF6C00',
  blue: '#00BFFF',
  pink: '#FF4DA6',
};

const VoteList = () => {
  const { artistId } = useParams();
  const voteSubList = artistData[artistId]?.voteSubList || [];

  return (
    <div className="vote-subvote-container">
      {voteSubList.map(item => (
        <div key={item.id} className="vote-subvote-item">
          <div className="vote-icon-box">
            <img src={iconMap[item.icon]} alt="point icon" />
            <div className="point" style={{ color: pointColorMap[item.icon] }}>
              +{item.point}
            </div>
          </div>
          <div className="vote-question">{item.question}</div>
        </div>
      ))}
    </div>
  );
};

export default VoteList;

import React from 'react';
import './VoteMain.css';

const VoteMain = () => {
  return (
    <div className="vote-main-container">
      <h4 className="vote-title">떼창 곡 투표</h4>
      <ul className="vote-options">
        <li>소년이여</li>
        <li>무제(無題)</li>
      </ul>
      <button className="vote-btn">투표하러 가기</button>
    </div>
  );
};

export default VoteMain;

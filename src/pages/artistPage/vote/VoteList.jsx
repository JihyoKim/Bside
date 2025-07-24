import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './VoteList.css';
import goback from '../../../assets/symbol/white/goback.svg';

const VoteList = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);
  const { artistId } = useParams();

  const voteOptions = [
    '우즈 - Drowning',
    '10cm - 너에게 닿기를',
    '이영지 - Small girl',
    '아이유 - love wins all',
  ];

  const handleVote = () => {
    if (selected !== null) {
      navigate(`/main/artistPage/${artistId}/vote/result/`, {
        state: { selectedIndex: selected },
      });
    }
  };

  return (
    <div className="vote-container">
      <div className="goback-btn" onClick={() => navigate(-1)}>
        <img src={goback} alt="go back" />
      </div>
      <div className="vote-content">
        <div className="vote-main">
          <h2 className="vote-question1">최애가 불러줬으면 하는 커버곡은?</h2>
          <ul className="vote-options1">
            {voteOptions.map((option, index) => (
              <li
                key={index}
                className={`vote-option1 ${selected === index ? 'selected' : ''}`}
                onClick={() => setSelected(index)}
              >
                <span className="number">{index + 1}</span>
                <span className="text">{option}</span>
              </li>
            ))}
          </ul>
        </div>

        <button className="vote-submit1-btn" onClick={handleVote}>
          투표하기
        </button>
      </div>
    </div>
  );
};

export default VoteList;

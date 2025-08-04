import React, { useEffect, useState, useMemo } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom'; // useLocation 추가
import './VoteResult.css';
import goback from '../../../assets/symbol/white/goback.svg'


const VoteResult = () => {
  const navigate = useNavigate();
  const { artistId } = useParams();
  const location = useLocation();
  const selectedIndex = location.state?.selectedIndex ?? null; // 전달된 인덱스
  

  // ✅ useMemo로 고정
  const voteResults = useMemo(() => [
    { text: '우즈 - Drowning', percent: 8.33 },
    { text: '10cm - 너에게 닿기를', percent: 25 },
    { text: '이영지 - Small girl', percent: 40.26 },
    { text: '아이유 - love wins all', percent: 26.41 },
  ], []);

  const [animatedPercents, setAnimatedPercents] = useState([0, 0, 0, 0]);

  useEffect(() => {
    const maxPercent = Math.max(...voteResults.map(item => item.percent));
    const visualPercents = voteResults.map(item => {
      const normalized = (item.percent / maxPercent) * 65;
      // 👉 최소 20%, 최대 65%로 보정
      return Math.max(20, normalized);
    });

    const timeout = setTimeout(() => {
      setAnimatedPercents(visualPercents);
    }, 100);

    return () => clearTimeout(timeout);
  }, [voteResults]);

  return (
    <div className="vote-container">
      <div className="goback-btn" onClick={() => navigate(-1)}>
        <img src={goback} alt="go back" />
      </div>
      <div className="vote-content">
        <div className="vote-main">
          <h2 className="vote-question1">최애가 불러줬으면 하는 커버곡은?</h2>
          <ul className="vote-options2">
            {voteResults.map((item, index) => (
              <li
                key={index}
                className={`vote-option2 ${selectedIndex === index ? 'selected' : ''}`}
              >
                <div className="vote-bar-wrapper">
                  <div
                    className="vote-bar1"
                    style={{
                      width: `${animatedPercents[index]}%`,
                      backgroundColor: selectedIndex === index ? '#FFA3EB' : 'rgba(255, 163, 235, 0.6)'
                    }}
                  ></div>
                </div>
                <span className="number">{index + 1}</span>
                <span className="text">
                  {item.text}
                  <strong>{item.percent}%</strong>
                </span>
              </li>
            ))}
          </ul>
          <p className="vote-result-total1">12명이 투표했어요</p>
        </div>

        <button className="vote-submit2-btn" onClick={() => navigate(`/main/artistPage/${artistId}/vote/complete/`)}>
          <span className="guide">확인</span>
        </button>
      </div>
    </div>
  );
};

export default VoteResult;

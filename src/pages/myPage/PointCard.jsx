import React from 'react'
import './PointCard.css';

const surveyList = [
    "최애가 해줬으면 하는 커버곡은? 🎶",
    "가장 기대되는 컴백 콘텐츠는? 💖",
    "최애가 찍어줬으면 하는 VLOG주제는?",
    "KIIKII가 찍어줬으면 하는 여름 콘텐츠는?",
    "콘서트에서 가장 기대되는 순간은? 🔥"
  ];
  
  const PointCard = () => {
    return (
      <div className='point-card-container'>
        {/* 보유 포인트 카드 */}
        <div className="point-card">
          <p className="label">보유 중인 포인트</p>
          <h2 className="point">50</h2>
          <p className="expire">7일 내 소멸 예정</p>
        </div>
  
        {/* 설문 항목 리스트 */}
        <div className="survey-list">
          {surveyList.map((text, index) => (
            <div key={index} className="survey-item">
              <div className="info">
                <p className="question">{text}</p>
                <p className="meta">KIIKII · 2025. 07. 14</p>
              </div>
              <div className="reward">+10</div>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default PointCard

import React from 'react';
import './NoticeSched.css';

import timeIcon from '../../assets/symbol/timeIcon.svg';

const NoticeSched = ({ schedule }) => {
  if (schedule.length === 0) return null;

  // 날짜 텍스트 뽑기
  const date = new Date(schedule[0].date);
  const dateStr = date.toLocaleDateString('ko-KR', {
    month: '2-digit',
    day: '2-digit',
    weekday: 'short',
  });

  return (
    <div className="notice-sched-container">
      <h4 className="sched-title">Timeline</h4>
      <div className="sched-date">{dateStr}</div>

      <div className="sched-list">
        {schedule.map((item, idx) => (
          <div key={idx} className="sched-item">
            <div className="dot-line-wrap">
              <div className={`dot ${item.type}`} />
              <div className={`vertical-line ${item.type} ${idx === schedule.length - 1 ? 'last' : ''}`} />
            </div>
            <div className="sched-content">
              <span className={`tag ${item.type}`}>{item.typeName}</span>
              <p className="title">{item.title}</p>
              <p className="time">
                <img src={timeIcon} alt="time" className="time-icon" />
                {item.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoticeSched;
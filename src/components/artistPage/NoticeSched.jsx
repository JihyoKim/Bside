import React from 'react';
import './NoticeSched.css';

const NoticeSched = ({ schedule }) => {
  return (
    <div className="notice-sched">
      {schedule.map((item, idx) => (
        <div className="schedule-item" key={idx}>
          <span className="time">{item.time}</span>
          <span className="desc">{item.desc}</span>
        </div>
      ))}
    </div>
  );
};

export default NoticeSched;

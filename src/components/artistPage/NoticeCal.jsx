import React from 'react';
import './NoticeCal.css';

const NoticeCal = ({ summary }) => {
  const { dateText, todayTitle, emoji } = summary;

  return (
    <div className="notice-cal">
      <div className="date-box">{dateText}</div>
      <div className="summary-text">
        <span>{emoji}</span> {todayTitle}
      </div>
    </div>
  );
};

export default NoticeCal;

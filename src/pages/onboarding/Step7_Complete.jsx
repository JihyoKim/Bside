import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Step7_Complete.css';

const Step7_Complete = ({ nickname = '88년동안너마늘♡' }) => {
  const navigate = useNavigate();

  return (
    <div className="step7-container">
      <div className="step7-content">
        <p className="step7-welcome">Welcome to</p>
        <h1 className="step7-logo">B-side</h1>
        <p className="step7-nickname">
          <span className="highlight">{nickname}</span>님,<br />
          비사이드 가입을 축하드려요
        </p>
      </div>

      <button className="step7-main-btn" onClick={() => navigate('/')}>
        메인 홈으로 이동
      </button>
      <p className="step7-start-text">Start Now!</p>
    </div>
  );
};

export default Step7_Complete;

// src/pages/onboarding/Step2_Pin.jsx
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Step2_Pin.css';

const Step2_Pin = () => {
  const navigate = useNavigate();
  const inputs = [useRef(), useRef(), useRef(), useRef()];

  const handleInput = (e, index) => {
    const value = e.target.value;
    if (value.length === 1 && index < 3) {
      inputs[index + 1].current.focus();
    }
  };

  return (
    <div className="step2-container">
      <div className="step2-header">
        <h1 className="logo">B-side <span className="sub">account</span></h1>
        <button className="close-btn">✕</button>
      </div>

      <h2 className="step2-title">인증번호를 입력해 주세요</h2>

      <label className="step2-label">인증번호</label>
      <div className="step2-input-group">
        {inputs.map((ref, i) => (
          <input
            key={i}
            ref={ref}
            type="text"
            maxLength={1}
            className="pin-input"
            onChange={(e) => handleInput(e, i)}
            inputMode="numeric"
            pattern="[0-9]*"
          />
        ))}
      </div>

      <button className="step2-submit" onClick={() => navigate('/onboarding/password')}>
        인증하기
      </button>
    </div>
  );
};

export default Step2_Pin;

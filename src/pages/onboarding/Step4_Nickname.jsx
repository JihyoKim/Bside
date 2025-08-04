// src/pages/onboarding/Step4_Nickname.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Step4_Nickname.css';
import profileImage from '../../assets/profile.png';
import prevB from '../../assets/prevB.png';
import closeIcon from '../../assets/x.png';

const Step4_Nickname = () => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState('');

  const handleNext = () => {
    // if (nickname.trim()) {
    //   navigate('/onboarding/language');
    // }
    navigate('/onboarding/language');
  };

  return (
    <div className="step4-container">
      {/* ✅ 상단 헤더 */}
      <div className="step4-header">
        <img
          src={prevB}
          alt="뒤로가기"
          className="step4-icon-btn"
          onClick={() => navigate(-1)}
        />
        <span>닉네임 입력</span>
        <img
          src={closeIcon}
          alt="닫기"
          className="step4-icon-btn"
          onClick={() => navigate('/onboarding')}
        />
      </div>

      {/* ✅ 인디케이터: 헤더와 제목 사이 */}
      <div className="step-indicator-wrapper">
        <div className="step-indicator">
          {[1, 2, 3, 4, 5].map((_, index) => (
            <div className="step-bar" key={index}>
              {(index === 0 || index === 1) && <div className="step-fill filled" />}
              {index === 2 && <div className="step-fill animated" />}
            </div>
          ))}
        </div>
      </div>

      {/* ✅ 본문 */}
      <div className="step4-content">
        <div>
          <h2 className="step4-title">프로필을 설정해 주세요</h2>
          <p className="step4-guide">
            1-10자 길이로 한글, 영어, 숫자 조합의 닉네임을 설정해주세요.<br />
            가입 후 개인 설정에서 변경할 수 있어요!
          </p>

          <div className="step4-profile-section">
            <img src={profileImage} alt="프로필" className="step4-profile-img" />
          </div>

          <div className="step4-input-block">
            <label>Nickname 닉네임</label>
              <span className="guide3">
                <input
                  type="text"
                  className="step4-input"
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                  placeholder="닉네임을 입력하세요"
                />
              </span>
          </div>
        </div>

        <button className="step4-next-btn" onClick={handleNext}>
          다음
        </button>
      </div>
    </div>
  );
};

export default Step4_Nickname;

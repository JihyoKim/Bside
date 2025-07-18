import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Step4_Nickname.css';
import profileImage from '../../assets/profile.png';

const Step4_Nickname = () => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState('');

  const handleNext = () => {
    if (nickname.trim()) {
      navigate('/onboarding/language');
    }
  };

  return (
    <div className="step4-container">
      <div className="step4-header">
        <button className="step4-back" onClick={() => navigate(-1)}>{'<'}</button>
        <span>닉네임 입력</span>
        <button className="step4-close" onClick={() => navigate('/onboarding')}>✕</button>
      </div>

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
            <input
              type="text"
              className="step4-input"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              placeholder="닉네임을 입력하세요"
            />
          </div>
        </div>

        {/* ✅ 위치 고정된 하단 버튼 */}
        <button className="step4-next-btn" onClick={handleNext}>
          다음
        </button>
      </div>
    </div>
  );
};

export default Step4_Nickname;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Step3_Password.css';
import eyeIcon from '../../assets/eye.png';
import prevB from '../../assets/prevB.png';
import closeIcon from '../../assets/x.png';

const Step3_Password = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleNext = () => {
    if (password && password === confirmPassword) {
      navigate('/onboarding/nickname');
    }
  };

  return (
    <div className="step3-container">
      {/* ✅ 이미지 헤더 */}
      <div className="step3-header">
        <img
          src={prevB}
          alt="뒤로가기"
          className="step3-icon-btn"
          onClick={() => navigate(-1)}
        />
        <span>회원가입</span>
        <img
          src={closeIcon}
          alt="닫기"
          className="step3-icon-btn"
          onClick={() => navigate('/onboarding')}
        />
      </div>

      {/* ✅ 본문 */}
      <div className="step3-content">
        <div>
          <h2 className="step3-title">비밀번호를 설정해 주세요</h2>

          <div className="step3-input-block">
            <label>비밀번호</label>
            <div className="step3-input-wrapper">
              <input
                type="password"
                className="step3-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="비밀번호 입력"
              />
              <img src={eyeIcon} alt="눈 아이콘" className="step3-eye-icon" />
            </div>
            <p className="step3-guide">8 - 16자<br />영문, 숫자, 특수문자 모두 사용</p>
          </div>

          <div className="step3-input-block">
            <label>비밀번호 확인</label>
            <div className="step3-input-wrapper">
              <input
                type="password"
                className="step3-input"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="비밀번호 다시 입력"
              />
              <img src={eyeIcon} alt="눈 아이콘" className="step3-eye-icon" />
            </div>
            {password && confirmPassword && password !== confirmPassword ? (
              <p className="step3-error">비밀번호가 일치하지 않습니다.</p>
            ) : password === confirmPassword && confirmPassword !== '' ? (
              <p className="step3-match">비밀번호가 일치합니다.</p>
            ) : null}
          </div>
        </div>

        {/* ✅ 하단 버튼 */}
        <button className="step3-next-btn" onClick={handleNext}>다음</button>
      </div>
    </div>
  );
};

export default Step3_Password;

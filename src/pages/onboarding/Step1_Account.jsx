import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Step1_Account.css';
import googleLogo from '../../assets/googleLogo.png';
import kakaoLogo from '../../assets/kakaoLogo.png';

const Step1_Account = () => {
  const navigate = useNavigate();

  const handleSocialLogin = (platform) => {
    // 여기서 실제 소셜 로그인 로직을 넣을 수 있음
    console.log(`${platform} 로그인 시도`);
    navigate('/main'); // 로그인 후 메인으로 이동
  };

  return (
    <div className="step1-container">
      <div className="step1-logo-wrapper">
        <h1 className="step1-logo">B-side</h1>
      </div>

      <div className="step1-bottom-area">
        <div className="step1-button-group">
          <button
            className="step1-google-btn "
            onClick={() => handleSocialLogin('Google')}
          >
            <img
              src={googleLogo}
              alt="Google"
              style={{ width: '18px', marginRight: '8px' }}
            />
            <span className='guide'>Continue with Google</span>
          </button>

          <button
            className="step1-kakao-btn"
            onClick={() => handleSocialLogin('Kakao')}
          >
            <img
              src={kakaoLogo}
              alt="Kakao"
              style={{ width: '18px', marginRight: '8px' }}
            />
            Continue with Kakao
          </button>
        </div>

        <div className="step1-bottom-links">
          <div className="step1-left-links">
            <a href="#">WeChat</a>
            <a href="#">LINE</a>
          </div>
          <button
            onClick={() => navigate('/onboarding/pin')}
            className="step1-create-btn guide"
          >
            Create an account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step1_Account;

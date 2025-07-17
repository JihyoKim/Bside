import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Step1_Account.css';
import googleLogo from '../../assets/googleLogo.png';
import kakaoLogo from '../../assets/kakaoLogo.png';

const Step1_Account = () => {
    const navigate = useNavigate();

    return (
    <div className="step1-container">
        <div className="step1-logo-wrapper">
        <h1 className="step1-logo">B-side</h1>
        </div>

        <div className="step1-bottom-area">
        <div className="step1-button-group">
            <button className="step1-google-btn">
            <img
                src={googleLogo}
                alt="Google"
                style={{ width: '18px', marginRight: '8px' }}
            />
            Continue with Google
            </button>

            <button className="step1-kakao-btn">
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
            onClick={() => navigate('/pin')}
            className="step1-create-btn"
            >
            Create an account
            </button>
        </div>
        </div>
    </div>
    );
};

export default Step1_Account;


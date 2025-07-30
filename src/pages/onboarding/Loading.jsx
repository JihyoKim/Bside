import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Loading.css';
import Loading1 from '../../assets/onboarding/Loading1.png';
import Loading2 from '../../assets/onboarding/Loading2.png';
import Loading3 from '../../assets/onboarding/Loading3.png';

const Loading = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/onboarding/complete');
    }, 3000); // 3초 후 자동 이동

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="loading-container">
      <p className="loading-text">
        <span className="nickname">쥐들에곤히잠들다</span>님의<br />
        관심 콘텐츠를 모으는 중이에요
      </p>

      <div className="loading-images">
        <img src={Loading1} alt="L1" className="loading-img left-to-right" />
        <img src={Loading2} alt="L2" className="loading-img right-to-left" />
        <img src={Loading3} alt="L3" className="loading-img left-to-right" />
      </div>
    </div>
  );
};

export default Loading;

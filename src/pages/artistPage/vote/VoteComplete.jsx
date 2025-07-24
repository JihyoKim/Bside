import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './VoteComplete.css';

import x from '../../../assets/x.png';
import pointIcon from '../../../assets/pointIcon.png'; 
import votePoint from '../../../assets/votePoint.png';
import voteNext from '../../../assets/voteNext.png';

const VoteComplete = () => {
  const navigate = useNavigate();
  const { artistId } = useParams();

  return (
    <div className="vote-complete-container">
      <img src={x} alt="닫기" className="vote-complete-close"  onClick={() => navigate(`/main/artistPage/${artistId}/vote/`)}/>

      <img src={pointIcon} alt="포인트 애니메이션" className="vote-floating-icon" /> {/* ✅ 추가 */}

      <p className="vote-complete-message">보상을 이만큼 받았어요!</p>

      <div className="vote-complete-point">
        <img src={votePoint} alt="포인트 아이콘" className="vote-point-icon" />
        <span className="vote-point-text">10</span>
      </div>

      <div className="vote-complete-link" onClick={() => navigate('/main/mypage/point')}>
        <span className="vote-complete-check-text">포인트 확인하러 가기</span>
        <img src={voteNext} alt=">" className="vote-next-icon" />
      </div>

      <button className="vote-complete-btn" onClick={() => navigate(`/main/artistPage/${artistId}/vote/`)}>
        완료
      </button>
    </div>
  );
};

export default VoteComplete;

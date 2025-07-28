import React from 'react';
import './AlarmDetail.css';
import goback from '../assets/symbol/white/next.svg';

const AlarmDetail = ({ isOpen, onToggle }) => {
  return (
    <div className="alarm-container">
      <div className={`alarm-overlay ${isOpen ? 'show' : ''}`} onClick={onToggle} />
      <div className={`alarm-panel ${isOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={onToggle}>
          <img src={goback} alt="back" />
        </button>

        <div className="alarm-detail-container">
          <h2 className="alarm-title">알림</h2>

          <section className="alarm-section">
            <h3 className="alarm-subtitle">오늘 받은 알림</h3>
            <div className="alarm-box today alarm-new">
              <div className="alarm-header">
                <span className="alarm-tag blue">투표 게시판</span>
                <span className="alarm-category">포인트</span>
                <span className="alarm-time">3시간 전</span>
              </div>
              <div className="alarm-content">
                <p>⚠️ 지드래곤 오늘의 덕질 투표가 곧 마감됩니다.</p>
                <span className="alarm-desc">10포인트를 놓치지 마세요!</span>
              </div>
            </div>
          </section>

          <section className="alarm-section">
            <h3 className="alarm-subtitle">전체 알림</h3>

            <div className="alarm-box alarm-new">
              <div className="alarm-header">
                <span className="alarm-tag blue">미디어</span>
                <span className="alarm-category">MV</span>
                <span className="alarm-time">1일 전</span>
              </div>
              <div className="alarm-content">
                <p>블랙핑크 디지털 싱글 ‘뛰어(Jump)’ MV 공개</p>
                <span className="alarm-desc">하드스타일에 도전한 블랙핑크의 파격 변신!</span>
              </div>
            </div>

            <div className="alarm-box">
              <div className="alarm-header">
                <span className="alarm-tag blue">미디어</span>
                <span className="alarm-category">라이브</span>
                <span className="alarm-time">3일 전</span>
              </div>
              <div className="alarm-content">
                <p>⚠️ 라이즈 데뷔 2주년 생방송 라이브가 곧 시작됩니다.</p>
                <span className="alarm-desc">팬과 함께 만든 2주년, 지금 함께해요!</span>
              </div>
            </div>

            <div className="alarm-box">
              <div className="alarm-header">
                <span className="alarm-tag blue">팬</span>
                <span className="alarm-category">팔로우</span>
                <span className="alarm-time">3일 전</span>
              </div>
              <div className="alarm-content">
                <p>[에스파] Eom.Ar님이 회원님을 팔로우합니다.</p>
                <span className="alarm-desc">Eom.Ar님에게 메시지를 남겨보세요!</span>
              </div>
            </div>

            <div className="alarm-box">
              <div className="alarm-header">
                <span className="alarm-tag blue">굿즈</span>
                <span className="alarm-category">올데이프로젝트</span>
                <span className="alarm-time">4일 전</span>
              </div>
              <div className="alarm-content">
                <p>올데이 프로젝트의 첫 공식 굿즈가 곧 공개됩니다.</p>
                <span className="alarm-desc">팬심을 담은 첫 번째 컬렉션, 놓치지 마세요!</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AlarmDetail;
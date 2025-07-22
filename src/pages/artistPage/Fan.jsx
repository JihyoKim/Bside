import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useOutletContext } from 'react-router-dom';
import './Fan.css';

const Fan = () => {
  const location = useLocation();
  const { tabColor } = useOutletContext(); // ✅ 아티스트별 탭 색상 받아오기

  const isAllActive = location.pathname.endsWith('/fan');
  const isFollowingActive = location.pathname.includes('following');

  return (
    <div className="fan-container">
      <div className="fan-tab">
        <Link
          to=""
          className={isAllActive ? 'active' : ''}
          style={isAllActive ? { background: tabColor, color: 'white' } : {}}
        >
          전체
        </Link>
        <Link
          to="following"
          className={isFollowingActive ? 'active' : ''}
          style={isFollowingActive ? { background: tabColor, color: 'white' } : {}}
        >
          팔로잉
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Fan;

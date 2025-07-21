import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import './Fan.css';

const Fan = () => {
  const location = useLocation();

  return (
    <div className="fan-container">
      <div className="fan-tab">
        <Link to="" className={location.pathname.endsWith('/fan') ? 'active' : ''}>전체</Link>
        <Link to="following" className={location.pathname.includes('following') ? 'active' : ''}>팔로잉</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Fan;

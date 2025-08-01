import React from 'react';
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useOutletContext } from 'react-router-dom';
import './Fan.css';
import { artistData } from '../../data/artistData';

const Fan = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { artistId } = useParams();
  const { tabColor } = useOutletContext();

  const isAllActive = location.pathname.endsWith('/fan');
  const isFollowingActive = location.pathname.includes('following');

  const artist = artistData[artistId];
  const bgColor = artist?.addButtonColor || '#FFA3EB';
  const lineColor = artist?.addButtonLine || '#ffffff';

  const handleAddClick = () => {
    navigate(`/main/artistPage/${artistId}/write`);
  };

  return (
    <div className="fan-container">
      <div className="fan-tab">
        <Link
          to=""
          className={isAllActive ? 'active' : 'guide'}
          style={isAllActive ? { background: tabColor, color: 'white' } : {}}
        >
          전체
        </Link>
        <Link
          to="following"
          className={isFollowingActive ? 'active' : 'guide'}
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
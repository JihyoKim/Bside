import React, { useRef, useEffect, useState } from 'react';
import './ArtistMenu.css';
import { NavLink, useLocation, useParams } from 'react-router-dom';
import { artistData } from '../../data/artistData';  // ✅ 여기 import

const tabs = ['media', 'notice', 'vote', 'fan'];

const ArtistMenu = () => {
  const { artistId } = useParams();  // ✅ 현재 URL에서 artistId 추출
  const location = useLocation();
  const tabRefs = useRef([]);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });

  // ✅ artistId로 해당 아티스트 데이터 가져오기
  const artist = artistData[artistId] || {};
  const activeColor = artist.tabColor || '#FF8031';
  const inactiveColor = artist.inactiveColor || '#fff';
  const underlineColor = artist.underlineColor || '#FF8031';

  useEffect(() => {
    const currentPath = location.pathname.split('/').pop();
    const activeIndex = tabs.findIndex(
      (tab) => tab === currentPath || (location.pathname === `/artistPage/${artistId}` && tab === 'media')
    );

    if (tabRefs.current[activeIndex]) {
      const tab = tabRefs.current[activeIndex];
      const rect = tab.getBoundingClientRect();
      const parentLeft = tab.parentElement.getBoundingClientRect().left;
      setUnderlineStyle({
        left: rect.left - parentLeft,
        width: rect.width,
      });
    }
  }, [location.pathname, artistId]);

  return (
    <div className="menu_container">
      <div className="media-tabs">
        {tabs.map((tab, idx) => {
          const isActive =
            location.pathname === `/artistPage/${artistId}/${tab}` ||
            (location.pathname === `/artistPage/${artistId}` && tab === 'media');

          return (
            <NavLink
              key={tab}
              to={`/artistPage/${artistId}/${tab}`}
              ref={(el) => (tabRefs.current[idx] = el)}
              className="tab"
              style={{
                color: isActive ? activeColor : inactiveColor,
                fontWeight: isActive ? 600 : 400,
              }}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </NavLink>
          );
        })}
        <span
          className="underline"
          style={{
            left: underlineStyle.left,
            width: underlineStyle.width,
            backgroundColor: underlineColor,
          }}
        />
      </div>
    </div>
  );
};

export default ArtistMenu;
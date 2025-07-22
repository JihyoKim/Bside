import React, { useRef, useEffect, useState } from 'react';
import './ArtistMenu.css';
import { NavLink, useLocation } from 'react-router-dom';

const tabs = ['media', 'notice', 'vote', 'fan'];

const ArtistMenu = ({ data }) => {
  const { id: artistId, tabColor, inactiveColor, underlineColor } = data;
  const location = useLocation();
  const tabRefs = useRef([]);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const currentPath = location.pathname.split('/').pop();
    const activeIndex = tabs.findIndex(
      (tab) => tab === currentPath || (location.pathname === `/main/artistPage/${artistId}` && tab === 'media')
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
            location.pathname.startsWith(`/main/artistPage/${artistId}/${tab}`) ||
            (location.pathname === `/main/artistPage/${artistId}` && tab === 'media');
          return (
            <NavLink
              key={tab}
              to={`/main/artistPage/${artistId}/${tab}`}
              ref={(el) => (tabRefs.current[idx] = el)}
              className="tab"
              style={{
                color: isActive ? tabColor : inactiveColor,
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

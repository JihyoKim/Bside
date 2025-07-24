
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import artist1 from '../../assets/artist1.png';
import artist2 from '../../assets/artist2.png';
import artist3 from '../../assets/artist3.png';
import artist4 from '../../assets/artist4.png';
import artist5 from '../../assets/artist5.png';
import artistAdd from '../../assets/artistAdd2.png';

import './ArtistList.css';

const ArtistList = () => {
  const navigate = useNavigate();
  const scrollRef = useRef();
  const [dragLimit, setDragLimit] = useState(0);

  const routeMap = {
    'AESPA': '/main/artistPage/aespa',
    'G-DRAGON': '/main/artistPage/gdragon',
    'ALLDAY PROJECT': '/main/artistPage/alldayproject',
    'RIIZE': '/main/artistPage/riize',
    'BLACKPINK': '/main/artistPage/blackpink',
  };

  const artists = [
    { name: 'ALLDAY PROJECT', img: artist3 },
    { name: 'RIIZE', img: artist2 },
    { name: 'G-DRAGON', img: artist1 },
    { name: 'AESPA', img: artist4 },
    { name: 'BLACKPINK', img: artist5 },
  ];

  const updateDragLimit = () => {
    const outer = scrollRef.current;
    if (!outer) return;

    const wrapper = outer.querySelector('.artist-box-wrapper');
    if (!wrapper) return;

    const outerWidth = outer.offsetWidth;
    const wrapperWidth = wrapper.scrollWidth;
    const maxScroll = wrapperWidth - outerWidth;
    const limit = maxScroll > 0 ? -maxScroll : 0;

    setDragLimit(limit);
  };

  useEffect(() => {
    updateDragLimit();
    window.addEventListener('resize', updateDragLimit);
    return () => window.removeEventListener('resize', updateDragLimit);
  }, [artists.length]);

  const goToMoreArtist = () => {
    navigate('/main/moreArtist');
  };

  return (
    <div className="artist-scroll-outer" ref={scrollRef}>
      <motion.div
        className="artist-scroll-inner"
        drag="x"
        dragConstraints={{ left: dragLimit, right: 0 }}
        dragElastic={dragLimit === 0 ? 0.05 : 0.2}
      >
        <div className="artist-box-wrapper">
          <div className="artist-box">
            {artists.map((artist, idx) => (
              <div
                className="artist-card"
                key={idx}
                onClick={() => {
                  if (routeMap[artist.name]) {
                    navigate(routeMap[artist.name]);
                  }
                }}
                style={{
                  cursor: routeMap[artist.name] ? 'pointer' : 'default'
                }}
              >
                <img src={artist.img} alt={artist.name} className="artist-img" />
                <div className="artist-name">{artist.name}</div>
              </div>
            ))}
          </div>
          <button className="artist-add-btn" onClick={goToMoreArtist}>
            <img src={artistAdd} alt="Add" />
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ArtistList;
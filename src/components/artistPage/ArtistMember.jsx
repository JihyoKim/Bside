import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './ArtistMember.css';

const ArtistMember = ({ data }) => {
  const scrollRef = useRef();
  const [dragLimit, setDragLimit] = useState(0);

  const { memberImgs, memberTitle } = data;  // memberTitle도 구조 분해

  const updateDragLimit = () => {
    const outer = scrollRef.current;
    if (!outer) return;

    const wrapper = outer.querySelector('.member-box-wrapper');
    if (!wrapper) return;

    const outerWidth = outer.offsetWidth;
    const wrapperWidth = wrapper.scrollWidth;

    const maxScroll = wrapperWidth - outerWidth;
    setDragLimit(maxScroll > 0 ? -maxScroll : 0);
  };

  useEffect(() => {
    updateDragLimit();
    window.addEventListener('resize', updateDragLimit);
    return () => window.removeEventListener('resize', updateDragLimit);
  }, [memberImgs.length]);

  return (
    <div className="artist-member-wrapper" ref={scrollRef}>
      <h3>{memberTitle || 'Member'}</h3> {/* 기본값은 'Member' */}
      <motion.div
        className="member-scroll-inner"
        drag="x"
        dragConstraints={{ left: dragLimit, right: 0 }}
        dragElastic={0.2}
      >
        <div className="member-box-wrapper">
          {memberImgs.map((img, idx) => (
            <div className="member-slide" key={idx}>
              <img src={img} alt={`member${idx + 1}`} draggable="false" />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ArtistMember;

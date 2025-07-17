import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './ArtistMember.css';

import member1 from '../../assets/ArtistPage/asepa/member1.png';
import member2 from '../../assets/ArtistPage/asepa/member2.png';
import member3 from '../../assets/ArtistPage/asepa/member3.png';
import member4 from '../../assets/ArtistPage/asepa/member4.png';

const ArtistMember = () => {
  const scrollRef = useRef();
  const [dragLimit, setDragLimit] = useState(0);

  const members = [member1, member2, member3, member4]; 

  const updateDragLimit = () => {
    const outer = scrollRef.current;
    if (!outer) return;

    const wrapper = outer.querySelector('.member-box-wrapper');
    if (!wrapper) return;

    const outerWidth = outer.offsetWidth;
    const wrapperWidth = wrapper.scrollWidth;

    const paddingRight = 16;
    const maxScroll = wrapperWidth - outerWidth + paddingRight;
    setDragLimit(maxScroll > 0 ? -maxScroll : 0);
  };

  useEffect(() => {
    updateDragLimit();
    window.addEventListener('resize', updateDragLimit);
    return () => window.removeEventListener('resize', updateDragLimit);
  }, [members.length]);

  return (
    <div className="artist-member-wrapper" ref={scrollRef}>
      <h3>Member</h3>
      <motion.div
        className="member-scroll-inner"
        drag="x"
        dragConstraints={{ left: dragLimit, right: 0 }}
        dragElastic={0.2}
      >
        <div className="member-box-wrapper">
          {members.map((img, idx) => (
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

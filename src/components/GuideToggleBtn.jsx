import React, { useEffect, useState } from 'react';
import './GuideToggleBtn.css';

const GuideToggleBtn = () => {
  const [guideOn, setGuideOn] = useState(true);

  useEffect(() => {
    const html = document.documentElement;
    html.classList.toggle('guide-off', !guideOn);
  }, [guideOn]);

  return (
    <button className="guide-toggle-btn" onClick={() => setGuideOn(prev => !prev)}>
      <span>가이드</span> {guideOn ? 'Off' : 'On'}
    </button>
  );
};

export default GuideToggleBtn;

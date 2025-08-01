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
      {guideOn ? '가이드 끄기' : '가이드 켜기'}
    </button>
  );
};

export default GuideToggleBtn;

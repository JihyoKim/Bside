import React from 'react';
import './ShareModal.css';

import x from '../../../assets/live/x.png';
import youtube from '../../../assets/live/youtube.png';
import instagram from '../../../assets/live/Instagram.png';
import tiktok from '../../../assets/live/tiktok.png';
import weibo from '../../../assets/live/weibo.png';
import more from '../../../assets/live/more.png';
import xBTN from '../../../assets/live/xBTN.png';

const ShareModal = ({ onClose }) => {
  const shareOptions = [
    { img: x, label: 'X' },
    { img: youtube, label: 'YouTube' },
    { img: instagram, label: 'Instagram' },
    { img: tiktok, label: 'TikTok' },
    { img: weibo, label: 'Weibo' },
    { img: more, label: 'More' },
  ];

  return (
    <div className="share-modal-wrapper">
      <div className="share-modal">
        <div className="share-header">
          <span className="share-title">공유 :</span>
          <img src={xBTN} alt="close" className="close-btn" onClick={onClose} />
        </div>
        <div className="share-icons">
          {shareOptions.map((option, index) => (
            <div className="share-item" key={index}>
              <img src={option.img} alt={option.label} className="share-icon" />
              <span className="share-label">{option.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShareModal;

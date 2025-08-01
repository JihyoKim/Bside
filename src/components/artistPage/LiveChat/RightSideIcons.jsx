import React, { useState } from 'react';
import './RightSideIcons.css';

import heartWhite from '../../../assets/live/heart-white.png';
import heartRed from '../../../assets/live/heart-red.png';
import commentIcon from '../../../assets/live/comment.png';
import shareIcon from '../../../assets/live/share.png';
import translateIcon from '../../../assets/live/translate.png';

const RightSideIcons = ({ onToggleChat, onToggleShare, onToggleTranslate }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="icon-panel">
      {/* ❤️ 좋아요 */}
      <button onClick={() => setLiked(!liked)} className='guide'>
        <img src={liked ? heartRed : heartWhite} alt="like" />
        <span>1.3만</span>
      </button>

      {/* 💬 댓글 */}
      <button onClick={onToggleChat} className='guide'>
        <img src={commentIcon} alt="comment" />
        <span>795</span>
      </button>

      {/* 📤 공유 */}
      <button onClick={onToggleShare} className='guide'>
        <img src={shareIcon} alt="share" />
        <span>2천</span>
      </button>

      {/* 🌐 번역 */}
      <button onClick={onToggleTranslate} className='guide'>
        <img src={translateIcon} alt="translate" />
        <span>Trans</span>
      </button>
    </div>
  );
};

export default RightSideIcons;

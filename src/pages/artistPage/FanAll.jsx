import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { artistData } from '../../data/artistData';

import './Fan.css';
import option from '../../assets/ArtistPage/option.svg';
import like from '../../assets/ArtistPage/like.svg';
import likeFilled from '../../assets/ArtistPage/likeFilled.svg';
import comment from '../../assets/ArtistPage/comment.svg';
import save from '../../assets/ArtistPage/save.svg';
import saveFilled from '../../assets/ArtistPage/saveFilled.svg';

const FanAll = () => {
  const { artistId } = useParams();
  const navigate = useNavigate();
  const posts = artistData[artistId]?.fanPosts || [];

  const [likes, setLikes] = useState(posts.map(() => false));
  const [saves, setSaves] = useState(posts.map(() => false));
  const [showTranslated, setShowTranslated] = useState(posts.map(() => false));

  const toggleLike = (index, e) => {
    e.stopPropagation();
    const updated = [...likes];
    updated[index] = !updated[index];
    setLikes(updated);
  };

  const toggleSave = (index, e) => {
    e.stopPropagation();
    const updated = [...saves];
    updated[index] = !updated[index];
    setSaves(updated);
  };

  const toggleTranslation = (index, e) => {
    e.stopPropagation();
    const updated = [...showTranslated];
    updated[index] = !updated[index];
    setShowTranslated(updated);
  };

  const goToPost = (postId) => {
    navigate(`post/${postId}`);
  };

  return (
    <div className="fan-posts">
      {posts.map((post, index) => (
        <div
          key={post.id}
          className="fan-post-card"
          onClick={() => goToPost(post.id)}
        >
          {/* 상단 유저 정보 */}
          <div className="fan-header">
            <img src={post.profile} alt="profile" className="fan-profile-img" />
            <div className="fan-user-info">
              <span className="nickname">{post.nickname}</span>
              <span className="time">{post.time}</span>
            </div>
            <div className="fan-follow-more">
              <button className="follow-btn">팔로우</button>
              <img src={option} alt="more" />
            </div>
          </div>

          {/* 게시글 내용 */}
          <div className="fan-text">
            {showTranslated[index] && post.translatedText
              ? post.translatedText
              : post.text}
          </div>

          {/* 번역 보기 버튼 */}
          {post.translatedText && (
            <div
              className="translate-toggle"
              onClick={(e) => toggleTranslation(index, e)}
            >
              {showTranslated[index] ? '원문 보기' : '번역 보기'}
            </div>
          )}

          {/* 이미지 */}
          <div className={`fan-images ${post.images.length === 2 ? 'two' : ''}`}>
            {post.images.map((img, idx) => (
              <div key={idx} className="fan-img-wrapper">
                <img src={img} alt={`post-${idx}`} />
              </div>
            ))}
          </div>

          {/* 아이콘 */}
          <div className="fan-icons">
            <span onClick={(e) => toggleLike(index, e)}>
              <img src={likes[index] ? likeFilled : like} alt="like" /> {post.likes}
            </span>
            <span>
              <img src={comment} alt="comment" /> {post.comments}
            </span>
            <img
              className="save-icon"
              src={saves[index] ? saveFilled : save}
              alt="save"
              onClick={(e) => toggleSave(index, e)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FanAll;

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
  const [likeCounts, setLikeCounts] = useState(posts.map(post => post.likes));
  const [saves, setSaves] = useState(posts.map(() => false));
  const [followings, setFollowings] = useState(posts.map(() => false));
  const [showTranslated, setShowTranslated] = useState(posts.map(() => false));
  
  const toggleLike = (index, e) => {
    e.stopPropagation();
    const updatedLikes = [...likes];
    const updatedCounts = [...likeCounts];
  
    updatedLikes[index] = !updatedLikes[index];
    updatedCounts[index] += updatedLikes[index] ? 1 : -1;
  
    setLikes(updatedLikes);
    setLikeCounts(updatedCounts);
  };  

  const toggleSave = (index, e) => {
    e.stopPropagation();
    const updated = [...saves];
    updated[index] = !updated[index];
    setSaves(updated);
  };

  const toggleFollow = (index, e) => {
    e.stopPropagation(); // 부모 클릭 방지
    const updated = [...followings];
    updated[index] = !updated[index];
    setFollowings(updated);
  };  

  const toggleTranslation = (index, e) => {
    e.stopPropagation();
    const updated = [...showTranslated];
    updated[index] = !updated[index];
    setShowTranslated(updated);
  };

  const goToPost = (postId) => {
    navigate(`/main/artistPage/${artistId}/post/${postId}`);
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
              {post.showFollowButton && (
                <button
                  className="follow-btn"
                  onClick={(e) => toggleFollow(index, e)}
                  style={{ color: followings[index] ? '#fff' : '#00acee' }}
                >
                  {followings[index] ? '팔로잉' : '팔로우'}
                </button>
              )}
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
          {post.images.length === 3 ? (
            <div className="fan-images three">
              <div className="left-img">
                <img src={post.images[0]} alt="left" />
              </div>
              <div className="right-imgs">
                <div className="top-img">
                  <img src={post.images[1]} alt="top-right" />
                </div>
                <div className="bottom-img">
                  <img src={post.images[2]} alt="bottom-right" />
                </div>
              </div>
            </div>
          ) : (
            <div className={`fan-images ${post.images.length === 2 ? 'two' : ''}`}>
              {post.images.map((img, idx) => (
                <div key={idx} className="fan-img-wrapper">
                  <img src={img} alt={`post-${idx}`} />
                </div>
              ))}
            </div>
          )}

          {/* 아이콘 */}
          <div className="fan-icons">
          <span className="like-icon" onClick={(e) => toggleLike(index, e)}>
            <img src={likes[index] ? likeFilled : like} alt="like" />
            <span className="like-count">{likeCounts[index]}</span>
          </span>
            <span className='comment-icon'>
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

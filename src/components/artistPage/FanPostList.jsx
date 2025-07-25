import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../../pages/artistPage/Fan.css';

import option from '../../assets/ArtistPage/option.svg';
import like from '../../assets/ArtistPage/like.svg';
import likeFilled from '../../assets/ArtistPage/likeFilled.svg';
import comment from '../../assets/ArtistPage/comment.svg';
import save from '../../assets/ArtistPage/save.svg';
import saveFilled from '../../assets/ArtistPage/saveFilled.svg';
import locationIcon from '../../assets/symbol/locationIcon.svg';


const FanPostList = ({ posts }) => {
  const { artistId } = useParams();
  const navigate = useNavigate();

  const [likes, setLikes] = useState(posts.map(() => false));
  const [likeCounts, setLikeCounts] = useState(posts.map(post => post.likes || 0));
  const [saves, setSaves] = useState(posts.map(() => false));
  const [followings, setFollowings] = useState(posts.map(() => false));
  const [showTranslated, setShowTranslated] = useState(posts.map(() => false));
  const currentUserNickname = '쥐들에곤히잠들다';

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
    e.stopPropagation();
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

  const goToPost = (postId, post) => {
    navigate(`/main/artistPage/${artistId}/post/${postId}`, {
      state: { post },
    });
  };

  return (
    <div className="fan-posts">
      {posts.filter(post => post.showInFanList !== false).map((post, index) => (
        <div
          key={post.id}
          className="fan-post-card"
          onClick={() => goToPost(post.id, post)}
        >
          <div className="fan-header">
            <img src={post.profile} alt="profile" className="fan-profile-img" />
            <div className="fan-user-info">
              <span className="nickname">{post.nickname}</span>
              <span className="time">{post.time}</span>
            </div>
            <div className="fan-follow-more">
              {post.nickname === currentUserNickname ? (
                <span className="my-post-label">나의 게시물</span>
              ) : (
                post.showFollowButton && (
                  <button
                    className="follow-btn"
                    onClick={(e) => toggleFollow(index, e)}
                    style={{ color: followings[index] ? '#fff' : '#00acee' }}
                  >
                    {followings[index] ? '팔로잉' : '팔로우'}
                  </button>
                )
              )}
              <img src={option} alt="more" />
            </div>
          </div>

          {post.location && (
            <div className="fan-location">
              <img src={locationIcon} alt="location" className="location-icon" />
              {post.location}
            </div>
          )}

          <div className="fan-text">
            {showTranslated[index] && post.translatedText
              ? post.translatedText
              : post.text}
          </div>

          {post.translatedText && (
            <div className="translate-toggle" onClick={(e) => toggleTranslation(index, e)}>
              {showTranslated[index] ? '원문 보기' : '번역 보기'}
            </div>
          )}

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

          <div className="fan-icons">
            <span className="like-icon" onClick={(e) => toggleLike(index, e)}>
              <img src={likes[index] ? likeFilled : like} alt="like" />
              <span className="like-count">{likeCounts[index]}</span>
            </span>
            <span className="comment-icon">
              <img src={comment} alt="comment" /> {post.comments || 0}
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

export default FanPostList;
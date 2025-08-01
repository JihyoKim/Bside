import React, { useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { artistData } from '../../data/artistData';
import './PostDetail.css';

import heartIcon from '../../assets/ArtistPage/like.svg';
import heartIconFilled from '../../assets/ArtistPage/likeFilled.svg';
import commentIcon from '../../assets/ArtistPage/comment.svg';
import arrowIcon from '../../assets/fanPost/arrow.png';
// import profile from '../../assets/fanPost/profile.png';
import profile from '../../assets/ArtistPage/gdragon/user1.png';
import moreIcon from '../../assets/fanPost/more.png';
import trashIcon from '../../assets/fanPost/trash.png';
import save from '../../assets/ArtistPage/save.svg';
import saveFilled from '../../assets/ArtistPage/saveFilled.svg';
import locationIcon from '../../assets/symbol/locationIcon_white.svg';


const PostDetail = () => {
  const { artistId, postId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const passedPost = location.state?.post;
  const posts = artistData[artistId]?.fanPosts || [];
  const post = passedPost || posts.find(p => String(p.id) === postId);

  const [showTranslated, setShowTranslated] = useState(false);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [showDeleteId, setShowDeleteId] = useState(null);
  const [confirmDeleteId, setConfirmDeleteId] = useState(null);
  const [isSaved, setIsSaved] = useState(false);
  const [likeCount, setLikeCount] = useState(post?.likes || 0);
  const [isLiked, setIsLiked] = useState(false);

  if (!post) {
    return <div className="fan-post-container">해당 게시글을 찾을 수 없습니다.</div>;
  }

  const toggleLike = () => {
    setIsLiked(prev => !prev);
    setLikeCount(prev => prev + (isLiked ? -1 : 1));
  };

  const toggleSave = () => {
    setIsSaved(prev => !prev);
  };

  const handleSubmit = () => {
    if (comment.trim() === '') return;

    const newComment = {
      id: Date.now(),
      user: '쥐들에곤히잠들다',
      text: comment,
      time: '방금 전',
      likes: 0,
      isLiked: false,
    };

    setComments([...comments, newComment]);
    setComment('');
  };

  const handleDelete = (id) => {
    setComments(comments.filter((c) => c.id !== id));
    setShowDeleteId(null);
    setConfirmDeleteId(null);
  };

  const handleCommentLike = (id) => {
    setComments(prev =>
      prev.map(comment =>
        comment.id === id
          ? { ...comment, likes: comment.likes + 1, isLiked: true }
          : comment
      )
    );
  };

  return (
    <div className="fan-post-container">
      <div className="user-info">
        <img src={post.profile} alt="profile" className="profile-img" />
        <div className="user-text">
          <div className="username">{post.nickname}</div>
          <div className="date">{post.time}</div>
        </div>
      </div>

      <h2 className="post-text">
        {showTranslated && post.translatedText ? post.translatedText : post.text}
      </h2>

      <p className="post-content">
        {showTranslated && post.translatedContent ? post.translatedContent : post.content}
      </p>

      {(post.translatedText || post.translatedContent) && (
        <div className="translate-toggle" onClick={() => setShowTranslated(!showTranslated)}>
          {showTranslated ? '원문 보기' : '번역 보기'}
        </div>
      )}

      {post.images.map((img, idx) => (
        <img key={idx} src={img} alt={`fan post ${idx + 1}`} className="fan-image" />
      ))}

      {post.location && (
        <div className="post-location">
          <img src={locationIcon} alt="location" className="location-icon" /> {post.location}
        </div>
      )}

      <div className="post-actions">
        <span className="action-item guide" onClick={toggleLike}>
          <img
            src={isLiked ? heartIconFilled : heartIcon}
            alt="heart"
            className="action-icon"
          />
          {likeCount}
        </span>
        <span className="action-item with-margin">
          <img src={commentIcon} alt="comment" className="action-icon" /> {comments.length}
        </span>
        <span className="bookmark-item guide">
          <img
            className="save-icon"
            src={isSaved ? saveFilled : save}
            alt="save"
            onClick={toggleSave}
          />
        </span>
      </div>

      <div className="comments">
        <p>댓글 {comments.length}</p>

        <div className="comment-input guide3">
          <input
            type="text"
            placeholder="댓글을 입력해주세요"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button
            className={`send-btn ${comment.trim() ? 'active guide' : ''}`}
            onClick={handleSubmit}
          >
            <img src={arrowIcon} alt="send" className="send-icon" />
          </button>
        </div>

        {comments.map((c) => (
          <div key={c.id} className="comment-card">
            <div className="comment-header">
              <div className="comment-user">
                <img src={profile} alt="profile" className="profile-img" />
                <div>
                  <p className="username">{c.user}</p>
                  <p className="time">{c.time}</p>
                </div>
              </div>
              <button
                className="menu-btn guide"
                onClick={() => setShowDeleteId(prev => (prev === c.id ? null : c.id))}
              >
                <img src={moreIcon} alt="더보기" className="more-icon" />
              </button>
            </div>

            <p className="comment-text">{c.text}</p>

            <div className="comment-actions">
              <span className="action-item" onClick={() => handleCommentLike(c.id)}>
                <img
                  src={c.isLiked ? heartIconFilled : heartIcon}
                  alt="heart"
                  className="action-icon"
                />
                {c.likes}
              </span>
              <span className="action-item with-margin">
                <img src={commentIcon} alt="comment" className="action-icon comment-icon" />
                0
              </span>
            </div>

            {showDeleteId === c.id && (
              <div className="delete-modal-overlay" onClick={() => setShowDeleteId(null)}>
                <div className="delete-modal" onClick={(e) => e.stopPropagation()}>
                  <button
                    className="delete-btn"
                    onClick={() => {
                      setConfirmDeleteId(c.id);
                      setShowDeleteId(null);
                    }}
                  >
                    <img src={trashIcon} alt="삭제" className="trash-icon" />
                    <span className="guide">삭제하기</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}

        {confirmDeleteId && (
          <div className="modal-overlay" onClick={() => setConfirmDeleteId(null)}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <p className="modal-text">작성된 댓글을 삭제하시겠습니까?</p>
              <div className="modal-buttons">
                <button className="cancel-btn" onClick={() => setConfirmDeleteId(null)}>
                  취소
                </button>
                <button
                  className="confirm-btn guide"
                  onClick={() => handleDelete(confirmDeleteId)}
                >
                  확인
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostDetail;

import React from 'react';
import { useParams } from 'react-router-dom';
import { artistData } from '../../data/artistData';


import './Fan.css';
import option from '../../assets/ArtistPage/option.svg';
import like from '../../assets/ArtistPage/like.svg';
import comment from '../../assets/ArtistPage/comment.svg';
import save from '../../assets/ArtistPage/save.svg';

const FanAll = () => {
  const { artistId } = useParams();
  const posts = artistData[artistId]?.fanPosts || [];

  return (
    <div className="fan-posts">
      {posts.map((post) => (
        <div key={post.id} className="fan-post-card">
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
          <div className="fan-text">{post.text}</div>

          {/* 이미지가 1개인지 2개인지에 따라 클래스 변경 */}
          <div className={`fan-images ${post.images.length === 2 ? 'two' : ''}`}>
            {post.images.map((img, idx) => (
              <div key={idx} className="fan-img-wrapper">
                <img src={img} alt={`post-${idx}`} />
              </div>
            ))}
          </div>

          {/* 좋아요, 댓글, 저장 */}
          <div className="fan-icons">
            <span><img src={like} alt="like" /> {post.likes}</span>
            <span><img src={comment} alt="comment" /> {post.comments}</span>
            <img src={save} alt="save" className="save-icon" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FanAll;

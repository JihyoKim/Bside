import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Post.css';

import writeIcon from '../../assets/mypage/write.svg';
import likeIcon from  '../../assets/ArtistPage/like.svg';
import commentIcon from '../../assets/ArtistPage/comment.svg';
import bottomBg from '../../assets/mypage/bottomBg.png';
import topIcon from '../../assets/mypage/top.svg';


const postList = [
  {
    id: 1,
    artistId: 'gdragon', 
    title: '더현대 팝업 MD 존 응원봉 구매 성공',
    content: 'MD존 선착순 예매 겨우 성공해서 데이지봉+크래들 구매 성공! 진짜 이...',
    date: '2025.08.12',
    likes: 2,
    comments: 0,
    image: '/assets/mypage/post1.png',
  },
  {
    id: 5,
    artistId: 'gdragon', 
    title: '지드래곤 네일 받고 옴 ㅎㅎ',
    content: '여러분 드디어 저번에 예약했던 네일샵에서 웨버멘쉬 컨셉 네일 받았어욥 댓글 남겨주시면 샵 정보 드려요!! ...',
    date: '2025.07.28',
    likes: 112,
    comments: 45,
    image: '/assets/mypage/post2.png',
  },
  {
    id: 6,
    artistId: 'gdragon', 
    title: '이 사진 찍으신 분..b.b',
    content: '이번에는 직접 보고 싶었는데 이렇게 사진으로라도 보다……',
    date: '2025.06.11',
    likes: 28,
    comments: 8,
    image: '/assets/mypage/post3.png',
  },
  {
    id: 7,
    artistId: 'gdragon', 
    title: '이번에 지용이가 키우는 고양이 캐릭터 브랜드 출시된다옹',
    content: '프로필도 바로 바꿔버리기 히힝 !',
    date: '2025.05.19',
    likes: 50,
    comments: 8,
    image: '/assets/mypage/post4.png',
  },
];

const Post = ({ onScrollToTop }) => {
  const navigate = useNavigate(); 

  const handleClick = (post) => {
    navigate(`/main/artistPage/${post.artistId}/post/${post.id}`);
  };

  return (
    <div className="post-section">
      {/* 게시물 헤더 */}
      <div className="post-header">
        <h2>나의 게시물</h2>
        <button className="write-btn">
          글쓰기 <img src={writeIcon} alt="글쓰기" />
        </button>
      </div>

      {/* 게시물 리스트 */}
      <div className="post-list">
        {postList.map((post) => (
          <div
            className="post-card"
            key={`${post.artistId}-${post.id}`} 
            onClick={() => handleClick(post)} // ✅ 클릭 시 이동
          >
            <img src={post.image} alt="thumbnail" className="post-thumb" />
            <div className="post-content">
              <h3 className="post-title">{post.title}</h3>
              <p className="post-text">{post.content}</p>
              <div className="post-meta">
                <span>{post.date}</span>
                <span>
                  <img src={likeIcon} alt="like" /> {post.likes}
                </span>
                <span>
                  <img src={commentIcon} alt="comment" /> {post.comments}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 하단 "맨 위로" 영역 */}
      <div className="scroll-top-area" onClick={onScrollToTop}>
        <img src={topIcon} alt="top" className="top-icon" />
        <span className="top-text">맨 위로</span>
      </div>
    </div>
  );
};

export default Post;

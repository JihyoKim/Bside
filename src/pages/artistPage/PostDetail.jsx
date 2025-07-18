import React from 'react';
import { useParams } from 'react-router-dom';
import { artistData } from '../../data/artistData'; // 경로 확인 필요

const PostDetail = () => {
  const { artistId, postId } = useParams();
  const posts = artistData[artistId]?.fanPosts || [];
  const post = posts.find((p) => p.id === Number(postId));

  if (!post) return <div style={{ color: 'white', padding: '20px' }}>해당 게시글을 찾을 수 없습니다.</div>;

  return (
    <div className='post-detail-container'>
    </div>
  );
};

export default PostDetail;

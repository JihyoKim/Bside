import React from 'react';
import { useParams } from 'react-router-dom';
import { artistData } from '../../data/artistData';
import FanPostList from '../../components/artistPage/FanPostList';

const FanFollowing = () => {
  const { artistId } = useParams();
  const posts = artistData[artistId]?.fanFollowingPosts || [];

  return (
    <div className="fan-posts">
      {posts.length === 0 ? (
        <p className="no-posts-message">팔로우한 팬의 포스트가 없습니다.</p>
      ) : (
        <FanPostList posts={posts} />
      )}
    </div>
  );
};

export default FanFollowing;

import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { artistData } from '../../data/artistData';
import FanPostList from '../../components/artistPage/FanPostList';

const FanAll = () => {
  const { artistId } = useParams();
  const location = useLocation();

  const staticPosts = artistData[artistId]?.fanPosts || [];
  const newPost = location.state?.newPost;

  const allPosts = newPost ? [newPost, ...staticPosts] : staticPosts;

  return <FanPostList posts={allPosts} />;
};

export default FanAll;
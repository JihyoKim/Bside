import React from 'react';
import { useParams } from 'react-router-dom';
import { artistData } from '../../data/artistData';
import FanPostList from '../../components/artistPage/FanPostList';

const FanAll = () => {
  const { artistId } = useParams();
  const posts = artistData[artistId]?.fanPosts || [];
  return <FanPostList posts={posts} />;
};

export default FanAll;
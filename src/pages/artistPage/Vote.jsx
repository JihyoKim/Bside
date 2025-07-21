import React from 'react';
import './Vote.css';

import VoteBanner from '../../components/artistPage/VoteBanner'
import VoteMain from '../../components/artistPage/VoteMain'
import VoteList from '../../components/artistPage/VoteList'

const Vote = () => {
  return (
    <div className="event-container">
      <h2 className="voteTitle">투표목록</h2>
      <VoteBanner/>
      <VoteMain/>
      <VoteList/>
    </div>
  );
};

export default Vote;

import React from 'react';
<<<<<<< HEAD
import './Vote.css';

import VoteBanner from '../../components/artistPage/VoteBanner'
import VoteMain from '../../components/artistPage/VoteMain'
import VoteList from '../../components/artistPage/VoteList'
=======
import artistVote from '../../assets/vote.png';

>>>>>>> 4fdd8305d799f61023082518c635f1a8874c94db

const Vote = () => {
  return (
    <div className="event-container">
<<<<<<< HEAD
      <h2 className="voteTitle">투표목록</h2>
      <VoteBanner/>
      <VoteMain/>
      <VoteList/>
=======
      <img src={artistVote} alt="Event" />
>>>>>>> 4fdd8305d799f61023082518c635f1a8874c94db
    </div>
  );
};

export default Vote;

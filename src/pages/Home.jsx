import React from 'react';
import './Home.css';
import ArtistList from '../components/main/ArtistList';
import MainBanner from '../components/main/MainBanner';
import ShopBanner from '../components/main/ShopBanner';
import HomeNotice from '../components/main/HomeNotice';
import MyArtistStroy from '../components/main/MyArtistStory';
import ArtistAD from '../components/main/ArtistAD';
import EventBanner from '../components/main/EventBanner';
import MoreArtistBanner from '../components/main/MoreArtistBanner';
import ChatbotEmbed from '../components/chatBot/ChatbotEmbed';

const Home = () => {
  return (
    <div className="page-scroll"> 
      <div className="home-container">
        <ArtistList />
        <MainBanner />
        <ShopBanner />
        <MyArtistStroy />
        <HomeNotice />
        <EventBanner />
        <ArtistAD />
        <MoreArtistBanner />
        <ChatbotEmbed />
      </div>
    </div>
  );
};

export default Home;

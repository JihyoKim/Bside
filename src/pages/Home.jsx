import React from 'react'
import './Home.css'
import ArtistList from '../components/main/ArtistList'
import MainBanner from '../components/main/MainBanner'
import HomeNotice from '../components/main/HomeNotice'
import MyArtistStroy from '../components/main/MyArtistStory'
import ArtistFeed from '../components/main/ArtistFeed'
import EventBanner from '../components/main/EventBanner'


const Home = () => {
  return (
    <div className="home-container">
      <ArtistList />
      <MainBanner />
      <MyArtistStroy />
      <HomeNotice />
      <EventBanner />
      <ArtistFeed />
    </div>
  )
}

export default Home

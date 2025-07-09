import React from 'react'
import './Home.css'
import ArtistList from '../components/main/ArtistList'
import MainBanner from '../components/main/MainBanner'
import NewItems from '../components/main/NewItems'
import MyArtistStroy from '../components/main/MyArtistStory'
import ArtistFeed from '../components/main/ArtistFeed'
import EventBanner from '../components/main/EventBanner'


const Home = () => {
  return (
    <div className="home-container">
      <ArtistList />
      <MainBanner />
      {/* <NewItems /> */}
      <MyArtistStroy />
      <ArtistFeed />
      <EventBanner />
    </div>
  )
}

export default Home

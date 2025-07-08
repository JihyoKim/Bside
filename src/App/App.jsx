import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import Music from '../pages/Music';
import Shop from '../pages/Shop';
import MyPage from '../pages/MyPage';
import ArtistPage from '../pages/ArtistPage'; 
import Media from '../pages/ArtistPage/Media'; 
import Notice from '../pages/artistPage/Notice';
import Event from '../pages/artistPage/Event';
import Fan from '../pages/artistPage/Fan';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='music' element={<Music />} />
        <Route path='shop' element={<Shop />} />
        <Route path='mypage' element={<MyPage />} />
        <Route path='artistpage' element={<ArtistPage />} >
          <Route index element={<Media />} />
          <Route path='media' element={<Media />} />
          <Route path='notice' element={<Notice />} />
          <Route path='event' element={<Event />} />
          <Route path='fan' element={<Fan />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import Music from '../pages/Music';
import Shop from '../pages/Shop';
import MyPage from '../pages/MyPage';
import ArtistPage from '../pages/ArtistPage'; 

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='music' element={<Music />} />
        <Route path='shop' element={<Shop />} />
        <Route path='mypage' element={<MyPage />} />
        <Route path='artistpage' element={<ArtistPage />} />
      </Route>
    </Routes>
  )
}

export default App;

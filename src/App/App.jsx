import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import Music from '../pages/Music';
import Shop from '../pages/Shop';
import GDShop from '../pages/shopPage/GDShop'
import ADPShop from '../pages/shopPage/ADPShop'
import RiizeShop from '../pages/shopPage/RiizeShop'
import BPShop from '../pages/shopPage/BPShop'
import MyPage from '../pages/MyPage';
import ArtistPage from '../pages/ArtistPage'; 
import Media from '../pages/artistPage/Media'; 
import Notice from '../pages/artistPage/Notice';
import Vote from '../pages/artistPage/Vote';
import Fan from '../pages/artistPage/Fan';
import MoreArtist from '../pages/MoreArtist';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='music' element={<Music />} />
        <Route path='shop' element={<Shop />} >
          <Route index element={<GDShop />} />
          <Route path='gdshop' element={<GDShop />} />
          <Route path='adpshop' element={<ADPShop />} />
          <Route path='riizeshop' element={<RiizeShop />} />
          <Route path='blackpinkshop' element={<BPShop />} />
        </Route>
        <Route path='mypage' element={<MyPage />} />
        <Route path='moreArtist' element={<MoreArtist />} />
        <Route path='artistPage/:artistId' element={<ArtistPage />} >
          <Route index element={<Media />} />
          <Route path='media' element={<Media />} />
          <Route path='notice' element={<Notice />} />
          <Route path='vote' element={<Vote />} />
          <Route path='fan' element={<Fan />} />
        </Route>        
          <Route path='artistPage/:artistId' element={<ArtistPage />} >
          <Route index element={<Media />} />
          <Route path='media' element={<Media />} />
          <Route path='notice' element={<Notice />} />
          <Route path='vote' element={<Vote />} />
          <Route path='fan' element={<Fan />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

export default App;

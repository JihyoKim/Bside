import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// 온보딩
import Step1 from '../pages/onboarding/Step1_Account';
import Step2 from '../pages/onboarding/Step2_Pin';
import Step3 from '../pages/onboarding/Step3_Password';
import Step4 from '../pages/onboarding/Step4_Nickname';
import Step5 from '../pages/onboarding/Step5_Language';
import Step6 from '../pages/onboarding/Step6_AddArtists';
import Step7 from '../pages/onboarding/Step7_Complete';

// 메인
import Layout from '../components/Layout';
import Home from '../pages/Home';
import Music from '../pages/Music';
import Shop from '../pages/Shop';
import GDShop from '../pages/shopPage/GDShop';
import ADPShop from '../pages/shopPage/ADPShop';
import RiizeShop from '../pages/shopPage/RiizeShop';
import BPShop from '../pages/shopPage/BPShop';
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
      {/* 기본 진입 시 온보딩으로 이동 */}
      <Route path="/" element={<Navigate to="/onboarding" replace />} />

      {/* 온보딩 */}
      <Route path="/onboarding">
        <Route index element={<Step1 />} />
        <Route path="pin" element={<Step2 />} />
        <Route path="password" element={<Step3 />} />
        <Route path="nickname" element={<Step4 />} />
        <Route path="language" element={<Step5 />} />
        <Route path="addartists" element={<Step6 />} />
        <Route path="complete" element={<Step7 />} />
      </Route>

      {/* 메인 앱 라우트 */}
      <Route path="/main" element={<Layout />}>
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
      </Route>

      {/* 잘못된 경로는 온보딩으로 */}
      <Route path="*" element={<Navigate to="/onboarding" replace />} />
    </Routes>
  );
};

export default App;

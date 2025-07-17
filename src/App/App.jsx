import React from 'react';
import { Routes, Route } from 'react-router-dom';

// ✅ 온보딩 페이지
import Step1 from '../pages/onboarding/Step1_Account';
import Step2 from '../pages/onboarding/Step2_Pin';
import Step3 from '../pages/onboarding/Step3_Password';
import Step4 from '../pages/onboarding/Step4_Nickname';
import Step5 from '../pages/onboarding/Step5_Language';
import Step6 from '../pages/onboarding/Step6_AddArtists';
import Step7 from '../pages/onboarding/Step7_Complete';

// ✅ 메인 페이지 및 레이아웃
import Layout from '../components/Layout';
import Home from '../pages/Home';
import Music from '../pages/Music';
import Shop from '../pages/Shop';
import MyPage from '../pages/MyPage';
import MoreArtist from '../pages/MoreArtist';

// ✅ 아티스트 관련 페이지 (서브탭 포함)
import ArtistPage from '../pages/ArtistPage';
import Media from '../pages/ArtistPage/Media';
import Notice from '../pages/artistPage/Notice';
import Event from '../pages/artistPage/Event';
import Fan from '../pages/artistPage/Fan';

const App = () => {
  return (
    <Routes>
      {/* 👉 온보딩 플로우 */}
      <Route path="/" element={<Step1 />} />
      <Route path="/pin" element={<Step2 />} />
      <Route path="/password" element={<Step3 />} />
      <Route path="/nickname" element={<Step4 />} />
      <Route path="/language" element={<Step5 />} />
      <Route path="/addartists" element={<Step6 />} />
      <Route path="/complete" element={<Step7 />} />

      {/* 👉 메인 앱 라우팅 (공통 Layout 포함) */}
      <Route path="/main" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="music" element={<Music />} />
        <Route path="shop" element={<Shop />} />
        <Route path="mypage" element={<MyPage />} />
        <Route path="moreArtist" element={<MoreArtist />} />
        
        {/* 아티스트 상세 페이지 내 탭 구조 */}
        <Route path="artistpage" element={<ArtistPage />}>
          <Route index element={<Media />} />
          <Route path="media" element={<Media />} />
          <Route path="notice" element={<Notice />} />
          <Route path="event" element={<Event />} />
          <Route path="fan" element={<Fan />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;

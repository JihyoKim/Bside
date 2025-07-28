import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// 온보딩 페이지
import Step1 from '../pages/onboarding/Step1_Account';
import Step2 from '../pages/onboarding/Step2_Pin';
import Step3 from '../pages/onboarding/Step3_Password';
import Step4 from '../pages/onboarding/Step4_Nickname';
import Step5 from '../pages/onboarding/Step5_Language';
import Step6 from '../pages/onboarding/Step6_AddArtists';
import Step7 from '../pages/onboarding/Step7_Complete';

// 메인 앱
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
import MediaDetailLive from '../pages/artistPage/MediaDetailLive';
import Notice from '../pages/artistPage/Notice';
import Vote from '../pages/artistPage/Vote';
import Fan from '../pages/artistPage/Fan';
import FanAll from '../pages/artistPage/FanAll';
import FanFollowing from '../pages/artistPage/FanFollowing';
import PostDetail from '../pages/artistPage/PostDetail';
import PostWrite from '../pages/artistPage/PostWrite';
import MoreArtist from '../pages/MoreArtist';
import Ticket from '../pages/myPage/Ticket';
import PointCard from '../pages/myPage/PointCard';
import Following from '../pages/myPage/Following';
import VoteList from '../pages/artistPage/vote/VoteList';
import VoteResult from '../pages/artistPage/vote/VoteResult';
import VoteComplete from '../pages/artistPage/vote/VoteComplete';

const App = () => {

  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
  
    setVh(); // 초기 1회 설정
    window.addEventListener('resize', setVh); // 리사이즈 대응
  
    return () => window.removeEventListener('resize', setVh); // 정리
  }, []);

  
  return (
    <Routes>
      {/* 진입 시 온보딩으로 이동 */}
      <Route path="/" element={<Navigate to="/onboarding" replace />} />

      {/* 온보딩 경로 설정 */}
      <Route path="/onboarding">
        <Route index element={<Step1 />} />
        <Route path="pin" element={<Step2 />} />
        <Route path="password" element={<Step3 />} />
        <Route path="nickname" element={<Step4 />} />
        <Route path="language" element={<Step5 />} />
        <Route path="addartists" element={<Step6 />} />
        <Route path="complete" element={<Step7 />} />
      </Route>

      {/* 메인 앱 */}
      <Route path="/main" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="music" element={<Music />} />
        <Route path="shop" element={<Shop />}>
          <Route index element={<GDShop />} />
          <Route path="gdshop" element={<GDShop />} />
          <Route path="adpshop" element={<ADPShop />} />
          <Route path="riizeshop" element={<RiizeShop />} />
          <Route path="blackpinkshop" element={<BPShop />} />
        </Route>
        <Route path="mypage" element={<MyPage />} />
        <Route path="mypage/ticket" element={<Ticket />} />
        <Route path="mypage/point" element={<PointCard />} />
        <Route path="mypage/following" element={<Following />} />
        <Route path="moreArtist" element={<MoreArtist />} />
        <Route path="artistPage/:artistId" element={<ArtistPage />}>
          <Route index element={<Media />} />
          <Route path="media" element={<Media />} />
          <Route path="notice" element={<Notice />} />
          <Route path="vote" element={<Vote />} />
          <Route path="fan" element={<Fan />} >
            <Route index element={<FanAll />} />
            <Route path="following" element={<FanFollowing />} />
          </Route>
        </Route>
        <Route path="artistPage/:artistId/media/:mediaId" element={<MediaDetailLive />} />
        <Route path="artistPage/:artistId/post/:postId" element={<PostDetail />} />
        <Route path="artistPage/:artistId/write" element={<PostWrite />} />

        <Route path="artistPage/:artistId/vote/list/" element={<VoteList />} />
        <Route path="artistPage/:artistId/vote/result/" element={<VoteResult />} />
        <Route path="artistPage/:artistId/vote/complete/" element={<VoteComplete />} />
        {/* <Route path="artistPage/:artistId/vote/list/:voteId" element={<VoteList />} />
        <Route path="artistPage/:artistId/vote/result/:voteId" element={<VoteResult />} />
        <Route path="artistPage/:artistId/vote/complete/:voteId" element={<VoteComplete />} /> */}
      </Route>

      {/* 존재하지 않는 경로 → 온보딩으로 */}
      <Route path="*" element={<Navigate to="/onboarding" replace />} />
    </Routes>
  );
};

export default App;

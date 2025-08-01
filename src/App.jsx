import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Layout from './components/Layout';
import WidthToggle from './components/WidthToggle';

// 온보딩 페이지
import Step1 from './pages/onboarding/Step1_Account';
import Step2 from './pages/onboarding/Step2_Pin';
import Step3 from './pages/onboarding/Step3_Password';
import Step4 from './pages/onboarding/Step4_Nickname';
import Step5 from './pages/onboarding/Step5_Language';
import Step6 from './pages/onboarding/Step6_AddArtists';
import Loading from './pages/onboarding/Loading';
import Step7 from './pages/onboarding/Step7_Complete';

// 메인 앱
import Home from './pages/Home';
import Music from './pages/Music';
import Shop from './pages/Shop';
import ProductDetail from './pages/shopPage/ProductDetail';
import Payment from './pages/shopPage/Payment';
import GDShop from './pages/shopPage/GDShop';
import ADPShop from './pages/shopPage/ADPShop';
import RiizeShop from './pages/shopPage/RiizeShop';
import BPShop from './pages/shopPage/BPShop';
import MyPage from './pages/MyPage';
import ArtistPage from './pages/ArtistPage';
import Media from './pages/artistPage/Media';
import MediaDetailLive from './pages/artistPage/MediaDetailLive';
import Notice from './pages/artistPage/Notice';
import Vote from './pages/artistPage/Vote';
import Fan from './pages/artistPage/Fan';
import FanAll from './pages/artistPage/FanAll';
import FanFollowing from './pages/artistPage/FanFollowing';
import PostDetail from './pages/artistPage/PostDetail';
import PostWrite from './pages/artistPage/PostWrite';
import MoreArtist from './pages/MoreArtist';
import Ticket from './pages/myPage/Ticket';
import PointCard from './pages/myPage/PointCard';
import Following from './pages/myPage/Following';
import MessageRoom from './pages/message/MessageRoom';
import Message from './pages/message/Message';
import VoteList from './pages/artistPage/vote/VoteList';
import VoteResult from './pages/artistPage/vote/VoteResult';
import VoteComplete from './pages/artistPage/vote/VoteComplete';


const App = () => {
  return (
    <>
      <WidthToggle />
      <Routes>
        {/* Layout 공통 */}
        <Route path="/" element={<Layout />}>
          {/* 온보딩 경로들 */}
          <Route index element={<Step1 />} />
          <Route path="onboarding">
            <Route index element={<Step1 />} />
            <Route path="pin" element={<Step2 />} />
            <Route path="password" element={<Step3 />} />
            <Route path="nickname" element={<Step4 />} />
            <Route path="language" element={<Step5 />} />
            <Route path="addartists" element={<Step6 />} />
            <Route path="loading" element={<Loading />} />
            <Route path="complete" element={<Step7 />} />
          </Route>

          {/* 메인 앱 */}
          <Route path="main">
            <Route index element={<Home />} />
            <Route path="music" element={<Music />} />
            <Route path="shop" element={<Shop />}>
              <Route index element={<GDShop />} />
              <Route path="gdshop" element={<GDShop />} />
              <Route path="adpshop" element={<ADPShop />} />
              <Route path="riizeshop" element={<RiizeShop />} />
              <Route path="blackpinkshop" element={<BPShop />} />
            </Route>
            <Route path="shop/product/:productId" element={<ProductDetail />} />
            <Route path="shop/payment" element={<Payment />} />
            <Route path="mypage" element={<MyPage />} />
            <Route path="mypage/ticket" element={<Ticket />} />
            <Route path="mypage/point" element={<PointCard />} />
            <Route path="mypage/following" element={<Following />} />
            <Route path="message/room/:userId" element={<MessageRoom />} />
            <Route path="message" element={<Message />} />
            <Route path="moreArtist" element={<MoreArtist />} />

            <Route path="artistPage/:artistId" element={<ArtistPage />}>
              <Route index element={<Media />} />
              <Route path="media" element={<Media />} />
              <Route path="notice" element={<Notice />} />
              <Route path="vote" element={<Vote />} />
              <Route path="fan" element={<Fan />}>
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
          </Route>
        </Route>

        {/* 잘못된 경로 → 온보딩으로 */}
        <Route path="*" element={<Navigate to="/onboarding" replace />} />
      </Routes>
    </>
  );
};

export default App;

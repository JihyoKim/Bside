import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './HomeNotice.css';

import homeNotice from '../../assets/banner2.png';
import notice1 from '../../assets/Home_Notice/01x2_.png';
import notice2 from '../../assets/Home_Notice/02x2_.png';
import notice3 from '../../assets/Home_Notice/03x2_.png';
import profile1 from '../../assets/Home_Notice/profile1.png';
import profile2 from '../../assets/Home_Notice/profile2.png';
import profile3 from '../../assets/Home_Notice/profile3.png';
import emoji from '../../assets/Home_Notice/emoji.svg';
import send from '../../assets/Home_Notice/send.svg';



const NewItems = () => {
  return (
    <div className='home-notice-wrapper'>
      <div className="home-notice-text">Notice</div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={'auto'}
        spaceBetween={15}
        // navigation
        pagination={{clickable:true}}
        autoplay={{delay: 3000}}
        loop={true}
        className="notice-swiper"
      >
        <SwiperSlide>
          <div className="notice-card">
            <div className="image-wrapper">
              <img src={notice1} alt="slide1" />
            </div>
            <div className="info black">
              <h3 className="artist pink">G-DRAGON</h3>
              <h3 className="title">18 DAYS DIARY EVENT 당첨자 기프트 안내</h3>
            </div>
            <div className="comment-input">
              <div className="comment-test">
                <img src={profile1} alt="profile1" />
                <span className="user">LUVUGD</span>
                <p className="inline-message">Oppa我今天还是没有买到...sorry🥺</p>
              </div>
              <div className="write-comment">
                <input type="text" placeholder="댓글 추가..." />
                <div className="input-icons">
                  <img src={emoji} alt="emoji" className="icon emoji" />
                  <img src={send} alt="send" className="icon send" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="notice-card">
            <div className="image-wrapper">
              <img src={notice2} alt="slide2" />
            </div>
            <div className="info white">
              <h3 className="artist blue">ALL DAY PROJECT</h3>
              <h3 className="title">ALLDAY PROJECT The Debut Single 'FAMOUS' 발매 기념 대면 팬사인회 이벤트</h3>
            </div>
            <div className="comment-input">
              <div className="comment-test">
                <img src={profile2} alt="profile2" />
                <span className="user">NYK</span>
                <p className="inline-message">TARZZAN😭 LET’S GOOOO!!!!!!!!!!</p>
              </div>
              <div className="write-comment">
                <input type="text" placeholder="댓글 추가..." />
                <div className="input-icons">
                  <img src={emoji} alt="emoji" className="icon emoji" />
                  <img src={send} alt="send" className="icon send" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="notice-card">
            <div className="image-wrapper">
              <img src={notice3} alt="slide2" />
            </div>
            <div className="info white">
              <h3 className="artist pink">G-DRAGON</h3>
              <h3 className="title">G-DRAGON 2025 WORLD TOUR [Übermensch] in TAIPEI, OFFICIAL MD 판매...</h3>
            </div>
            <div className="comment-input">
              <div className="comment-test">
                <img src={profile3} alt="profile3" />
                <span className="user">LuYenYen</span>
                <p className="inline-message">龙哥我的門票没抢到 😭 </p>
              </div>
              <div className="write-comment">
                <input type="text" placeholder="댓글 추가..." />
                <div className="input-icons">
                  <img src={emoji} alt="emoji" className="icon emoji" />
                  <img src={send} alt="send" className="icon send" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default NewItems;

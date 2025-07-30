import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './HomeNotice.css';

import notice1 from '../../assets/Home_Notice/01x2_.png';
import notice2 from '../../assets/Home_Notice/02x2_.png';
import notice3 from '../../assets/Home_Notice/03x2_.png';
import notice4 from '../../assets/Home_Notice/04.png';
import profile1 from '../../assets/Home_Notice/profile1.png';
import profile2 from '../../assets/Home_Notice/profile2.png';
import profile3 from '../../assets/Home_Notice/profile3.png';
import profile4 from '../../assets/Home_Notice/profile4.png';
import emoji from '../../assets/Home_Notice/emoji.svg';
import send from '../../assets/Home_Notice/send.svg';

const slides = [
  {
    image: notice1,
    artist: 'G-DRAGON',
    artistColor: '#FFBFF1',
    title: '18 DAYS DIARY EVENT 당첨자 기프트 안내',
    profile: profile1,
    username: 'LUVUGD',
    comment: 'Oppa我今天还是没有买到...sorry🥺',
    infoBg: 'rgba(0, 0, 0, 0.25',
  },
  {
    image: notice2,
    artist: 'ALL DAY PROJECT',
    artistColor: '#8FD1FF',
    title: "ALLDAY PROJECT The Debut Single 'FAMOUS' 발매 기념 대면 팬사인회 이벤트",
    profile: profile2,
    username: 'NYK',
    comment: 'TARZZAN😭 LET’S GOOOO!!!!!!!!!!',
    infoBg: 'rgba(255, 255, 255, 0.25)',
  },
  {
    image: notice3,
    artist: 'G-DRAGON',
    artistColor: '#FFBFF1',
    title: 'G-DRAGON 2025 WORLD TOUR [Übermensch] in TAIPEI, OFFICIAL MD 판매...',
    profile: profile3,
    username: 'LuYenYen',
    comment: '龙哥我的門票没抢到 😭',
    infoBg: 'rgba(255, 255, 255, 0.25)',
  },
  {
    image: notice4,
    artist: 'RIIZE',
    artistColor: '#CAC500',
    title: 'RIIZE FANLIGHT RING 공식 상품 예약 판매 안내',
    profile: profile4,
    username: '토냥01즈',
    comment: '제발 저요 제가 아니면 안 돼요 진짜 제발...',
    infoBg: 'rgba(0, 0, 0, 0.25',
  },
];

const NewItems = () => {
  return (
    <div className='home-notice-wrapper'>
      <div className="home-notice-text">NOTICES</div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={'auto'}
        spaceBetween={15}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="notice-swiper"
      >
        {slides.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="notice-card">
              <div className="image-wrapper">
                <img src={item.image} alt={`slide${idx + 1}`} />
              </div>
              <div className="info" style={{ background: item.infoBg }}>
              <h3 className="artist" style={{ color: item.artistColor }}>{item.artist}</h3>
                <h3 className="title">{item.title}</h3>
              </div>
              <div className="comment-input">
                <div className="comment-test">
                  <img src={item.profile} alt={`profile${idx + 1}`} />
                  <span className="user">{item.username}</span>
                  <p className="inline-message">{item.comment}</p>
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
        ))}
      </Swiper>
    </div>
  );
};

export default NewItems;

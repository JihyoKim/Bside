import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
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
import profile from '../../assets/mypage/profile.png'; // ✅ 사용자 프로필

const slides = [
  {
    image: notice3,
    artist: 'G-DRAGON',
    artistColor: '#FFBFF1',
    title: '18 DAYS DIARY EVENT 당첨자 기프트 안내',
    profile: profile1,
    username: 'LUVUGD',
    comment: 'Oppa我今天还是没有买到...sorry🥺',
    infoBg: 'rgba(0, 0, 0, 0.25)',
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
    image: notice1,
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
    infoBg: 'rgba(0, 0, 0, 0.25)',
  },
];

const NewItems = () => {
  const [inputValues, setInputValues] = useState(Array(slides.length).fill(''));
  const [customComments, setCustomComments] = useState(Array(slides.length).fill(null));

  const renderComment = (item, idx) => {
    if (customComments[idx]) {
      return customComments[idx].message;
    }
    if (item.username === 'LUVUGD') {
      return (
        <>
          Oppa <span className="ch">我今天还是没有买到</span>...sorry🥺
        </>
      );
    }
    if (item.username === 'LuYenYen') {
      return <span className="ch">龙哥我的門票没抢到 😭</span>;
    }
    return item.comment;
  };

  const handleSend = (idx) => {
    const message = inputValues[idx].trim();
    if (!message) return;

    const newComments = [...customComments];
    newComments[idx] = {
      profile: profile,
      username: '쥐들에곤히잠들다',
      message,
    };
    setCustomComments(newComments);

    const newInputs = [...inputValues];
    newInputs[idx] = '';
    setInputValues(newInputs);
  };

  return (
    <div className="home-notice-wrapper">
      <div className="home-notice-text">NOTICES</div>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView="auto"
        spaceBetween={15}
        pagination={{ clickable: true }}
        loop={false}
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
                  <img
                    src={customComments[idx]?.profile || item.profile}
                    alt={`profile${idx + 1}`}
                  />
                  <span className="user">
                    {customComments[idx]?.username || item.username}
                  </span>
                  <p className="inline-message">{renderComment(item, idx)}</p>
                </div>
                <div className="write-comment guide3">
                  <input
                    type="text"
                    placeholder="댓글을 입력하세요..."
                    value={inputValues[idx]}
                    onChange={(e) => {
                      const newValues = [...inputValues];
                      newValues[idx] = e.target.value;
                      setInputValues(newValues);
                    }}
                  />
                  <div className="input-icons">
                    <button
                      className={`send ${inputValues[idx].trim() ? 'active guide' : ''}`}
                      onClick={() => handleSend(idx)}
                    >
                      ↑
                    </button>
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

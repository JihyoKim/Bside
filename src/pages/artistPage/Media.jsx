import React from 'react';
import './Media.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import new1 from '../../assets/ArtistPage/asepa/new1.png';
import new2 from '../../assets/ArtistPage/asepa/new2.png';
import new3 from '../../assets/ArtistPage/asepa/new3.png';
import media1 from '../../assets/ArtistPage/asepa/media1.png';
import media2 from '../../assets/ArtistPage/asepa/media2.png';
import media3 from '../../assets/ArtistPage/asepa/media3.png';
import mv1 from '../../assets/ArtistPage/asepa/mv1.png';
import mv2 from '../../assets/ArtistPage/asepa/mv2.png';
import mv3 from '../../assets/ArtistPage/asepa/mv3.png';

const TAB_COLOR = '#FF8031';
const GRADIENT_COLOR = 'linear-gradient(to bottom, rgba(0, 0, 0, 0.44) 0%, rgba(255, 128, 49, 0.44) 55%, rgba(0, 0, 0, 0.44) 100%)';


const Media = () => {
  const newSlides = [new1, new2, new3, new1, new2, new3];

  const mediaList = [
    { img: media1, title: 'aespa 에스파 지젤 생방송 라이브', uploader: 'aespa', live: true, viewers: '2.1만 명 시청 중' },
    { img: media2, title: "aespa 에스파 'Dirty Work' MV Clip", uploader: 'aespa', time: '5:37', views: '380만회 · 3일 전' },
    { img: media3, title: "[직캠]에스파 전체 직캠 8K 'Dirty Work'", uploader: 'MBCKpop', time: '4:12', views: '256회 · 5일 전' },
  ];

  const mvList = [
    { img: mv1, title: "aespa 에스파 'Dirty Work' MV", uploader: 'SMTOWN', time: '3:17', views: '4211만회 · 2주 전' },
    { img: mv2, title: "aespa 에스파 'Whiplash' MV", uploader: 'SMTOWN', time: '3:04', views: '2억회 · 8개월 전' },
    { img: mv3, title: "aespa 에스파 'Supernova' MV", uploader: 'SMTOWN', time: '3:48', views: '2억회 · 1년 전' },
  ];

  return (
    <div className="media-container">
      <div className="media-section new-section" style={{ background: GRADIENT_COLOR }}>
        <h4>New</h4>
        <Swiper
          slidesPerView={'auto'}
          centeredSlides={true}
          spaceBetween={30}
          loop={true}
          autoplay={{ delay: 1500, disableOnInteraction: false }}
          modules={[Autoplay]}
          className="media-swiper"
        >
          {newSlides.map((img, idx) => (
            <SwiperSlide key={idx} className="new-slide">
              <img src={img} alt={`new${idx + 1}`} className="new-slide-img" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="media-section">
        <div className="section-header">
          <h4>Media</h4>
          <span className="more-btn">더보기</span>
        </div>
        {mediaList.map((item, idx) => (
          <div className="media-item" key={idx}>
            <div className="media-thumbnail">
              <img src={item.img} alt={item.title} />
              {item.live && <span className="live-badge">Live</span>}
              {item.time && <span className="time-badge">{item.time}</span>}
            </div>
            <div className="media-info">
              <p className="media-title">{item.title}</p>
              <p className="media-meta">{item.uploader} · {item.live ? item.viewers : item.views}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="media-section">
        <div className="section-header mv">
          <h4>MV</h4>
          <span className="more-btn">더보기</span>
        </div>
        {mvList.map((item, idx) => (
          <div className="media-item" key={idx}>
            <div className="media-thumbnail">
              <img src={item.img} alt={item.title} />
              <span className="time-badge">{item.time}</span>
            </div>
            <div className="media-info">
              <p className="media-title">{item.title}</p>
              <p className="media-meta">{item.uploader} · {item.views}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Media;
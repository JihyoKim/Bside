import React from 'react';
import './NoticeCard.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const NoticeCard = ({ noticeList }) => {
  return (
    <div className="notice-card-wrapper">
      <h4>공지사항</h4>
      <Swiper
  spaceBetween={0}
  slidesPerView={'auto'}
  centeredSlides={false}  
  loop={true}  
>
  {noticeList.map((notice, idx) => (
    <SwiperSlide key={idx} style={{ width: 'auto' }}>
      <div
        className="notice-card"
        style={{
          background: notice.background || '#333',
          color: notice.textColor || '#fff',
        }}
      >
        <h3 className="notice-title">{notice.title}</h3>
        <p className="notice-date">{notice.date}</p>
        <p className="notice-description">{notice.description}</p>
      </div>
    </SwiperSlide>
  ))}
</Swiper>
    </div>
  );
};

export default NoticeCard;
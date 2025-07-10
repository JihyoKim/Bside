import React from 'react';
import myArtistStory from '../../assets/banner3.png';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './MyArtistStory.css';

import story1 from '../../assets/ArtistStory/story01.png';
import story2 from '../../assets/ArtistStory/story02.png';

const MyArtistStroy = () => {
  return (
    <div className='artist-story-wrapper'>
      <div className="artist-story-text">나의 아티스트 스토리</div>
      <div className="artist-story-slider">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={'auto'}
        spaceBetween={8}
        // navigation
        pagination={{clickable:true}}
        autoplay={{delay: 3000}}
        loop={true}
        className="artist-swiper"
      >
        <SwiperSlide>
          <div className="artist-card">
            <div className="image-wrapper">
              <img src={story1} alt="slide1" />
            </div>
            <div className="info">
              <h3 className='blue'>YEONG-SEO</h3>
              <p>ALL DAY PROJECT OFFICAL</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="artist-card">
            <div className="image-wrapper">
              <img src={story2} alt="slide1" />
            </div>
            <div className="info">
              <h3 className='pink'>G-DRAGON</h3>
              <p>G-DRAGON OFFICIAL FAN
              COMMUNITY</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="artist-card">
            <div className="image-wrapper">
              <img src={story1} alt="slide1" />
            </div>
            <div className="info">
              <h3>YEONG-SEO</h3>
              <p>ALL DAY PROJECT OFFICAL</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="artist-card">
            <div className="image-wrapper">
              <img src={story2} alt="slide1" />
            </div>
            <div className="info">
              <h3>YEONG-SEO</h3>
              <p>ALL DAY PROJECT OFFICAL</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="artist-card">
            <div className="image-wrapper">
              <img src={story1} alt="slide1" />
            </div>
            <div className="info">
              <h3>YEONG-SEO</h3>
              <p>ALL DAY PROJECT OFFICAL</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="artist-card">
            <div className="image-wrapper">
              <img src={story2} alt="slide1" />
            </div>
            <div className="info">
              <h3>YEONG-SEO</h3>
              <p>ALL DAY PROJECT OFFICAL</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>   
      </div>   
    </div>
  );
};

export default MyArtistStroy;

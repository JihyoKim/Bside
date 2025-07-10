import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'

import './EventBanner.css';
import eventBanner from '../../assets/banner5.png';
import event1 from '../../assets/Home_Event/01x2.png'



const EventBanner = () => {
  return (
    <div className='event-banner-wrapper'>
      <div className="event-test">Events</div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        centeredSlides={true}
        spaceBetween={12}
        // navigation
        pagination={{clickable:true}}
        autoplay={{delay: 3000}}
        loop={true}
      >
        <SwiperSlide><img src={event1} alt="slide1" /></SwiperSlide>
        <SwiperSlide><img src={event1} alt="slide2" /></SwiperSlide>
        <SwiperSlide><img src={event1} alt="slide3" /></SwiperSlide>
        <SwiperSlide><img src={event1} alt="slide4" /></SwiperSlide>
        <SwiperSlide><img src={event1} alt="slide5" /></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default EventBanner;

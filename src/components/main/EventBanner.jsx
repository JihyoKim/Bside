import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'

import './EventBanner.css';
// import eventBanner from '../../assets/banner5.png';
import event1 from '../../assets/Home_Event/event01.png'
import event2 from '../../assets/Home_Event/event02.png'
import event3 from '../../assets/Home_Event/event03.png'
import event4 from '../../assets/Home_Event/event04.png'



const EventBanner = () => {
  return (
    <div className='event-banner-wrapper'>
      <div className="event-text">EVENTS</div>
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
        <SwiperSlide><img src={event2} alt="slide2" /></SwiperSlide>
        <SwiperSlide><img src={event3} alt="slide3" /></SwiperSlide>
        <SwiperSlide><img src={event4} alt="slide4" /></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default EventBanner;

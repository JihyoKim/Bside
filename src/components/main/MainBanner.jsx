import React from 'react';
// import mainBanner from '../../assets/banner1.png';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'
import './MainBanner.css'

import main1 from '../../assets/MainBanner/01x2.png'
import main2 from '../../assets/MainBanner/02x2.png'
import main3 from '../../assets/MainBanner/03x2.png'
import main4 from '../../assets/MainBanner/04x2.png'
import main5 from '../../assets/MainBanner/05x2.png'

const MainBanner = () => {
  return (
    <div className="main-banner-wrapper">
      <div className="now-open-text">Now Open</div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        // navigation
        pagination={{clickable:true}}
        autoplay={{delay: 3000}}
        loop={true}
      >
        <SwiperSlide><img src={main1} alt="slide1" /></SwiperSlide>
        <SwiperSlide><img src={main2} alt="slide2" /></SwiperSlide>
        <SwiperSlide><img src={main3} alt="slide3" /></SwiperSlide>
        <SwiperSlide><img src={main4} alt="slide4" /></SwiperSlide>
        <SwiperSlide><img src={main5} alt="slide5" /></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MainBanner;

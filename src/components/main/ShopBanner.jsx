import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './ShopBanner.css';

import { useNavigate } from 'react-router-dom';

import shopBanner1 from '../../assets/Home_shop/shopbanner1.png';
import shopBanner2 from '../../assets/Home_shop/shopbanner2.png';

const ShopBanner = () => {
  const navigate = useNavigate();

  return (
    <div className="shop-banner-wrapper">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        centeredSlides={true}
        spaceBetween={12}
        // navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        <SwiperSlide onClick={() => navigate('/main/shop/blackpinkshop')}>
          <img src={shopBanner1} alt="slide1" />
        </SwiperSlide>
        <SwiperSlide onClick={() => navigate('/main/shop/riizeshop')}>
          <img src={shopBanner2} alt="slide2" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ShopBanner;

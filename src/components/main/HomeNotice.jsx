import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './HomeNotice.css';

import homeNotice from '../../assets/banner2.png';
import notice1 from '../../assets/Home_Notice/01x2_.png';


const NewItems = () => {
  return (
    <div className='home-notice-wrapper'>
      <div className="home-notice-text">Notice</div>
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
              <img src={notice1} alt="slide1" />
            </div>
            <div className="info">
              <h3 className='pink'>G-DRAGON</h3>
              <h3 className="title">18 DAYS DIARY EVENT 당첨자 기프트 안내</h3>
              <p>
                안녕하세요. 갤럭시코퍼레이션입니다.<br />
                &lt;18 DAYS DIARY&gt; EVENT 당첨자 전체 기프트 리스트를 안내드립니다. 자세한 사항은 아래의 내용을 확인해 주시기 바랍니다.<br />
                [배송 일정 안내]<br />
                8월 중 순차 발송 예정이며, 배송 정보에 따라 물품 수령 일자는 상이...
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="artist-card">
            <div className="image-wrapper">
              <img src={notice1} alt="slide1" />
            </div>
            <div className="info">
              <h3 className='pink'>G-DRAGON</h3>
              <h3 className="title">18 DAYS DIARY EVENT 당첨자 기프트 안내</h3>
              <p>
                안녕하세요. 갤럭시코퍼레이션입니다.<br />
                &lt;18 DAYS DIARY&gt; EVENT 당첨자 전체 기프트 리스트를 안내드립니다. 자세한 사항은 아래의 내용을 확인해 주시기 바랍니다.<br />
                [배송 일정 안내]<br />
                8월 중 순차 발송 예정이며, 배송 정보에 따라 물품 수령 일자는 상이...
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default NewItems;

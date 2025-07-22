import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation  } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; // ✅ CSS도 불러오기

import './NewAlbum.css'; // ✅ CSS 불러오기

import rose from '../../assets/Shop/rose.png';
import gd from '../../assets/Shop/gd.png';
import baby from '../../assets/Shop/baby.png';
import boynext from '../../assets/Shop/boynext.png';
import gd1 from '../../assets/Shop/gd1.png';
import tws from '../../assets/Shop/tws.png';

const albumData = [
  {
    img: rose,
    name: 'ROSÉ',
    desc: '[SOLO ALBUM] Rosie',
    colorName: '#E50000',
    colorDesc: '#E50000',
  },
  {
    img: gd,
    name: 'G-DRAGON',
    desc: '[LEAD SOLO] POWER',
    colorName: '#F6FD36',
    colorDesc: '#F6FD36',
  },
  {
    img: baby,
    name: 'BABYMONSTER',
    desc: '[1st FULL ALBUM] DRIP',
    colorName: '#EF13A6',
    colorDesc: '#EF13A6',
  },
  {
    img: boynext,
    name: 'BOYNEXTDOOR',
    desc: '3rd EP [19.99]',
    colorName: '#ffffff',
    colorDesc: '#ffffff',
  },
  {
    img: gd1,
    name: 'G-DRAGON',
    desc: '[SOLO ALBUM] Übermensch',
    colorName: '#F5F278',
    colorDesc: '#F5F278',
  },
  {
    img: tws,
    name: 'TWS',
    desc: '[1st ALBUM] Sparkling Blue',
    colorName: '#96D3FF',
    colorDesc: '#96D3FF',
  },
];

const ShopTemp = () => {
  return (
    <main className="shop-wrapper">
      <div className="shop-header">
        <p>B-side ARTISTS’</p>
        <h2>NEW ALBUM</h2>
      </div>

      <div className="shop-slider-container">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true} // ✅ 화살표 활성화
          loop={true}
        >
          {albumData.map((album, index) => (
            <SwiperSlide key={index}>
              <div key={index} className="album-slide">
                <img src={album.img} alt={album.name} />
                <p
                  className="album-name"
                  style={{ color: album.colorName }}
                >
                  {album.name}
                </p>
                <p
                  className="album-desc"
                  style={{ color: album.colorDesc }}
                >
                  {album.desc}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </main>
  );
};

export default ShopTemp;

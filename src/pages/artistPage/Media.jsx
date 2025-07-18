import React from 'react';
import './Media.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { useOutletContext } from 'react-router-dom';

const Media = () => {
  const {
    gradientColor,
    newSlides,
    mediaThumbnails,
    mvThumbnails
  } = useOutletContext();

  return (
    <div className="media-container">
      {/* New 슬라이드 */}
      <div className="media-section new-section" style={{ background: gradientColor }}>
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

      {/* Media 리스트 */}
      <div className="media-section">
        <div className="section-header">
          <h4>Media</h4>
          <span className="more-btn">더보기</span>
        </div>
        {mediaThumbnails.map((item, idx) => (
          <div className="media-item" key={idx}>
            <div className="media-thumbnail">
              <img src={item.img} alt={item.title} />
              {item.live && <span className="live-badge">Live</span>}
              {item.time && <span className="time-badge">{item.time}</span>}
            </div>
            <div className="media-info">
              <p className="media-title">{item.title}</p>
              <p className="media-meta">
                {item.uploader} · {item.live ? item.viewers : item.views}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* MV 리스트 */}
      <div className="media-section">
        <div className="section-header mv">
          <h4>MV</h4>
          <span className="more-btn">더보기</span>
        </div>
        {mvThumbnails.map((item, idx) => (
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

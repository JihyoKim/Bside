import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './MyArtistStory.css';

import story1 from '../../assets/ArtistStory/story01.png';
import story2 from '../../assets/ArtistStory/story02.png';
import story3 from '../../assets/ArtistStory/story03.png';
import story4 from '../../assets/ArtistStory/story04.png';
import story5 from '../../assets/ArtistStory/story05.png';

const storySlides = [
  {
    image: story1,
    name: 'YEONG-SEO',
    artistColor: '#A7DAFF',
    description: 'ALL DAY PROJECT OFFICAL',
  },
  {
    image: story2,
    name: 'G-DRAGON',
    artistColor: '#FFBDF1',
    description: 'G-DRAGON OFFICIAL FAN COMMUNITY',
  },
  {
    image: story3,
    name: 'TARZZAN',
    artistColor: '#A7DAFF',
    description: 'ALL DAY PROJECT OFFICAL',
  },
  {
    image: story4,
    name: 'ANTON',
    artistColor: '#F5F278',
    description: 'RIIZE OFFICIAL',
  },
  {
    image: story5,
    name: 'G-DRAGON',
    artistColor: '#FFBDF1',
    description: 'G-DRAGON OFFICIAL FAN COMMUNITY',
  },
];

const MyArtistStory = () => {
  return (
    <div className='artist-story-wrapper'>
      <div className="artist-story-text">OFFICIAL COMMUNITY</div>
      <div className="artist-story-slider">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={'auto'}
          spaceBetween={8}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          className="artist-swiper"
        >
          {storySlides.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="artist-card">
                <div className="image-wrapper">
                  <img src={item.image} alt={`story${index}`} />
                </div>
                <div className="info">
                <h3 style={{ color: item.artistColor }}>{item.name}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MyArtistStory;
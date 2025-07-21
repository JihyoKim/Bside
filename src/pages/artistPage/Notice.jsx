import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Notice.css';
import { useOutletContext } from 'react-router-dom';
import NoticeCard from '../../components/artistPage/NoticeCard';
import NoticeCal from '../../components/artistPage/NoticeCal';
import NoticeSched from '../../components/artistPage/NoticeSched';

const Notice = () => {
  const {
    noticeList = [],
    noticeSummary = {},
    noticeSchedule = [],
  } = useOutletContext();

  return (
    <div className="notice-container">
      <NoticeCard noticeList={noticeList} />
       <NoticeCal summary={noticeSummary} />
      <NoticeSched schedule={noticeSchedule} />
    </div>
  );
};

export default Notice;

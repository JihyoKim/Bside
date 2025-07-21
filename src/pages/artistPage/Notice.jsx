import React, { useState, useEffect } from 'react';
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
    members = [],
  } = useOutletContext();

  const [selectedDate, setSelectedDate] = useState('2025-08-12');
  const filteredSchedule = noticeSchedule.filter(item => item.date === selectedDate);
  
  return (
    <div className="notice-container">
      <NoticeCard noticeList={noticeList} />
      <NoticeCal
        noticeSchedule={noticeSchedule}
        selectedDate={selectedDate}
        onSelectDate={setSelectedDate}
        artistList={members}
      />
      <NoticeSched schedule={filteredSchedule} />
    </div>
  );
};

export default Notice;

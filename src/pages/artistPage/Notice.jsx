<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
=======
import React from 'react';
>>>>>>> 4fdd8305d799f61023082518c635f1a8874c94db
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
<<<<<<< HEAD
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
=======
  } = useOutletContext();

  return (
    <div className="notice-container">
      <NoticeCard noticeList={noticeList} />
       <NoticeCal summary={noticeSummary} />
      <NoticeSched schedule={noticeSchedule} />
>>>>>>> 4fdd8305d799f61023082518c635f1a8874c94db
    </div>
  );
};

export default Notice;

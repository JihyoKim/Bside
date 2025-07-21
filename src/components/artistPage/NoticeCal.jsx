import React, { useState } from 'react';
import './NoticeCal.css';

import arrow_left from '../../assets/symbol/white/goback.svg';
import arrow_right from '../../assets/symbol/white/next.svg';
import arrow_down from '../../assets/symbol/white/down.svg';
import alarm from '../../assets/symbol/alarm_white.png';
import noAlarm from '../../assets/symbol/noAlarm_white.png';

const weekdays = ['일', '월', '화', '수', '목', '금', '토'];

const NoticeCal = ({ noticeSchedule = [], selectedDate, onSelectDate, artistList = [] }) => {

  const [currentYear, setCurrentYear] = useState(2025);
  const [currentMonth, setCurrentMonth] = useState(7); // 8월
  const [alarmOn, setAlarmOn] = useState(true);
  const [selectedArtist, setSelectedArtist] = useState(artistList[0] || '');
  const [showDropdown, setShowDropdown] = useState(false);

  const filteredSummary = {};

  noticeSchedule.forEach(item => {
    if (item.artists.includes(selectedArtist)) {
      const date = item.date;
      if (!filteredSummary[date]) filteredSummary[date] = [];
      filteredSummary[date].push(item.type);
    }
  });
  
  const goToToday = () => {
    const today = new Date();
    setCurrentYear(today.getFullYear());
    setCurrentMonth(today.getMonth());
    const dateStr = today.toISOString().slice(0, 10);
    onSelectDate(dateStr);
  };

  const goToPrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(prev => prev - 1);
    }
  };

  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(prev => prev + 1);
    }
  };

  const toggleAlarm = () => {
    setAlarmOn(prev => !prev);
  };

  const toggleDropdown = () => {
    setShowDropdown(prev => !prev);
  };

  const handleSelectArtist = (name) => {
    setSelectedArtist(name);
    setShowDropdown(false);
  };
  

  const getDaysArray = () => {
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const lastDate = new Date(currentYear, currentMonth + 1, 0).getDate();
    const prevLastDate = new Date(currentYear, currentMonth, 0).getDate();

    const totalDays = firstDay + lastDate;
    const numRows = Math.ceil(totalDays / 7);
    const totalSlots = numRows * 7;

    const result = [];

    for (let i = firstDay - 1; i >= 0; i--) {
      const dateStr = new Date(currentYear, currentMonth - 1, prevLastDate - i)
        .toISOString().slice(0, 10);
      result.push({ date: dateStr, isCurrentMonth: false });
    }

    for (let i = 1; i <= lastDate; i++) {
      const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
      result.push({ date: dateStr, isCurrentMonth: true });
    }

    let nextDay = 1;
    while (result.length < totalSlots) {
      const dateStr = new Date(currentYear, currentMonth + 1, nextDay).toISOString().slice(0, 10);
      result.push({ date: dateStr, isCurrentMonth: false });
      nextDay++;
    }

    return result;
  };

  const days = getDaysArray();

  return (
    <div className="calendar-wrapper">
      {/* dot 범례 */}
      <div className="calendar-legend">
        <span><span className="legend-dot content" /> 콘텐츠</span>
        <span><span className="legend-dot fan" /> 팬 소통</span>
        <span><span className="legend-dot media" /> 방송 미디어</span>
        <span><span className="legend-dot event" /> 공연/행사</span>
        <span><span className="legend-dot anniversary" /> 기념일</span>
      </div>

      <div className="calendar">
        {/* 연월 + 화살표 */}
        <div className="calendar-header">
          <img src={arrow_left} alt="prev" className="calendar-arrow left" onClick={goToPrevMonth} />
          <h5>{`${currentYear}.${String(currentMonth + 1).padStart(2, '0')}`}</h5>
          <img src={arrow_right} alt="next" className="calendar-arrow right" onClick={goToNextMonth} />
        </div>

        {/* 툴바 */}
        <div className="calendar-toolbar">
          <div className="toolbar-left">
            <div className="artist-dropdown-container">
              <button className="artist-select" onClick={toggleDropdown}>
                {selectedArtist}
                <img src={arrow_down} alt="arrow down" className="arrow-down-icon" />
              </button>
              {showDropdown && (
                <ul className="artist-dropdown">
                  {artistList.map((name, idx) => (
                    <li key={idx} onClick={() => handleSelectArtist(name)}>{name}</li>
                  ))}
                </ul>
              )}
            </div>
            <button className="today-btn" onClick={goToToday}>오늘</button>
          </div>
          <div className="alarm-icon-wrapper">
            <img
              src={alarmOn ? alarm : noAlarm}
              alt="alarm"
              className="alarm-icon"
              onClick={toggleAlarm}
            />
          </div>
        </div>

        {/* 요일 */}
        <div className="calendar-weekdays">
          {weekdays.map((day, idx) => (
            <div key={idx} className={`weekday weekday-${idx}`}>{day}</div>
          ))}
        </div>

        {/* 날짜 셀 */}
        <div className="calendar-grid">
          {days.map(({ date, isCurrentMonth }, idx) => {
            const isSelected = date === selectedDate;
            const dots = filteredSummary[date] || [];

            return (
              <div
                key={idx}
                className={`calendar-day ${isSelected ? 'selected' : ''} ${!isCurrentMonth ? 'dimmed' : ''}`}
                onClick={() => onSelectDate(date)}
              >
                <div className="day-number">{parseInt(date.split('-')[2])}</div>
                <div className="dots-wrap">
                  {dots.map((type, index) => (
                    <span key={index} className={`dot ${type}`} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NoticeCal;

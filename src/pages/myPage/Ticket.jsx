import React, { useRef } from 'react';
import TicketCard from '../../components/mypage/TicketCard';
import './Ticket.css';

import poster1 from '../../assets/ticket/img06.jpg';
import poster2 from '../../assets/ticket/img01.png';
import poster3 from '../../assets/ticket/img02.png';
import poster4 from '../../assets/ticket/img03.png';
import poster5 from '../../assets/ticket/img04.png';
import poster6 from '../../assets/ticket/img05.png';
import topIcon from '../../assets/mypage/top.svg';

const Ticket = () => {
  const scrollRef = useRef(null); // ✅ 스크롤 제어용 ref

  const tickets = [
    {
      id: 1,
      image: poster1,
      title: '매들리 매들리 MADLY MEDLEY FESTIVAL 2025',
      date: '2025년 10월 18일 (토) 17:00(KST)',
      location: 'Paradise City (파라다이스 시티)',
    },
    {
      id: 2,
      image: poster2,
      title: '2025 NOL 페스티벌 SBS 가요대전 SUMMER DAY2',
      date: '2025년 7월 27일 (일) 17:00(KST)',
      location: '일산 킨텍스 제1전시장',
    },
    {
      id: 3,
      image: poster3,
      title: 'BLACKPINK 2025 WORLD TOUR IN GOYANG',
      date: '2025년 7월 6일 (일) 19:00(KST)',
      location: '고양종합운동장',
    },
    {
      id: 4,
      image: poster4,
      title: '2025 RIIZE CONCERT TOUR [RIIZING LOUD]',
      date: '2025년 7월 4일 (금) 20:00(KST)',
      location: 'KSPO DOME',
    },
    {
      id: 5,
      image: poster5,
      title: '쿠팡플레이와 함께하는 G-DRAGON 2025 월드투어 [위버멘쉬] 인 코리아',
      date: '2025년 3월 30일 (일) 18:30(KST)',
      location: '고양종합운동장',
    },
    {
      id: 6,
      image: poster6,
      title: "2025 aespa LIVE TOUR 'SYNK : PARALLEL LINE' - 시카고",
      date: '2025년 2월 15일 (토) 20:00(CST)',
      location: 'United Center, Chicago',
    },
  ];

  const scrollToTop = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="ticket-scroll-area" ref={scrollRef}> {/* ✅ 스크롤 대상 div */}
      <div className="ticket-page">
        <h2 className="ticket-headline"><b>쥐들에곤히잠들다</b>님의 추억이에요</h2>
        {tickets.map((ticket) => (
          <TicketCard key={ticket.id} {...ticket} />
        ))}

        {/* 하단 "맨 위로" 버튼 */}
        <div className="scroll-top-area" onClick={scrollToTop}>
          <img src={topIcon} alt="top" className="top-icon" />
          <span className="top-text">맨 위로</span>
        </div>
      </div>
    </div>
  );
};

export default Ticket;

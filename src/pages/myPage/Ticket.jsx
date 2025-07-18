import React from 'react';
import TicketCard from '../../components/mypage/TicketCard';
import './Ticket.css';

import poster1 from '../../assets/ticket/img01.png';
import poster2 from '../../assets/ticket/img02.png';
import poster3 from '../../assets/ticket/img03.png';
import poster4 from '../../assets/ticket/img04.png';

const Ticket = () => {
  const tickets = [
    {
      id: 1,
      image: poster1,
      title: 'BLACKPINK 2025 WORLD TOUR IN GOYANG',
      date: '2025년 7월 6일 (일) 19:00(KST)',
      location: '고양종합운동장',
    },
    {
      id: 2,
      image: poster2,
      title: '2025 RIIZE CONCERT TOUR [RIZING LOUD]',
      date: '2025년 7월 4일 (금) 20:00(KST)',
      location: 'KSPO DOME',
    },
    {
      id: 3,
      image: poster3,
      title: '쿠팡플레이와 함께하는 G-DRAGON 2025 월드투어 [위버멘쉬] 인 코리아',
      date: '2025년 3월 30일 (일) 18:30(KST)',
      location: '고양종합운동장',
    },
    {
      id: 4,
      image: poster4,
      title: "2025 aespa LIVE TOUR 'SYNK : PARALLEL LINE' - 시카고",
      date: '2025년 2월 15일 (토) 20:00(CST)',
      location: 'United Center, Chicago',
    },
  ];

  return (
    <div className="ticket-page">
      {tickets.map((ticket) => (
        <TicketCard key={ticket.id} {...ticket} />
      ))}

      <div className="scroll-top">맨 위로 ⤴</div>
    </div>
  );
};

export default Ticket;
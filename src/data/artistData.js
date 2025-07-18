import aespaCover from '../assets/ArtistPage/asepa/artistCover-aespa.png';
import aespa_member1 from '../assets/ArtistPage/asepa/member1.png';
import aespa_member2 from '../assets/ArtistPage/asepa/member2.png';
import aespa_member3 from '../assets/ArtistPage/asepa/member3.png';
import aespa_member4 from '../assets/ArtistPage/asepa/member4.png';

import new1 from '../assets/ArtistPage/asepa/new1.png';
import new2 from '../assets/ArtistPage/asepa/new2.png';
import new3 from '../assets/ArtistPage/asepa/new3.png';
import media1 from '../assets/ArtistPage/asepa/media1.png';
import media2 from '../assets/ArtistPage/asepa/media2.png';
import media3 from '../assets/ArtistPage/asepa/media3.png';
import mv1 from '../assets/ArtistPage/asepa/mv1.png';
import mv2 from '../assets/ArtistPage/asepa/mv2.png';
import mv3 from '../assets/ArtistPage/asepa/mv3.png';



export const artistData = {
  aespa: {
    id: 'aespa',
    name: 'aespa',
    coverImg: aespaCover,
    followColor: '#FF8031',
    memberImgs: [aespa_member1, aespa_member2, aespa_member3, aespa_member4],
    tabColor: '#FF8031',
    underlineColor: '#FF8031',
    inactiveColor: '#FFFFFF',
    gradientColor: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.44) 0%, rgba(255, 128, 49, 0.44) 55%, rgba(0, 0, 0, 0.44) 100%)',
  
  //Media 탭
    // ✅ New 슬라이드
    newSlides: [new1, new2, new3, new1, new2, new3],
  
    // ✅ Media 콘텐츠 목록
    mediaThumbnails: [
      {
        mediaId: 'live-giselle',
        img: media1,
        title: 'aespa 에스파 지젤 생방송 라이브',
        uploader: 'aespa',
        live: true,
        viewers: '2.1만 명 시청 중'
      },
      {
        mediaId: 'dirtywork-mv',
        img: media2,
        title: "aespa 에스파 'Dirty Work' MV Clip",
        uploader: 'aespa',
        time: '5:37',
        views: '380만회 · 3일 전'

      },
      {
        mediaId: 'dirtywork-fancam',
        img: media3,
        title: "[직캠]에스파 전체 직캠 8K 'Dirty Work'",
        uploader: 'MBCKpop',
        time: '4:12',
        views: '256회 · 5일 전',
        link: 'https://m.youtube.com/watch?v=mY8vJRoa0IM'
      }
    ],
  
    // ✅ MV 콘텐츠 목록
    mvThumbnails: [
      {
        img: mv1,
        title: "aespa 에스파 'Dirty Work' MV",
        uploader: 'SMTOWN',
        time: '3:17',
        views: '4211만회 · 2주 전',
        link: 'https://m.youtube.com/watch?v=M2WTUoy4y6E'
      },
      {
        img: mv2,
        title: "aespa 에스파 'Whiplash' MV",
        uploader: 'SMTOWN',
        time: '3:04',
        views: '2억회 · 8개월 전',
        link: 'https://m.youtube.com/watch?v=jWQx2f-CErU'
      },
      {
        img: mv3,
        title: "aespa 에스파 'Supernova' MV",
        uploader: 'SMTOWN',
        time: '3:48',
        views: '2억회 · 1년 전',
        link: 'https://m.youtube.com/watch?v=phuiiNCxRMg'
      }
    ],
  //Notice 탭

  noticeList: [
    {
      title: '[안내] 에스파 ‘Dirty Work’ 응원법 안내!',
      // description: '',
      date: '2025.08.09',
      background: 'linear-gradient(to bottom, #E66413 0%, #E69969 100%)',
      textColor: '#fff',
    },
    {
      title: '[알림] 에스파 ‘Dirty Work’ 발매 기념 사인회 개최!',
      // description: '',
      date: '2025.08.10',
      background: 'linear-gradient(to bottom, #E66413 0%, #E69969 100%)',
      textColor: '#fff',
    },
    {
      title: '[안내] 에스파 ‘Dirty Work’ 응원법 안내!',
      // description: '',
      date: '2025.08.09',
      background: 'linear-gradient(to bottom, #E66413 0%, #E69969 100%)',
      textColor: '#fff',
    },
    {
      title: '[알림] 에스파 ‘Dirty Work’ 발매 기념 사인회 개최!',
      // description: '',
      date: '2025.08.10',
      background: 'linear-gradient(to bottom, #E66413 0%, #E69969 100%)',
      textColor: '#fff',
    },
  ],

  fanPosts: [
    {
      id: 1,
      nickname: '온리유찌민',
      time: '29분전',
      profile: '/assets/ArtistPage/aespa/fanProfile01.png',
      text: '김민정은 사랑이에요 🤍',
      images: [
        '/assets/ArtistPage/aespa/fanPost01.png'
      ],
      likes: 2,
      comments: 0
    }
  ],

  fanFollowingPosts: [
    {
      id: 1,
      nickname: '윈터최고',
      time: '1시간전',
      profile: '/assets/ArtistPage/aespa/fanProfile01.png',
      images: [
        '/assets/ArtistPage/aespa/fanPost01.png',
      ],
      text: '윈터 언니 무대 미쳤다... 💙',
      likes: 14,
      comments: 3,
    }
  ]

  },



  gd: {
    name: 'G-Dragon',
    coverImg: 'GD커버이미지경로',
    followColor: '#FFD500',
    memberImgs: ['GD멤버이미지1', 'GD멤버이미지2'],
    tabColor: '#FFD500',
    underlineColor: '#FFD500',
    inactiveColor: '#FFFFFF',
  },
  // 추가 아티스트...
};
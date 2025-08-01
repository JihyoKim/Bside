import Cover from '../../assets/ArtistPage/blackpink/artistCover.png';
import member1 from '../../assets/ArtistPage/blackpink/member1.png';
import member2 from '../../assets/ArtistPage/blackpink/member2.png';
import member3 from '../../assets/ArtistPage/blackpink/member3.png';
import member4 from '../../assets/ArtistPage/blackpink/member4.png';

import new1 from '../../assets/ArtistPage/blackpink/new1.png';
import new2 from '../../assets/ArtistPage/blackpink/new2.png';
import new3 from '../../assets/ArtistPage/blackpink/new3.png';
import media1 from '../../assets/ArtistPage/blackpink/media1.png';
import media2 from '../../assets/ArtistPage/blackpink/media2.png';
import media3 from '../../assets/ArtistPage/blackpink/media3.png';
import mv1 from '../../assets/ArtistPage/blackpink/mv1.png';
import mv2 from '../../assets/ArtistPage/blackpink/mv2.png';
import mv3 from '../../assets/ArtistPage/blackpink/mv3.png';
import voteBanner from '../../assets/ArtistPage/vote_pink.png'


const bpinkData = {
    id: 'blackpink',
    name: 'BLACKPINK',
    memberTitle: 'Member',
    members: ['BLACKPINK', '지수', '제니', '로제', '리사'],
    coverImg: Cover,
    isFollowing: false,
    followColor: '#f7a7bb',
    memberImgs: [member1, member2, member3, member4],
    tabColor: '#f7a7bb',
    underlineColor: '#f7a7bb',
    inactiveColor: '#FFFFFF',
    gradientColor: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.35) 0%,rgba(247, 167, 187, 0.35) 55%, rgba(0, 0, 0, 0.35) 100%)',
    addButtonColor: '#f7a7bb',
    addButtonLine: '#ffffff',
  
    voteMain: {
      title: '커버 곡 투표',
      dDay: 'D-1',
      options: ['소년이여', '무제(無題)',],
      buttonLabel: '투표하러 가기',
      voteButtonColor: '#f7a7bb',
      voteTextColor: '#333',
      voteBannerImage: voteBanner ,
    },

  //Media 탭
    // ✅ New 슬라이드
    newSlides: [new1, new2, new3, new1, new2, new3],
  
    // ✅ Media 콘텐츠 목록
    mediaThumbnails: [
      {
        mediaId: 'media1',
        img: media1,
        title: 'ROSÉ(로제) - APT. (Band VER.) (With. 이영지)',
        uploader: 'KBSKpop',
        live: false,
        time: '2:53',
        viewers: '4240만회 · 1일 전',
        link: '',
      },
      {
        mediaId: 'media2',
        img: media2,
        title: "BLACKPINK 블랙핑크 in Paris Vlog",
        uploader: 'BLACKPINK',
        time: '35:47',
        views: '1.9억회 · 1개월 전',
        link: '',

      },
      {
        mediaId: 'media3',
        img: media3,
        title: "BLACKPINK 블랙핑크 월드투어 8K 하이라이트 다시보기",
        uploader: 'BLACKPINK',
        time: '2:35:14',
        views: '4억회 · 2개월 전',
        link: ''
      }
    ],
  
    // ✅ MV 콘텐츠 목록
    mvThumbnails: [
      {
        img: mv1,
        title: "BLACKPINK 블랙핑크 ‘뛰어(JUMP)’ M/V ",
        uploader: 'BLACKPINK',
        time: '3:14',
        views: '6175만회 · 4일 전',
        link: ''
      },
      {
        img: mv2,
        title: "BLACKPINK 블랙핑크 ‘Pink Venom’ M/V ",
        uploader: 'BLACKPINK',
        time: '3:14',
        views: '9.9억회 · 2년 전',
        link: ''
      },
      {
        img: mv3,
        title: "BLACKPINK 블랙핑크 ‘Shut Down’ M/V ",
        uploader: 'BLACKPINK',
        time: '3:01',
        views: '7.4억회 · 2년 전',
        link: ''
      },
    ],



  //Notice 탭
  noticeList: [
    {
      title: '[안내] 블랙핑크 ‘뛰어(Jump)’ 응원법 안내!',
      // description: '',
      date: '2025.08.10',
      background: 'linear-gradient(to bottom, #EB65CE 0%, #FFC8F3 100%)',
      textColor: '#fff',
    },
    {
      title: '[알림] 블랙핑크 공지2',
      // description: '',
      date: '2025.08.03',
      background: 'linear-gradient(to bottom, #EB65CE 0%, #FFC8F3 100%)',
      textColor: '#fff',
    },
    {
      title: '[공지] 블랙핑크 공지3',
      // description: '',
      date: '2025.08.12',
      background: 'linear-gradient(to bottom, #EB65CE 0%, #FFC8F3 100%)',
      textColor: '#fff',
    },
  ],

  // 공지-달력
//   type: 'content',
//   typeName: '콘텐츠',
//   type: 'fan',
//   typeName: '팬 소통',
//   type: 'media',
//   typeName: '방송 미디어',
//   type: 'event',
//   typeName: '공연/행사',
//   type: 'anniversary',
//   typeName: '기념일',
  noticeSchedule: [
    {
      date: '2025-08-12',
      type: 'event',
      typeName: '공연/행사',
      title: "블랙핑크 ‘Pink Venom’ 쇼음악중심 - 고양 스타디움 ",
      time: "오전 05:00",
      artists: ['BLACKPINK', '지수', '제니', '로제', '리사']
    },
    {
      date: '2025-08-12',
      type: 'fan',
      typeName: '팬 소통',
      title: "블랙핑크 in Shanghai 라이브 생방송",
      time: "오전 16:00",
      artists: ['BLACKPINK', '지수', '제니', '로제', '리사']
    },
    {
      date: '2025-07-28',
      type: 'media',
      typeName: '방송 미디어',
      title: "2025-07-28 media",
      time: '00:00',
      artists: ['BLACKPINK']
    },
    {
      date: '2025-07-29',
      type: 'content',
      typeName: '콘텐츠',
      title: '2025-07-29 content',
      time: '00:00',
      artists: ['BLACKPINK']
    },
    {
      date: '2025-08-01',
      type: 'media',
      typeName: '방송 미디어',
      title: '2025-08-04 media',
      time: '00:00',
      artists: ['BLACKPINK']
    },
    {
      date: '2025-08-03',
      type: 'content',
      typeName: '콘텐츠',    
      title: '2025-08-04 content',
      time: '00:00',
      artists: ['BLACKPINK']
    },
    {
      date: '2025-08-04',
      type: 'media',
      typeName: '방송 미디어',
      title: '2025-08-05 media',
      time: '00:00',
      artists: ['BLACKPINK']
    },
    {
        date: '2025-08-05',
        type: 'event',
        typeName: '공연/행사',
        title: '2025-08-05 event',
        time: '00:00',
        artists: ['BLACKPINK']
      },
      {
        date: '2025-08-05',
        type: 'event',
        typeName: '공연/행사',
        title: '2025-08-05 event',
        time: '00:00',
        artists: ['BLACKPINK']
      },
      {
        date: '2025-08-05',
        type: 'event',
        typeName: '공연/행사',
        title: '2025-08-05 event',
        time: '00:00',
        artists: ['BLACKPINK']
      },
      {
        date: '2025-08-06',
        type: 'media',
        typeName: '방송 미디어',
        title: '2025-08-06 media',
        time: '00:00',
        artists: ['BLACKPINK']
      },
    {
      date: '2025-08-16',
      type: 'anniversary',
      typeName: '기념일',
      title: '2025-08-16 media',
      time: '00:00',
      artists: ['BLACKPINK']
    },
    {
      date: '2025-08-17',
      type: 'media',
      typeName: '방송 미디어',
      title: '2025-08-15 media',
      time: '00:00',
      artists: ['BLACKPINK']
    },
    {
        date: '2025-08-17',
        type: 'content',
        typeName: '콘텐츠',
        title: '2025-08-15 media',
        time: '00:00',
        artists: ['BLACKPINK']
      },
      {
        date: '2025-08-20',
        type: 'fan',
        typeName: '팬 소통',
        title: '2025-08-15 media',
        time: '00:00',
        artists: ['BLACKPINK']
      },
      {
        date: '2025-08-21',
        type: 'event',
        typeName: '공연/행사',
        title: '2025-08-20 media',
        time: '00:00',
        artists: ['BLACKPINK']
      },
  ],



  //Fan 탭
  fanPosts: [
    {
      id: 1,
      nickname: '로제파스타',
      time: '29분전',
      profile: '/assets/ArtistPage/blackpink/user1.png',
      text: "everybody say 뛰어!!  ⸜(๑'ᵕ'๑)⸝",
      translatedText: '',
      content: 'test',
      translatedContent: '',
      images: [
        '/assets/ArtistPage/blackpink/allpost1-1.png',
        '/assets/ArtistPage/blackpink/allpost1-2.png',
        '/assets/ArtistPage/blackpink/allpost1-3.png',
      ],
      likes: 5,
      comments: 0,
      showFollowButton: true
    },
    {
      id: 2,
      nickname: '젠득이',
      time: '30분전',
      profile: '/assets/ArtistPage/blackpink/user2.png',
      text: '제니 티셔츠 어디꺼인지 아시는분?',
      translatedText: '',
      content: 'test',
      translatedContent: '',
      images: [
        '/assets/ArtistPage/blackpink/allpost2.png',
      ],
      likes: 5,
      comments: 0,
      showFollowButton: true
    },
    {
      id: 3,
      nickname: '블링이',
      time: '32분전',
      profile: '/assets/ArtistPage/blackpink/user3.png',
      text: '일주일 지났지만 고양콘 후유증 앓는 중...ㅠ',
      translatedText: '',
      content: 'test',
      translatedContent: '',
      images: [
        '/assets/ArtistPage/blackpink/allpost3-1.png',
        '/assets/ArtistPage/blackpink/allpost3-2.png',
        '/assets/ArtistPage/blackpink/allpost3-3.png',
      ],
      likes: 5,
      comments: 0,
      showFollowButton: true
    },
    {
        id: 4,
        nickname: '채영이가쏜다',
        time: '30분전',
        profile: '/assets/ArtistPage/blackpink/user4.png',
        text: '이번 피처링 너무좋아서 n번째 듣고있어요!',
        translatedText: '',
        content: 'test',
        translatedContent: '',
        images: [
          '/assets/ArtistPage/blackpink/allpost4.png',
        ],
        likes: 5,
        comments: 0,
        showFollowButton: true
      },
  ],


  
  fanFollowingPosts: [
    // {
    //   id: 1,
    //   nickname: '온리유찌민',
    //   time: '29분전',
    //   profile: '/assets/ArtistPage/blackpink/user5.png',
    //   text: '김민정은 사랑이에요 🤍',
    //   translatedText: '',
    //   content: 'test',
    //   translatedContent: '',
    //   images: [
    //     '/assets/ArtistPage/blackpink/allpost1.png'
    //   ],
    //   likes: 2,
    //   comments: 0,
    //   showFollowButton: false,
    // },
  ],

  voteSubList : [
    {
      id: 1,
      icon: 'orange', // 'orange', 'blue', 'pink'
      point: 30,
      question: '양콘에서 불러줬으면 하는 커버곡은? 🎶',
    },
    {
      id: 2,
      icon: 'blue',
      point: 20,
      question: '보고싶은 콘텐츠는? 👀',
    },
    {
      id: 3,
      icon: 'pink',
      point: 10,
      question: '다음 가사 중 빈칸에 들어갈 말은? 📝',
    },
    {
      id: 4,
      icon: 'gray',
      point: 5,
      question: '가장 기대되는 컴백 콘텐츠는? 💖 ',
    },
    {
      id: 5,
      icon: 'gray',
      point: 5,
      question: '오늘 공항패션 속 벌칙 아이템은? 🛫',
    },
    {
      id: 6,
      icon: 'gray',
      point: 5,
      question: '찍어줬으면 하는 Vlog 주제는? 🎥',
    },
    {
      id: 7,
      icon: 'gray',
      point: 5,
      question: '콘서트에서 가장 기대되는 순간은? 🔥',
    },
  ],

};

export default bpinkData;
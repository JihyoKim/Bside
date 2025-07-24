import Cover from '../../assets/ArtistPage/riize/artistCover.png';
import member1 from '../../assets/ArtistPage/riize/member1.png';
import member2 from '../../assets/ArtistPage/riize/member2.png';
import member3 from '../../assets/ArtistPage/riize/member3.png';
import member4 from '../../assets/ArtistPage/riize/member4.png';
import member5 from '../../assets/ArtistPage/riize/member5.png';
import member6 from '../../assets/ArtistPage/riize/member6.png';

import new1 from '../../assets/ArtistPage/riize/new1.png';
import new2 from '../../assets/ArtistPage/riize/new2.png';
import new3 from '../../assets/ArtistPage/riize/new3.png';
import media1 from '../../assets/ArtistPage/riize/media1.png';
import media2 from '../../assets/ArtistPage/riize/media2.png';
import media3 from '../../assets/ArtistPage/riize/media3.png';
import mv1 from '../../assets/ArtistPage/riize/mv1.png';
import mv2 from '../../assets/ArtistPage/riize/mv2.png';
import mv3 from '../../assets/ArtistPage/riize/mv3.png';


const alldayData = {
    id: 'riize',
    name: 'RIIZE',
    memberTitle: 'Member',
    members: ['RIIZE', '엔톤', '소희', '원빈', '은석', '쇼타로', '성찬'],
    coverImg: Cover,
    isFollowing: true,
    followColor: '#FFBB00',
    memberImgs: [member1, member2, member3, member4, member5, member6],
    tabColor: '#FFBB00',
    underlineColor: '#FFBB00',
    inactiveColor: '#FFFFFF',
    gradientColor: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.35) 0%, rgba(229, 160, 33, 0.35) 55%, rgba(0, 0, 0, 0.35) 100%)'
,
  
  //Media 탭
    // ✅ New 슬라이드
    newSlides: [new1, new2, new3, new1, new2, new3],
  
    // ✅ Media 콘텐츠 목록
    mediaThumbnails: [
      {
        mediaId: 'riize-clip',
        img: media1,
        title: 'RIIZE 라이즈 단독 콘서트 비하인드 Clip',
        uploader: 'RIIZE',
        live: false,
        time: '26:53',
        viewers: '208만회 · 1시간 전',
        link: '',
      },
      {
        mediaId: 'riize-japan-vlog',
        img: media2,
        title: "RIIZE 라이즈 성찬 in Japan Vlog",
        uploader: 'RIIZE',
        time: '8:39',
        views: '433만회 · 7일 전',
        link: '',

      },
      {
        mediaId: 'riize-vouge6',
        img: media3,
        title: "RIIZE 라이즈 vogue 6월호 화보 현장",
        uploader: 'RIIZE',
        time: '18:56',
        views: '625만회 · 12일 전',
        link: ''
      }
    ],
  
    // ✅ MV 콘텐츠 목록
    mvThumbnails: [
      {
        img: mv1,
        title: "RIIZE 라이즈 ‘Bag Bag Back’ MV",
        uploader: 'SMTOWN',
        time: '3:13',
        views: '2038만회 · 1개월 전',
        link: ''
      },
      {
        img: mv2,
        title: "RIIZE 라이즈 ‘Fly up’ MV",
        uploader: 'SMTOWN',
        time: '2:59',
        views: '4886만회 · 1개월 전',
        link: ''
      },
      {
        img: mv3,
        title: "RIIZE 라이즈 ‘Boom Boom Bass’ MV",
        uploader: 'SMTOWN',
        time: '4:27',
        views: '3097만회 · 1년 전',
        link: ''
      },
    ],



  //Notice 탭
  noticeList: [
    {
      title: '[알림] 라이즈 ‘Fly Up’ 응원법 안내',
      // description: '',
      date: '2025.08.11',
      background: 'linear-gradient(to bottom, #FFB52E 0%, #FFA500 100%)',
      textColor: '#fff',
    },
    {
      title: '[알림] 라이즈 X 메가커피 콜라보 메뉴 출시 EVENT',
      // description: '',
      date: '2025.08.03',
      background: 'linear-gradient(to bottom, #FFB52E 0%, #FFA500 100%)',
      textColor: '#fff',
    },
    {
      title: '[공지] 라이즈 ‘ODYSSEY’ 음악방송 사전투표 안내',
      // description: '',
      date: '2025.08.12',
      background: 'linear-gradient(to bottom, #FFB52E 0%, #FFA500 100%)',
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
      type: 'anniversary',
      typeName: '기념일',
      title: "라이즈 쇼타로 생일 ",
      time: "오전 12:00",
      artists: ['RIIZE', '쇼타로']
    },
    {
      date: '2025-08-12',
      type: 'media',
      typeName: '방송 미디어',
      title: "라이즈 컴백 ‘아는 형님’ 방송 녹화",
      time: "오전 16:00",
      artists: ['RIIZE']
    },
    {
      date: '2025-07-26',
      type: 'anniversary',
      typeName: '기념일',
      title: "(자동 추가) 2025-07-28 anniversary",
      time: "",
      artists: ['RIIZE']
    },
    {
      date: '2025-07-29',
      type: 'event',
      typeName: '공연/행사',
      title: '(자동 추가) 2025-08-02 content',
      time: '',
      artists: ['RIIZE']
    },
    {
      date: '2025-08-04',
      type: 'media',
      typeName: '방송 미디어',
      title: '(자동 추가) 2025-08-04 media',
      time: '',
      artists: ['RIIZE']
    },
    {
      date: '2025-08-08',
      type: 'media',
      typeName: '방송 미디어',
      title: '(자동 추가) 2025-08-04 content',
      time: '',
      artists: ['RIIZE']
    },
    {
      date: '2025-08-08',
      type: 'content',
      typeName: '콘텐츠',
      title: '(자동 추가) 2025-08-05 media',
      time: '',
      artists: ['RIIZE']
    },
    {
        date: '2025-08-09',
        type: 'media',
        typeName: '방송 미디어',
        title: '(자동 추가) 2025-08-05 media',
        time: '',
        artists: ['RIIZE']
      },
      {
        date: '2025-08-10',
        type: 'event',
        typeName: '공연/행사',
        title: '(자동 추가) 2025-08-05 media',
        time: '',
        artists: ['RIIZE']
      },
    {
      date: '2025-08-10',
      type: 'event',
      typeName: '공연/행사',
      title: '(자동 추가) 2025-08-06 media',
      time: '',
      artists: ['RIIZE']
    },
    {
      date: '2025-08-15',
      type: 'media',
      typeName: '방송 미디어',
      title: '(자동 추가) 2025-08-15 media',
      time: '',
      artists: ['RIIZE']
    },
    {
        date: '2025-08-15',
        type: 'media',
        typeName: '방송 미디어',
        title: '(자동 추가) 2025-08-15 media',
        time: '',
        artists: ['RIIZE']
      },
      {
        date: '2025-08-15',
        type: 'media',
        typeName: '방송 미디어',
        title: '(자동 추가) 2025-08-15 media',
        time: '',
        artists: ['RIIZE']
      },
      {
        date: '2025-08-20',
        type: 'media',
        typeName: '방송 미디어',
        title: '(자동 추가) 2025-08-20 media',
        time: '',
        artists: ['RIIZE']
      },
      {
        date: '2025-08-20',
        type: 'event',
        typeName: '공연/행사',
        title: '(자동 추가) 2025-08-20 media',
        time: '',
        artists: ['RIIZE']
      },
      {
        date: '2025-08-21',
        type: 'content',
        typeName: '콘텐츠',
        title: '(자동 추가) 2025-08-20 media',
        time: '',
        artists: ['RIIZE']
      },
  ],



  //Fan 탭
  fanPosts: [
    {
      id: 1,
      nickname: '원빈럽♥',
      time: '29분전',
      profile: '/assets/ArtistPage/riize/user1.png',
      text: '엉엉즈의 먹방 항공샷',
      translatedText: '',
      content: 'test',
      translatedContent: '',
      images: [
        '/assets/ArtistPage/riize/allpost1.png'
      ],
      likes: 5,
      comments: 0,
      showFollowButton: true
    },
    {
      id: 2,
      nickname: '앤써니',
      time: '30분전',
      profile: '/assets/ArtistPage/riize/user2.png',
      text: '드뎌 받았다,,, 싸인 💗',
      translatedText: '',
      content: 'test',
      translatedContent: '',
      images: [
        '/assets/ArtistPage/riize/allpost2.png',
      ],
      likes: 5,
      comments: 0,
      showFollowButton: true
    },
    {
      id: 3,
      nickname: '소희의까치집',
      time: '32분전',
      profile: '/assets/ArtistPage/riize/user3.png',
      text: '소희 바탕화면 만든거 어때!!?',
      translatedText: '',
      content: 'test',
      translatedContent: '',
      images: [
        '/assets/ArtistPage/riize/allpost3.png',
      ],
      likes: 5,
      comments: 0,
      showFollowButton: true
    },
    {
        id: 4,
        nickname: '브리즈행복하자',
        time: '30분전',
        profile: '/assets/ArtistPage/riize/user4.png',
        text: '막방도 가즈아ㅏ 💃',
        translatedText: '',
        content: 'test',
        translatedContent: '',
        images: [
          '/assets/ArtistPage/riize/allpost4.png',
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
    //   profile: '/assets/ArtistPage/riize/user5.png',
    //   text: '김민정은 사랑이에요 🤍',
    //   translatedText: '',
    //   content: 'test',
    //   translatedContent: '',
    //   images: [
    //     '/assets/ArtistPage/riize/allpost1.png'
    //   ],
    //   likes: 2,
    //   comments: 0,
    //   showFollowButton: false,
    // },
  ],

  voteMain: {
    title: '떼창 곡 투표',
    dDay: 'D-1',
    options: ['소년이여', '무제(無題)',],
    buttonLabel: '투표하러 가기',
  },

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

export default alldayData;
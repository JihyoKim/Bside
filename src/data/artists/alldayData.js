import Cover from '../../assets/ArtistPage/adproject/artistCover.png';
import member1 from '../../assets/ArtistPage/adproject/member1.png';
import member2 from '../../assets/ArtistPage/adproject/member2.png';
import member3 from '../../assets/ArtistPage/adproject/member3.png';
import member4 from '../../assets/ArtistPage/adproject/member4.png';
import member5 from '../../assets/ArtistPage/adproject/member5.png';

import new1 from '../../assets/ArtistPage/adproject/new1.png';
import new2 from '../../assets/ArtistPage/adproject/new2.png';
import new3 from '../../assets/ArtistPage/adproject/new3.png';
import media1 from '../../assets/ArtistPage/adproject/media1.png';
import media2 from '../../assets/ArtistPage/adproject/media2.png';
import media3 from '../../assets/ArtistPage/adproject/media3.png';
import mv1 from '../../assets/ArtistPage/adproject/mv1.png';
import mv2 from '../../assets/ArtistPage/adproject/mv2.png';
import mv3 from '../../assets/ArtistPage/adproject/mv3.png';
import voteBanner from '../../assets/ArtistPage/vote_blue.png'


const alldayData = {
    id: 'alldayproject',
    name: 'ALLDAY PROJECT',
    memberTitle: 'Member',
    members: ['ALLDAY PROJECT', '우찬', '영서', '베일리', '애니', '타잔'],
    coverImg: Cover,
    isFollowing: true,
    followColor: 'rgba(29, 229, 255, 0.8)',
    memberImgs: [member1, member2, member3, member4, member5],
    tabColor: '#1DE5FF',
    underlineColor: '#1DE5FF',
    inactiveColor: '#FFFFFF',
    gradientColor: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.45) 0%, rgba(0, 160, 181, 0.45) 55%, rgba(0, 0, 0, 0.45) 100%)',
    addButtonColor: '#1DE5FF',
    addButtonLine: '#ffffff',
    
    voteMain: {
      title: '커버 곡 투표',
      dDay: 'D-1',
      options: ['소년이여', '무제(無題)',],
      buttonLabel: '투표하러 가기',
      voteButtonColor: '#1DE5FF',
      voteTextColor: '#333',
      voteBannerImage: voteBanner ,
    },


  //Media 탭
    // ✅ New 슬라이드
    newSlides: [new1, new2, new3, new1, new2, new3],
  
    // ✅ Media 콘텐츠 목록
    mediaThumbnails: [
      {
        mediaId: 'drama-behind',
        img: media1,
        title: 'ALLDAYPROJECT 올데이프로젝트 ‘FAMOUS’ 뮤비 현장',
        uploader: 'THEBLACKLABLE',
        live: false,
        time: '11:49',
        viewers: '714만회 · 6시간 전',
        link: 'https://m.youtube.com/watch?v=oFSD3pyn4es',
      },
      {
        mediaId: 'home-mv-behind',
        img: media2,
        title: "[직캠] 올데이프로젝트 애니 직캠 8K ‘FAMOUS’",
        uploader: 'Mnet K-POP',
        time: '3:51',
        views: '197만회 · 3일 전',
        link: 'https://m.youtube.com/watch?v=j5JTV99jQJo',

      },
      {
        mediaId: 'power-dance',
        img: media3,
        title: "ALLDAYPROJECT 올데이프로젝트 첫 예능",
        uploader: '피식대학 Psick Univ',
        time: '31:34',
        views: '125만회 · 1주 전',
        link: 'https://m.youtube.com/watch?v=zugjrxbwOHk'
      }
    ],
  
    // ✅ MV 콘텐츠 목록
    mvThumbnails: [
      {
        img: mv1,
        title: "ALLDAYPROJECT 올데이프로젝트 ’FAMOUS’ M/V",
        uploader: 'THEBLACKLABLE',
        time: '3:01',
        views: '2778만회 · 3주 전',
        link: 'https://m.youtube.com/watch?v=VjvzYjU1mY0'
      },
      {
        img: mv2,
        title: "ALLDAYPROJECT 올데이프로젝트 ’FAMOUS’ VIDEO CLIP",
        uploader: 'THEBLACKLABLE',
        time: '3:08',
        views: '823만회 · 3주 전',
        link: ''
      },
      {
        img: mv3,
        title: "ALLDAYPROJECT 올데이프로젝트  ’WICKED’ M/V",
        uploader: 'THEBLACKLABLE',
        time: '2:38',
        views: '1258만회 · 3주 전',
        link: 'https://m.youtube.com/watch?v=mhKCRnUKp5U'
      },
    ],



  //Notice 탭
  noticeList: [
    {
      title: '[안내] 올데이프로젝트 ‘FAMOUS’ 응원법 안내!',
      // description: '',
      date: '2025.08.10',
      background: 'linear-gradient(to bottom, #008FA3 0%, #00CDE8 100%)',
      textColor: '#fff',
    },
    {
      title: '[알림] 지드래곤 ‘HOME SWEET HOME’ 비하인드 영상 공개',
      // description: '',
      date: '2025.08.11',
      background: 'linear-gradient(to bottom, #008FA3 0%, #00CDE8 100%)',
      textColor: '#fff',
    },
    {
      title: '[공지] 지드래곤 ‘TOO BAD’ 음악방송 사전투표 안내',
      // description: '',
      date: '2025.08.12',
      background: 'linear-gradient(to bottom, #008FA3 0%, #00CDE8 100%)',
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
      type: 'media',
      typeName: '방송 미디어',
      title: "올데이프로젝트 ‘FAMOUS’ 인기가요 - SBS 공개홀",
      time: "오전 10:55",
      artists: ['ALLDAY PROJECT']
    },
    {
      date: '2025-08-12',
      type: 'fan',
      typeName: '팬 소통',
      title: "올데이프로젝트 유튜브 촬영",
      time: "오전 19:00",
      artists: ['ALLDAY PROJECT']
    },
    {
      date: '2025-08-01',
      type: 'event',
      typeName: '공연/행사',
      title: "2025-08-01 content",
      time: "오후 21:00",
      artists: ['ALLDAY PROJECT']
    },
    {
      date: '2025-08-02',
      type: 'event',
      typeName: '공연/행사',
      title: '2025-08-02 content',
      time: '',
      artists: ['ALLDAY PROJECT']
    },
    {
      date: '2025-08-03',
      type: 'content',
      typeName: '콘텐츠',
      title: '2025-08-03 media',
      time: '',
      artists: ['ALLDAY PROJECT']
    },
    {
      date: '2025-08-04',
      type: 'anniversary',
      typeName: '기념일',
      title: '2025-08-04 content',
      time: '',
      artists: ['ALLDAY PROJECT']
    },
    {
      date: '2025-08-05',
      type: 'media',
      typeName: '방송 미디어',
      title: '2025-08-05 media',
      time: '',
      artists: ['ALLDAY PROJECT']
    },
    {
        date: '2025-08-05',
        type: 'media',
        typeName: '방송 미디어',
        title: '2025-08-05 media',
        time: '',
        artists: ['ALLDAY PROJECT']
      },
      {
        date: '2025-08-05',
        type: 'event',
        typeName: '공연/행사',
        title: '2025-08-05 media',
        time: '',
        artists: ['ALLDAY PROJECT']
      },
    {
      date: '2025-08-06',
      type: 'media',
      typeName: '방송 미디어',
      title: '2025-08-06 media',
      time: '',
      artists: ['ALLDAY PROJECT']
    },
    {
      date: '2025-08-16',
      type: 'anniversary',
      typeName: '기념일',
      title: '2025-08-16 event3',
      time: '',
      artists: ['ALLDAY PROJECT']
    },
  ],



  //Fan 탭
  fanPosts: [
    {
      id: 1,
      nickname: '몽키타잔',
      time: '29분전',
      profile: '/assets/ArtistPage/adproject/user1.png',
      text: '첫 엠카 1위!!! 💖',
      translatedText: '',
      content: 'test',
      translatedContent: '',
      images: [
        '/assets/ArtistPage/adproject/allpost1.png'
      ],
      likes: 7,
      comments: 0,
      showFollowButton: true
    },
    {
      id: 2,
      nickname: '우찬아밥먹자',
      time: '30분전',
      profile: '/assets/ArtistPage/adproject/user2.png',
      text: '여름도 뚫고갈 미모다',
      translatedText: '',
      content: 'test',
      translatedContent: '',
      images: [
        '/assets/ArtistPage/adproject/allpost2.png',
      ],
      likes: 5,
      comments: 0,
      showFollowButton: true
    },
    {
      id: 3,
      nickname: '애니싸랑',
      time: '29분전',
      profile: '/assets/ArtistPage/adproject/user3.png',
      text: '오늘 음방 미모 뭐야?!?@',
      translatedText: '',
      content: 'test',
      translatedContent: '',
      images: [
        '/assets/ArtistPage/adproject/allpost3.png',
      ],
      likes: 88,
      comments: 4,
      showFollowButton: true
    },
    {
        id: 4,
        nickname: '탈덕은없다',
        time: '30분전',
        profile: '/assets/ArtistPage/adproject/user4.png',
        text: '울데프 음방 20시 본방사수 💦',
        translatedText: '',
        content: 'test',
        translatedContent: '',
        images: [
          '/assets/ArtistPage/adproject/allpost4.png',
        ],
        likes: 88,
        comments: 4,
        showFollowButton: true
      },
  ],


  
  fanFollowingPosts: [
    // {
    //   id: 1,
    //   nickname: '온리유찌민',
    //   time: '29분전',
    //   profile: '/assets/ArtistPage/adproject/user5.png',
    //   text: '김민정은 사랑이에요 🤍',
    //   translatedText: '',
    //   content: 'test',
    //   translatedContent: '',
    //   images: [
    //     '/assets/ArtistPage/adproject/allpost1.png'
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

export default alldayData;
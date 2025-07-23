import Cover from '../../assets/ArtistPage/gdragon/artistCover.png';
import member1 from '../../assets/ArtistPage/gdragon/member1.png';

import new1 from '../../assets/ArtistPage/gdragon/new1.png';
import new2 from '../../assets/ArtistPage/gdragon/new2.png';
import new3 from '../../assets/ArtistPage/gdragon/new3.png';
import media1 from '../../assets/ArtistPage/gdragon/media1.png';
import media2 from '../../assets/ArtistPage/gdragon/media2.png';
import media3 from '../../assets/ArtistPage/gdragon/media3.png';
import mv1 from '../../assets/ArtistPage/gdragon/mv1.png';
import mv2 from '../../assets/ArtistPage/gdragon/mv2.png';
import mv3 from '../../assets/ArtistPage/gdragon/mv3.png';
import mv4 from '../../assets/ArtistPage/gdragon/mv4.png';


const alldayData = {
    id: 'alldayproject',
    name: 'ALLDAYPROJECT',
    memberTitle: 'Member',
    members: ['ALLDAYPROJECT',],
    coverImg: Cover,
    isFollowing: true,
    followColor: '#CD3134',
    memberImgs: [member1,],
    tabColor: '#CD3134',
    underlineColor: '#CD3134',
    inactiveColor: '#FFFFFF',
    gradientColor: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.44) 0%, #CD3134 55%, rgba(0, 0, 0, 0.44) 100%)',
  
  //Media 탭
    // ✅ New 슬라이드
    newSlides: [new1, new2, new3, new1, new2, new3],
  
    // ✅ Media 콘텐츠 목록
    mediaThumbnails: [
      {
        mediaId: 'drama-behind',
        img: media1,
        title: 'G-DRAGON 지드래곤 ‘DRAMA’ Behind Scene',
        uploader: 'officialGDRAGON',
        live: false,
        time: '21:53',
        viewers: '79만회 · 1일 전',
        link: 'https://m.youtube.com/watch?v=x7jUkmfvs3g  ',
      },
      {
        mediaId: 'home-mv-behind',
        img: media2,
        title: "G-DRAGON 지드래곤 ‘HOME SWEET HOME’ M/V behind scene",
        uploader: 'officialGDRAGON',
        time: '21:49',
        views: '1.9억회 · 1개월 전',
        link: 'https://m.youtube.com/watch?v=lAcUPqEI-ls',

      },
      {
        mediaId: 'power-dance',
        img: media3,
        title: "G-DRAGON 지드래곤 ‘POWER’ DANCE PRACTICE",
        uploader: 'MBCKpop',
        time: '2:40',
        views: '375만회 · 3개월 전',
        link: 'https://m.youtube.com/watch?v=bRanixEQNtI'
      }
    ],
  
    // ✅ MV 콘텐츠 목록
    mvThumbnails: [
      {
        img: mv1,
        title: "G-DRAGON 지드래곤 ‘HOME SWEET HOME’ M/V ",
        uploader: 'officialGDRAGON',
        time: '3:32',
        views: '6247만회 · 4개월 전',
        link: 'https://m.youtube.com/watch?v=gx5dn_fBxYw '
      },
      {
        img: mv2,
        title: "G-DRAGON 지드래곤 ‘TOO BAD’ M/V",
        uploader: 'officialGDRAGON',
        time: '2:34',
        views: '5283만회 · 7개월 전',
        link: 'https://m.youtube.com/watch?v=o9DhvbqYzns '
      },
      {
        img: mv3,
        title: "봄여름가을겨울 (Still Life) MV",
        uploader: 'officialGDRAGON',
        time: '3:09',
        views: ' 1.1억회 · 3년 전',
        link: 'https://m.youtube.com/watch?v=eN5mG_yMDiM '
      },
      {
        img: mv4,
        title: "G-DRAGON - '무제(無題) (Untitled, 2014)' M/V",
        uploader: 'officialGDRAGON',
        time: '3:49',
        views: '1.6억회 · 8년 전',
        link: 'https://m.youtube.com/watch?v=9kaCAbIXuyg'
      },
    ],



  //Notice 탭
  noticeList: [
    {
      title: '[공지] 지드래곤 ‘DRAMA’ 굿즈 이벤트 참여 방법',
      // description: '',
      date: '2025.08.10',
      background: 'linear-gradient(to bottom, #D9080C 0%, #CD4A4C 100%)',
      textColor: '#fff',
    },
    {
      title: '[알림] 지드래곤 ‘HOME SWEET HOME’ 비하인드 영상 공개',
      // description: '',
      date: '2025.08.11',
      background: 'linear-gradient(to bottom, #D9080C 0%, #CD4A4C 100%)',
      textColor: '#fff',
    },
    {
      title: '[공지] 지드래곤 ‘TOO BAD’ 음악방송 사전투표 안내',
      // description: '',
      date: '2025.08.12',
      background: 'linear-gradient(to bottom, #D9080C 0%, #CD4A4C 100%)',
      textColor: '#fff',
    },
  ],

  // 공지-달력
  noticeSchedule: [
    {
      date: '2025-08-12',
      type: 'content',
      typeName: '콘텐츠',
      title: "지드래곤 VOGUE KOREA 12월호 촬영",
      time: "오전 11:00",
      artists: ['G-DRAGON']
    },
    {
      date: '2025-08-12',
      type: 'content',
      typeName: '콘텐츠',
      title: "지드래곤 VOGUE KOREA 숏 인터뷰",
      time: "오전 16:30",
      artists: ['G-DRAGON']
    },
    {
      date: '2025-08-12',
      type: 'content',
      typeName: '콘텐츠',
      title: "지드래곤 Chanel Haute Couture show 출국 ",
      time: "오후 21:00",
      artists: ['G-DRAGON']
    },
    {
      date: '2025-07-29',
      type: 'content',
      typeName: '콘텐츠',
      title: '(자동 추가) 2025-07-29 content',
      time: '',
      artists: ['G-DRAGON']
    },
    {
      date: '2025-08-02',
      type: 'content',
      typeName: '콘텐츠',
      title: '(자동 추가) 2025-08-02 media',
      time: '',
      artists: ['G-DRAGON']
    },
    {
      date: '2025-08-04',
      type: 'event',
      typeName: '공연/행사',
      title: '(자동 추가) 2025-08-03 content',
      time: '',
      artists: ['G-DRAGON']
    },
    {
      date: '2025-08-05',
      type: 'fan',
      typeName: '팬 소통',
      title: '(자동 추가) 2025-08-04 media',
      time: '',
      artists: ['G-DRAGON']
    },
    {
      date: '2025-08-8',
      type: 'event',
      typeName: '공연/행사',
      title: "test",
      time: "오후 17:00",
      artists: ['G-DRAGON']
    },
    {
      date: '2025-08-16',
      type: 'event',
      typeName: '공연/행사',
      title: '(자동 추가) 2025-08-19 event',
      time: '',
      artists: ['G-DRAGON']
    },
    {
      date: '2025-08-17',
      type: 'media',
      typeName: '방송 미디어',
      title: '(자동 추가) 2025-08-19 event2',
      time: '',
      artists: ['G-DRAGON']
    },
    {
      date: '2025-08-17',
      type: 'fan',
      typeName: '팬 소통',
      title: '(자동 추가) 2025-08-19 event3',
      time: '',
      artists: ['G-DRAGON']
    },
    {
      date: '2025-08-18',
      type: 'anniversary',
      typeName: '기념일',
      title: '(자동 추가) 2025-08-19 event3',
      time: '',
      artists: ['G-DRAGON']
    },
  ],



  //Fan 탭
  fanPosts: [
    {
      id: 1,
      nickname: '쥐들에곤히잠들다',
      time: '45분전',
      profile: '/assets/ArtistPage/gdragon/user1.png',
      text: '더현대 팝업 MD 존 응원봉 구매 성공',
      translatedText: '',
      content: 'test',
      translatedContent: '',
      images: [
        '/assets/ArtistPage/gdragon/allpost1.png'
      ],
      likes: 2,
      comments: 0,
      showFollowButton: true
    },
    {
      id: 2,
      nickname: 'hazelnut',
      time: '1시간전',
      profile: '/assets/ArtistPage/gdragon/user2.png',
      text: 'GD is currently the most viewed K-pop male idol on rednote.',
      translatedText: 'GD는 현재 레드노트에서 가장 많이 조회된 K-POP 남자 아이돌입니다.',
      content: 'test',
      translatedContent: '',
      images: [
        '/assets/ArtistPage/gdragon/allpost1-1.png',
        '/assets/ArtistPage/gdragon/allpost1-2.png',
      ],
      likes: 37,
      comments: 3,
      showFollowButton: true
    },
    {
      id: 3,
      nickname: '믿을건지용이뿐',
      time: '2시간 전',
      profile: '/assets/ArtistPage/gdragon/user3.png',
      text: '지디 모자 거꾸로 쓰면 데뷔초로 돌아가 ㅎ',
      translatedText: '',
      content: 'test',
      translatedContent: '',
      images: [
        '/assets/ArtistPage/gdragon/allpost2-1.png',
        '/assets/ArtistPage/gdragon/allpost2-2.png',
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
    //   profile: '/assets/ArtistPage/gdragon/user5.png',
    //   text: '김민정은 사랑이에요 🤍',
    //   translatedText: '',
    //   content: 'test',
    //   translatedContent: '',
    //   images: [
    //     '/assets/ArtistPage/gdragon/allpost1.png'
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
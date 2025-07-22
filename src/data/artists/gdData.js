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


const gdData = {
    id: 'gdragon',
    name: 'G-DRAGON',
    memberTitle: 'Solo',
    members: ['G-DRAGON',],
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
      text: '더현대 팝업 MD 존 응원봉 구매 성공 MD존 선착순 예매 겨우 성공해서 데이지봉+크래들 구매 성공! 진짜 이렇게 줄 길게 서 본 적은 처음이에요...',
      translatedText: '',
      images: [
        '/assets/ArtistPage/gdragon/allpost1.png'
      ],
      likes: 2,
      comments: 0,
      showFollowButton: true
    },
    {
      id: 2,
      nickname: '지젤리좋아',
      time: '29분전',
      profile: '/assets/ArtistPage/aespa/user2.png',
      text: 'so cute with her STITCH hairband OMG',
      translatedText: '스티치 머리띠 한 거 너무 귀여워 진짜 OMG',
      images: [
        '/assets/ArtistPage/aespa/aespa-fanPost2-1.png',
        '/assets/ArtistPage/aespa/aespa-fanPost2-2.png',
      ],
      likes: 5,
      comments: 0,
      showFollowButton: true
    },
    {
      id: 3,
      nickname: '닝덕사냥',
      time: '38분전',
      profile: '/assets/ArtistPage/aespa/user3.png',
      text: '카닝의 조화 최고댜★ 닝닝 계속 뿌가머리해줘!!',
      translatedText: '',
      images: [
        '/assets/ArtistPage/aespa/aespa-fanPost3-1.png',
        '/assets/ArtistPage/aespa/aespa-fanPost3-2.png',
      ],
      likes: 13,
      comments: 0,
      showFollowButton: true
    },
    {
      id: 4,
      nickname: '갓스파',
      time: '40분전',
      profile: '/assets/ArtistPage/aespa/user4.png',
      text: '우리애들 너무 고생했어ㅠㅠ 다음 음악방송도 1위!!',
      translatedText: '',
      images: [
        '/assets/ArtistPage/aespa/aespa-fanPost4.png'
      ],
      likes: 10,
      comments: 0,
      showFollowButton: true
    },
  ],


  
  fanFollowingPosts: [
    {
      id: 1,
      nickname: '온리유찌민',
      time: '29분전',
      profile: '/assets/ArtistPage/aespa/user5.png',
      text: '김민정은 사랑이에요 🤍',
      translatedText: '',
      images: [
        '/assets/ArtistPage/aespa/aespa-fanPost1.png'
      ],
      likes: 2,
      comments: 0,
      showFollowButton: false,
    },
    {
      id: 5,
      nickname: '온리유찌민',
      time: '07. 14.',
      profile: '/assets/ArtistPage/aespa/user5.png',
      text: '에어팟 한쪽 잃어버렸다,,',
      translatedText: '',
      images: [
        '/assets/ArtistPage/aespa/aespa-fanPost5.png'
      ],
      likes: 5,
      comments: 0,
      showFollowButton: false,
    },
    {
      id: 6,
      nickname: '온리유찌민',
      time: '07. 13.',
      profile: '/assets/ArtistPage/aespa/user5.png',
      text: '오늘은 졸린하루 입니댜 =v=',
      translatedText: '',
      images: [
        '/assets/ArtistPage/aespa/aespa-fanPost6.png'
      ],
      likes: 4,
      comments: 0,
      showFollowButton: false,
    },
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
      question: '블랙핑크가 찍어줬으면 하는 여름 콘텐츠는?',
    },
    {
      id: 3,
      icon: 'pink',
      point: 10,
      question: '다음 가사 중 빈칸에 들어갈 말은 무엇일까요?',
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
      question: '오늘 로제의 공항패션 속 벌칙 아이템은?',
    },
    {
      id: 6,
      icon: 'gray',
      point: 5,
      question: '최애가 찍어줬으면 하는 Vlog주제는?',
    },
    {
      id: 7,
      icon: 'gray',
      point: 5,
      question: '콘서트에서 가장 기대되는 순간은? 🔥',
    },
  ],

};

export default gdData;
import aespaCover from '../../assets/ArtistPage/aespa/artistCover-aespa.png';
import aespa_member1 from '../../assets/ArtistPage/aespa/member1.png';
import aespa_member2 from '../../assets/ArtistPage/aespa/member2.png';
import aespa_member3 from '../../assets/ArtistPage/aespa/member3.png';
import aespa_member4 from '../../assets/ArtistPage/aespa/member4.png';

import new1 from '../../assets/ArtistPage/aespa/new1.png';
import new2 from '../../assets/ArtistPage/aespa/new2.png';
import new3 from '../../assets/ArtistPage/aespa/new3.png';
import media1 from '../../assets/ArtistPage/aespa/media1.png';
import media2 from '../../assets/ArtistPage/aespa/media2.png';
import media3 from '../../assets/ArtistPage/aespa/media3.png';
import mv1 from '../../assets/ArtistPage/aespa/mv1.png';
import mv2 from '../../assets/ArtistPage/aespa/mv2.png';
import mv3 from '../../assets/ArtistPage/aespa/mv3.png';


const aespaData = {
    id: 'aespa',
    name: 'aespa',
    memberTitle: 'Member',
    members: ['aespa', '카리나', '윈터', '지젤', '닝닝'],
    coverImg: aespaCover,
    followColor: '#FF8031',
    isFollowing: false,
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
        title: 'aespa 에스파 카리나 생방송 라이브',
        uploader: 'aespa',
        live: true,
        viewers: '5.3만 명 시청 중'
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

  //Fan 탭
  fanPosts: [
    {
      id: 1,
      nickname: '온리유찌민',
      time: '29분전',
      profile: '/assets/ArtistPage/aespa/user5.png',
      text: '김민정은 사랑이에요 🤍',
      translatedText: '',
      content: '이건 팬미팅에서 찍은 사진이에요! 정말 귀여웠어요.',
      translatedContent: '',
      images: [
        '/assets/ArtistPage/aespa/aespa-fanPost1.png'
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
      text: '너무 예뻐요!',
      translatedText: 'So pretty!',
      content: '스티치 머리띠 한 모습 너무 귀여웠어요. 팬서비스 최고~',
      translatedContent: 'She looked so cute with the Stitch hairband. Best fan service~',
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
      content: 'test',
      translatedContent: '',
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
      content: 'test',
      translatedContent: '',
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
      content: 'test',
      translatedContent: '',
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
      content: 'test',
      translatedContent: '',
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
      content: 'test',
      translatedContent: '',
      images: [
        '/assets/ArtistPage/aespa/aespa-fanPost6.png'
      ],
      likes: 4,
      comments: 0,
      showFollowButton: false,
    },
  ],


  // 공지-달력
  noticeSchedule: [
    {
      date: '2025-08-12',
      type: 'content',
      typeName: '콘텐츠',
      title: "‘Dirty Work’ 발매 기념 사인회 - CJ E&M CENTER",
      time: "오전 11:30",
      artists: ['aespa', '카리나', '닝닝']
    },
    {
      date: '2025-08-12',
      type: 'fan',
      typeName: '팬 소통',
      title: "에스파 in Seoul 라이브 생방송",
      time: "오후 14:00",
      artists: ['aespa',]
    },
    {
      date: '2025-07-28',
      type: 'media',
      typeName: '방송 미디어',
      title: '(자동 추가) 2025-07-28 media',
      time: '',
      artists: ['aespa']
    },
    {
      date: '2025-07-29',
      type: 'content',
      typeName: '콘텐츠',
      title: '(자동 추가) 2025-07-29 content',
      time: '',
      artists: ['aespa']
    },
    {
      date: '2025-08-01',
      type: 'media',
      typeName: '방송 미디어',
      title: '(자동 추가) 2025-08-01 media',
      time: '',
      artists: ['aespa']
    },
    {
      date: '2025-08-03',
      type: 'content',
      typeName: '콘텐츠',
      title: '(자동 추가) 2025-08-03 content',
      time: '',
      artists: ['aespa']
    },
    {
      date: '2025-08-04',
      type: 'media',
      typeName: '방송 미디어',
      title: '(자동 추가) 2025-08-04 media',
      time: '',
      artists: ['aespa']
    },
    {
      date: '2025-08-16',
      type: 'anniversary',
      typeName: '기념일',
      title: "test",
      time: "오후 17:00",
      artists: ['aespa',]
    },
    {
      date: '2025-08-19',
      type: 'event',
      typeName: '공연/행사',
      title: '(자동 추가) 2025-08-19 event',
      time: '',
      artists: ['aespa']
    },
    {
      date: '2025-08-19',
      type: 'event',
      typeName: '공연/행사',
      title: '(자동 추가) 2025-08-19 event2',
      time: '',
      artists: ['aespa']
    },
    {
      date: '2025-08-19',
      type: 'event',
      typeName: '공연/행사',
      title: '(자동 추가) 2025-08-19 event3',
      time: '',
      artists: ['aespa']
    },
  ],


  voteMain: {
    title: '떼창 곡 투표',
    dDay: 'D-1',
    options: ['Black Mamba', 'Next Level', 'Supernova',],
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

export default aespaData;
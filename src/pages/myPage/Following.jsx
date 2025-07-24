import React, { useState } from 'react';
import './Following.css';
import FollowingList from '../../components/mypage/FollowingList';
import fff1 from '../../assets/profiles/fff1.png'
import fff2 from '../../assets/profiles/fff2.png'
import fff3 from '../../assets/profiles/fff3.png'
import fff4 from '../../assets/profiles/fff4.png'
import fff5 from '../../assets/profiles/fff5.png'
import fff6 from '../../assets/profiles/fff6.png'
import fff7 from '../../assets/profiles/fff7.png'
import fff8 from '../../assets/profiles/fff8.png'
import fff9 from '../../assets/profiles/fff9.png'
import fff10 from '../../assets/profiles/fff10.png'
import fff11 from '../../assets/profiles/fff11.png'
import fff12 from '../../assets/profiles/fff12.png'
import fff13 from '../../assets/profiles/fff13.png'
import fff14 from '../../assets/profiles/fff14.png'
import fff15 from '../../assets/profiles/fff15.png'
import fff16 from '../../assets/profiles/fff16.png'
import fff17 from '../../assets/profiles/fff17.png'
import fff18 from '../../assets/profiles/fff18.png'
import fff19 from '../../assets/profiles/fff19.png'
import fff20 from '../../assets/profiles/fff20.png'

const Following = () => {
  const [activeTab, setActiveTab] = useState('전체');

  const tabs = ['전체', 'G-Dragon', 'RIIZE', 'ALLDAYPROJECT', 'aespa', 'BLACKPINK'];

  // 샘플 데이터 - 실제로는 props나 API에서 받아올 데이터
  const followingData = [
    {
      id: 1,
      profileImage: fff1,
      nickname: '라이즈브리즈뜬다',
      statusMessage: 'riize D+725일',
      followingArtists: ['RIIZE']
    },
    {
      id: 2,
      profileImage: fff2,
      nickname: 'bunayamin',
      statusMessage: 'sorakan dari Malaysia',
      followingArtists: ['G-Dragon', 'RIIZE', 'ALLDAYPROJECT']
    },
    {
      id: 3,
      profileImage: fff3,
      nickname: '자석즈01',
      statusMessage: '',
      followingArtists: ['G-Dragon', 'RIIZE', 'ALLDAYPROJECT']
    },
    {
      id: 4,
      profileImage: fff4,
      nickname: '1더하기1은지용이',
      statusMessage: '나이는 나만 먹지 o(TヘTo)',
      followingArtists: ['G-Dragon', 'RIIZE']
    },
    {
      id: 5,
      profileImage: fff5,
      nickname: 'mizuharakiko',
      statusMessage: '新しいアルバムが待ちきれない🎵✨',
      followingArtists: ['G-Dragon', 'ALLDAYPROJECT']
    },
    {
      id: 6,
      profileImage: fff6,
      nickname: 'lianjing',
      statusMessage: '只限結婚新专辑 #fff',
      followingArtists: ['G-Dragon', 'RIIZE', 'ALLDAYPROJECT']
    },
    {
      id: 7,
      profileImage: fff7,
      nickname: 'namako88',
      statusMessage: '한국어 공부하는 나마코예요 日本(21)（＾∀＾●）ﾉｼ',
      followingArtists: ['G-Dragon', 'RIIZE', 'ALLDAYPROJECT']
    },
    {
      id: 8,
      profileImage: fff8,
      nickname: '올데프응원n일차',
      statusMessage: '이건뜬다',
      followingArtists: ['G-Dragon']
    },
    {
      id: 9,
      profileImage: fff9,
      nickname: 'aespa_in_the_spa',
      statusMessage: '',
      followingArtists: ['aespa', 'ALLDAYPROJECT']
    },
    {
      id: 10,
      profileImage: fff10,
      nickname: 'gobabygo',
      statusMessage: 'from china / aespa 💛',
      followingArtists: ['aespa']
    },
    {
      id: 11,
      profileImage: fff11,
      nickname: 'peaceminusone',
      statusMessage: '',
      followingArtists: ['G-Dragon']
    },
    {
      id: 12,
      profileImage: fff12,
      nickname: 'xxxiamandixxx',
      statusMessage: '한국 팬 팔로우 부탁해요! 請关注韩国粉丝!',
      followingArtists: ['G-Dragon', 'RIIZE', 'ALLDAYPROJECT']
    },
    {
      id: 13,
      profileImage: fff13,
      nickname: '밀을건 지용이뿐',
      statusMessage: '모두 뱅나잇! 💙🤍',
      followingArtists: ['RIIZE']
    },
    {
      id: 14,
      profileImage: fff14,
      nickname: 'yehyehxing',
      statusMessage: 'International fan / follow for follow #fff',
      followingArtists: ['RIIZE', 'ALLDAYPROJECT']
    },
    {
      id: 15,
      profileImage: fff15,
      nickname: 'yglovers',
      statusMessage: 'Is there any US fan here? 😊',
      followingArtists: ['G-Dragon', 'ALLDAYPROJECT', 'BLACKPINK']
    },
    {
      id: 16,
      profileImage: fff16,
      nickname: 'ilovekorea',
      statusMessage: '한국 팬들과 친해지고 싶습니다. 잘 부탁해',
      followingArtists: ['G-Dragon', 'RIIZE', 'ALLDAYPROJECT']
    },
    {
      id: 17,
      profileImage: fff17,
      nickname: 'blackpink_inurarea',
      statusMessage: '',
      followingArtists: ['BLACKPINK', 'ALLDAYPROJECT']
    },
    {
      id: 18,
      profileImage: fff18,
      nickname: 'tazzanzzang',
      statusMessage: '일본도 와줘요 타잔짱 / 日本(23)',
      followingArtists: ['ALLDAYPROJECT']
    },
    {
      id: 19,
      profileImage: fff19,
      nickname: 'justin',
      statusMessage: 'follow for follow back 🌸 CHILL',
      followingArtists: ['RIIZE', 'ALLDAYPROJECT']
    },
    {
      id: 20,
      profileImage: fff20,
      nickname: 'proteiner',
      statusMessage: '펜싸인회 당첨의 기적;;',
      followingArtists: ['RIIZE', 'ALLDAYPROJECT']
    }
  ];

  const getFilteredData = () => {
    if (activeTab === '전체') {
      return followingData;
    }
    return followingData.filter(user => 
      user.followingArtists.includes(activeTab)
    );
  };

  return (
    <div className="following-container">
      <div className="following-header">
        <h1>내 팔로잉 목록</h1>
      </div>
      
      <div className="tab-container">
        <div className="tab-scroll">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`tab-button ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <FollowingList data={getFilteredData()} />
    </div>
  );
};

export default Following;
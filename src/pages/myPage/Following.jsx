import React, { useState, useRef, useEffect } from 'react';
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
import fff21 from '../../assets/profiles/fff21.PNG'
import fff22 from '../../assets/profiles/fff22.PNG'
import fff23 from '../../assets/profiles/fff23.PNG'
import fff24 from '../../assets/profiles/fff24.PNG'
import fff25 from '../../assets/profiles/fff25.PNG'

const Following = () => {
  const [activeTab, setActiveTab] = useState('전체');
  const tabContainerRef = useRef(null);
  const tabButtonRefs = useRef({});

  const tabs = ['전체', 'G-Dragon', 'RIIZE', 'ALLDAYPROJECT', 'aespa', 'BLACKPINK'];

  // 탭 클릭 시 자동 스크롤 함수 (중앙 정렬)
  const scrollToTab = (tabIndex) => {
    const tabContainer = tabContainerRef.current;
    const tabButton = tabButtonRefs.current[tabIndex];
    
    if (!tabContainer || !tabButton) return;

    const containerRect = tabContainer.getBoundingClientRect();
    const buttonRect = tabButton.getBoundingClientRect();
    
    // 버튼의 중앙 위치 계산
    const buttonCenter = buttonRect.left - containerRect.left + tabContainer.scrollLeft + (buttonRect.width / 2);
    
    // 컨테이너의 중앙 위치
    const containerCenter = containerRect.width / 2;
    
    // 목표 스크롤 위치 (버튼 중앙이 컨테이너 중앙에 오도록)
    const targetScroll = buttonCenter - containerCenter;
    
    // 스크롤 범위 제한 (0 이하거나 최대 스크롤을 넘지 않도록)
    const maxScroll = tabContainer.scrollWidth - tabContainer.clientWidth;
    const finalScroll = Math.max(0, Math.min(targetScroll, maxScroll));
    
    // 부드러운 스크롤 애니메이션
    tabContainer.scrollTo({
      left: finalScroll,
      behavior: 'smooth'
    });
  };

  // 탭 클릭 핸들러
  const handleTabClick = (tab, index) => {
    setActiveTab(tab);
    scrollToTab(index);
  };

  // 드래그 스크롤 기능
  useEffect(() => {
    const tabContainer = tabContainerRef.current;
    if (!tabContainer) return;

    let isDown = false;
    let startX;
    let scrollLeft;

    const handleMouseDown = (e) => {
      isDown = true;
      startX = e.pageX - tabContainer.offsetLeft;
      scrollLeft = tabContainer.scrollLeft;
      tabContainer.style.cursor = 'grabbing';
    };

    const handleMouseLeave = () => {
      isDown = false;
      tabContainer.style.cursor = 'grab';
    };

    const handleMouseUp = () => {
      isDown = false;
      tabContainer.style.cursor = 'grab';
    };

    const handleMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - tabContainer.offsetLeft;
      const walk = (x - startX) * 2;
      tabContainer.scrollLeft = scrollLeft - walk;
    };

    tabContainer.addEventListener('mousedown', handleMouseDown);
    tabContainer.addEventListener('mouseleave', handleMouseLeave);
    tabContainer.addEventListener('mouseup', handleMouseUp);
    tabContainer.addEventListener('mousemove', handleMouseMove);

    tabContainer.style.cursor = 'grab';

    return () => {
      tabContainer.removeEventListener('mousedown', handleMouseDown);
      tabContainer.removeEventListener('mouseleave', handleMouseLeave);
      tabContainer.removeEventListener('mouseup', handleMouseUp);
      tabContainer.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // 샘플 데이터
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
      id: 25,
      profileImage: fff25,
      nickname: '형용돈죵',
      statusMessage: '형돈이가 랩을 한다 홍홍홍',
      followingArtists: ['G-Dragon']
    },
    {
      id: 24,
      profileImage: fff24,
      nickname: 'n.young.k',
      statusMessage: '💙💙💙',
      followingArtists: ['G-Dragon']
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
      statusMessage: '나이는 나만 먹지 o(THeTo)',
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
      nickname: '밀을건지용이뿐',
      statusMessage: '모두 뱅나잇! 💙🤍',
      followingArtists: ['RIIZE']
    },
    {
      id: 14,
      profileImage: fff14,
      nickname: 'yehyehxing',
      statusMessage: 'International fan / follow for follow #fff',
      followingArtists: ['RIIZE', 'ALLDAYPROJECT', 'aespa']
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
      followingArtists: ['BLACKPINK', 'ALLDAYPROJECT', 'G-Dragon']
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
      followingArtists: ['RIIZE', 'ALLDAYPROJECT', 'aespa']
    },
    {
      id: 21,
      profileImage: fff21,
      nickname: '진수성찬이',
      statusMessage: '정성찬! 정성찬! 정성찬!',
      followingArtists: 'RIIZE',
    },
    {
      id: 22,
      profileImage: fff22,
      nickname: 'godgiselle',
      statusMessage: '지젤갓',
      followingArtists: 'aespa',
    },
    {
      id: 23,
      profileImage: fff23,
      nickname: 'noahschnapp',
      statusMessage: 'London, UK 🤴🏻',
      followingArtists: ['aespa', 'BLACKPINK']
    },
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
      {/* 고정 헤더 */}
      <div className="followingInner">
        <div className="following-header">
          <h1>내 팔로잉 목록</h1>
          <div className="tab-container guide2" ref={tabContainerRef}>
            <div className="tab-scroll">
              {tabs.map((tab, index) => (
                <button
                  key={tab}
                  ref={(el) => (tabButtonRefs.current[index] = el)}
                  className={`tab-button ${activeTab === tab ? 'active' : ''}`}
                  onClick={() => handleTabClick(tab, index)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 리스트 영역 */}
      <div className="following-list-wrapper">
        <FollowingList data={getFilteredData()} />
      </div>
    </div>
  );
};

export default Following;
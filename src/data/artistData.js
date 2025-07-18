import aespaCover from '../assets/ArtistPage/asepa/artistCover-aespa.png';
import aespa_member1 from '../assets/ArtistPage/asepa/member1.png';
import aespa_member2 from '../assets/ArtistPage/asepa/member2.png';
import aespa_member3 from '../assets/ArtistPage/asepa/member3.png';
import aespa_member4 from '../assets/ArtistPage/asepa/member4.png';

export const artistData = {
  aespa: {
    name: 'aespa',
    coverImg: aespaCover,
    followColor: '#FF8031',
    memberImgs: [aespa_member1, aespa_member2, aespa_member3, aespa_member4],
    tabColor: '#FF8031',           // ✅ 탭 색상
    underlineColor: '#FF8031',     // ✅ 언더라인 색상
    inactiveColor: '#FFFFFF',      // ✅ 비활성 색상
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
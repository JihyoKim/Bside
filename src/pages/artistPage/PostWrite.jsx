import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './PostWrite.css';
import Header_Post from '../../components/Header_Post';
import PlaceSelectModal from '../../components/artistPage/PlaceSelectModal';

import imageIcon from '../../assets/symbol/imageIcon.svg';
import linkIcon from '../../assets/symbol/linkIcon.svg';
import locationIcon from '../../assets/symbol/locationIcon.svg';

const PostWrite = () => {
  const { artistId } = useParams();
  const navigate = useNavigate();

  const [text, setText] = useState('');
  const [content, setContent] = useState('');
  const [images, setImages] = useState([]);
  const [location, setLocation] = useState('');
  const [loadingLocation, setLoadingLocation] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [nearbyPlaces, setNearbyPlaces] = useState([]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 3) {
      alert('이미지는 최대 3장까지만 업로드할 수 있습니다.');
      return;
    }
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setImages(imageUrls);
  };

  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      alert('위치 정보를 지원하지 않는 브라우저입니다.');
      return;
    }

    setLoadingLocation(true);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        console.log('현재 위치:', latitude, longitude);
  
        const keywords = ['이젠아카데미', '맛집', '카페', '음식점', '편의점', '백화점'];
        let allResults = [];
  
        try {
          for (const keyword of keywords) {
            const res = await fetch(
              `https://dapi.kakao.com/v2/local/search/keyword.json?query=${encodeURIComponent(keyword)}&x=${longitude}&y=${latitude}&radius=1000&sort=distance`,
              {
                headers: {
                  Authorization: `KakaoAK 2d6b321d0bc57f4649a61c02eae64372`,
                },
              }
            );
  
            const data = await res.json();
            console.log(`[${keyword}] 결과 개수:`, data.documents.length);
            if (res.ok && data.documents) {
              allResults = allResults.concat(data.documents);
            }
          }
  
          // 중복 제거 (장소 id 또는 장소명 기준)
          const uniquePlaces = Array.from(
            new Map(allResults.map((place) => [place.id, place])).values()
          );
  
          if (uniquePlaces.length > 0) {
            setNearbyPlaces(uniquePlaces);
            setShowModal(true);
          } else {
            alert('주변 장소를 찾을 수 없습니다.');
          }
        } catch (e) {
          alert('장소 검색 중 오류 발생');
          console.error('에러 상세:', e);
        }
  
        setLoadingLocation(false);
      },
      (error) => {
        alert('위치 접근 실패: ' + error.message);
        setLoadingLocation(false);
      }
    );
  };

  const handleRemoveImage = (indexToRemove) => {
    const confirmed = window.confirm('이 이미지를 삭제하시겠습니까?');
    if (!confirmed) return;
  
    setImages((prevImages) =>
      prevImages.filter((_, index) => index !== indexToRemove)
    );
  };

  const handlePlaceSelect = (place) => {
    setLocation(place.place_name);
    setShowModal(false);
  };

  const handleSubmit = () => {
    if (!artistId || artistId === 'undefined') {
      alert('아티스트를 먼저 선택해주세요.');
      return;
    }

    if (!text) {
      alert('제목을 입력해주세요.');
      return;
    }
    
    if (!content) {
      alert('내용을 입력해주세요.');
      return;
    }

    const newPost = {
      id: Date.now(),
      nickname: '쥐들에곤히잠들다',
      time: '방금 전',
      profile: '/assets/mypage/profile.png',
      text,
      translatedText: '',
      content,
      translatedContent: '',
      images,
      location,
      likes: 0,
      comments: 0,
      showFollowButton: false,
      showInFanList: true,
    };

    navigate(`/main/artistPage/${artistId}/fan`, { state: { newPost } });
  };

  return (
    <>
      <Header_Post onSubmit={handleSubmit} />
      <div className="post-write-container">
        <div className="title-row guide3">
          <input
            type="text"
            placeholder="제목 입력"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="title-input"
          />
          <div className="icon-bar">
            <div className="guide">
              <label htmlFor="image-upload">
                <img src={imageIcon} alt="upload"guide />
              </label>
            </div>
            <input
              id="image-upload"
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
            <img src={linkIcon} alt="link" />
          </div>
        </div>
        <div className="title-underline" />

        <div className="preview-images">
          {images.map((img, idx) => (
            <img key={idx} src={img} alt={`preview-${idx}`} className="preview-img" onClick={() => handleRemoveImage(idx)}/>
          ))}

          {images.length > 0 && images.length < 3 && (
            <>
              <label htmlFor="additional-upload" className="add-image-button guide">+</label>
              <input
                id="additional-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  const files = Array.from(e.target.files);
                  const remaining = 3 - images.length;

                  if (files.length > remaining) {
                    alert(`이미지를 최대 ${remaining}장까지만 추가할 수 있습니다.`);
                    return;
                  }

                  const newImageUrls = files.map((file) => URL.createObjectURL(file));
                  setImages((prev) => [...prev, ...newImageUrls]);
                  e.target.value = null;
                }}
              />
            </>
          )}
        </div>

        <div className="location-bar" onClick={handleGetLocation}>
          <img src={locationIcon} alt="location" />
          {loadingLocation ? (
            <span>위치 가져오는 중...</span>
          ) : (
            <span className='guide'>{location ? location : '위치 추가'}</span>
          )}
        </div>

        <textarea
          placeholder="내용을 입력해주세요"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className={`content-textarea ${images.length > 0 ? 'with-image' : ''}`}
        />
      </div>

      {showModal && (
        <PlaceSelectModal
          places={nearbyPlaces}
          onSelect={handlePlaceSelect}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default PostWrite;

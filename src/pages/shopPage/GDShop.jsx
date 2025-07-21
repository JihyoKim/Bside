import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ArtistShop.css';

import bgGDragon from '../../assets/Shop/gdBg.png';
import searchIcon from '../../assets/symbol/search.svg';

// 🔽 상품 이미지들 (product1~24) 순서대로 import
import product1 from '../../assets/Shop/products/product1.png';
import product2 from '../../assets/Shop/products/product2.png';
import product3 from '../../assets/Shop/products/product3.png';
import product4 from '../../assets/Shop/products/product4.png';
import product5 from '../../assets/Shop/products/product5.png';
import product6 from '../../assets/Shop/products/product6.png';
import product7 from '../../assets/Shop/products/product7.png';
import product8 from '../../assets/Shop/products/product8.png';
import product9 from '../../assets/Shop/products/product9.png';
import product10 from '../../assets/Shop/products/product10.png';
import product11 from '../../assets/Shop/products/product11.png';
import product12 from '../../assets/Shop/products/product12.png';
import product13 from '../../assets/Shop/products/product13.png';
import product14 from '../../assets/Shop/products/product14.png';
import product15 from '../../assets/Shop/products/product15.png';
import product16 from '../../assets/Shop/products/product16.png';
import product17 from '../../assets/Shop/products/product17.png';
import product18 from '../../assets/Shop/products/product18.png';
import product19 from '../../assets/Shop/products/product19.png';
import product20 from '../../assets/Shop/products/product20.png';
import product21 from '../../assets/Shop/products/product21.png';
import product22 from '../../assets/Shop/products/product22.png';
import product23 from '../../assets/Shop/products/product23.png';
import product24 from '../../assets/Shop/products/product24.png';

const GDShop = () => {
  const navigate = useNavigate();

  const tagColor = '#FF92C2';
  const fontColor = '#000';
  const productFontColor = '#000';
  const activeFontColor = '#fff';
  const activeBackgroundColor = '#FF92C2';
  const inactiveBackgroundColor = '#fff';
  const titleBackgroundColor = '#3A3A3A';
  const priceColor = '#FF92C2';
  const soldOutBgColor = '#000';
  const soldOutTextColor = '#fff';

  const activeTag = 'G-Dragon';

  const buttons = [
    { name: 'G-Dragon', path: 'gdshop' },
    { name: 'ALLDAYPROJECT', path: 'adpshop' },
    { name: 'RIIZE', path: 'riizeshop' },
    { name: 'BLACKPINK', path: 'blackpinkshop' },
    { name: 'AESPA', disabled: true },
    { name: 'TWS', disabled: true },
    { name: 'BOYNEXTDOOR', disabled: true },
    { name: 'BABYMONSTER', disabled: true },
  ];

  const products = [
    { id: 1, name: '응원봉', image: product1, price: 58000, soldOut: true },
    { id: 2, name: '크래들', image: product2, price: 25000, soldOut: true },
    { id: 3, name: '크래들 커버', image: product3, price: 22000, soldOut: false },
    { id: 4, name: '넥커프 세트', image: product4, price: 20000, soldOut: false },
    { id: 5, name: '슬로건', image: product5, price: 15000, soldOut: true },
    { id: 6, name: '포토 티켓', image: product6, price: 7000, soldOut: true },
    { id: 7, name: '후디', image: product7, price: 119000, soldOut: true },
    { id: 8, name: '슬리퍼', image: product8, price: 55000, soldOut: true },
    { id: 9, name: '엽서 세트', image: product9, price: 20000, soldOut: true },
    { id: 10, name: '포스터 세트', image: product10, price: 18000, soldOut: true },
    { id: 11, name: '머그컵', image: product11, price: 22000, soldOut: true },
    { id: 12, name: '텀블러', image: product12, price: 33000, soldOut: true },
    { id: 13, name: '덕테이프', image: product13, price: 28000, soldOut: true },
    { id: 14, name: '메탈 뱃지', image: product14, price: 15000, soldOut: true },
    { id: 15, name: '러기지 택', image: product15, price: 29000, soldOut: true },
    { id: 16, name: '여권 케이스', image: product16, price: 35000, soldOut: true },
    { id: 17, name: '응원봉 데코', image: product17, price: 10000, soldOut: true },
    { id: 18, name: '스티커 세트', image: product18, price: 7000, soldOut: true },
    { id: 19, name: '볼캡', image: product19, price: 59000, soldOut: true },
    { id: 20, name: '롱 슬리브', image: product20, price: 89000, soldOut: true },
    { id: 21, name: '양말', image: product21, price: 15000, soldOut: true },
    { id: 22, name: '키캡 키링', image: product22, price: 20000, soldOut: true },
    { id: 23, name: '메탈 키링', image: product23, price: 22000, soldOut: true },
    { id: 24, name: '리유저블 백', image: product24, price: 15000, soldOut: true },
  ];

  const [visibleCount, setVisibleCount] = useState(8);
  const showMore = () => setVisibleCount((prev) => prev + 8);

  const buttonRows = [];
  for (let i = 0; i < buttons.length; i += 3) {
    buttonRows.push(buttons.slice(i, i + 3));
  }

  return (
    <div
      className="artist-shop"
      style={{
        backgroundImage: `url(${bgGDragon})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% auto',
        backgroundPosition: 'top',
        backgroundColor: '#fff',
        color: fontColor,
      }}
    >
      <div className="artist-shop-header">
        <h3>ARTIST MD</h3>
        <h1>SHOP</h1>

        <div className="search-bar">
          <input type="text" placeholder="상품명으로 검색하세요" />
          <img src={searchIcon} alt="검색" />
        </div>

        <div className="tag-buttons-wrapper">
          {buttonRows.map((row, rowIndex) => (
            <div className="tag-button-row" key={rowIndex}>
              {row.map((btn) => {
                const isActive = btn.name === activeTag;
                return (
                  <button
                    key={btn.name}
                    disabled={false}
                    className={`tag-btn ${isActive ? 'active' : ''}`}
                    style={{
                      borderColor: tagColor,
                      color: isActive ? activeFontColor : fontColor,
                      background: isActive ? activeBackgroundColor : inactiveBackgroundColor,
                      opacity: btn.disabled ? 0.3 : 1,
                      cursor: btn.disabled ? 'default' : 'pointer',
                    }}
                    onClick={() => {
                      if (btn.disabled) {
                        alert('준비 중입니다.');
                      } else {
                        navigate(`/main/shop/${btn.path}`);
                      }
                    }}
                  >
                    {btn.name}
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <div className="artist-product-list">
        <div className="product-title-box" style={{ backgroundColor: titleBackgroundColor }}>
          <h2 className="product-title" style={{ backgroundColor: 'transparent' }}>
            {activeTag.toUpperCase()}
          </h2>
        </div>
        <div className="product-grid">
          {products.slice(0, visibleCount).map((item) => (
            <div className="product-card" key={item.id}>
              <img src={item.image} alt={item.name} />
              <p className="product-name" style={{ color: productFontColor }}>{item.name}</p>
              <div className="product-meta">
                <span className="product-price" style={{ color: priceColor }}>
                  ₩ {item.price.toLocaleString()}
                </span>
                {item.soldOut && (
                  <span className="sold-out-badge" style={{
                    background: soldOutBgColor,
                    color: soldOutTextColor
                  }}>
                    SOLD OUT
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {visibleCount < products.length ? (
      <div className="shop-footer">
        <button className="load-more-btn" onClick={showMore}>
          더보기
        </button>
      </div>
    ) : (
      <div className="shop-footer">
        <button className="load-more-btn" onClick={() => setVisibleCount(8)}>
          접기
        </button>
      </div>
    )}
    </div>
  );
};

export default GDShop;

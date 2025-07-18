import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ArtistShop.css';

import bgGDragon from '../../assets/Shop/gdBg.png';
import searchIcon from '../../assets/symbol/search.svg';
import product1 from '../../assets/Shop/products/product1.png';
import product2 from '../../assets/Shop/products/product2.png';
import product3 from '../../assets/Shop/products/product3.png';
import product4 from '../../assets/Shop/products/product4.png';
import product5 from '../../assets/Shop/products/product5.png';
import product6 from '../../assets/Shop/products/product6.png';
import product7 from '../../assets/Shop/products/product7.png';
import product8 from '../../assets/Shop/products/product8.png';


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
    {
      id: 1,
      name: 'G-DRAGON 공식 응원봉',
      image: product1,
      price: 58000,
      soldOut: true,
    },
    {
      id: 2,
      name: 'G-DRAGON 공식 응원봉 크래들',
      image: product2,
      price: 25000,
      soldOut: true,
    },
    {
      id: 3,
      name: 'G-DRAGON 응원봉 크래들 커버 / G-DRAGON 2025 WORLD TOUR IN KOREA',
      image: product3,
      price: 22000,
      soldOut: false,
    },
    {
      id: 4,
      name: 'G-DRAGON 응원봉 넥커프 세트 / G-DRAGON 2025 WORLD TOUR IN KOREA',
      image: product4,
      price: 20000,
      soldOut: false,
    },
    {
      id: 5,
      name: 'G-DRAGON 슬로건 / G-DRAGON 2025 WORLD TOUR IN KOREA',
      image: product5,
      price: 15000,
      soldOut: true,
    },
    {
      id: 6,
      name: 'G-DRAGON 포토 티켓 / G-DRAGON 2025 WORLD TOUR IN KOREA',
      image: product6,
      price: 7000,
      soldOut: true,
    },
    {
      id: 7,
      name: 'G-DRAGON 후디 / G-DRAGON 2025 WORLD TOUR IN KOREA',
      image: product7,
      price: 119000,
      soldOut: true,
    },
    {
      id: 8,
      name: 'G-DRAGON 슬리퍼 / G-DRAGON 2025 WORLD TOUR IN KOREA',
      image: product8,
      price: 55000,
      soldOut: true,
    },

  ];

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
        <div
          className="product-title-box"
          style={{ backgroundColor: titleBackgroundColor }}
        >
          <h2 className="product-title"
            style={{ backgroundColor: 'transparent'}}>
            {activeTag.toUpperCase()}
          </h2>
        </div>
        <div className="product-grid">
          {products.map((item) => (
            <div className="product-card" key={item.id}>
              <img src={item.image} alt={item.name} />
              <p className="product-name"
                style={{ color: productFontColor }}>
                {item.name}
              </p>
              <div className="product-meta">
              <span className="product-price" style={{ color: priceColor }}>
                ₩ {item.price.toLocaleString()}
              </span>
                {item.soldOut && (
                  <span
                    className="sold-out-badge"
                    style={{
                      background: soldOutBgColor,
                      color: soldOutTextColor,
                    }}
                  >
                    SOLD OUT</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="shop-footer">
        <button className="load-more-btn">더보기</button>
      </div>
    </div>
  );
};

export default GDShop;

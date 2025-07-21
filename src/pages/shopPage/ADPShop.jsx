import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ArtistShop.css';

import bgADP from '../../assets/Shop/ADPbg.png';
import searchIcon from '../../assets/symbol/search.svg';
import productADP1 from '../../assets/Shop/products/productADP1.png';
import productADP2 from '../../assets/Shop/products/productADP2.png';
import productADP3 from '../../assets/Shop/products/productADP3.png';
import productADP4 from '../../assets/Shop/products/productADP4.png';
import productADP5 from '../../assets/Shop/products/productADP5.png';
import productADP6 from '../../assets/Shop/products/productADP6.png';

const ADPShop = () => {
  const navigate = useNavigate();

  const tagColor = '#FF92C2';
  const fontColor = '#fff';
  const productFontColor = '#fff';
  const activeFontColor = '#fff';
  const activeBackgroundColor = '#FF92C2';
  const inactiveBackgroundColor = 'rgba(0, 0, 0, 0.2)';
  const titleBackgroundColor = 'rgba(255, 255, 255, 0.4)';
  const priceColor = '#FF92C2';
  const soldOutBgColor = '#fff'; 
  const soldOutTextColor = '#000';

  const activeTag = 'ALLDAYPROJECT';

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
      name: '올데이프로젝트 PIN BUTTON SET [FAMOUS] OFFICIAL MERCH',
      image: productADP1,
      price: 12000,
      soldOut: false,
    },
    {
      id: 2,
      name: '올데이프로젝트 Debut Single [FAMOUS] BAND-AID',
      image: productADP2,
      price: 12000,
      soldOut: false,
    },
    {
      id: 3,
      name: '올데이프로젝트 The Debut Single [FAMOUS] 2P SET',
      image: productADP3,
      price: 41600,
      soldOut: false,
    },
    {
      id: 4,
      name: '올데이프로젝트 The Debut Single [FAMOUS] random',
      image: productADP4,
      price: 20800,
      soldOut: false,
    },
    {
      id: 5,
      name: '올데이프로젝트 Debut Single [FAMOUS] random (CARTOON ver.)',
      image: productADP5,
      price: 46500,
      soldOut: true,
    },
    {
      id: 6,
      name: '올데이프로젝트 Debut Single [FAMOUS] random (CARTOON ver.) 5P SET',
      image: productADP6,
      price: 9300,
      soldOut: false,
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
        backgroundImage: `url(${bgADP})`,
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
}

export default ADPShop

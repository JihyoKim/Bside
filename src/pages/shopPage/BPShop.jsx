import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ArtistShop.css';

import bgBlackPink from '../../assets/Shop/bgBlackPink.png';
import searchIcon from '../../assets/symbol/search.svg';
import productBP1 from '../../assets/Shop/products/productBP1.png';
import productBP2 from '../../assets/Shop/products/productBP2.png';
import productBP3 from '../../assets/Shop/products/productBP3.png';
import productBP4 from '../../assets/Shop/products/productBP4.png';
import productBP5 from '../../assets/Shop/products/productBP5.png';
import productBP6 from '../../assets/Shop/products/productBP6.png';
import productBP7 from '../../assets/Shop/products/productBP7.png';
import productBP8 from '../../assets/Shop/products/productBP8.png';

const BPShop = () => {
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

  const activeTag = 'BLACKPINK';

  const showLoadMore = false; 

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
      name: 'BLACKPINK X Murakami Lightstick Collaboration',
      image: productBP1,
      price: 68000,
      soldOut: false,
    },
    {
      id: 2,
      name: 'BLACPINK X STARBUCKS Keychain (limited edition)',
      image: productBP2,
      price: 21000,
      soldOut: false,
    },
    {
      id: 3,
      name: 'BLACKPINK X Kaikai Kiki Flower Keychain',
      image: productBP3,
      price: 35000,
      soldOut: false,
    },
    {
      id: 4,
      name: 'BLACKPINK 2nd VINYL LP [BORN PINK] LIMITED EDITION',
      image: productBP4,
      price: 60000,
      soldOut: false,
    },
    {
      id: 5,
      name: 'BLACKPINK 더 게임 OST [THE GIRLS] Reve ver. (DIGITAL VERSION)',
      image: productBP5,
      price: 13300,
      soldOut: true,
    },
    {
      id: 6,
      name: '[BLACKPINK game coupon card 컬렉션] 2025 BLACKPINK CHRISTMAS',
      image: productBP6,
      price: 22000,
      soldOut: true,
    },
    {
      id: 7,
      name: 'VOGUE JAPAN (JENNIE) : July [2023]',
      image: productBP7,
      price: 13600,
      soldOut: true,
    },
    {
      id: 8,
      name: 'Season’s Greetings: From HANK & ROSÉ To You [2024]',
      image: productBP8,
      price: 43000,
      soldOut: true,
    },
  ];

  const buttonRows = [];
  for (let i = 0; i < buttons.length; i += 3) {
    buttonRows.push(buttons.slice(i, i + 3));
  }

    // 상품 클릭 핸들러 추가
    const handleProductClick = (productId) => {
      navigate(`/main/shop/product/${productId}`);
    };

  return (
    <div
      className="artist-shop"
      style={{
        backgroundImage: `url(${bgBlackPink})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% auto',
        backgroundPosition: 'top',          
        backgroundColor: '#000', 
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
            <div 
              className="product-card clickable" 
              key={item.id}
              onClick={() => handleProductClick(item.id)}
            >
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
      {showLoadMore && (
        <div className="shop-footer">
          <button className="load-more-btn">더보기</button>
        </div>
      )}
    </div>
  );
}

export default BPShop

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ArtistShop.css';

import riizeBg from '../../assets/Shop/riizeBg.png';
import searchIcon from '../../assets/symbol/search.svg';
import productR1 from '../../assets/Shop/products/productR1.png';
import productR2 from '../../assets/Shop/products/productR2.png';
import productR3 from '../../assets/Shop/products/productR3.png';
import productR4 from '../../assets/Shop/products/productR4.png';
import productR5 from '../../assets/Shop/products/productR5.png';
import productR6 from '../../assets/Shop/products/productR6.png';
import productR7 from '../../assets/Shop/products/productR7.png';
import productR8 from '../../assets/Shop/products/productR8.png';

const RiizeShop = () => {
  const navigate = useNavigate();

  const tagColor = '#A6DAFE';
  const fontColor = '#fff';
  const productFontColor = '#000';
  const activeFontColor = '#000';
  const activeBackgroundColor = '#A6DAFE';
  const inactiveBackgroundColor = 'rgba(0, 0, 0, 0.2)';
  const titleBackgroundColor = 'rgba(0, 0, 0, 0.3)';
  const priceColor = '#A6DAFE';
  const soldOutBgColor = '#000';
  const soldOutTextColor = '#fff';

  const activeTag = 'RIIZE';

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
      name: '[Fanplee Special] RIIZE 2025 시즌그리팅(2025 SEASONS GREETINGS)',
      image: productR1,
      price: 45000,
      soldOut: true,
    },
    {
      id: 2,
      name: '[2025: THE CULTURE, THE FUTURE] (THE CULTURE Ver.)(한정판)',
      image: productR2,
      price: 68000,
      soldOut: true,
    },
    {
      id: 3,
      name: 'RIIZE FANPLEE LUCKY DRAW [1st STAGE to RIIZE Blu-ray ver]',
      image: productR3,
      price: 68000,
      soldOut: false,
    },
    {
      id: 4,
      name: '(FANPLEE LUCKY DRAW) RIIZE [1st STAGE to RIIZE Digital Code ver.]',
      image: productR4,
      price: 54000,
      soldOut: false,
    },
    {
      id: 5,
      name: 'RIIZE 정규 1집 [ODYSSEY] (PACKAGE Ver.) RANDOM',
      image: productR5,
      price: 20800,
      soldOut: true,
    },
    {
      id: 6,
      name: 'RIIZE 정규 1집 [ODYSSEY] (PHOTOBOOK Ver.) RANDOM',
      image: productR6,
      price: 14900,
      soldOut: true,
    },
    {
      id: 7,
      name: 'RIIZE - 정규 1집 [ODYSSEY] (SMini Ver.) RANDOM',
      image: productR7,
      price: 14100,
      soldOut: false,
    },
    {
      id: 8,
      name: '(FANPLEE LUCKY DRAW) RIIZE [1st STAGE to RIIZE] (BD+DC SET)',
      image: productR8,
      price: 122000,
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
        backgroundImage: `url(${riizeBg})`,
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
                        navigate(`/shop/${btn.path}`);
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
        <div className="product-title-box"
          style={{
            backgroundColor: titleBackgroundColor,
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
          }}>
          <h2 className="product-title"
            style={{ backgroundColor: 'transparent' }}>
            {activeTag.toUpperCase()}
          </h2>
        </div>
        <div className="product-grid">
          {products.map((item) => (
            <div className="product-card" key={item.id}>
              <img src={item.image} alt={item.name} />
              <p
                className="product-name"
                style={{ color: productFontColor }}
              >
                {item.name}
              </p>
              <div className="product-meta">
              <span className="product-price" style={{ color: priceColor }}>
                ₩ {item.price.toLocaleString()}
              </span>
                {item.soldOut && (
                  <span className="sold-out-badge"
                    style={{
                      background: soldOutBgColor,
                      color: soldOutTextColor,
                    }}>
                    SOLD OUT
                  </span>
                )}
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

export default RiizeShop;

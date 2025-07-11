import React from 'react';
import shopTempImg from '../assets/shop.png';

const ShopTemp = () => {
  return (
    <div style={{
        width: '100vw',
        minWidth: '320px',
        maxWidth: '480px',
    }}>
      <img src={shopTempImg} alt="Shop Temp. Img" style={{ width: '100%' }} />
    </div>
  );
};

export default ShopTemp;

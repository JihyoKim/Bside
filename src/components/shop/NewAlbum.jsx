import React from 'react';
import newAlbum from '../../assets/Shop/newAlbum.png';

const ShopTemp = () => {
  return (
    <div style={{
        width: '100vw',
        minWidth: '320px',
        maxWidth: '480px',
    }}>
      <img src={newAlbum} alt="Shop Temp. Img" style={{ width: '100%' }} />
    </div>
  );
};

export default ShopTemp;

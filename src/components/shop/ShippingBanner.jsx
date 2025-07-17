import React from 'react';
import { useLocation } from 'react-router-dom';
import shippingBanner from '../../assets/Shop/shippingBanner.png';

const ShippingBanner = () => {
  const location = useLocation();
  const isDarkModeShop =
    location.pathname.includes('/shop/adpshop') ||
    location.pathname.includes('/shop/blackpinkshop'); //추가시 || 추가

  return (
    <div
      style={{
        width: '100%',
        backgroundColor: isDarkModeShop ? '#000' : '#fff', 
        paddingBottom: '40px',
      }}
    >
      <img
        src={shippingBanner}
        alt="MD 배송 안내"
        style={{
          width: '100%',
          display: 'block',
        }}
      />
    </div>
  );
};

export default ShippingBanner;

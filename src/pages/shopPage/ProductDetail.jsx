import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProductDetail.css';
import ProductBottomBar from '../../components/shop/ProductBottomBar';
import PurchaseModal from '../../components/shop/PurchaseModal';

// 상품 이미지들 (BPShop.jsx와 동일한 경로)
import productBP1 from '../../assets/Shop/products/productBP1.png';
import productBP1a from '../../assets/Shop/products/productBP1a.png';
import productBP1b from '../../assets/Shop/products/productBP1b.png';
import productBP1c from '../../assets/Shop/products/productBP1c.png';
import productBP1d from '../../assets/Shop/products/productBP1d.png';


const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [isWishlist, setIsWishlist] = useState(false);
  const [showPurchaseModal, setShowPurchaseModal] = useState(false);

  // 상품 데이터 (실제로는 API에서 가져올 데이터)
  useEffect(() => {
    const productData = {
      1: {
        id: 1,
        name: 'BLACKPINK X Murakami Lightstick Collaboration',
        image: productBP1,
        price: 68000,
        soldOut: false, // 품절 해제!
        description: `BLACKPINK과 무라카미 다카시의 특별한 콜라보레이션 라이트스틱입니다.
        
아이코닉한 꽃 모티브와 BLACKPINK의 시그니처 핑크 컬러가 만나 탄생한 한정판 제품으로, 팬들에게 특별한 경험을 선사합니다.

고품질 LED 조명과 블루투스 연결 기능을 지원하여 콘서트에서 더욱 생생한 경험을 할 수 있습니다.`,
        specifications: [
          '크기: 약 255mm (길이)',
          '무게: 약 230g',
          '배터리: AAA 건전지 3개 (별도 구매)',
          '연결: 블루투스 4.0 이상',
          '소재: ABS, PC'
        ],
        images: [productBP1a, productBP1b, productBP1c,productBP1d] // 여러 이미지
      }
    };

    const currentProduct = productData[parseInt(productId)];
    if (currentProduct) {
      setProduct(currentProduct);
    }
  }, [productId]);

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleWishlistToggle = () => {
    setIsWishlist(!isWishlist);
  };

  const handlePurchaseClick = () => {
    if (product.soldOut) {
      alert('죄송합니다. 현재 품절된 상품입니다.');
      return;
    }
    setShowPurchaseModal(true);
  };

  const handleCartClick = () => {
    // 장바구니 추가 로직
    alert('장바구니에 추가되었습니다!');
  };

  const handleModalClose = () => {
    setShowPurchaseModal(false);
  };

  const handleOrderConfirm = (orderData) => {
    // 결제 페이지로 이동
    navigate('/main/shop/payment', {
      state: {
        product: product,
        quantity: orderData.quantity,
        totalPrice: product.price * orderData.quantity
      }
    });
  };

  if (!product) {
    return (
      <div className="product-detail-loading">
        <p>상품 정보를 불러오는 중...</p>
      </div>
    );
  }

  return (
    <div className="product-detail-container">
      {/* 헤더 */}
      {/* <div className="product-detail-header">
        <button className="back-button" onClick={handleGoBack}>
          ←
        </button>
      </div> */}

      {/* 상품 이미지 */}
      <div className="product-image-section">
        <div className="product-main-image">
          <img src={product.image} alt={product.name} />
        </div>
      </div>

      {/* 상품 정보 */}
      <div className="product-info-section">
        <h1 className="product-title">{product.name}</h1>
        <div className="product-price">
          ₩ {product.price.toLocaleString()}
        </div>
        
        {product.soldOut && (
          <div className="sold-out-badge">품절</div>
        )}

        <h3>Detail</h3>
        <p className="product-origin">Made in Korea</p>
      </div>

      {/* 상품 상세 이미지들 */}
      <div className="product-detail-images">
        {/* 첫 번째, 두 번째 이미지는 세로로 */}
        <img src={product.images[0]} alt="상품 상세 1" />
        <img src={product.images[1]} alt="상품 상세 2" />
        
        {/* 세 번째, 네 번째 이미지는 가로로 */}
        <div className="horizontal-images">
          <img src={product.images[2]} alt="상품 상세 3" />
          <img src={product.images[3]} alt="상품 상세 4" />
        </div>
      </div>

      {/* 상품 설명 */}
      <div className="product-description-section">
        <h3>상품상세 정보</h3>
        <div className="product-description">
          {product.description.split('\n').map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>

        <h3>제품 사양</h3>
        <ul className="product-specifications">
          {product.specifications.map((spec, index) => (
            <li key={index}>{spec}</li>
          ))}
        </ul>
      </div>

      {/* 하단 고정바 */}
      <ProductBottomBar
        isWishlist={isWishlist}
        onWishlistToggle={handleWishlistToggle}
        onCartClick={handleCartClick}
        onPurchaseClick={handlePurchaseClick}
        soldOut={product.soldOut}
      />

      {/* 구매 모달 */}
      {showPurchaseModal && (
        <PurchaseModal
          product={product}
          onClose={handleModalClose}
          onConfirm={handleOrderConfirm}
        />
      )}
    </div>
  );
};

export default ProductDetail;
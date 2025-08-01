import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Payment.css';

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product, quantity, totalPrice } = location.state || {};
  
  const [deliveryInfo, setDeliveryInfo] = useState({
    name: '김OO',
    address: '서울 동작구 OO동',
    detailAddress: '',
    phone: ''
  });

  // 배송 요청사항 관련 state 추가
  const [deliveryRequest, setDeliveryRequest] = useState('배송 전에 연락 주세요');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCustomInput, setIsCustomInput] = useState(false);
  
  const [bPoint, setBPoint] = useState({
    available: 1075,
    use: 0
  });
  
  const [paymentMethod, setPaymentMethod] = useState('');

  // 배송 요청사항 옵션들
  const deliveryOptions = [
    '문 앞에 놔주세요',
    '경비실에 맡겨주세요', 
    '택배함에 넣어주세요',
    '배송 전에 연락 주세요',
    '직접입력'
  ];

  const handleDeliveryOptionSelect = (option) => {
    if (option === '직접입력') {
      setIsCustomInput(true);
      setDeliveryRequest('');
    } else {
      setIsCustomInput(false);
      setDeliveryRequest(option);
    }
    setIsDropdownOpen(false);
  };

  const handleCustomInputChange = (e) => {
    setDeliveryRequest(e.target.value);
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  const handlePayment = () => {
    if (!paymentMethod) {
      alert('결제 방법을 선택해주세요.');
      return;
    }
    alert('결제가 완료되었습니다!');
    navigate('/main/shop');
  };

  const paymentMethods = [
    { id: 'bpay', name: 'b-pay', group: 'immediate' },
    { id: 'toss', name: '토스페이', group: 'immediate' },
    { id: 'kakao', name: '카카오페이', group: 'immediate' },
    { id: 'naver', name: '네이버페이', group: 'immediate' },
    { id: 'payco', name: 'PAYCO', group: 'immediate' },
    { id: 'apple', name: 'Apple Pay', group: 'immediate' },
    { id: 'wechat', name: 'Wechat', group: 'overseas' },
    { id: 'paypal', name: 'Paypal', group: 'overseas' },
    { id: 'card', name: '카드', group: 'other' },
    { id: 'phone', name: '휴대폰', group: 'other' }
  ];

  if (!product) {
    return (
      <div className="payment-loading">
        <p>결제 정보를 불러오는 중...</p>
        <button onClick={() => navigate('/main/shop')}>쇼핑몰로 돌아가기</button>
      </div>
    );
  }

  return (
    <div className="payment-container">
      <div className="payment-header">
        <button className="back-button" onClick={handleGoBack}>
          ←
        </button>
        <h1>구매하기</h1>
        <button className="close-button" onClick={() => navigate('/main/shop')}>
          ✕
        </button>
      </div>

      <div className="payment-content">
        {/* 상품 정보 */}
        <div className="product-info-card">
          <div className="product-card-inner">
            <img src={product.image} alt={product.name} />
            <div className="product-details">
              <h3>{product.name}</h3>
            </div>
          </div>
          <div className="order-summary">
                <div className="summary-row">
                  <span>주문 상품</span>
                  <span>수량</span>
                </div>
                <div className="summary-row price-row">
                  <span>₩ {product.price.toLocaleString()}</span>
                  <div className="quantity-display">
                    <button>-</button>
                    <span>{quantity || 1}</span>
                    <button>+</button>
                  </div>
                </div>
              </div>
        </div>

        {/* 구매자 정보 */}
        <div className="buyer-info-section">
          <h3>구매자 정보</h3>
          <div className="info-display">
            <p>{deliveryInfo.name}</p>
            <p>{deliveryInfo.address}</p>
            
            {/* 새로운 배송 요청사항 드롭다운 */}
            <div className="delivery-request-container guide">
              <div className="delivery-input-wrapper">
                <input 
                  type="text" 
                  value={deliveryRequest}
                  onChange={handleCustomInputChange}
                  className={`delivery-request-input ${isCustomInput ? 'custom-input' : 'preset-input'}`}
                  placeholder="배송 요청사항을 입력하세요"
                  readOnly={!isCustomInput}
                  onClick={() => !isCustomInput && setIsDropdownOpen(!isDropdownOpen)}
                />
                <button 
                  className="dropdown-arrow"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  type="button"
                >
                  <span className={`arrow ${isDropdownOpen ? 'open' : ''}`}>▼</span>
                </button>
              </div>
              
              {isDropdownOpen && (
                <div className="delivery-dropdown">
                  {deliveryOptions.map((option, index) => (
                    <div 
                      key={index}
                      className={`dropdown-option ${deliveryRequest === option ? 'selected' : ''}`}
                      onClick={() => handleDeliveryOptionSelect(option)}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* b.point 사용 */}
        <div className="bpoint-section">
          <h3>b.point 사용</h3>
          <div className="bpoint-info">
            <p>현재 잔액: {bPoint.available.toLocaleString()}원</p>
            <div className="bpoint-input">
              <input 
                type="number" 
                placeholder="전액 사용"
                value={bPoint.use || ''}
                onChange={(e) => setBPoint({...bPoint, use: parseInt(e.target.value) || 0})}
              />
            </div>
          </div>
        </div>

        {/* 결제 수단 */}
        <div className="payment-method-section">
          <h3>결제 수단</h3>
          
          <div className="payment-group">
            <label className="group-label">
              <input 
                type="radio" 
                name="paymentGroup" 
                value="immediate"
                checked={paymentMethods.filter(m => m.group === 'immediate').includes(paymentMethods.find(m => m.id === paymentMethod))}
                onChange={() => {}}
              />
              일반 결제
            </label>
            <div className="payment-options">
              {paymentMethods.filter(m => m.group === 'immediate').map(method => (
                <button
                  key={method.id}
                  className={`payment-option ${paymentMethod === method.id ? 'selected' : ''}`}
                  onClick={() => setPaymentMethod(method.id)}
                >
                  {method.name}
                </button>
              ))}
            </div>
          </div>

          <div className="payment-group">
            <label className="group-label">
              <input 
                type="radio" 
                name="paymentGroup" 
                value="overseas"
                checked={paymentMethods.filter(m => m.group === 'overseas').includes(paymentMethods.find(m => m.id === paymentMethod))}
                onChange={() => {}}
              />
              해외 결제
            </label>
            <div className="payment-options">
              {paymentMethods.filter(m => m.group === 'overseas').map(method => (
                <button
                  key={method.id}
                  className={`payment-option ${paymentMethod === method.id ? 'selected' : ''}`}
                  onClick={() => setPaymentMethod(method.id)}
                >
                  {method.name}
                </button>
              ))}
            </div>
          </div>

          <div className="payment-group">
            <label className="group-label">
              <input 
                type="radio" 
                name="paymentGroup" 
                value="other"
                checked={paymentMethods.filter(m => m.group === 'other').includes(paymentMethods.find(m => m.id === paymentMethod))}
                onChange={() => {}}
              />
              기타 결제
            </label>
            <div className="payment-options">
              {paymentMethods.filter(m => m.group === 'other').map(method => (
                <button
                  key={method.id}
                  className={`payment-option ${paymentMethod === method.id ? 'selected' : ''}`}
                  onClick={() => setPaymentMethod(method.id)}
                >
                  {method.name}
                </button>
              ))}
            </div>
          </div>

          <div className="installment-note">
            <button onClick={(e) => e.preventDefault()}><a href="#">+ 계좌 등록하고 200P 적립받기</a></button>
          </div>
        </div>

      </div>
      {/* 결제 버튼 */}
      <div className="payment-footer">
        <button 
          className="payment-submit-button guide"
          onClick={handlePayment}
        >
          결제하기
        </button>
      </div>
    </div>
  );
};

export default Payment;
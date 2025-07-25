import React from 'react';
import './PlaceSelectModal.css';

const PlaceSelectModal = ({ places, onSelect, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <h3>📍 주변 장소 선택</h3>
        <ul className="place-list">
          {places.map((place) => (
            <li key={place.id} onClick={() => onSelect(place)}>
              <strong>{place.place_name}</strong>
              <div className="address">{place.road_address_name || place.address_name}</div>
            </li>
          ))}
        </ul>
        <button className="close-button" onClick={onClose}>닫기</button>
      </div>
    </div>
  );
};

export default PlaceSelectModal;
import React from 'react';
import './TicketCard.css';

const TicketCard = ({ image, title, date, location }) => {
  return (
    <div className="ticket-card">
      <img src={image} alt={title} className="ticket-img" />
      <div className="ticket-info">
        <h3 className="ticket-title">{title}</h3>
        <p className="ticket-date">{date}</p>
        <p className="ticket-location">{location}</p>
      </div>
    </div>
  );
};

export default TicketCard;
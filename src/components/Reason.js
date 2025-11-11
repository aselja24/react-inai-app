import React from 'react';

export default function Reason({ icon, title, description }) {
  return (
    <div className="reason-card">
      <img src={icon} alt={title} className="reason-icon" />
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="reason-arrow">→</button>
    </div>
  );
}
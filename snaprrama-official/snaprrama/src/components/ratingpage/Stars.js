import React from 'react';
import { FaStar } from 'react-icons/fa';

export default function StarGroup({ stars, onStarClick }) {
  if (!stars) return null;

  return (
    <div>
      {stars.map((isFilled, index) => (
        <span key={index} onClick={() => onStarClick(index)}>
          <FaStar className="star" color={isFilled ? "#ffc107" : "#e4e5e9"} size={40}/>
        </span>
      ))}
    </div>
  );
}
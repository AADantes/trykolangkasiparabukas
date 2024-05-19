import React, { useState } from 'react';
import Stars from './Stars';

export default function Stargroup1({setScore}) {

const [stars, setStars] = useState(Array(5).fill(false));

  const handleStarClick = index => {
    const newStars = stars.map((_, i) => i <= index);
    setStars(newStars);

    const score = newStars.filter(isFilled => isFilled).length;
setScore(score)

  };
 
  return (
    <div>
      <h1>Customer Saticfaction</h1>
      <Stars stars = {stars} onStarClick={handleStarClick}/>
    </div>
  );
  
}



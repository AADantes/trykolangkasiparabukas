import React, { useState } from 'react';
import Stargroup1 from './Stargroup1';
import Stargroup2 from './Stargroup2';
import StarGroup3 from './Stargroup3';


export default function RatingCalc({totalScore}) {
  if (totalScore === null || totalScore === undefined) {
    return <div>No scores provided</div>;
  }

  return (
    <div>
      <p> Total Score: {totalScore} </p>
      
    </div>
  )
}

import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import RateSnappr from '../ratingpage/RateSnappr';


export default function SnapRank() {

  const rank = useSelector((state) => state.allRank.rank)
  console.log(rank);

  return (
    <div >
 
    <div className='RatingUI'>

    <RateSnappr/>
    
    <table className="ranking-table">
  <thead>
  <tr>
   <th>Snappr</th>
     <th>Rating</th>
      </tr>
     </thead>

     <tbody>
       {
  rank.map((rank) => {
    return(
      <tr>
        <td>{rank.Snappr}</td>
        <td>{rank.Rating}</td>

    </tr>
    )
})
}
 </tbody>
      </table>
    </div>

    </div>
  
  )
}

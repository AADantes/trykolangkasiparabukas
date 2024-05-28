import React from 'react'
import RateSnappr from '../ratingpage/RateSnappr'
import SnapRank from '../listpage/SnapRank'
import SnapDetails from './snapfront-components/SnapDetails'
import Navbar from './dashboard/Navbar'
import NavbarBottom from './dashboard/NavbarBottom'


export default function Snapfront() {
  return (
          <div className='mainfront'>
            <div className='mainfrontbgimage'>
             <Navbar/>
             <SnapDetails/>
             <NavbarBottom/>
            </div>
    </div>
  )
}

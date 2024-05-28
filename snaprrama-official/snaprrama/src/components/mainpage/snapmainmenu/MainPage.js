import React from 'react'
import MainPagebody from './Mainpagebody'
import Navbar2 from '../dashboard/Navbar2'

export default function MainPage() {
  return (
    <div>
      <div className='mainbg'>
        <Navbar2/>
        <MainPagebody/>
      </div>
    </div>
  )
}

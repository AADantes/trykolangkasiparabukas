import React from 'react'
import MainPagebody from './Mainpagebody'
import Navbar2 from '../dashboard/Navbar2'
import NavbarBottom from '../dashboard/NavbarBottom'

export default function MainPage() {
  return (
      <div className='mainbg'>
        <Navbar2/>
        <MainPagebody/>
        <NavbarBottom/>
      </div>
  )
}

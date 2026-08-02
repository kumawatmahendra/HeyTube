import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

function Body() {
  return (
    <div className='lex pt-16 sm:pt-20'>
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default Body
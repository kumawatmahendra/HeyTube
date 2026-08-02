import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

function Body() {
  return (
    <div className="flex pt-16 sm:pt-20 min-h-screen">
      <Sidebar />
      <div className="flex-1 overflow-x-hidden">
        <Outlet />
      </div>
    </div>
  )
}

export default Body
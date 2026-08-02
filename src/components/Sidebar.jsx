import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Sidebar() {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen)

  return !isMenuOpen ? null : (
    <div className='fixed md:static 
    top-14 left-0 
    h-[calc(100vh-3.5rem)] 
    w-70 
    p-5 shadow-lg bg-white 
    z-40 overflow-y-auto
  '>
      <ul>
        <li className='font-bold'>  <Link to="/">Home</Link> </li>
        <li className='font-bold'>Shorts</li>
      </ul>
      <h1 className='font-bold pt-5' >Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className='font-bold pt-5' >You</h1>
      <ul>
        <li>Your channel</li>
        <li>History</li>
        <li>Playlists</li>
        <li>Watch Later</li>
        <li>Liked videos</li>
        <li>Your videos</li>
        <li>Downloads</li>
      </ul>
      <h1 className='font-bold pt-5' >Explore</h1>
      <ul>
        <li>Shopping</li>
        <li>Live</li>
        <li>Courses</li>
        <li>Memberships</li>
      </ul>
    </div>
  )
}

export default Sidebar
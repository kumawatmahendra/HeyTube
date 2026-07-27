import React from 'react'
import { useSelector } from 'react-redux'

function Sidebar() {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen)

  return !isMenuOpen ? null : (
    <div className='p-5 shadow-lg w-48'>
      <h1 className='font-bold' >Home</h1>
      <h1 className='font-bold' >Shorts</h1>
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
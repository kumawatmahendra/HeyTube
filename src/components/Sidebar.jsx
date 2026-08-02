import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Sidebar() {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen)

  // Menu band ho to kuch mat dikhao
  if (!isMenuOpen) return null

  return (
    <div className="
      w-24 sm:w-56 
      flex-shrink-0 
      p-4 
      shadow-lg 
      bg-white 
      h-[calc(100vh-4rem)] 
      overflow-y-auto
      sticky top-16
    ">
      <ul>
        <li className="font-bold py-1">
          <Link to="/">Home</Link>
        </li>
        <li className="font-bold py-1">Shorts</li>
      </ul>

      <h1 className="font-bold pt-4">Subscriptions</h1>
      <ul>
        <li className="py-0.5">Music</li>
        <li className="py-0.5">Sports</li>
        <li className="py-0.5">Gaming</li>
        <li className="py-0.5">Movies</li>
      </ul>

      <h1 className="font-bold pt-4">You</h1>
      <ul>
        <li className="py-0.5">Your channel</li>
        <li className="py-0.5">History</li>
        <li className="py-0.5">Playlists</li>
        <li className="py-0.5">Watch Later</li>
        <li className="py-0.5">Liked videos</li>
        <li className="py-0.5">Your videos</li>
        <li className="py-0.5">Downloads</li>
      </ul>

      <h1 className="font-bold pt-4">Explore</h1>
      <ul>
        <li className="py-0.5">Shopping</li>
        <li className="py-0.5">Live</li>
        <li className="py-0.5">Courses</li>
        <li className="py-0.5">Memberships</li>
      </ul>
    </div>
  )
}

export default Sidebar
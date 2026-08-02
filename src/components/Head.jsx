import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utlis/appSlice'
import { YOUTUBE_SEARCH_API } from '../utlis/constants'
import { cacheResult } from '../utlis/searchSlice'
import { useNavigate } from 'react-router-dom'

function Head() {
  const [searchQuery, setSearchQuery] = useState("")
  const [suggestion, setSuggestions] = useState([])
  const [showSuggestions, setShowSuggestion] = useState(false)

  const searchCache = useSelector((store) => store.search)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!searchQuery.trim()) {
      setSuggestions([])
      return
    }

    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery])
      } else {
        getSearchSuggestions()
      }
    }, 200)

    return () => clearTimeout(timer)
  }, [searchQuery])

  const getSearchSuggestions = async () => {
    if (!searchQuery.trim()) return
  
    try {
      const data = await fetch(YOUTUBE_SEARCH_API + encodeURIComponent(searchQuery))
      const json = await data.json()
      setSuggestions(json[1] || [])
      dispatch(cacheResult({ [searchQuery]: json[1] || [] }))
    } catch (error) {
      console.log("Suggestion error:", error)
      setSuggestions([])
    }
  }

  const toggleMenuHandler = () => {
    dispatch(toggleMenu())
  }

  const handleSuggestionClick = (value) => {
    setSearchQuery(value)
    setShowSuggestion(false)
    setSuggestions([])
  }

  const handleSearch = () => {
    if (!searchQuery.trim()) return
    setShowSuggestion(false)
    console.log("Searching for:", searchQuery)
  }

  return (
    <div className="grid grid-flow-col items-center px-2 sm:px-4 py-2 shadow-md fixed top-0 left-0 right-0 z-50 bg-white h-16 sm:h-20">

      <div className="flex col-span-1 items-center gap-1">
        <img
          onClick={toggleMenuHandler}
          className="h-6 sm:h-7 cursor-pointer"
          alt="Menu"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvQyG-DTVCNRzdrHehKjeC_vD102dzQwX2cYBgSWGH_g&s=10"
        />
        <a href="/">
          <img
            className="h-14 sm:h-16 md:h-20 mx-1 object-contain"
            alt="Logo"
            src="https://images.seeklogo.com/logo-png/31/2/youtube-2017-logo-png_seeklogo-316124.png"
          />
        </a>
      </div>

      <div className="col-span-10 flex justify-center items-center relative">
        <div className="flex items-center w-[55%] sm:w-[60%] md:w-[50%] max-w-xl">
          <input
            className="w-full border border-gray-400 px-3 sm:px-4 py-1.5 sm:py-2 rounded-l-full outline-none text-sm"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setTimeout(() => setShowSuggestion(false), 200)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch()
            }}
          />
          <button
            onClick={handleSearch}
            className="border border-gray-400 border-l-0 px-3 sm:px-5 py-1 sm:py-1.5 bg-gray-100 rounded-r-full hover:bg-gray-200"
          >
            🔍
          </button>
        </div>

        {showSuggestions && suggestion.length > 0 && (
          <div className="absolute top-11 bg-white shadow-lg rounded-lg py-2 border w-[70%] max-w-xl z-50">
            <ul>
              {suggestion.map((e) => (
                <li
                  key={e}
                  onMouseDown={() => handleSuggestionClick(e)}  // onClick se better
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  🔍 {e}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-1 flex justify-end items-center">
        <img
          className="h-8 w-8 sm:h-10 sm:w-10 rounded-full cursor-pointer object-cover"
          alt="user"
          src="https://i.pinimg.com/236x/03/eb/d6/03ebd625cc0b9d636256ecc44c0ea324.jpg"
        />
      </div>
    </div>
  )
}

export default Head
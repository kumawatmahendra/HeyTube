import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utlis/appSlice'
import { YOUTUBE_SEARCH_API } from '../utlis/constants';
import { cacheResult } from '../utlis/searchSlice';

function Head() {
  const [searchQuery, setSearchQuery] = useState("")
  const [suggestion, setSuggestions] = useState([])
  const [showSuggestions, setShowSuggestion] = useState(false)
  const searchCache = useSelector((store) => store.search)
  const dispatch = useDispatch();

  useEffect(() => {
    setSearchQuery(searchQuery)
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery])
      } else { getSearchSuggestions() }
    }, 200)
    return () => {
      clearTimeout(timer)
    }
  }, [searchQuery])

  const getSearchSuggestions = async () => {
    // console.log("api call " + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery)
    const json = await data.json()
    setSuggestions(json[1])

    //update cache
    dispatch(
      cacheResult({
        [searchQuery]: json[1]
      }))
  }



  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }
  return (
    <div className='grid grid-flow-col p-2 shadow-md fixed top-0 left-0 right-0 z-50 bg-white'>
      <div className='flex col-span-1 items-center'>
        <img
          onClick={() => toggleMenuHandler()}
          className='h-8 cursor-pointer'
          alt="Menu"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvQyG-DTVCNRzdrHehKjeC_vD102dzQwX2cYBgSWGH_g&s=10"
        />
        <a href="/">
          <img
            className='h-20  mx-2 '
            alt="Logo"
            src="./src/assets/Logo.png"
          />
        </a>
      </div>
      <div className="col-span-10 flex justify-center items-center relative">
        <div className="flex items-center w-1/2 max-w-xl">
          <input
            className="w-full border border-gray-400 px-4 py-1.5 rounded-l-full outline-none text-sm"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setTimeout(() => setShowSuggestion(false), 200)}
          />
          <button className="border border-gray-400 border-l-0 px-5 py-1.5 h-8.5 bg-gray-100 rounded-r-full hover:bg-gray-200">
            🔍
          </button>
        </div>

        {showSuggestions && suggestion.length > 0 && (
          <div className="absolute top-10 bg-white shadow-lg rounded-lg py-2 border border-gray-100 w-[22rem] z-50">
            <ul>
              {suggestion.map((e) => (
                <li
                  key={e}
                  className="px-4 py-2  hover:bg-gray-100 cursor-pointer flex items-center gap-2"
                >
                  🔍 {e}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className='col-span-1 items-center'>
        <img
          className='h-12'
          alt="user"
          src="https://i.pinimg.com/236x/03/eb/d6/03ebd625cc0b9d636256ecc44c0ea324.jpg" />
      </div>
    </div>
  )
}

export default Head
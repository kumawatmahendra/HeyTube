import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utlis/appSlice'
import { YOUTUBE_SEARCH_API } from '../utlis/constants';

function Head() {
  const [searchQuery, setSearchQuery] = useState("")
  const [suggestion, setSuggestions] = useState([])
  const [showSuggestions, setShowSuggestion] = useState(false)

  useEffect(() => {
    setSearchQuery(searchQuery)
    const timer = setTimeout(() => { getSearchSuggestions() }, 200)

    return () => {
      clearTimeout(timer)
    }
  }, [searchQuery])

  const getSearchSuggestions = async () => {
    console.log("api call " + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery)
    const json = await data.json()
    setSuggestions(json[1])
  }

  const dispatch = useDispatch();

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
            className='h-18  mx-2 '
            alt="Logo"
            src="./src/assets/Logo.png"
          />
        </a>
      </div>
      <div
        className="col-span-10 px-10 justify-center ">
        <div>
          <input
            className='w-1/2  items-center border border-gray-400 p-2 rounded-l-full ' type="text" placeholder='Search'
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          />
          <button className='border   border-gray-400 px-5 py-2 bg-gray-100 rounded-r-full' onClick={""}>🔍</button>
        </div>
        {showSuggestions && (
          <div className=" fixed bg-white shadow-lg rounded-lg py-2 px-3 border border-gray-100 w-[30rem]">
            <ul>
              {suggestion.map((e) => (
                <li key={e}
                  className='py-2  shadow-sm hover:bg-gray-100'>
                  🔍 {e}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className='col-span-1 items-center'>
        <img
          className='h-12'
          alt="user"
          src="https://t4.ftcdn.net/jpg/12/49/12/63/360_F_1249126338_leS5yTD2NdGuTra86mGyq9heEAxLbX5O.jpg" />
      </div>
    </div>
  )
}

export default Head
import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utlis/appSlice'

function Head() {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }
  return (
    <div className='grid grid-flow-col p-2 m-2 shadow-lg '>
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
        <input className='w-1/2  items-center border border-gray-400 p-2 rounded-l-full ' type="text" />
        <button className='border  border-gray-400 px-5 py-2 bg-gray-100 rounded-r-full'>🔍</button>
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
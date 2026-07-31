import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utlis/appSlice'
import { useSearchParams } from 'react-router-dom'
import CommentsContainer from './CommentsContainer'
import SubscribeSection from './SubscribeSection'
import LiveChat from './LiveChat'

function WatchPage() {
  const [searchParams] = useSearchParams()
  console.log(searchParams.get("v"));

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(closeMenu())
  }, [])
  return (
    <div className='flex flex-col w-full pt-1'>
      <div className='flex px-5 pt-3  w-full'>
        <div>
          <iframe
            width="1000"
            height="600"
            src={`https://www.youtube.com/embed/${searchParams.get("v")}?controls=1`}
            title="YouTube video player"
            frameBorder=""
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
        <div className='w-full'>
          <LiveChat />
        </div>
      </div>
      <SubscribeSection />
      <CommentsContainer />
    </div>


  )
}

export default WatchPage
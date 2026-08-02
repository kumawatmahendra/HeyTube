import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utlis/appSlice'
import { useSearchParams } from 'react-router-dom'
import CommentsContainer from './CommentsContainer'
import SubscribeSection from './SubscribeSection'
import LiveChat from './LiveChat'

function WatchPage() {
  const [searchParams] = useSearchParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(closeMenu())
  }, [])

  return (
    <div className="w-full px-2 sm:px-4">
      <div className="flex flex-col lg:flex-row gap-4">

        {/* Video + Subscribe */}
        <div className="w-full lg:w-[65%]">
          <div className="relative w-full aspect-video mb-2">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src={`https://www.youtube.com/embed/${searchParams.get("v")}?controls=1`}
              title="YouTube video player"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
          <SubscribeSection />

          {/* Desktop: comments yahan */}
          <div className="hidden lg:block">
            <CommentsContainer />
          </div>
        </div>

        {/* LiveChat */}
        <div className="w-full lg:w-[35%]">
          <LiveChat />
        </div>
      </div>

      {/* Mobile: comments chat ke baad */}
      <div className="block lg:hidden">
        <CommentsContainer />
      </div>
    </div>
  )
}

export default WatchPage
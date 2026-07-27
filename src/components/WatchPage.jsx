import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utlis/appSlice'
import { useSearchParams } from 'react-router-dom'

function WatchPage() {
  const [searchParams] = useSearchParams()
  console.log(searchParams.get("v"));

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(closeMenu())
  }, [])
  return (
    <div>
      <iframe
        width="1200"
        height="500"
        src={`https://www.youtube.com/embed/${searchParams.get("v")}?controls=1`}
        title="YouTube video player"
        frameBorder="0"
        allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  )
}

export default WatchPage
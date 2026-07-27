import React, { useEffect, useState } from 'react'
import { HEYTUBE_VIDEO_API } from '../utlis/constants'
import VideoCards from './VideoCards'

function VideoConatianer() {
  const [video, setVideo] = useState([])
  useEffect(() => {
    getVideo()
  }, [])

  const getVideo = async () => {
    const data = await fetch(HEYTUBE_VIDEO_API)
    const json = await data.json()
    setVideo(json.items)
  }

  return (
    <div><VideoCards info={video[0]} /></div>
  )
}

export default VideoConatianer
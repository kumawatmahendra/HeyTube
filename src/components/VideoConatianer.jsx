import React, { useEffect, useState } from 'react'
import { HEYTUBE_VIDEO_API } from '../utlis/constants'
import VideoCards from './VideoCards'
import { Link } from 'react-router-dom'

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
    <div className='flex flex-wrap'>
      {video.map((video) => (
        <Link to={"/watch?v=" + video.id}>
          <VideoCards key={video.id} info={video} />
        </Link>))}
    </div>
  )
}

export default VideoConatianer
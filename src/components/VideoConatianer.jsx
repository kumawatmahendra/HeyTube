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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 p-2 sm:p-4">
      {video.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCards info={video} />
        </Link>
      ))}
    </div>
  )
}

export default VideoConatianer
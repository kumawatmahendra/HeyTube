import React from 'react'

function VideoCards({ info }) {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  const { viewCount } = statistics
  return (
    <div className='p-2 m-2 w-72 h-full  rounded-lg shadow  hover:bg-gray-3ff00 '>
      <img className='rounded-lg font-bold ' src={thumbnails.medium.url} alt='thumbnail' />
      <ul>
        <li className='font-bold py-2'>{title}</li>
        <li>{channelTitle}</li>
        <li>{viewCount} views</li>
      </ul>
    </div>
  )
}

export default VideoCards
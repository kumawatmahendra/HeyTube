import React from 'react'
import { formatViews } from '../utlis/helper'

function VideoCards({ info }) {
  const { snippet, statistics } = info
  const { channelTitle, title, thumbnails } = snippet
  const { viewCount } = statistics

  return (
    <div className="p-1 sm:p-2 w-full cursor-pointer hover:bg-gray-50 rounded-lg">
      <img
        className="rounded-xl w-full aspect-video object-cover"
        src={thumbnails.medium.url}
        alt="thumbnail"
      />
      <div className="mt-2 px-1">
        <h3 className="font-semibold text-sm sm:text-base line-clamp-2 leading-snug">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-gray-600 mt-1">{channelTitle}</p>
        <p className="text-xs sm:text-sm text-gray-500">
          {formatViews(viewCount)} views
        </p>
      </div>
    </div>
  )
}

export default VideoCards
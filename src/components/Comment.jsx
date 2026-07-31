import React from 'react'

const Comment = ({ data }) => {
  const { name, text } = data
  const randomImage = `https://i.pravatar.cc/150?u=${name}`

  return (
    <div className="flex shadow-sm bg-gray-100 rounded-2xl my-2 p-2">
      <img
        className="w-10 h-10 rounded-full object-cover"
        src={randomImage}
        alt={name}
      />
      <div className="px-3">
        <p className="font-bold text-sm">{name}</p>
        <p className="text-sm">{text}</p>
      </div>
    </div>
  )
}

export default Comment
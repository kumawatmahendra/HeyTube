import React from 'react'

function ChatMassage({ name, massage }) {
  // name ke basis pe unique image (same name = same image)
  const randomImage = `https://i.pravatar.cc/150?u=${name}`

  return (
    <div className='flex items-center shadow p-2'>
      <img
        className='h-8 w-8 rounded-full object-cover'
        alt={name}
        src={randomImage}
      />
      <span className='font-bold px-2 text-sm'>{name}</span>
      <span className='text-sm'>{massage}</span>
    </div>
  )
}

export default ChatMassage
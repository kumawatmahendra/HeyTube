import { useState } from 'react'

function SubscribeSection() {
  const [subscribe, setSubscribe] = useState("Subscribe")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [likeCount] = useState(Math.floor(Math.random() * 200))

  const handleSubscribe = () => {
    setIsSubscribed(!isSubscribed)
    setSubscribe(isSubscribed ? "Subscribe" : "Subscribed")
  }
  return (
    <>
      <h1 className='text-2xl font-bold pl-4 pt-2'>How to make Heytube in React </h1>

      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row items-center gap-3 pt-3 pl-3">
          <img
            src="https://yt3.ggpht.com/Dnh4i4XEyVSDeWEfKyGl8eatLQeuBE8nPL6nL7UsnuYrgjlef--Co2aeyyxnqLyLBoq_6_d7=s88-c-k-c0x00ffffff-no-rj"
            alt="img"
            className="w-10 h-10 rounded-full cursor-pointer"
          />
          <div className="font-bold cursor-pointer">Your TV</div>

          <button
            onClick={handleSubscribe}
            className={`
        px-4 py-1.5 rounded-full text-sm font-medium cursor-pointer
        transition-all duration-300 ease-in-out
        ${isSubscribed
                ? "bg-red-600 text-white hover:bg-red-700"
                : "bg-gray-200 text-black hover:bg-gray-300"

              }
        active:scale-95
      `}
          >
            {subscribe}
          </button>
        </div>

        <div className="flex flex-row gap-3 pt-3 pr-4">

          <div className="flex items-center bg-gray-200 rounded-full overflow-hidden">
            <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-300 transition cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z" />
              </svg>
              <span className="text-sm font-medium">{likeCount}K</span>
            </button>

            <div className="w-[1px] h-6 bg-gray-400"></div>

            <button className="flex items-center px-4 py-2 hover:bg-gray-300 transition cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                <path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z" />
              </svg>
            </button>
          </div>

          <button className="bg-gray-200 hover:bg-gray-300 rounded-full py-2 px-4 cursor-pointer text-sm font-medium transition">
            Share
          </button>

          <button className="bg-gray-200 hover:bg-gray-300 rounded-full py-2 px-3 cursor-pointer transition">
            ⋯
          </button>
        </div>
      </div>
    </>
  )
}

export default SubscribeSection
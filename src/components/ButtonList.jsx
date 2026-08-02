import React from 'react'
import Button from './Button'

function ButtonList() {
  const buttons = ["All", "Music", "News", "Thrillers", "Live", "Gaming", "Podcasts", "Web series", "Drama", "Cricket", "Cooking"]

  return (
    <div className="flex gap-2 px-2 sm:px-4 py-2 overflow-x-auto scrollbar-hide">
      {buttons.map((btn) => (
        <div key={btn} className="flex-shrink-0">
          <Button name={btn} />
        </div>
      ))}
    </div>
  )
}

export default ButtonList
import React from 'react'
import Button from './Button'
function ButtonList() {
  return (
    <div className='flex m-2'>
      <Button name="All" />
      <Button name="Music" />
      <Button name="News" />
      <Button name="Thrillers" />
      <Button name="Live" />
      <Button name="Gaming" />
      <Button name="Podcasts" />
      <Button name="Web series" />
      <Button name="Drama" />
      <Button name="Cricket" />
      <Button name="Cooking" />
    </div>
  )
}

export default ButtonList
import React, { useState } from 'react'
import './Title.scss'

export const Title = () => {
  const [showHeader, setShowHeader] = useState(false)

  return (
    <div className={showHeader ? 'modalsheet active' : 'modalsheet'}>
      <h1 className='modalsheet--title'>Аренда мототехники</h1>
      <div
        className='modalsheet--border'
        onClick={() => setShowHeader(!showHeader)}></div>
    </div>
  )
}

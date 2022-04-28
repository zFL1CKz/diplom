import React, { useEffect } from 'react'
import { Info } from '../Info/Info'
import './ChooseCard.scss'

export const ChooseCard = ({ currentScreen, item }) => {
  return (
    <div>
      <Info item={item} currentScreen={currentScreen} />

      <img src={item.image} alt='' className='choose__img' />
      <span>{item.name}</span>
    </div>
  )
}

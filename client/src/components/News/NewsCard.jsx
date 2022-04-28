import React from 'react'

import './NewsCard.scss'

export const NewsCard = (props) => {
  return (
    <div className='container'>
      <div className='news__wrapper'>
        <img src={props.img} alt='News' className='news__img' />
        <span className='news__text'>{props.text}</span>
      </div>
    </div>
  )
}

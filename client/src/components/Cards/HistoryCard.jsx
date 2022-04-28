import React from 'react'
import './HistoryCard.scss'

export const HistoryCard = ({ item }) => {
  const dateOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }

  return (
    <div className='races__item'>
      <div className='races__date'>
        {new Date(item.fromDate)
          .toLocaleDateString('default', dateOptions)
          .slice(0, -3)}
      </div>
      <div className='races__price' style={{ textAlign: 'right' }}>
        <span>{item.pay}</span> <span className='races__price_symbol'>₽</span>
      </div>
      <div className='races__moto'>{item.moto.name}</div>
      <div className='races__group'>
        <div className='races__time'>{item.time} мин.</div>
        <div className='races__rate'>&nbsp;Тариф "{item.rate.name}"</div>
      </div>
    </div>
  )
}

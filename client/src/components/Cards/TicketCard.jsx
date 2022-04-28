import React from 'react'
import './TicketCard.scss'

export const TicketCard = ({ item }) => {
  const dateOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }

  return (
    <div>
      <div className='ticket__item'>
        <div className='ticket__item--grid'>
          <div className='ticket__date'>
            {new Date(item.date)
              .toLocaleString('default', dateOptions)
              .slice(0, -3)}
          </div>
          <div className='ticket__price'>
            <span>{item.price}</span>{' '}
            <span className='ticket__price_symbol'>₽</span>
          </div>
          <div className='ticket__moto'>{item.moto.name}</div>
          <div className='ticket__reason'>{item.reason}</div>
        </div>

        <div
          className={
            item.status === 'Оплачен'
              ? 'ticket__status green'
              : 'ticket__status red'
          }>
          {item.status}
        </div>
      </div>
    </div>
  )
}

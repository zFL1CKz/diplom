import React from 'react'
import payIcon from '../../img/icons/trip--pay.svg'
import './RateCard.scss'

export const RateCard = ({ item }) => {
  function checkDiscount(discount) {
    if (discount === 0) return
    else return `-${discount}%`
  }

  return (
    <>
      <div className='rate__group'>
        <div className='rate__title'>{item.name}</div>
        <div className='rate__discount'>{checkDiscount(item.discount)}</div>
      </div>

      <div className='rate__group'>
        <div className='rate__img'>
          <img src={payIcon} alt='' />
        </div>
        <div>
          <div className='rate__price'>{item.price}</div>
          <div className='rate__desc'>{item.desc}</div>
        </div>
      </div>
    </>
  )
}

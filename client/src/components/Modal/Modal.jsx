import React from 'react'

import './Modal.scss'

export const Modal = ({ active, setActive, currentScreen, children }) => {
  return (
    <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
      <div className={`modal__content ${currentScreen !== undefined && 'modal--moto'}`} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
      <div
        className='modal__overlay'
        onClick={(e) => {
          e.stopPropagation()
          setActive(false)
        }}></div>
    </div>
  )
}

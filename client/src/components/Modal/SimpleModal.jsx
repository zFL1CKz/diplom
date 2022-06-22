import React from 'react'

import './SimpleModal.scss'

export const SimpleModal = ({ active, setActive, children }) => {
  return (
    <div className={active ? 'simpleModal active' : 'simpleModal'} onClick={() => setActive(false)}>
      <div className='simpleModal__content' onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
      <div className='simpleModal__overlay'></div>
    </div>
  )
}

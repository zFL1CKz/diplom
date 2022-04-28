import React, { useState } from 'react'
import { Back } from '../Back/Back'
import { FAQModal } from '../Modal/FAQModal'
import './FAQ.scss'

export const FAQ = () => {
  const [modalActive, setModalActive] = useState(false)
  const [modalItem, setModalItem] = useState(1)

  return (
    <div className='faq'>
      <div
        className='faq__item'
        onClick={() => {
          setModalItem(1)
          setModalActive(true)
        }}>
        <div className='faq__num'>1</div>
        <div className='faq__text'>Как начать пользоваться приложением?</div>
      </div>

      <div
        className='faq__item'
        onClick={() => {
          setModalItem(2)
          setModalActive(true)
        }}>
        <div className='faq__num'>2</div>
        <div className='faq__text'>Какой мотоцикл выбрать новичку?</div>
      </div>

      <div
        className='faq__item'
        onClick={() => {
          setModalItem(3)
          setModalActive(true)
        }}>
        <div className='faq__num'>3</div>
        <div className='faq__text'>Искусство управления мотоциклом</div>
      </div>
      <FAQModal
        setActive={setModalActive}
        active={modalActive}
        item={modalItem}
      />
    </div>
  )
}

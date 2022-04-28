import React, { useEffect, useState } from 'react'
import infoImg from '../../img/icons/info.svg'
import { Back } from '../../components/Back/Back'
import { Modal } from '../Modal/Modal'
import './Info.scss'

import specs0 from '../../img/specs/specs0.svg'
import specs1 from '../../img/specs/specs1.svg'
import specs2 from '../../img/specs/specs2.svg'
import specs3 from '../../img/specs/specs3.svg'
import specs4 from '../../img/specs/specs4.svg'
import specs5 from '../../img/specs/specs5.svg'

export const Info = ({ currentScreen, item }) => {
  const [modalActive, setModalActive] = useState(false)

  useEffect(() => {
    if (modalActive) document.querySelector('body').classList.add('body--block')
    else document.querySelector('body').classList.remove('body--block')
  }, [modalActive])

  return (
    <div>
      <div
        className='info__wrapper'
        onClick={(e) => {
          e.stopPropagation()
          setModalActive(true)
        }}>
        <img src={infoImg} alt='' />
      </div>

      {currentScreen === 1 && (
        <Modal setActive={setModalActive} active={modalActive}>
          <div className='modal__group'>
            <div onClick={() => setModalActive(false)}>
              <Back />
            </div>
            <div className='modal__title'>{item.name}</div>
          </div>
          <div className='modal__img'>
            <img src={item.info.image} alt='' />
          </div>
          <div className='modal__desc'>{item.info.desc}</div>
        </Modal>
      )}

      {currentScreen === 2 && (
        <Modal
          setActive={setModalActive}
          active={modalActive}
          currentScreen={currentScreen}>
          <div className='modal__group'>
            <div onClick={() => setModalActive(false)}>
              <Back />
            </div>
            <div className='modal__title'>Характеристики</div>
          </div>
          <div className='modal__moto_group'>
            <div>
              <div className='modal__moto_title'>{item.name}</div>
              <div className='modal__moto_class'>{item.class.name}</div>
            </div>
            <img src={item.image} alt='' className='modal__moto' />
          </div>
          <div className='more__grid more__grid_specs'>
            <div className='more__group'>
              <div className='trip__img'>
                <img src={specs0} alt='' className='modal__moto_img' />
              </div>
              <div className='more__specs'>
                <div className='more__specs_title'>Объем двигателя:</div>
                <div className='more__specs__num'>{item.specs[0]} см3</div>
              </div>
            </div>

            <div className='more__group'>
              <div className='trip__img'>
                <img src={specs3} alt='' className='modal__moto_img' />
              </div>
              <div className='more__specs'>
                <div className='more__specs_title'>Объем бака:</div>
                <div className='more__specs__num'>{item.specs[3]} л.</div>
              </div>
            </div>

            <div className='more__group'>
              <div className='trip__img'>
                <img src={specs1} alt='' className='modal__moto_img' />
              </div>
              <div className='more__specs'>
                <div className='more__specs_title'>Мощность:</div>
                <div className='more__specs__num'>{item.specs[1]} л.с.</div>
              </div>
            </div>

            <div className='more__group'>
              <div className='trip__img'>
                <img src={specs4} alt='' className='modal__moto_img' />
              </div>
              <div className='more__specs'>
                <div className='more__specs_title'>Масса:</div>
                <div className='more__specs__num'>{item.specs[4]} кг</div>
              </div>
            </div>

            <div className='more__group'>
              <div className='trip__img'>
                <img src={specs2} alt='' className='modal__moto_img' />
              </div>
              <div className='more__specs'>
                <div className='more__specs_title'>Макс. скорость:</div>
                <div className='more__specs__num'>{item.specs[2]} км/ч</div>
              </div>
            </div>

            <div className='more__group'>
              <div className='trip__img'>
                <img src={specs5} alt='' className='modal__moto_img' />
              </div>
              <div className='more__specs'>
                <div className='more__specs_title'>Расход топлива:</div>
                <div className='more__specs__num'>
                  {item.specs[5]} л. на 100 км
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
      {currentScreen === 3 && (
        <Modal
          setActive={setModalActive}
          active={modalActive}
          currentScreen={currentScreen}>
          <div className='modal__group'>
            <div onClick={() => setModalActive(false)}>
              <Back />
            </div>
            <div className='modal__title'>{item.name}</div>
          </div>
          <div className='modal__img'>
            <img src={item.info.image} alt='' />
          </div>
          <div className='modal__desc'>{item.info.desc}</div>
        </Modal>
      )}
    </div>
  )
}

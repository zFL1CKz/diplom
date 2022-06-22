import React from 'react'
import { useHistory } from 'react-router-dom'

import specs0 from '../../img/specs/specs0.svg'
import specs1 from '../../img/specs/specs1.svg'
import specs2 from '../../img/specs/specs2.svg'
import specs3 from '../../img/specs/specs3.svg'
import specs4 from '../../img/specs/specs4.svg'
import specs5 from '../../img/specs/specs5.svg'

import '../../pages/MainPage/MainPage.scss'
import './SearchCard.scss'

export const SearchCard = ({ item }) => {
  const history = useHistory()

  return (
    <div
      className='search__item'
      onClick={() => {
        const obj = [item.class, item]
        history.push('/newtrip', obj)
      }}>
      <div className='search__group'>
        <div>
          <div className='search__title'>{item.name}</div>
          <div className='search__subtitle'>{item.class.name}</div>
        </div>
        <div className='search__img'>
          <img src={item.image} alt='' />
        </div>
      </div>

      <div className='more__grid more__grid_specs'>
        <div className='more__group'>
          <div className='trip__img'>
            <img src={specs0} alt='' />
          </div>
          <div className='more__specs'>
            <div className='more__specs_title'>Объем двигателя:</div>
            <div className='more__specs__num'>{item.specs[0]} см3</div>
          </div>
        </div>

        <div className='more__group'>
          <div className='trip__img'>
            <img src={specs3} alt='' />
          </div>
          <div className='more__specs'>
            <div className='more__specs_title'>Объем бака:</div>
            <div className='more__specs__num'>{item.specs[3]} л.</div>
          </div>
        </div>

        <div className='more__group'>
          <div className='trip__img'>
            <img src={specs1} alt='' />
          </div>
          <div className='more__specs'>
            <div className='more__specs_title'>Мощность:</div>
            <div className='more__specs__num'>{item.specs[1]} л.с.</div>
          </div>
        </div>

        <div className='more__group'>
          <div className='trip__img'>
            <img src={specs4} alt='' />
          </div>
          <div className='more__specs'>
            <div className='more__specs_title'>Масса:</div>
            <div className='more__specs__num'>{item.specs[4]} кг</div>
          </div>
        </div>

        <div className='more__group'>
          <div className='trip__img'>
            <img src={specs2} alt='' />
          </div>
          <div className='more__specs'>
            <div className='more__specs_title'>Макс. скорость:</div>
            <div className='more__specs__num'>{item.specs[2]} км/ч</div>
          </div>
        </div>

        <div className='more__group'>
          <div className='trip__img'>
            <img src={specs5} alt='' />
          </div>
          <div className='more__specs'>
            <div className='more__specs_title'>Расход топлива:</div>
            <div className='more__specs__num'>{item.specs[5]} л. на 100 км</div>
          </div>
        </div>
      </div>
    </div>
  )
}

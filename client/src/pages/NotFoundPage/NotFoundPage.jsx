import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../img/icons/big--logo.svg'
import './NotFoundPage.scss'

export const NotFoundPage = () => {
  return (
    <div className='container notfound'>
      <img src={logo} alt='logo' className='notfound__img' />

      <div className='notfound__code'>404</div>
      <div className='notfound__text'>Страница не найдена</div>

      <Link to='/main' className='notfound__btn'>
        На главную
      </Link>
    </div>
  )
}

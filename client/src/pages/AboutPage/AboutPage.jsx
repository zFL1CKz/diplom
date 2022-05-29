import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Back } from '../../components/Back/Back'
import logo from '../../img/icons/small--logo.svg'
import './Terms.scss'
import './AboutPage.scss'

export const AboutPage = () => {
  document.title = 'Moto Soul | О компании'
  const history = useHistory()

  return (
    <div className='container'>
      <header className='header'>
        <div
          onClick={() => {
            history.goBack()
          }}>
          <Back />
        </div>
        <div className='body__title'>О компании</div>
        <img src={logo} alt='logo' />
      </header>

      <div className='about'>
        <div className='about__block'>
          <div className='about__title'>Что такое MotoSoul?</div>
          <div className='about__text'>
            <span>MotoSoul</span> — это компания, которая предоставляет возможность аренды любого мотоцикла для абсолютно разных задач (езда по городу и загороду, практика на колецевом автодроме или
            по бездорожью). <br />
            <br /> Центральный офис компании находится по адресу: Россия, Москва, Тверская улица, 7. Адреса точек для аренды представлены на карте ниже.
          </div>

          <iframe
            src='https://yandex.ru/map-widget/v1/?um=constructor%3Abefc8633814c2e8e4a8758b8675eba77d157dd3318938640f7f8bd1eec612a9d&amp;source=constructor'
            width='100%'
            height='250'
            frameborder='0'></iframe>
        </div>
      </div>

      <div className='terms__wrapper'>
        <Link to='/terms/contract' className='terms__item'>
          Договор
        </Link>
        <Link to='/terms/rent-contract' className='terms__item'>
          Договор аренды мотоцикла
        </Link>
        <Link to='/terms/user-agreement' className='terms__item'>
          Пользовательское соглашение
        </Link>
        <Link to='/terms/privacy' className='terms__item'>
          Политика в отношении обработки персональных данных
        </Link>
      </div>
    </div>
  )
}

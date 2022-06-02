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
          <div className='about__subtitle'></div>
          <div className='about__text'>
            <span>MotoSoul</span> — это компания, которая предоставляет возможность аренды любого мотоцикла для абсолютно разных задач (езда по городу и загороду, практика на колецевом автодроме или
            по бездорожью) <br />
            <br /> Центральный офис компании находится по адресу: Россия, Москва, Тверская улица, 7. Точки для аренды мотоциклов указаны ниже на карте
          </div>

          <iframe
            src='https://yandex.ru/map-widget/v1/?um=constructor%3Abefc8633814c2e8e4a8758b8675eba77d157dd3318938640f7f8bd1eec612a9d&amp;source=constructor'
            width='100%'
            height='250'
            frameborder='0'></iframe>
        </div>
      </div>

      <div className='about__block'>
        <div className='about__title'>Контакты</div>
        <div className='about__subtitle'></div>

        <div className='about__text'>
          <span>По вопросам, связанным с работой сервиса: </span>
          +7 495 664-87-87 <br /> <br />
          <span>Центральный офис:</span> <br />
          Россия, Москва, Тверская улица, 7. <br />
          Ежедневно с 09:00 до 18:00 <br />
          +7 495 664-87-87 <br />
          <br />
          <span>Банковские реквизиты:</span> <br />
          Наименование клиента: ООО "МотоСоул"
          <br />
          <br />
          Наименование клиента латинискими буквами: LLC "MotoSoul"
          <br />
          <br />
          Юридический адрес: 125375, г. Москва, ул. Тверская улица, дом 7.
          <br />
          <br />
          ИНН: 1234567890
          <br />
          <br />
          КПП: 771292983
          <br />
          <br />
          ОГРН: 1145638208083
          <br />
          <br />
          E-mail: motosoul@gmail.com
          <div className='about__subtitle'></div>
          Наименование банка получателя: АО «РАЙФФАЙЗЕНБАНК»
          <br />
          <br />
          Расчетный счет: 40702810300000004404
          <br />
          <br />
          Корреспондентский счет: 30101810200000000700
          <br />
          <br />
          ИНН: 7744000302
          <br />
          <br />
          КПП: 770201001
          <br />
          <br />
          БИК: 044525700
        </div>
      </div>

      <div className='about__block'>
        <div className='about__title'>Документы</div>
        <div className='about__subtitle'></div>

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
    </div>
  )
}

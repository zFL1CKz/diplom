import React, { useCallback, useContext, useEffect, useState } from 'react'
import { Loader } from '../../components/Loader/Loader'
import { Back } from '../../components/Back/Back'
import { AuthContext } from '../../context/AuthContext'
import { useAuth } from '../../hooks/auth.hook'
import { useHttp } from '../../hooks/http.hook'
import { Tap } from '../../components/Tap/Tap'
import { useHistory, useLocation } from 'react-router-dom'

import binking from 'binking'
import InputMask from 'react-input-mask'

import cardMir from '../../img/icons/mir-logo.svg'
import logo from '../../img/icons/small--logo.svg'
import chip from '../../img/icons/chip.svg'
import nfc from '../../img/icons/nfc.svg'
import eye from '../../img/icons/eye.svg'
import './PaymentsPage.scss'
import { TicketCard } from '../../components/Cards/TicketCard'
import { HistoryPage } from '../HistoryPage/HistoryPage'

export const PaymentsPage = () => {
  document.title = 'Moto Soul | Платежи'

  const { token } = useContext(AuthContext)
  const auth = useAuth()
  const { request } = useHttp()
  const history = useHistory()
  const [cardInfo, setCardInfo] = useState(undefined)
  const [tickets, setTickets] = useState(undefined)
  const [isReady, setIsReady] = useState(false)
  const [cardView, setCardView] = useState(false)
  const [validCard, setValidCard] = useState(false)
  const [cardError, setCardError] = useState('')

  const [form, setForm] = useState({
    number: '',
    date: '',
    cvv: '',
    alias: null,
  })

  const getInfo = useCallback(async () => {
    try {
      await request('/api/user/getcard', 'GET', null, {
        Authorization: `Bearer ${token}`,
      }).then((res) => {
        if (Object.keys(res).length > 0) setCardInfo(res)
      })
    } catch (error) {
      console.log(error)
    }
    try {
      await request('/api/ticket/getticket', 'GET', null, {
        Authorization: `Bearer ${token}`,
      }).then((res) => {
        setTickets(res)
      })
    } catch (error) {
      console.log(error)
    }
    setIsReady(true)
  }, [request, token])

  useEffect(() => {
    getInfo()
  }, [getInfo])

  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    setCardError('')
    setTimeout(() => {
      if (
        form.number.split(' ').join('').length === 16 &&
        form.date.split('/').join('').length === 4 &&
        form.cvv.length === 3
      ) {
        setValidCard(true)
      } else {
        if (cardInfo === undefined) {
          if (form.number.split(' ').join('').length !== 16)
            document.querySelector('#number').focus()
          else if (form.date.split('/').join('').length !== 4)
            document.querySelector('#date').focus()
          else document.querySelector('#cvv').focus()
          setValidCard(false)
        }
      }
    }, 0)
  }, [form])

  function cardHandler() {
    setCardError('')
    binking.setDefaultOptions({
      strategy: 'api',
      apiKey: '78ba5ae02f023b053421e7f3cf9edc2f',
    })
    let cardDate = form.date.split('/')
    if (
      binking.validate(form.number, cardDate[0], cardDate[1], form.cvv)
        .hasErrors
    )
      setCardError('Введите корректные данные карты')
    else {
      let dot = '.'
      setCardError('Идет проверка карты, пожалуйста, подождите.')
      const timer = setInterval(() => {
        if (dot >= '...') dot = ''
        dot += '.'
        setCardError('Идет проверка карты, пожалуйста, подождите' + dot)
      }, 1000)
      binking(form.number).then(async (data) => {
        clearInterval(timer)
        setCardError('')
        try {
          let reqObject = {
            num: form.number,
            date: form.date,
            cvv: form.cvv,
            alias: data.brandLogoOriginalSvg,
          }
          await request(
            '/api/user/setcard',
            'POST',
            { ...reqObject },
            {
              Authorization: `Bearer ${token}`,
            }
          )
          setValidCard(false)
          getInfo()
        } catch (error) {
          setCardError(error)
        }
      })
    }
  }

  if (!isReady) {
    return <Loader />
  } else {
    return (
      <div>
        <div className='container'>
          <div className='header'>
            <div onClick={() => history.goBack()}>
              <Back />
            </div>
            <div className='body__title' style={{ margin: '0 auto' }}>
              Платежи
            </div>
            <img src={logo} alt='logo' />
          </div>

          <div className='payments__title'>Данные карты</div>
          <div className='payments__card'>
            <div
              className={validCard ? 'btn__tap active' : 'btn__tap'}
              onClick={cardHandler}>
              <Tap />
            </div>
            <div className='payments__group img--group'>
              <img src={nfc} alt='' className='payments__img' />
              <img src={chip} alt='' className='payments__img' />
            </div>

            {cardInfo !== undefined ? (
              <div className='payments__info'>
                <div
                  className={
                    cardView ? 'payments__view active' : 'payments__view'
                  }
                  onClick={() => setCardView(!cardView)}>
                  <img src={eye} alt='' />
                </div>
                <div className='payments__number'>
                  {cardView
                    ? cardInfo.num
                    : `**** **** **** ${cardInfo.num.slice(-4)}`}
                </div>
                <div className='payments__group jcsb'>
                  <div className='payments__group'>
                    <div className='payments__card_text payments--date'>
                      {cardView ? cardInfo.date : '**/**'}
                    </div>
                    <div className='payments__card_text payments--cvv'>
                      {cardView ? cardInfo.cvv : '***'}
                    </div>
                  </div>
                  <img
                    src={cardInfo.alias !== null ? cardInfo.alias : cardMir}
                    alt=''
                    className='payments__alias'
                  />
                </div>
              </div>
            ) : (
              <div className='payments__inputs'>
                <InputMask
                  mask='9999 9999 9999 9999'
                  maskPlaceholder=''
                  name='number'
                  onChange={changeHandler}
                  className='payments__input'
                  placeholder='Номер карты'
                  autoComplete='cc-number'
                  id='number'
                />
                <div className='payments__inputs_group'>
                  <InputMask
                    mask='99/99'
                    maskPlaceholder=''
                    name='date'
                    onChange={changeHandler}
                    className='payments__input'
                    placeholder='Дата'
                    autoComplete='cc-exp'
                    id='date'
                  />
                  <InputMask
                    mask='999'
                    maskPlaceholder=''
                    name='cvv'
                    onChange={changeHandler}
                    className='payments__input'
                    placeholder='Код'
                    autoComplete='cc-csc'
                    id='cvv'
                  />
                </div>
              </div>
            )}
          </div>
          <div className='error'>{cardError}</div>

          {/* <div className='payments__title'>Ваши штрафы</div>
          <div className='ticket'>
            {tickets.map((item, index) => (
              <TicketCard item={item} key={index} />
            ))}
          </div> */}

          <div className='payments__title'>История поездок</div>
          <HistoryPage />
        </div>
      </div>
    )
  }
}

import React, { useCallback, useContext, useEffect, useState } from 'react'
import InputMask from 'react-input-mask'

import cardMir from '../../img/icons/mir-logo.svg'
import chip from '../../img/icons/chip.svg'
import nfc from '../../img/icons/nfc.svg'
import eye from '../../img/icons/eye.svg'
import binking from 'binking'


import { useHttp } from '../../hooks/http.hook'
import { AuthContext } from '../../context/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import { Loader } from '../../components/Loader/Loader'
import { Back } from '../../components/Back/Back'
import { Tap } from '../../components/Tap/Tap'
import { useAuth } from '../../hooks/auth.hook'

import logo from '../../img/icons/small--logo.svg'
import './ProfilePage.scss'

export const ProfilePage = () => {
  document.title = 'Moto Soul | Профиль'

  const { token } = useContext(AuthContext)
  const auth = useAuth()
  const { request } = useHttp()
  const history = useHistory()
  const [info, setInfo] = useState([])
  const [isReady, setIsReady] = useState(false)
  const [isGreen, setIsGreen] = useState(false)
  const [showError, setShowError] = useState('')
  const [passError, setPassError] = useState('')
  const [formFocus, setFormFocus] = useState(false)
  const [passFocus, setPassFocus] = useState(false)
  const [inputDisabled, setInputDisabled] = useState(false)

  const [cardInfo, setCardInfo] = useState(undefined)
  const [cardView, setCardView] = useState(false)
  const [validCard, setValidCard] = useState(false)
  const [cardError, setCardError] = useState('')

  const getCard = useCallback(async () => {
    try {
      await request('/api/user/getcard', 'GET', null, {
        Authorization: `Bearer ${token}`,
      }).then((res) => {
        if (Object.keys(res).length > 0) setCardInfo(res)
      })
    } catch (error) {
      console.log(error)
    }
    setIsReady(true)
  }, [request, token])

  useEffect(() => {
    getCard()
  }, [getCard])

  const [form, setForm] = useState({
    fio: '',
    date: '',
    num: '',
  })

  const [cardForm, setCardForm] = useState({
    fio: '',
    date: '',
    num: '',
  })

  const [passForm, setPassForm] = useState({
    pass: '',
    newPass: '',
    confPass: '',
  })

  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const passHandler = (e) => {
    setPassForm({ ...passForm, [e.target.name]: e.target.value })
  }

  const cardFormHandler = (e) => {
    setCardForm({ ...cardForm, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    setPassError('')
    setPassFocus(false)
    if (passForm.pass.length >= 6 && passForm.newPass === passForm.confPass && passForm.newPass.length >= 6 && passForm.pass !== passForm.newPass) {
      setPassError('')
      setPassFocus(true)
    } else if (passForm.newPass !== passForm.confPass) setPassError('Пароли не совпадают')
  }, [passForm])

  async function setNewPass() {
    setPassError('')
    try {
      const msg = await request(
        '/api/user/setpass',
        'POST',
        { ...passForm },
        {
          Authorization: `Bearer ${token}`,
        }
      )
      setIsGreen(true)
      setPassError(msg.message)
      setTimeout(() => {
        setPassError('')
        setIsGreen(false)
      }, 5000)
    } catch (error) {
      setPassError(error.message)
    }
    passForm.pass = ''
    passForm.newPass = ''
    passForm.confPass = ''
    setPassFocus(false)
    getInfo()
  }

  useEffect(() => {
    setCardError('')
    setTimeout(() => {
      if (cardForm.number.split(' ').join('').length === 16 && cardForm.date.split('/').join('').length === 4 && cardForm.cvv.length === 3) {
        setValidCard(true)
      } else {
        if (cardInfo === undefined) {
          if (cardForm.number.split(' ').join('').length !== 16) document.querySelector('#number').focus()
          else if (cardForm.date.split('/').join('').length !== 4) document.querySelector('#date').focus()
          else document.querySelector('#cvv').focus()
          setValidCard(false)
        }
      }
    }, 0)
  }, [cardForm])

  function cardHandler() {
    setCardError('')
    binking.setDefaultOptions({
      strategy: 'api',
      apiKey: '78ba5ae02f023b053421e7f3cf9edc2f',
    })
    let cardDate = cardForm.date.split('/')
    if (binking.validate(cardForm.number, cardDate[0], cardDate[1], cardForm.cvv).hasErrors) setCardError('Введите корректные данные карты')
    else {
      let dot = '.'
      setCardError('Идет проверка карты, пожалуйста, подождите.')
      const timer = setInterval(() => {
        if (dot >= '...') dot = ''
        dot += '.'
        setCardError('Идет проверка карты, пожалуйста, подождите' + dot)
      }, 1000)
      binking(cardForm.number).then(async (data) => {
        clearInterval(timer)
        setCardError('')
        try {
          let reqObject = {
            num: cardForm.number,
            date: cardForm.date,
            cvv: cardForm.cvv,
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
          setIsReady(false)
          getInfo()
        } catch (error) {
          setCardError(error)
        }
      })
    }
  }

  const getInfo = useCallback(async () => {
    try {
      await request('/api/user/getinfo', 'GET', null, {
        Authorization: `Bearer ${token}`,
      }).then((res) => {
        setInfo(res)
      })
      setIsReady(true)
    } catch (error) {
      console.log(error)
    }
  }, [token, request])

  useEffect(() => {
    getInfo()
  }, [getInfo])

  useEffect(() => {
    setFormFocus(false)
    if (form.fio !== '' || (form.date.indexOf('_') === -1 && form.date.length === 10 && form.num.indexOf('_') === -1 && form.num.length === 11)) setFormFocus(true)
    else setFormFocus(false)
  }, [form])

  async function profileHandler() {
    setFormFocus(false)
    setShowError('')
    let reqObject = {
      fio: null,
      date: null,
      num: null,
      cat: null,
    }
    if (form.date.indexOf('_') === -1 && form.date.length === 10 && form.num.indexOf('_') === -1 && form.num.length === 11) {
      setInputDisabled(true)
      let dot = '.'
      setShowError('Идет проверка ВУ, пожалуйста, подождите.')
      const timer = setInterval(() => {
        if (dot >= '...') dot = ''
        dot += '.'
        setShowError('Идет проверка ВУ, пожалуйста, подождите' + dot)
      }, 1000)
      const num = form.num.split(' ').join('')
      try {
        await request(`https://api-cloud.ru/api/gibdd.php?type=driver&serianomer=${num}&date=${form.date}&token=ad3996abac92cd95b045d73b5b5eacca`).then(async (res) => {
          clearInterval(timer)
          setShowError('')
          if (res.found === false) {
            setShowError('Некорректное ВУ')
            if (form.fio !== '') {
              info.fio = form.fio
              reqObject.fio = form.fio
              form.fio = ''
              try {
                await request(
                  '/api/user/setinfo',
                  'POST',
                  { ...reqObject },
                  {
                    Authorization: `Bearer ${token}`,
                  }
                )
              } catch (error) {
                setShowError('Ошибка получения данных с базы ГИБДД')
              }
            }
          } else if (res.found) {
            setShowError('')
            if (form.fio !== '') reqObject.fio = form.fio
            reqObject.date = res.doc.date
            reqObject.num = res.doc.num
            reqObject.cat = res.doc.cat
            form.fio = ''
            try {
              await request(
                '/api/user/setinfo',
                'POST',
                { ...reqObject },
                {
                  Authorization: `Bearer ${token}`,
                }
              )
            } catch (error) {
              setShowError(error)
            }
            getInfo()
          } else {
            setShowError('Ошибка получения данных с базы ГИБДД')
          }
        })
      } catch (error) {
        setShowError('Ошибка получения данных с базы ГИБДД')
      }
    } else {
      info.fio = form.fio
      reqObject.fio = form.fio
      form.fio = ''
      try {
        await request(
          '/api/user/setinfo',
          'POST',
          { ...reqObject },
          {
            Authorization: `Bearer ${token}`,
          }
        )
      } catch (error) {
        setShowError(error)
      }
    }
    setInputDisabled(false)
    form.fio = ''
    form.num = ''
    form.date = ''
  }

  function checkCat() {
    return info.license.licenseCat.split(',').join(' ')
  }

  function checkNum() {
    let a = String(info.license.licenseNum).slice(0, 2)
    let b = String(info.license.licenseNum).slice(2, 4)
    let c = String(info.license.licenseNum).slice(4, 10)
    return (
      <div className='profile__num'>
        <span style={{ marginRight: '15px' }}>
          {a} {b}
        </span>
        <span>{c}</span>
      </div>
    )
  }

  function checkRating(rating) {
    let content = []
    for (let i = 1; i <= 10; i++) {
      content.push(<div key={i} className={i <= rating ? 'profile__rating_star active' : 'profile__rating_star'}></div>)
    }
    return content
  }

  if (!isReady) {
    return <Loader />
  } else {
    return (
      <div>
        <div className='container'>
          <div className='header'>
            <div onClick={() => history.push('/main')}>
              <Back />
            </div>
            <div className='body__title' style={{ margin: '0 auto' }}>
              Профиль
            </div>
            <img src={logo} alt='logo' />
          </div>

          <div className='profile__block'>
            <div className='profile__title'>Данные</div>
            <div className='profile__card'>
              {info.fio ? (
                <div className='profile__fio'>{info.fio}</div>
              ) : (
                <input type='text' className='profile__input center mb20' placeholder='Введите ФИО' name='fio' value={info.fio} onChange={changeHandler} />
              )}

              {info.license ? (
                <div>
                  <div className='profile__photo mb15 fio'>
                    <div className={formFocus ? 'btn__tap active' : 'btn__tap'} onClick={profileHandler}>
                      <Tap />
                    </div>
                  </div>
                  <div className='profile__group'>
                    <div className='profile__cat'>{checkCat()}</div>
                    {checkNum()}
                  </div>
                </div>
              ) : (
                <div className='profile__group'>
                  <div className='profile__photo'>
                    <div className={formFocus ? 'btn__tap active' : 'btn__tap'} onClick={profileHandler}>
                      <Tap />
                    </div>
                  </div>

                  <div>
                    <InputMask mask='99.99.9999' name='date' onChange={changeHandler} className='profile__input center mb20' placeholder='Дата выдачи ВУ' disabled={inputDisabled} value={info.date} />
                    <InputMask mask='9999 999999' name='num' onChange={changeHandler} className='profile__input center' placeholder='Серия и номер ВУ' disabled={inputDisabled} value={info.num} />
                  </div>
                </div>
              )}
            </div>
            <div className='error' style={{ marginTop: '10px' }}>
              {showError}
            </div>
          </div>

          <div className='profile__block'>
          <div className='payments__card'>
            <div className={validCard ? 'btn__tap active' : 'btn__tap'} onClick={cardHandler}>
              <Tap />
            </div>
            <div className='payments__group img--group'>
              <img src={nfc} alt='' className='payments__img' />
              <img src={chip} alt='' className='payments__img' />
            </div>

            {cardInfo !== undefined ? (
              <div className='payments__info'>
                <div className={cardView ? 'payments__view active' : 'payments__view'} onClick={() => setCardView(!cardView)}>
                  <img src={eye} alt='' />
                </div>
                <div className='payments__number'>{cardView ? cardInfo.num : `**** **** **** ${cardInfo.num.slice(-4)}`}</div>
                <div className='payments__group jcsb'>
                  <div className='payments__group'>
                    <div className='payments__card_text payments--date'>{cardView ? cardInfo.date : '**/**'}</div>
                    <div className='payments__card_text payments--cvv'>***</div>
                  </div>
                  <img src={cardInfo.alias !== null ? cardInfo.alias : cardMir} alt='' className='payments__alias' />
                </div>
              </div>
            ) : (
              <div className='payments__inputs'>
                <InputMask
                  mask='9999 9999 9999 9999'
                  maskPlaceholder=''
                  name='number'
                  onChange={cardFormHandler}
                  className='payments__input'
                  placeholder='Номер карты'
                  autoComplete='cc-number'
                  id='number'
                />
                <div className='payments__inputs_group'>
                  <InputMask mask='99/99' maskPlaceholder='' name='date' onChange={cardFormHandler} className='payments__input' placeholder='Дата' autoComplete='cc-exp' id='date' />
                  <InputMask type='password' mask='999' maskPlaceholder='' name='cvv' onChange={cardFormHandler} className='payments__input' placeholder='Код' autoComplete='cc-csc' id='cvv' />
                </div>
              </div>
            )}
          </div>
          </div>
          <div className='error'>{cardError}</div>

          <div className='profile__block'>
            <div className='profile__title'>Ваш персональный рейтинг</div>
            <div className='profile__rating'>{info.rating} из 10</div>
            <div className='profile__rating_group'>{checkRating(info.rating)}</div>
          </div>

          <div className='profile__block'>
            <div className='profile__title'>Безопасность</div>
            <input name='pass' onChange={passHandler} type='password' value={passForm.pass} className='profile__input mb10' placeholder='Старый пароль' />
            <input name='newPass' onChange={passHandler} type='password' value={passForm.newPass} className='profile__input mb10' placeholder='Новый пароль' />
            <input name='confPass' onChange={passHandler} type='password' value={passForm.confPass} className='profile__input mb10' placeholder='Повторите новый пароль' />
            <div className={passFocus ? 'profile__btn show' : 'profile__btn hidden'} onClick={setNewPass}>
              Изменить
            </div>
            <div className={isGreen ? 'error green' : 'error'} style={{ marginTop: '0' }}>
              {passError}
            </div>
          </div>

          <div className='profile__block'>
            <div className='profile__title'>Другое</div>
            <div className='profile__wrapper'>
              <Link
                to={{
                  pathname: '/history',
                  state: info,
                }}
                className='profile__btn'>
                История поездок
              </Link>

              <Link
                to={{
                  pathname: '/terms',
                  state: info,
                }}
                style={{ marginTop: '10px' }}
                className='profile__btn'>
                О компании
              </Link>
            </div>
          </div>

          <div
            className='profile__btn red'
            onClick={() => {
              auth.logout()
              window.location.reload()
            }}>
            Выйти из аккаунта
          </div>
        </div>
      </div>
    )
  }
}

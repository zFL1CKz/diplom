import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'
import binking from 'binking'
import InputMask from 'react-input-mask'
import QRCode from 'qrcode.react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { Back } from '../../components/Back/Back'
import { Loader } from '../../components/Loader/Loader'
import { AuthContext } from '../../context/AuthContext'
import { useHttp } from '../../hooks/http.hook'
import { ChooseCard } from '../../components/Cards/ChooseCard'
import { RateCard } from '../../components/Cards/RateCard'
import { Tap } from '../../components/Tap/Tap'
import SignaturePad from 'react-signature-canvas'

import chip from '../../img/icons/chip.svg'
import nfc from '../../img/icons/nfc.svg'
import logo from '../../img/icons/small--logo.svg'

import '../ProfilePage/ProfilePage.scss'
import './NewTrip.scss'

export const NewTrip = () => {
  document.title = 'Moto Soul | Новая поездка'
  const history = useHistory()
  const locationState = useLocation()

  const { token } = useContext(AuthContext)
  const { request } = useHttp()
  const [isReady, setIsReady] = useState(false)
  const [info, setInfo] = useState([])
  const [classes, setClasses] = useState([])
  const [motos, setMotos] = useState([])
  const [locations, setLocations] = useState([])
  const [rates, setRates] = useState([])
  const [currentScreen, setCurrentScreen] = useState(locationState.state !== undefined ? Object.keys(locationState.state).length + 1 : 1)
  const [bodyTitle, setBodyTitle] = useState('')
  const [showError, setShowError] = useState('')
  const [formFocus, setFormFocus] = useState(false)
  const [inputDisabled, setInputDisabled] = useState(false)
  const [passportInputDisabled, setPassportInputDisabled] = useState(false)
  const [showCard, setShowCard] = useState(false)
  const [userPassport, setUserPassport] = useState([])
  const [userSignature, setUserSignature] = useState('')
  const [currentRaceId, setCurrentRaceId] = useState('')

  const [chosen, setChosen] = useState(locationState.state !== undefined ? locationState.state : [])

  const [cardInfo, setCardInfo] = useState(undefined)

  const [cardForm, setCardForm] = useState({
    number: '',
    date: '',
    cvv: '',
    alias: null,
  })

  const [form, setForm] = useState({
    fio: '',
    date: '',
    num: '',
  })

  const [passportForm, setPassportForm] = useState({
    seria: '',
    number: '',
  })

  const sigCanvas = useRef({})
  const clearCanvas = () => {
    setShowError('')
    sigCanvas.current.clear()
  }

  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const passportHandler = (e) => {
    setPassportForm({ ...passportForm, [e.target.name]: e.target.value })
  }

  const cardInputHandler = (e) => {
    setCardForm({ ...cardForm, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    setFormFocus(false)
    if (form.fio !== '' || (form.date.indexOf('_') === -1 && form.date.length === 10 && form.num.indexOf('_') === -1 && form.num.length === 11)) setFormFocus(true)
    else setFormFocus(false)
  }, [form])

  useEffect(() => {
    setShowError('')
  }, [currentScreen])

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
            setShowError('ВУ не найдено')
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
          } else {
            setShowError('Ошибка получения данных с базы ГИБДД')
          }
        })
        getLocations(chosen[1])
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

  const getInfo = useCallback(async () => {
    try {
      await request('/api/user/getinfo', 'GET', null, {
        Authorization: `Bearer ${token}`,
      }).then((res) => {
        setUserPassport(res.passport)
        setCardInfo(res.card)
      })
    } catch (error) {
      console.log(error)
    }
  }, [token, request])

  useEffect(() => {
    getInfo()
  }, [getInfo])

  const getClasses = useCallback(async () => {
    try {
      await request('/api/getclasses', 'GET', null, {
        Authorization: `Bearer ${token}`,
      }).then((res) => {
        setClasses(res)
        setIsReady(true)
      })
    } catch (error) {
      console.log(error)
    }
  }, [token, request])

  const getMotos = useCallback(
    async (id) => {
      setIsReady(false)
      try {
        await request(`/api/getmotos/${id}`, 'GET', null, {
          Authorization: `Bearer ${token}`,
        }).then((res) => {
          if (res !== null) {
            setMotos(res)
            setIsReady(true)
          }
        })
      } catch (error) {
        console.log(error)
      }
    },
    [token, request]
  )

  const getLocations = useCallback(
    async (moto) => {
      setIsReady(false)

      try {
        await request('/api/user/getinfo', 'GET', null, {
          Authorization: `Bearer ${token}`,
        }).then(async (res) => {
          setInfo(res)
          var cat = res.license?.licenseCat

          try {
            await request('/api/getlocations', 'GET', null, {
              Authorization: `Bearer ${token}`,
            }).then((res) => {
              setShowError('')
              setShowCard(false)
              let arr = []
              let result = checkLocation(moto, cat)
              if (result !== null) {
                for (const locationItem of res) {
                  for (const currentLocation of result) {
                    if (currentLocation === locationItem.name) arr.push(locationItem)
                  }
                }
              }

              setLocations(arr)
              setIsReady(true)
            })
          } catch (error) {
            console.log(error)
          }
        })
      } catch (error) {
        console.log(error)
      }
    },
    [token, request]
  )

  function checkLocation(moto, cat) {
    let motoClass = moto.class.name
    if (motoClass === 'Питбайк') return ['Лес', 'Бездорожье']
    else if (motoClass === 'Кросс') return ['Лес', 'Кольцевая лесная трасса']
    else if (motoClass === 'Эндуро') return ['Лес', 'Бездорожье']
    else if (motoClass === 'Скутер') {
      if (cat === undefined) {
        setShowError('Для езды по городу необходимо иметь соответствующую категорию прав')
        setShowCard(true)
        return null
      } else {
        if (cat.indexOf('A1') !== -1 || cat.indexOf('A') !== -1 || cat.indexOf('M') !== -1) return ['Город']
        else {
          setShowError('Для езды по городу необходима категория прав A1, A или M')
          setShowCard(true)
          return null
        }
      }
    } else if (motoClass === 'Дорожный') {
      if (cat !== undefined) {
        if (moto.specs[0] >= 125) {
          if (cat.indexOf('A') !== -1) return ['Город', 'Кольцевой автодром']
          else {
            setShowError('Для езды по городу необходима категория прав A')
            setShowCard(true)
            return ['Кольцевой автодром']
          }
        } else {
          if (cat.indexOf('A') !== -1 || cat.indexOf('A1') !== -1) return ['Город', 'Кольцевой автодром']
          else {
            setShowError('Для езды по городу необходима категория прав A или A1')
            setShowCard(true)
            return ['Кольцевой автодром']
          }
        }
      } else {
        setShowError('Для езды по городу необходимо иметь соответствующую категорию прав')
        setShowCard(true)
        return ['Кольцевой автодром']
      }
    } else if (motoClass === 'Спорт-туризм') {
      if (cat !== undefined) {
        if (moto.specs[0] >= 125) {
          if (cat.indexOf('A') !== -1) return ['Город', 'Загород']
          else {
            setShowError('Для езды по городу и загороду необходима категория прав A')
            setShowCard(true)
            return null
          }
        } else {
          if (cat.indexOf('A') !== -1 || cat.indexOf('A1') !== -1) return ['Город', 'Загород']
          else {
            setShowError('Для езды по городу и загороду необходима категория прав A или A1')
            setShowCard(true)
            return null
          }
        }
      } else {
        setShowError('Для езды по городу и загороду необходимо иметь соответствующую категорию прав')
        setShowCard(true)
        return null
      }
    } else if (motoClass === 'Стритфайтер') {
      if (cat !== undefined) {
        if (moto.specs[0] >= 125) {
          if (cat.indexOf('A') !== -1) return ['Город', 'Кольцевой автодром']
          else {
            setShowError('Для езды по городу необходима категория прав A')
            setShowCard(true)
            return ['Кольцевой автодром']
          }
        } else {
          if (cat.indexOf('A') !== -1 || cat.indexOf('A1') !== -1) return ['Город', 'Кольцевой автодром']
          else {
            setShowError('Для езды по городу необходима категория прав A или A1')
            setShowCard(true)
            return ['Кольцевой автодром']
          }
        }
      } else {
        setShowError('Для езды по городу необходимо иметь соответствующую категорию прав')
        setShowCard(true)
        return ['Кольцевой автодром']
      }
    } else if (motoClass === 'Супер-спорт') {
      if (cat !== undefined) {
        if (moto.specs[0] >= 125) {
          if (cat.indexOf('A') !== -1) return ['Город', 'Кольцевой автодром', 'Загород']
          else {
            setShowError('Для езды по городу и загороду необходима категория прав A')
            setShowCard(true)
            return ['Кольцевой автодром']
          }
        } else {
          if (cat.indexOf('A') !== -1 || cat.indexOf('A1') !== -1) return ['Город', 'Кольцевой автодром', 'Загород']
          else {
            setShowError('Для езды по городу и загороду необходима категория прав A или A1')
            setShowCard(true)
            return ['Кольцевой автодром']
          }
        }
      } else {
        setShowError('Для езды по городу и загороду необходимо иметь соответствующую категорию прав')
        setShowCard(true)
        return ['Кольцевой автодром']
      }
    }
  }

  const getRates = useCallback(async () => {
    setIsReady(false)
    try {
      await request('/api/getrates', 'GET', null, {
        Authorization: `Bearer ${token}`,
      }).then((res) => {
        setRates(res)
        setIsReady(true)
      })
    } catch (error) {
      console.log(error)
    }
  }, [token, request])

  async function setPassport() {
    let reqObject = {
      seria: passportForm.seria,
      number: passportForm.number,
    }
    try {
      await request(
        '/api/user/setpassport',
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

  async function setRace() {
    let reqObject = {
      moto: chosen[1]._id,
      location: chosen[2]._id,
      rate: chosen[3]._id,
      signature: sigCanvas.current.getTrimmedCanvas().toDataURL('image/png'),
    }
    try {
      let raceId = await request(
        '/api/races/setrace',
        'POST',
        { ...reqObject },
        {
          Authorization: `Bearer ${token}`,
        }
      )
      setCurrentRaceId(raceId)
      setIsReady(true)
    } catch (error) {
      setShowError(error)
    }
  }

  function startHandler() {
    setShowError('')

    if (userPassport === undefined) {
      if (passportForm.seria.length !== 4 || passportForm.seria.indexOf('_') !== -1 || passportForm.number.length !== 6 || passportForm.number.indexOf('_') !== -1)
        return setShowError('Необходимо заполнить данные паспорта')
      else {
        setPassport()
      }
    }

    let card = cardHandler()
    if (card === false && cardInfo === undefined) return setShowError('Введите корректные данные карты')

    if (sigCanvas.current.isEmpty()) return setShowError('Необходимо оставить подпись')

    setPassportInputDisabled(true)
    setUserSignature(sigCanvas.current.getTrimmedCanvas().toDataURL('image/png'))
    setIsReady(false)
    setCurrentScreen(6)
    setRace()
  }

  useEffect(() => {
    if (currentScreen === 1) {
      setBodyTitle('Выберите класс мотоцикла')
    } else if (currentScreen === 2) {
      setBodyTitle('Выберите модель мотоцикла')
      getMotos(chosen[0]._id)
    } else if (currentScreen === 3) {
      setBodyTitle('Выберите локацию')
      getLocations(chosen[1])
    } else if (currentScreen === 4) {
      setBodyTitle('Выберите тариф')
      getRates()
    } else if (currentScreen === 5) {
      setBodyTitle('Начало поездки')
    } else if (currentScreen === 6) {
      setBodyTitle('Начало поездки')
    }
  }, [currentScreen, chosen, getLocations, getMotos, getRates])

  useEffect(() => {
    getClasses()
  }, [getClasses])

  useEffect(() => {
    setShowError('')
    setTimeout(() => {
      if (cardInfo === undefined) {
        if (cardForm.number.split(' ').join('').length !== 16) document.querySelector('#number').focus()
        else if (cardForm.date.split('/').join('').length !== 4) document.querySelector('#date').focus()
        else document.querySelector('#cvv').focus()
      }
    }, 0)
  }, [cardForm, cardInfo])

  function cardHandler() {
    setShowError('')
    binking.setDefaultOptions({
      strategy: 'api',
      apiKey: '78ba5ae02f023b053421e7f3cf9edc2f',
    })
    let cardDate = cardForm.date.split('/')
    if (binking.validate(cardForm.number, cardDate[0], cardDate[1], cardForm.cvv).hasErrors) return false
    else {
      let dot = '.'
      setShowError('Идет проверка карты, пожалуйста, подождите.')
      const timer = setInterval(() => {
        if (dot >= '...') dot = ''
        dot += '.'
        setShowError('Идет проверка карты, пожалуйста, подождите' + dot)
      }, 1000)
      binking(cardForm.number).then(async (data) => {
        clearInterval(timer)
        setShowError('')
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
        } catch (error) {
          setShowError(error)
        }
        return true
      })
    }
  }

  if (!isReady) {
    return <Loader />
  } else {
    return (
      <div className='container'>
        <header className='header'>
          <div
            onClick={() => {
              if (currentScreen === 1) {
                setChosen([])
                history.goBack()
              } else if (currentScreen > 1 && currentScreen <= 5) {
                let arr = chosen
                arr = arr.slice(0, -1)
                setChosen(arr)
                setCurrentScreen(currentScreen - 1)
              } else setCurrentScreen(currentScreen - 1)
            }}>
            <Back />
          </div>
          <div className='body__title'>{bodyTitle}</div>
          <img src={logo} alt='logo' />
        </header>

        {currentScreen === 1 && (
          <div className='choose'>
            {classes.map((item, index) => {
              return (
                <div
                  className='choose__item'
                  key={index}
                  onClick={() => {
                    setChosen([...chosen, item])
                    getMotos(item._id)
                    setCurrentScreen(2)
                  }}>
                  <ChooseCard item={item} currentScreen={currentScreen} />
                </div>
              )
            })}
          </div>
        )}

        {currentScreen === 2 && (
          <div className='choose'>
            {motos.map((item, index) => {
              return (
                <div
                  className='choose__item'
                  key={index}
                  onClick={() => {
                    setChosen([...chosen, item])
                    getLocations(item)
                    setCurrentScreen(3)
                  }}>
                  <ChooseCard item={item} currentScreen={currentScreen} />
                </div>
              )
            })}
          </div>
        )}

        {currentScreen === 3 && (
          <div>
            <div className='choose'>
              {locations.map((item, index) => {
                return (
                  <div
                    className='choose__item'
                    key={index}
                    onClick={() => {
                      setChosen([...chosen, item])
                      getRates()
                      setCurrentScreen(4)
                      setShowError('')
                    }}>
                    <ChooseCard item={item} currentScreen={currentScreen} />
                  </div>
                )
              })}
            </div>
            <div className='error' style={{ marginTop: '10px' }}>
              {showError}
            </div>

            {showCard && (
              <div className='profile__card'>
                {info.fio ? <div className='profile__fio'>{info.fio}</div> : <input type='text' className='profile__input center mb20' placeholder='Введите ФИО' name='fio' onChange={changeHandler} />}

                {info.license ? (
                  <div>
                    <div className='profile__photo mb15 fio new--trip'>
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
                      <InputMask mask='99.99.9999' name='date' onChange={changeHandler} className='profile__input center mb20' placeholder='Дата выдачи ВУ' disabled={inputDisabled} />
                      <InputMask mask='9999 999999' name='num' onChange={changeHandler} className='profile__input center' placeholder='Серия и номер ВУ' disabled={inputDisabled} />
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {currentScreen === 4 && (
          <>
            <div className='rate'>
              {rates.map((item, index) => {
                return (
                  <div
                    className='rate__item'
                    key={index}
                    onClick={() => {
                      setChosen([...chosen, item])
                      setCurrentScreen(5)
                    }}>
                    <RateCard item={item} />
                  </div>
                )
              })}
            </div>
          </>
        )}

        {currentScreen === 5 && (
          <>
            {userPassport === undefined && (
              <>
                <div className='passport__title'>
                  Перед началом поездки требуется заполнить <span>серию</span> и <span>номер</span> паспорта
                </div>
                <div className='passport--input-group'>
                  <InputMask onChange={passportHandler} name='seria' mask='9999' className='profile__input center' placeholder='Серия' disabled={passportInputDisabled} />
                  <InputMask onChange={passportHandler} name='number' mask='999999' className='profile__input center' placeholder='Номер' disabled={passportInputDisabled} />
                </div>
              </>
            )}

            {cardInfo === undefined && (
              <>
                <div className='passport__title'>
                  Для оплаты поедки заполните, пожалуйста, <span>данные карты</span>
                </div>

                <div className='payments__card'>
                  <div className='payments__group img--group'>
                    <img src={nfc} alt='' className='payments__img' />
                    <img src={chip} alt='' className='payments__img' />
                  </div>

                  <div className='payments__inputs'>
                    <InputMask
                      mask='9999 9999 9999 9999'
                      maskPlaceholder=''
                      name='number'
                      onChange={cardInputHandler}
                      className='payments__input'
                      placeholder='Номер карты'
                      autoComplete='cc-number'
                      id='number'
                    />
                    <div className='payments__inputs_group'>
                      <InputMask mask='99/99' maskPlaceholder='' name='date' onChange={cardInputHandler} className='payments__input' placeholder='Дата' autoComplete='cc-exp' id='date' />
                      <InputMask type='password' mask='999' maskPlaceholder='' name='cvv' onChange={cardInputHandler} className='payments__input' placeholder='Код' autoComplete='cc-csc' id='cvv' />
                    </div>
                  </div>
                </div>
              </>
            )}

            <div className='passport__title'>
              Для согласия с условиями{' '}
              <Link
                to={{
                  pathname: '/terms/rent-contract',
                  state: chosen,
                }}>
                договора аренды мототехники
              </Link>{' '}
              требуется <span>электронная подпись</span> (поле ниже).
            </div>

            <div className='canvas'>
              <SignaturePad
                penColor='#666592'
                ref={sigCanvas}
                canvasProps={{
                  className: 'signatureCanvas',
                }}
              />
              <button className='canvas__btn' onClick={clearCanvas}>
                Очистить поле
              </button>
            </div>

            <button className='canvas__btn save' onClick={startHandler}>
              Далее
            </button>

            <div className='error' style={{ marginTop: '10px' }}>
              {showError}
            </div>
          </>
        )}

        {currentScreen === 6 && (
          <>
            <div className='qrcode'>
              <div className='qrcode__title'>
                Для начала поездки Вам необходимо явиться в любую точку аренды MotoSoul и <span>показать сотруднику этот QR-код</span>
              </div>

              <QRCode
                className='qrcode__code'
                fgColor='#666592'
                bgColor='transparent'
                renderAs='svg'
                imageSettings={{ src: logo, excavate: true, width: 25, height: 20 }}
                value={`http://169.254.74.123:3000/race/${currentRaceId}`}
              />

              <Link
                to={{
                  pathname: `/race/${currentRaceId}`,
                  state: { chosen, userSignature, currentRaceId },
                }}
                className='qrcode__link'>
                Прочитать QR-код
              </Link>
              <iframe
                title='Точки аренды'
                src='https://yandex.ru/map-widget/v1/?um=constructor%3Abefc8633814c2e8e4a8758b8675eba77d157dd3318938640f7f8bd1eec612a9d&amp;source=constructor'
                width='100%'
                height='200'
                frameborder='0'></iframe>
            </div>
          </>
        )}
      </div>
    )
  }
}

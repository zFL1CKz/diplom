import React, { useCallback, useContext, useEffect, useState } from 'react'
import InputMask from 'react-input-mask'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { Back } from '../../components/Back/Back'
import { Loader } from '../../components/Loader/Loader'
import { AuthContext } from '../../context/AuthContext'
import { useHttp } from '../../hooks/http.hook'
import { ChooseCard } from '../../components/Cards/ChooseCard'
import { RateCard } from '../../components/Cards/RateCard'
import { Tap } from '../../components/Tap/Tap'

import logo from '../../img/icons/small--logo.svg'

import '../ProfilePage/ProfilePage.scss'
import './NewTrip.scss'

export const NewTrip = () => {
  document.title = 'Moto Soul | Новая поездка'
  const history = useHistory()
  const { token } = useContext(AuthContext)
  const { request } = useHttp()
  const [isReady, setIsReady] = useState(false)
  const [info, setInfo] = useState([])
  const [classes, setClasses] = useState([])
  const [motos, setMotos] = useState([])
  const [locations, setLocations] = useState([])
  const [rates, setRates] = useState([])
  const [currentScreen, setCurrentScreen] = useState(1)
  const [bodyTitle, setBodyTitle] = useState('')
  const [showError, setShowError] = useState('')
  const [formFocus, setFormFocus] = useState(false)
  const [inputDisabled, setInputDisabled] = useState(false)
  const [showCard, setShowCard] = useState(false)

  const [chosen, setChosen] = useState([])

  const [form, setForm] = useState({
    fio: '',
    date: '',
    num: '',
  })

  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    setFormFocus(false)
    if (
      form.fio !== '' ||
      (form.date.indexOf('_') === -1 &&
        form.date.length === 10 &&
        form.num.indexOf('_') === -1 &&
        form.num.length === 11)
    )
      setFormFocus(true)
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
    if (
      form.date.indexOf('_') === -1 &&
      form.date.length === 10 &&
      form.num.indexOf('_') === -1 &&
      form.num.length === 11
    ) {
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
        await request(
          `https://api-cloud.ru/api/gibdd.php?type=driver&serianomer=${num}&date=${form.date}&token=ad3996abac92cd95b045d73b5b5eacca`
        ).then(async (res) => {
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
                    if (currentLocation === locationItem.name)
                      arr.push(locationItem)
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
        setShowError(
          'Для езды по городу необходимо иметь соответствующую категорию прав'
        )
        setShowCard(true)
        return null
      } else {
        if (
          cat.indexOf('A1') !== -1 ||
          cat.indexOf('A') !== -1 ||
          cat.indexOf('M') !== -1
        )
          return ['Город']
        else {
          setShowError(
            'Для езды по городу необходима категория прав A1, A или M'
          )
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
          if (cat.indexOf('A') !== -1 || cat.indexOf('A1') !== -1)
            return ['Город', 'Кольцевой автодром']
          else {
            setShowError(
              'Для езды по городу необходима категория прав A или A1'
            )
            setShowCard(true)
            return ['Кольцевой автодром']
          }
        }
      } else {
        setShowError(
          'Для езды по городу необходимо иметь соответствующую категорию прав'
        )
        setShowCard(true)
        return ['Кольцевой автодром']
      }
    } else if (motoClass === 'Спорт-туризм') {
      if (cat !== undefined) {
        if (moto.specs[0] >= 125) {
          if (cat.indexOf('A') !== -1) return ['Город', 'Загород']
          else {
            setShowError(
              'Для езды по городу и загороду необходима категория прав A'
            )
            setShowCard(true)
            return null
          }
        } else {
          if (cat.indexOf('A') !== -1 || cat.indexOf('A1') !== -1)
            return ['Город', 'Загород']
          else {
            setShowError(
              'Для езды по городу и загороду необходима категория прав A или A1'
            )
            setShowCard(true)
            return null
          }
        }
      } else {
        setShowError(
          'Для езды по городу и загороду необходимо иметь соответствующую категорию прав'
        )
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
          if (cat.indexOf('A') !== -1 || cat.indexOf('A1') !== -1)
            return ['Город', 'Кольцевой автодром']
          else {
            setShowError(
              'Для езды по городу необходима категория прав A или A1'
            )
            setShowCard(true)
            return ['Кольцевой автодром']
          }
        }
      } else {
        setShowError(
          'Для езды по городу необходимо иметь соответствующую категорию прав'
        )
        setShowCard(true)
        return ['Кольцевой автодром']
      }
    } else if (motoClass === 'Супер-спорт') {
      if (cat !== undefined) {
        if (moto.specs[0] >= 125) {
          if (cat.indexOf('A') !== -1)
            return ['Город', 'Кольцевой автодром', 'Загород']
          else {
            setShowError(
              'Для езды по городу и загороду необходима категория прав A'
            )
            setShowCard(true)
            return ['Кольцевой автодром']
          }
        } else {
          if (cat.indexOf('A') !== -1 || cat.indexOf('A1') !== -1)
            return ['Город', 'Кольцевой автодром', 'Загород']
          else {
            setShowError(
              'Для езды по городу и загороду необходима категория прав A или A1'
            )
            setShowCard(true)
            return ['Кольцевой автодром']
          }
        }
      } else {
        setShowError(
          'Для езды по городу и загороду необходимо иметь соответствующую категорию прав'
        )
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

  useEffect(() => {
    if (currentScreen === 1) setBodyTitle('Выберите класс мотоцикла')
    else if (currentScreen === 2) setBodyTitle('Выберите модель мотоцикла')
    else if (currentScreen === 3) setBodyTitle('Выберите локацию')
    else if (currentScreen === 4) setBodyTitle('Выберите тариф')
  }, [currentScreen])

  useEffect(() => {
    getClasses()
  }, [getClasses])

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
              } else {
                let arr = chosen
                arr = arr.slice(0, -1)
                setChosen(arr)
                setCurrentScreen(currentScreen - 1)
              }
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
                {info.fio ? (
                  <div className='profile__fio'>{info.fio}</div>
                ) : (
                  <input
                    type='text'
                    className='profile__input center mb20'
                    placeholder='Введите ФИО'
                    name='fio'
                    onChange={changeHandler}
                  />
                )}

                {info.license ? (
                  <div>
                    <div className='profile__photo mb15 fio new--trip'>
                      <div
                        className={formFocus ? 'btn__tap active' : 'btn__tap'}
                        onClick={profileHandler}>
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
                      <div
                        className={formFocus ? 'btn__tap active' : 'btn__tap'}
                        onClick={profileHandler}>
                        <Tap />
                      </div>
                    </div>

                    <div>
                      <InputMask
                        mask='99.99.9999'
                        name='date'
                        onChange={changeHandler}
                        className='profile__input center mb20'
                        placeholder='Дата выдачи ВУ'
                        disabled={inputDisabled}
                      />
                      <InputMask
                        mask='9999 999999'
                        name='num'
                        onChange={changeHandler}
                        className='profile__input center'
                        placeholder='Серия и номер ВУ'
                        disabled={inputDisabled}
                      />
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
                      history.push('/main', [
                        ...chosen,
                        item,
                        String(new Date()),
                      ])
                    }}>
                    <RateCard item={item} />
                  </div>
                )
              })}
            </div>
            <h1>Test</h1>
          </>
        )}
      </div>
    )
  }
}

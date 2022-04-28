import React, { useCallback, useContext, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Profile } from '../../components/Profile/Profile'
import { Search } from '../../components/Search/Search'
import { AuthContext } from '../../context/AuthContext'
import logo from '../../img/icons/small--logo.svg'

import specs0 from '../../img/specs/specs0.svg'
import specs1 from '../../img/specs/specs1.svg'
import specs2 from '../../img/specs/specs2.svg'
import specs3 from '../../img/specs/specs3.svg'
import specs4 from '../../img/specs/specs4.svg'
import specs5 from '../../img/specs/specs5.svg'

import tripFromImg from '../../img/icons/trip--from.svg'
import tripToImg from '../../img/icons/trip--to.svg'
import tripTimeImg from '../../img/icons/trip--time.svg'
import tripPayImg from '../../img/icons/trip--pay.svg'
import racespeedImg from '../../img/icons/trip--speed.svg'

import { useHttp } from '../../hooks/http.hook'
import { Loader } from '../../components/Loader/Loader'
import { Back } from '../../components/Back/Back'
import { FAQ } from '../../components/FAQ/FAQ'

import addresses from '../../addresses.json'

import './MainPage.scss'
import { SimpleModal } from '../../components/Modal/SimpleModal'
import { SearchCard } from '../../components/Cards/SearchCard'

export const MainPage = () => {
  document.title = 'Moto Soul | Главная'
  const { token } = useContext(AuthContext)
  const { request } = useHttp()
  let location = useLocation()
  const [lastRace, setLastRace] = useState([])
  const [timeError, setTimeError] = useState([])
  const [motos, setMotos] = useState([])
  const [card, setCard] = useState([])
  const [isReady, setIsReady] = useState(false)
  const [isReadySearching, setIsReadySearching] = useState(false)
  const [more, setMore] = useState(false)
  const [modalActive, setModalActive] = useState(false)
  const [isSearch, setIsSearch] = useState(false)
  const [searchInput, setSearchInput] = useState('')
  const [filteredMotos, setFilteredMotos] = useState([])

  const [minutes, setMinutes] = useState(0)
  const [speed, setSpeed] = useState(0)

  const dateOptions = {
    day: 'numeric',
    month: 'long',
    hour: 'numeric',
    minute: 'numeric',
  }

  const searchHandler = (value) => {
    setSearchInput(value)
  }

  const getCard = useCallback(async () => {
    try {
      await request('/api/user/getcard', 'GET', null, {
        Authorization: `Bearer ${token}`,
      }).then((res) => setCard(res))
    } catch (error) {
      console.log(error)
    }
  }, [token, request])

  useEffect(() => {
    getCard()
  }, [getCard])

  useEffect(() => {
    if (searchInput.length > 1) setIsSearch(true)
    else setIsSearch(false)

    let classArr = []
    let nameArr = []

    for (const moto of motos) {
      if (
        Object.values(moto)[2]
          .name.toLowerCase()
          .indexOf(searchInput.trim().toLowerCase()) !== -1
      )
        classArr.push(moto)
      if (
        Object.values(moto)[1]
          .toLowerCase()
          .indexOf(searchInput.trim().toLowerCase()) !== -1
      )
        nameArr.push(moto)
    }
    setFilteredMotos(
      classArr
        .filter((x) => !nameArr.includes(x))
        .concat(nameArr.filter((x) => !classArr.includes(x)))
    )
  }, [searchInput, motos])

  const raceHandler = async () => {
    if (
      location.state[2].name === 'Город' ||
      location.state[2].name === 'Загород'
    ) {
      var from =
        addresses.addresses[
          Math.floor(Math.random() * addresses.addresses.length)
        ]
      var to =
        addresses.addresses[
          Math.floor(Math.random() * addresses.addresses.length)
        ]
    }

    let reqObject = {
      motoId: location.state[1]._id,
      locationId: location.state[2]._id,
      rateId: location.state[3]._id,
      time: minutes,
      pay: checkPay(),
      fromDate: new Date(location.state[4]).toISOString(),
      toDate: checkDate(),
      speed: speed,
      from: from || null,
      to: to || null,
    }

    try {
      await request(
        '/api/races/setrace',
        'POST',
        { ...reqObject },
        {
          Authorization: `Bearer ${token}`,
        }
      )
      delete location.state
      setMinutes(0)
      setSpeed(0)
      setModalActive(false)
      setIsReady(false)
      getLastRace()
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (location.state !== undefined && minutes > 1) {
      checkSpeed(location.state[1].specs[2])
    }
  }, [location.state, minutes])

  function checkSpeed(max) {
    let min = 20
    let curSpeed = Math.floor(Math.random() * (max - min + 1)) + min
    if (curSpeed > speed) setSpeed(curSpeed)
    else setSpeed(speed)
  }

  function checkPay() {
    if (location.state[3].name === 'Поминутный') return Math.floor(minutes * 10)
    else if (location.state[3].name === 'Почасовой')
      return Math.floor((minutes / 60) * 500)
    else return Math.floor((minutes / 60 / 24) * 9000)
  }

  function checkDate() {
    return new Date(
      (Math.floor(new Date(location.state[4]).getTime() / 1000) +
        minutes * 60) *
        1000
    ).toISOString()
  }

  function checkTime() {
    setTimeError('')
    let rate = location.state[3].name
    if (rate === 'По дням' && Math.floor(minutes / 60) < 24)
      setTimeError('Вы должны проехать минимум 24 часа по выбранному тарифу')
    else if (rate === 'Почасовой' && Math.floor(minutes) < 60)
      setTimeError('Вы должны проехать минимум 1 час по выбранному тарифу')
    else if (rate === 'Поминутный' && Math.floor(minutes) < 5)
      setTimeError('Вы должны проехать минимум 5 минут по выбранному тарифу')
    else setModalActive(true)
  }

  function setLocationState() {
    setModalActive(false)
    setIsReady(false)
    setMinutes(0)
    setSpeed(0)
    location.state = [
      lastRace.moto.class,
      lastRace.moto,
      lastRace.location,
      lastRace.rate,
      String(new Date()),
    ]
    setIsReady(true)
  }

  const getLastRace = useCallback(async () => {
    try {
      await request('/api/races/lastrace', 'GET', null, {
        Authorization: `Bearer ${token}`,
      }).then((res) => {
        if (res !== null) setLastRace(res)
      })
      setIsReady(true)
    } catch (error) {
      console.log(error)
    }
  }, [token, request, lastRace.length])

  useEffect(() => {
    if (motos.length === 0) getLastRace()
  }, [getLastRace])

  const getMotos = useCallback(async () => {
    setIsReadySearching(false)
    try {
      await request('/api/getallmotos', 'GET', null, {
        Authorization: `Bearer ${token}`,
      }).then((res) => {
        setMotos(res)
        setIsReadySearching(true)
      })
    } catch (error) {
      console.log(error)
    }
  }, [token, request])

  useEffect(() => {
    getMotos()
  }, [getMotos])

  useEffect(() => {
    const timer = setInterval(() => {
      setMinutes(minutes + 1)
    }, 1000)
    return () => clearInterval(timer)
  }, [minutes])

  function setTime(min) {
    if (min < 60)
      return (
        <span className='trip__num'>
          {Math.floor(min)}
          <span className='trip__symbol'> мин.</span>
        </span>
      )
    else
      return (
        <span className='trip__num'>
          {Math.floor(min / 60)}
          <span className='trip__symbol'> час.</span>
        </span>
      )
  }

  if (isSearch) {
    return (
      <div>
        <div className='container' style={{ paddingBottom: '0' }}>
          {location.state !== undefined ? (
            <img src={logo} alt='' className='header__img--logo' />
          ) : (
            <div className='header'>
              <Link to='/profile'>
                <Profile />
              </Link>
              <Search onChange={searchHandler} />
              <img src={logo} alt='logo' />
            </div>
          )}
        </div>
        {motos.length === 0 ? (
          <Loader />
        ) : (
          <div className='container' style={{ paddingBottom: '0' }}>
            {filteredMotos.length > 0 ? (
              <div>
                {filteredMotos.map((item, index) => {
                  return (
                    <div key={index}>
                      <SearchCard item={item} />
                    </div>
                  )
                })}
              </div>
            ) : (
              <div>
                {motos.map((item, index) => {
                  return (
                    <div key={index}>
                      <SearchCard item={item} />
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        )}
      </div>
    )
  } else {
    if (!isReady) {
      return <Loader />
    } else {
      return (
        <div>
          <div className='container'>
            {location.state !== undefined ? (
              <img src={logo} alt='' className='header__img--logo' />
            ) : (
              <div className='header'>
                <Link to='/profile'>
                  <Profile />
                </Link>
                <Search onChange={searchHandler} />
                <img src={logo} alt='logo' />
              </div>
            )}

            <FAQ />

            {Object.keys(lastRace).length > 0 ||
            location.state !== undefined ? (
              <div>
                {!more ? (
                  <div className='trip'>
                    <div className='trip__title'>
                      {location.state !== undefined
                        ? 'Ваша текущая поездка'
                        : 'Ваша крайняя поездка'}
                    </div>
                    <div className='trip__info'>
                      {location.state !== undefined ? (
                        <div className='location__group'>
                          <div className='location__img'>
                            <img src={location.state[2].image} alt='' />
                          </div>
                          <div>
                            <div className='location__name'>
                              {location.state[2].name}
                            </div>
                            <div className='location__date'>
                              {new Date(location.state[4]).toLocaleString(
                                'default',
                                dateOptions
                              )}
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className='trip__address'>
                          <div className='trip__group'>
                            <div className='trip__img trip--circle'>
                              <img src={tripFromImg} alt='' />
                            </div>
                            <div>
                              <div className='trip__address_title'>
                                {lastRace.from}
                              </div>
                              <div className='trip__address_date'>
                                {new Date(lastRace.fromDate).toLocaleString(
                                  'default',
                                  dateOptions
                                )}
                              </div>
                            </div>
                          </div>

                          <div className='trip__group'>
                            <div className='trip__img trip--circle2'>
                              <img src={tripToImg} alt='' />
                            </div>
                            <div>
                              <div className='trip__address_title'>
                                {lastRace.to}
                              </div>
                              <div className='trip__address_date'>
                                {new Date(lastRace.toDate).toLocaleString(
                                  'default',
                                  dateOptions
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      <div className='trip__paytime'>
                        <div className='trip__paytime_block'>
                          <div className='trip__group trip__group_mb'>
                            <div className='trip__img trip__img2'>
                              <img src={tripTimeImg} alt='' />
                            </div>
                            <div className='trip__paytime_title'>
                              Время в пути
                            </div>
                          </div>
                          {location.state !== undefined ? (
                            <div>
                              <span className='trip__num'>
                                {minutes}
                                <span className='trip__symbol'> мин.</span>
                              </span>
                            </div>
                          ) : (
                            <div>{setTime(lastRace.time)}</div>
                          )}
                        </div>

                        <div>
                          <div className='trip__group trip__group_mb'>
                            <div className='trip__img trip__img2'>
                              <img src={tripPayImg} alt='' />
                            </div>
                            {location.state !== undefined ? (
                              <div className='trip__paytime_title'>Тариф</div>
                            ) : (
                              <div className='trip__paytime_title'>
                                К оплате
                              </div>
                            )}
                          </div>
                          <div>
                            {location.state !== undefined ? (
                              <div className='rate__title'>
                                {location.state[3].name}
                              </div>
                            ) : (
                              <span className='trip__num'>
                                {lastRace.pay}{' '}
                                <span className='trip__symbol trip--rouble'>
                                  ₽
                                </span>
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='trip__moto'>
                      <div className='trip__title'>Мотоцикл</div>
                      <div className='moto__info'>
                        <div className='moto__img'>
                          {location.state !== undefined ? (
                            <img src={location.state[1].image} />
                          ) : (
                            <img src={lastRace.moto.image} alt='' />
                          )}
                        </div>
                        <div className='moto__group'>
                          <div className='moto__group--name'>
                            {location.state !== undefined ? (
                              <div>
                                <div className='moto__title'>
                                  {location.state[1].name}
                                </div>
                                <div className='moto__subtitle'>
                                  {location.state[1].class.name}
                                </div>
                              </div>
                            ) : (
                              <div>
                                <div className='moto__title'>
                                  {lastRace.moto.name}
                                </div>
                                <div className='moto__subtitle'>
                                  {lastRace.moto.class.name}
                                </div>
                              </div>
                            )}
                          </div>

                          <div className='moto__group--speed'>
                            <div className='moto--flex'>
                              <div className='trip__img trip__img2'>
                                <img src={racespeedImg} alt='' />
                              </div>
                              <div className='trip__paytime_title'>
                                Макс. скорость
                              </div>
                            </div>

                            <div>
                              {location.state !== undefined ? (
                                <span className='trip__num'>
                                  {speed}{' '}
                                  <span className='trip__symbol'>км/ч</span>
                                </span>
                              ) : (
                                <span className='trip__num'>
                                  {lastRace.speed}{' '}
                                  <span className='trip__symbol'>км/ч</span>
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='trip__group--btns'>
                      {location.state !== undefined ? (
                        <button
                          className='link--red'
                          onClick={() => checkTime()}>
                          Завершить
                        </button>
                      ) : (
                        <button
                          className='link green'
                          onClick={() => setModalActive(true)}>
                          Повторить
                        </button>
                      )}
                      {location.state === undefined && (
                        <button onClick={() => setMore(true)} className='btn'>
                          Подробнее
                        </button>
                      )}
                    </div>
                    <div className='timeError'>{timeError}</div>
                  </div>
                ) : (
                  <div className='trip'>
                    <div className='trip__title'>Подробнее</div>
                    <div className='trip__address more__address'>
                      <div
                        className='trip__group'
                        style={{ marginBottom: '25px' }}>
                        <div className='trip__img more--circle'>
                          <img src={tripFromImg} alt='' />
                        </div>
                        <div>
                          <div className='more__title'>{lastRace.from}</div>
                          <div className='more__subtitle'>
                            {new Date(lastRace.fromDate).toLocaleString(
                              'default',
                              dateOptions
                            )}
                          </div>
                        </div>
                      </div>

                      <div className='trip__group'>
                        <div className='trip__img more--circle2'>
                          <img src={tripToImg} alt='' />
                        </div>
                        <div>
                          <div className='more__title'>{lastRace.to}</div>
                          <div className='more__subtitle'>
                            {new Date(lastRace.toDate).toLocaleString(
                              'default',
                              dateOptions
                            )}
                          </div>
                        </div>
                      </div>

                      {lastRace.location.name !== 'Город' &&
                        lastRace.location.name !== 'Загород' && (
                          <div className='trip__address_location--image'>
                            <img src={lastRace.location.image} alt='' />
                            <div>{lastRace.location.name}</div>
                          </div>
                        )}
                    </div>

                    <div className='more__grid'>
                      <div className='more__group'>
                        <div className='trip__img'>
                          <img src={tripPayImg} alt='' />
                        </div>
                        <div>
                          <div className='more__title'>Тариф</div>
                          <div className='more__subtitle'>
                            {lastRace.rate.name}
                          </div>
                        </div>
                      </div>

                      <div className='more__group'>
                        <div className='trip__img'>
                          <img src={tripTimeImg} alt='' />
                        </div>
                        <div>
                          <div className='more__title'>Время поездки</div>
                          <div className='more__subtitle'>
                            {lastRace.time} мин
                          </div>
                        </div>
                      </div>

                      <div className='more__group'>
                        <div className='trip__img'>
                          <img src={tripPayImg} alt='' />
                        </div>
                        <div>
                          <div className='more__title'>К оплате</div>
                          <div className='more__subtitle'>
                            {lastRace.pay} &#8381;
                          </div>
                        </div>
                      </div>

                      <div className='more__group'>
                        <div className='trip__img'>
                          <img src={racespeedImg} alt='' />
                        </div>
                        <div>
                          <div className='more__title'>Макс. скорость</div>
                          <div className='more__subtitle'>
                            {lastRace.speed} км/ч
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className='more__flex'
                      style={{ marginBottom: '30px' }}>
                      <div className='more__flex_item'>
                        <div className='trip__title'>Характеристики</div>
                        <div className='more__moto_name'>
                          {lastRace.moto.name}
                        </div>
                        <div className='more__moto_class'>
                          {lastRace.moto.class.name}
                        </div>
                      </div>
                      <div className='more__flex_item'>
                        <div className='more__moto_img'>
                          <img src={lastRace.moto.image} alt='' />
                        </div>
                      </div>
                    </div>

                    <div className='more__grid more__grid_specs'>
                      <div className='more__group'>
                        <div className='trip__img'>
                          <img src={specs0} alt='' />
                        </div>
                        <div className='more__specs'>
                          <div className='more__specs_title'>
                            Объем двигателя:
                          </div>
                          <div className='more__specs__num'>
                            {lastRace.moto.specs[0]} см3
                          </div>
                        </div>
                      </div>

                      <div className='more__group'>
                        <div className='trip__img'>
                          <img src={specs3} alt='' />
                        </div>
                        <div className='more__specs'>
                          <div className='more__specs_title'>Объем бака:</div>
                          <div className='more__specs__num'>
                            {lastRace.moto.specs[3]} л.
                          </div>
                        </div>
                      </div>

                      <div className='more__group'>
                        <div className='trip__img'>
                          <img src={specs1} alt='' />
                        </div>
                        <div className='more__specs'>
                          <div className='more__specs_title'>Мощность:</div>
                          <div className='more__specs__num'>
                            {lastRace.moto.specs[1]} л.с.
                          </div>
                        </div>
                      </div>

                      <div className='more__group'>
                        <div className='trip__img'>
                          <img src={specs4} alt='' />
                        </div>
                        <div className='more__specs'>
                          <div className='more__specs_title'>Масса:</div>
                          <div className='more__specs__num'>
                            {lastRace.moto.specs[4]} кг
                          </div>
                        </div>
                      </div>

                      <div className='more__group'>
                        <div className='trip__img'>
                          <img src={specs2} alt='' />
                        </div>
                        <div className='more__specs'>
                          <div className='more__specs_title'>
                            Макс. скорость:
                          </div>
                          <div className='more__specs__num'>
                            {lastRace.moto.specs[2]} км/ч
                          </div>
                        </div>
                      </div>

                      <div className='more__group'>
                        <div className='trip__img'>
                          <img src={specs5} alt='' />
                        </div>
                        <div className='more__specs'>
                          <div className='more__specs_title'>
                            Расход топлива:
                          </div>
                          <div className='more__specs__num'>
                            {lastRace.moto.specs[5]} л. на 100 км
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='trip__back' onClick={() => setMore(false)}>
                      <Back />
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className='trip--else'>
                Райдер, у тебя ещё не было ни одной поездки! Нажми кнопку{' '}
                <span>"Новая поездка"</span>, чтобы погрузиться в мир драйва!
              </div>
            )}

            {location.state === undefined && (
              <>
                {Object.keys(card).length > 0 ? (
                  <Link to='/newtrip' className='link new green'>
                    Новая поездка
                  </Link>
                ) : (
                  <div style={{ marginTop: '20px' }} className='timeError'>
                    Чтобы начать поездку необходимо привязать карту
                  </div>
                )}
              </>
            )}
          </div>
          <SimpleModal active={modalActive} setActive={setModalActive}>
            <div className='simpleModal__title'>
              {location.state !== undefined
                ? 'Вы уверены, что хотите завершить поездку?'
                : 'Хотите повторить крайнюю поездку?'}
            </div>
            <div className='simpleModal__btns'>
              {location.state !== undefined ? (
                <button
                  className='simpleModal__btn red'
                  onClick={() => raceHandler()}>
                  Завершить
                </button>
              ) : (
                <button
                  className='simpleModal__btn green'
                  onClick={() => setLocationState()}>
                  Повторить
                </button>
              )}

              <button
                className='simpleModal__btn'
                onClick={() => setModalActive(false)}>
                Отмена
              </button>
            </div>
          </SimpleModal>
        </div>
      )
    }
  }
}

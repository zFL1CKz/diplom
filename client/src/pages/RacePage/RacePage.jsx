import React, { useCallback, useContext, useEffect, useState } from 'react'
import { useHistory, useLocation, useParams } from 'react-router-dom'
import { SearchCard } from '../../components/Cards/SearchCard'
import { Loader } from '../../components/Loader/Loader'
import { AuthContext } from '../../context/AuthContext'
import { useHttp } from '../../hooks/http.hook'

import tripFromImg from '../../img/icons/trip--from.svg'
import tripToImg from '../../img/icons/trip--to.svg'
import tripTimeImg from '../../img/icons/trip--time.svg'
import tripPayImg from '../../img/icons/trip--pay.svg'
import racespeedImg from '../../img/icons/trip--speed.svg'
import profileImg from '../../img/icons/profile.svg'

import logo from '../../img/icons/small--logo.svg'
import '../MainPage/MainPage.scss'
import './RacePage.scss'
import { Back } from '../../components/Back/Back'

export const RacePage = () => {
  const [isReady, setIsReady] = useState(false)
  const [race, setRace] = useState({})
  const { token } = useContext(AuthContext)
  const { request } = useHttp()
  const raceId = useParams().id
  const history = useHistory()
  const location = useLocation()

  const getRace = useCallback(async () => {
    try {
      await request(`/api/races/getrace/${raceId}`, 'GET', null, {
        Authorization: `Bearer ${token}`,
      }).then((res) => {
        if (res === null) return history.push('/')
        setRace(res)
      })
      setIsReady(true)
    } catch (error) {
      console.log(error)
    }
  }, [token, request])

  useEffect(() => {
    getRace()
  }, [getRace])

  if (!isReady) {
    return <Loader />
  } else {
    return (
      <div className='container'>
        <header className='header'>
          <div
            onClick={() => {
              if(location.state !== undefined){
                history.push({
                  pathname: '/newtrip',
                  state: location.state
                })
              } else history.goBack()
            }}>
            <Back />
          </div>
          <div className='body__title' style={{ textAlign: 'center' }}>
            Информация о поездке
          </div>
          <img src={logo} alt='logo' />
        </header>
        <SearchCard item={race.moto} />

        <div className='race__group mb10'>
          <div className='race__group'>
            <div className='race__img'>
              <img src={tripPayImg} alt='' />
            </div>
            <div className='race__text'>{race.rate.name}</div>
          </div>
          <div className='race__desc'>{race.rate.price.split(' (')[0]}</div>
        </div>

        <div className='race__group mb10'>
          <div className='race__group'>
            <div className='race__img'>
              <img src={tripToImg} alt='' />
            </div>
            <div className='race__text'>{race.location.name}</div>
          </div>
          <img style={{ width: '10%' }} src={race.location.image} alt='' />
        </div>

        <div className='race__group mb10'>
          <div className='race__group'>
            <div className='race__img'>
              <img src={profileImg} alt='' />
            </div>
            <div className='race__text'>Подпись</div>
          </div>
          <img style={{ width: '12%' }}  src={race.ownerSignature} alt='' />
        </div>
      </div>
    )
  }
}

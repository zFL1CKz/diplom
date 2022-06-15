import React, { useCallback, useContext, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
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

export const RacePage = () => {
  const [isReady, setIsReady] = useState(false)
  const [race, setRace] = useState({})
  const { token } = useContext(AuthContext)
  const { request } = useHttp()
  const raceId = useParams().id
  const history = useHistory()

  const getRace = useCallback(async () => {
    try {
      await request(`/api/races/getcurrentrace/${raceId}`, 'GET', null, {
        Authorization: `Bearer ${token}`,
      }).then((res) => {
        if (res === null) return history.push('/notfound')
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
        <img src={logo} alt='logo' className='race__logo' />
        <SearchCard item={race.moto} />

        <div className='race__group mb20'>
          <div className='race__group'>
            <div className='race__img'>
              <img src={tripToImg} alt='' />
            </div>
            <div className='race__text'>{race.location.name}</div>
          </div>

          <img src={race.location.image} alt='' />
        </div>

        <div className='race__group mb20'>
          <div className='race__group'>
            <div className='race__img'>
              <img src={tripPayImg} alt='' />
            </div>
            <div className='race__text'>{race.rate.name}</div>
          </div>
          <div className='race__desc'>{race.rate.price.split(' (')[0]}</div>
        </div>

        <div className='race__group mb20'>
          <div className='race__group'>
            <div className='race__img'>
              <img src={profileImg} alt='' />
            </div>
            <div className='race__text'>Подпись</div>
          </div>
          <img src={race.ownerSignature} alt='' className='race__signature' />
        </div>
      </div>
    )
  }
}

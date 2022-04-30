import React, { useCallback, useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Back } from '../../components/Back/Back'
import { HistoryCard } from '../../components/Cards/HistoryCard'
import { Loader } from '../../components/Loader/Loader'
import { AuthContext } from '../../context/AuthContext'
import { useAuth } from '../../hooks/auth.hook'
import { useHttp } from '../../hooks/http.hook'

import logo from '../../img/icons/small--logo.svg'
import './HistoryPage.scss'

export const HistoryPage = () => {
  document.title = 'Moto Soul | История поездок'

  const { token } = useContext(AuthContext)
  const auth = useAuth()
  const { request } = useHttp()
  const history = useHistory()
  const [isReady, setIsReady] = useState(false)
  const [races, setRaces] = useState([])

  const getRaces = useCallback(async () => {
    try {
      await request('/api/races/allraces', 'GET', null, {
        Authorization: `Bearer ${token}`,
      }).then((res) => {
        setRaces(res)
      })
      setIsReady(true)
    } catch (error) {
      console.log(error)
    }
  }, [token, request, races.length])

  useEffect(() => {
    getRaces()
  }, [getRaces])

  if (!isReady) {
    return <Loader />
  } else {
    return (
      <div>
        <div className='container'>
          {races.length > 0 ? (
            <div className='races'>
              {races.map((item, index) => (
                <HistoryCard item={item} key={index} />
              ))}
            </div>
          ) : (
            <div className='races--else'>
              У тебя ещё не было ни одной поездки
            </div>
          )}
        </div>
      </div>
    )
  }
}

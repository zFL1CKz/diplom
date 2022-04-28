import React, { useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { useHttp } from '../../hooks/http.hook'
import { useMessage } from '../../hooks/message.hook'
import logo from '../../img/icons/big--logo.svg'

import './RegResult.scss'

export const RegResult = () => {
  document.title = 'Moto Soul | Подтверждение регистрации'
  const { loading, request, error, clearError } = useHttp()
  const message = useMessage()
  const location = useLocation()
  const auth = useContext(AuthContext)

  const submitReg = async () => {
    const data = await request('/api/auth/register', 'POST', location.state)
    auth.login(data.token, data.userId)
  }

  useEffect(() => {
    message(error, 'error')
    clearError()
  }, [error, message, clearError])

  return (
    <div className='container'>
      <img src={logo} alt='Moto Soul' className='regres--img' />

      <div className='text'>
        <h1 className='text__title'>Успешная регистрация</h1>
        <div className='text__desc'>
          Привет, райдер! Уже через пару минут ты сможешь выбрать одну или несколько единиц техники из представленного выбора, выбрать трассу, время, тариф и отправиться навстречу свободе!
        </div>
        <div className='text__desc text__green'>
          Нажмите далее чтобы начать
          <br />
          пользоваться приложением
        </div>
        <button disabled={loading} onClick={submitReg}>
          Далее
        </button>
      </div>
    </div>
  )
}

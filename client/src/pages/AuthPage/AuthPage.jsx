import React, { useContext, useEffect, useState } from 'react'
import { useHttp } from '../../hooks/http.hook'
import { useMessage } from '../../hooks/message.hook'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

import logo from '../../img/icons/big--logo.svg'
import hidden from '../../img/icons/hidden.svg'
import view from '../../img/icons/view.svg'

import './RegisterPage.scss'

export const AuthPage = () => {
  document.title = 'Moto Soul | Авторизация'
  const auth = useContext(AuthContext)
  const { loading, error, request, clearError } = useHttp()
  const message = useMessage()

  let [isPassView, setIsPassView] = useState(false)
  let [pass, setPass] = useState('password')

  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const showPass = () => {
    if (pass === 'password') setPass('text')
    else setPass('password')
    setIsPassView(!isPassView)
  }

  const loginHandler = async () => {
    const curPass = document.querySelector('#curPass').value
    const emailInput = document.querySelector('#emailInput').value

    if (emailInput !== '' && curPass !== '') {
      try {
        const data = await request('/api/auth/login', 'POST', { ...form })
        auth.login(data.token, data.userId)
      } catch (error) {}
    } else {
      message('Поля не могут быть пустыми', 'error')
    }
  }

  useEffect(() => {
    message(error, 'error')
    clearError()
  }, [error, message, clearError])

  return (
    <div className='body__wrapper'>
      <div className='container'>
        <div className='reg--container'>
          <img src={logo} alt='Moto Soul' />

          <div className='form'>
            <fieldset>
              <legend>Авторизация</legend>

              <input className='input' type='text' name='email' onChange={changeHandler} placeholder='Электронная почта' id='emailInput' />

              <div className='input__group'>
                <input className='input' type={pass} name='password' onChange={changeHandler} placeholder='Пароль' id='curPass' />

                {!isPassView ? (
                  <div className='input__img' onClick={showPass}>
                    <img src={hidden} alt='' />
                  </div>
                ) : (
                  <div className='input__img' onClick={showPass}>
                    <img src={view} alt='' />
                  </div>
                )}
              </div>

              <button onClick={loginHandler} disabled={loading}>
                Войти
              </button>
              <p className='reg--link'>
                Еще нет аккаунта?&nbsp;&nbsp;
                <Link to='/register'>Регистрация</Link>
              </p>
            </fieldset>
          </div>

          <div className='circle'></div>
        </div>
      </div>
    </div>
  )
}

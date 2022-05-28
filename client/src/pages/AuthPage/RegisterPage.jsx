import React, { useEffect, useState } from 'react'
import { useMessage } from '../../hooks/message.hook'
import { Link, useHistory } from 'react-router-dom'
import { useHttp } from '../../hooks/http.hook'

import logo from '../../img/icons/big--logo.svg'
import hidden from '../../img/icons/hidden.svg'
import view from '../../img/icons/view.svg'

import './RegisterPage.scss'

export const RegisterPage = () => {
  document.title = 'Moto Soul | Регистрация'
  const message = useMessage()
  const history = useHistory()
  const { loading, request, error, clearError } = useHttp()

  const [inputChecked, setInputChecked] = useState(false)

  let [isPassView, setIsPassView] = useState(false)
  let [isPassView1, setIsPassView1] = useState(false)
  let [pass, setPass] = useState('password')
  let [pass1, setPass1] = useState('password')

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

  const showPass1 = () => {
    if (pass1 === 'password') setPass1('text')
    else setPass1('password')
    setIsPassView1(!isPassView1)
  }

  const registerHandler = async () => {
    const confPass = document.querySelector('#confPass').value

    if (form.password.length >= 6 && form.password === confPass) {
      try {
        const data = await request('/api/auth/checkregister', 'POST', {
          ...form,
        })
        if (data.message === 'Проверка прошла успешно') {
          history.push('/regresult', form)
        }
      } catch (error) {}
    } else {
      if (form.email === '' || form.password === '' || confPass === '') message('Поля не могут быть пустыми', 'error')
      else message('Пароль меньше 6-ти символов или пароли не совпадают', 'error')
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
              <legend>Регистрация</legend>

              <input className='input' type='text' name='email' onChange={changeHandler} placeholder='Электронная почта' />

              <div className='input__group'>
                <input className='input' type={pass} name='password' onChange={changeHandler} placeholder='Пароль (более 6-ти символов)' />

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
              <div className='input__group'>
                <input className='input' type={pass1} placeholder='Подтверждение пароля' id='confPass' />
                {!isPassView1 ? (
                  <div className='input__img' onClick={showPass1}>
                    <img src={hidden} alt='' />
                  </div>
                ) : (
                  <div className='input__img' onClick={showPass1}>
                    <img src={view} alt='' />
                  </div>
                )}
              </div>

              <div className='checkbox'>
                <input id='checkbox' type='checkbox' defaultChecked={inputChecked} onChange={() => setInputChecked(!inputChecked)} />
                <label htmlFor='checkbox'>
                  Прочитал <Link to='/terms/user-agreement'>пользовательское соглашение</Link> и согласен с условиями <Link to='/terms/privacy'>политики обработки персональных данных</Link>
                </label>
              </div>

              <button onClick={registerHandler} disabled={!inputChecked}>
                Зарегистрироваться
              </button>
              <p className='reg--link'>
                Уже есть аккаунт?&nbsp;&nbsp;
                <Link to='/login'>Авторизация</Link>
              </p>
            </fieldset>
          </div>
          <div className='circle'></div>
        </div>
      </div>
    </div>
  )
}

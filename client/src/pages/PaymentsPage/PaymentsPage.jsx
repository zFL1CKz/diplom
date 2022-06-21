import React, { useCallback, useContext, useEffect, useState } from 'react'
import { Loader } from '../../components/Loader/Loader'
import { Back } from '../../components/Back/Back'
import { AuthContext } from '../../context/AuthContext'
import { useAuth } from '../../hooks/auth.hook'
import { useHttp } from '../../hooks/http.hook'
import { Tap } from '../../components/Tap/Tap'
import { useHistory, useLocation } from 'react-router-dom'

import binking from 'binking'
import InputMask from 'react-input-mask'

import cardMir from '../../img/icons/mir-logo.svg'
import logo from '../../img/icons/small--logo.svg'
import chip from '../../img/icons/chip.svg'
import nfc from '../../img/icons/nfc.svg'
import eye from '../../img/icons/eye.svg'
import './PaymentsPage.scss'
import { TicketCard } from '../../components/Cards/TicketCard'
import { HistoryPage } from '../HistoryPage/HistoryPage'

export const PaymentsPage = () => {
  document.title = 'Moto Soul | Платежи'

  const { token } = useContext(AuthContext)
  const auth = useAuth()
  const { request } = useHttp()
  const history = useHistory()
  const [isReady, setIsReady] = useState(false)
  

  const [form, setForm] = useState({
    number: '',
    date: '',
    cvv: '',
    alias: null,
  })

  

  

  if (!isReady) {
    return <Loader />
  } else {
    return (
      <div>
        <div className='container' style={{ paddingBottom: '0' }}>
          <div className='header'>
            <div onClick={() => history.goBack()}>
              <Back />
            </div>
            <div className='body__title' style={{ margin: '0 auto' }}>
              История поездок
            </div>
            <img src={logo} alt='logo' />
          </div>

         {/* <div className='payments__title'>Ваши штрафы</div>
          <div className='ticket'>
            {tickets.map((item, index) => (
              <TicketCard item={item} key={index} />
            ))}
          </div> */}

          <div className='payments__title'>История поездок</div>
        </div>
        <HistoryPage />
      </div>
    )
  }
}

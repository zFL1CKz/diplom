import React from 'react'
import { useHistory } from 'react-router-dom'
import { Back } from '../../components/Back/Back'
import logo from '../../img/icons/small--logo.svg'

export const TermsPage = () => {
  const history = useHistory()

  return (
    <div className='container'>
      <header className='header'>
        <div
          onClick={() => {
            history.goBack()
          }}>
          <Back />
        </div>
        <div className='body__title'>Документы</div>
        <img src={logo} alt='logo' />
      </header>
    </div>
  )
}

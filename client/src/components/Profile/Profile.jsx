import React from 'react'

import profile from '../../img/icons/profile.svg'

import './Profile.scss'

export const Profile = () => {
  return (
    <div className='profile'>
      <img src={profile} alt='Profile' />
    </div>
  )
}

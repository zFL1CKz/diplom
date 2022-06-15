import React from 'react'
import './Search.scss'

export const Search = ({ onChange }) => {
  const searchHandler = (e) => {
    onChange(e.target.value)
  }

  return (
    <div className='search'>
      <input className='input' type='text' onChange={searchHandler} placeholder='Поиск...' />
    </div>
  )
}

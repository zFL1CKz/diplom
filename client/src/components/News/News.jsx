import React, { useCallback, useContext, useEffect, useState } from 'react'
import { useHttp } from '../../hooks/http.hook'
import { AuthContext } from '../../context/AuthContext'
import { NewsCard } from './NewsCard'

export const News = () => {
  const { token } = useContext(AuthContext)
  const [news, setNews] = useState([])
  const { request } = useHttp()
  const getNews = useCallback(async () => {
    try {
      const data = await request('/api/news', 'GET', null, {
        Authorization: `Bearer ${token}`,
      })
      setNews(data)
    } catch (error) {
      console.log(error)
    }
  }, [token, request, news])

  useEffect(() => {
    getNews()
  }, [])

  return (
    <div>
      {news.map((item, index) => {
        return <NewsCard key={index} img={item.image} text={item.text} />
      })}
    </div>
  )
}

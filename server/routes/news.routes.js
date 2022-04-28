const { Router } = require('express')
const News = require('../models/News')
const router = Router()

router.get('/news', async (req, res) => {
  try {
    const news = await News.find()
    res.json(news)
  } catch (error) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})

module.exports = router

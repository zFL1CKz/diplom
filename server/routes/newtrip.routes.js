const { Router } = require('express')
const Moto = require('../models/Moto')
const Class = require('../models/Class')
const Location = require('../models/Location')
const Rate = require('../models/Rate')
const router = Router()

router.get('/getclasses', async (req, res) => {
  try {
    const classes = await Class.find()
    res.json(classes)
  } catch (error) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})

router.get('/getallmotos', async (req, res) => {
  try {
    const motos = await Moto.find().populate('class')
    res.json(motos)
  } catch (error) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})

router.get('/getmotos/:id', async (req, res) => {
  try {
    const motos = await Moto.find({ class: req.params.id }).populate('class')
    res.json(motos)
  } catch (error) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})

router.get('/getlocations', async (req, res) => {
  try {
    const locations = await Location.find()
    res.json(locations)
  } catch (error) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})

router.get('/getrates', async (req, res) => {
  try {
    const rates = await Rate.find()
    res.json(rates)
  } catch (error) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})

module.exports = router

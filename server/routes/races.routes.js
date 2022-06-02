const { Router } = require('express')
const auth = require('../middleware/auth.middleware')
const router = Router()

const Races = require('../models/Races')
require('../models/Moto')
require('../models/Class')
require('../models/Location')
require('../models/Rate')

router.get('/lastrace', auth, async (req, res) => {
  try {
    const lastrace = await Races.findOne({ owner: req.user.userId })
      .sort({ $natural: -1 })
      .populate({ path: 'moto', populate: { path: 'class' } })
      .populate('location')
      .populate('rate')
    res.json(lastrace)
  } catch (error) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})

router.get('/allraces', auth, async (req, res) => {
  try {
    const races = await Races.find({ owner: req.user.userId })
      .sort({ $natural: -1 })
      .populate({ path: 'moto', populate: { path: 'class' } })
      .populate('location')
      .populate('rate')
      .lean()
    res.json(races)
  } catch (error) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})

router.post('/setrace', auth, async (req, res) => {
  try {
    const { motoId, locationId, rateId, time, pay, fromDate, toDate, speed, from, to, signature } = req.body
    const race = new Races({
      owner: req.user.userId,
      moto: motoId,
      fromDate: fromDate,
      toDate: toDate,
      pay: pay,
      location: locationId,
      rate: rateId,
      time: time,
      speed: speed,
      from: from,
      to: to,
      ownerSignature: signature,
    })

    await race.save()

    res.status(201).json({ message: 'Поездка была сохранена' })
  } catch (error) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})
module.exports = router

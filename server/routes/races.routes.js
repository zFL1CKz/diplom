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
    const lastrace = await Races.findOne({ owner: req.user.userId, status: true })
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
    const races = await Races.find({ owner: req.user.userId, status: true })
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
    const { signature, rate, moto, location } = req.body
    const race = new Races({
      owner: req.user.userId,
      moto: moto,
      location: location,
      rate: rate,
      ownerSignature: signature,
    })

    await race.save()

    res.status(201).json(race._id)
  } catch (error) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})

router.put('/putrace/:id', auth, async (req, res) => {
  try {
    const { time, pay, fromDate, toDate, speed, from, to, status } = req.body
    const race = await Races.findOne({ _id: req.params.id })

    race.fromDate = fromDate
    race.toDate = toDate
    race.pay = pay
    race.time = time
    race.speed = speed
    race.from = from
    race.to = to
    race.status = status

    await race.save()

    res.status(201).json({ message: 'Поездка была сохранена' })
  } catch (error) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})

router.get('/getrace/:id', async (req, res) => {
  try {
    const race = await Races.findOne({ _id: req.params.id })
      .populate('owner')
      .populate({ path: 'moto', populate: { path: 'class' } })
      .populate('location')
      .populate('rate')
    res.json(race)
  } catch (error) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})

// router.post('/setcurrentrace', auth, async (req, res) => {
//   try {
//     const { signature, rate, moto, location } = req.body
//     const race = new CurrentRace({
//       owner: req.user.userId,
//       moto: moto,
//       location: location,
//       rate: rate,
//       ownerSignature: signature,
//     })

//     await race.save()

//     res.status(201).json(race._id)
//   } catch (error) {
//     res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
//   }
// })

// router.get('/getcurrentrace/:id', async (req, res) => {
//   try {
//     const race = await CurrentRace.findOne({ _id: req.params.id })
//       .populate('owner')
//       .populate('moto')
//       .populate({ path: 'moto', populate: { path: 'class' } })
//       .populate('location')
//       .populate('rate')
//     res.json(race)
//   } catch (error) {
//     res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
//   }
// })

module.exports = router

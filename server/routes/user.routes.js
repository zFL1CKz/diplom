const { Router } = require('express')
const bcrypt = require('bcryptjs')
const auth = require('../middleware/auth.middleware')
const User = require('../models/User')
require('../models/Ticket')
require('../models/Races')

const router = Router()

router.get('/getinfo', auth, async (req, res) => {
  try {
    const info = await User.findOne({ _id: req.user.userId })
      .populate('ticket')
      .populate('races')
    res.json(info)
  } catch (error) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})

router.get('/getcard', auth, async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.user.userId })
    if (user.card) res.json(user.card)
    else res.json(null)
  } catch (error) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})

router.post('/setcard', auth, async (req, res) => {
  try {
    const { num, date, cvv, alias } = req.body
    const user = await User.findOne({ _id: req.user.userId })

    user.card.num = num
    user.card.date = date
    user.card.cvv = cvv
    user.card.alias = alias

    await user.save()
    res.json(user)
  } catch (error) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})

router.post('/setinfo', auth, async (req, res) => {
  try {
    const { fio, num, date, cat } = req.body
    const user = await User.findOne({ _id: req.user.userId })

    if (fio !== null) user.fio = fio
    if (num !== null) user.license.licenseNum = num
    if (date !== null) user.license.licenseDate = date
    if (cat !== null) user.license.licenseCat = cat

    await user.save()
    res.json(user)
  } catch (error) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})

router.post('/setpass', auth, async (req, res) => {
  try {
    const { pass, newPass } = req.body
    const user = await User.findOne({ _id: req.user.userId })

    const isMatch = await bcrypt.compare(pass, user.password)

    if (!isMatch)
      return res.status(400).json({ message: 'Неверный текущий пароль' })

    const hashPass = await bcrypt.hash(newPass, 12)

    user.password = hashPass

    await user.save()
    res.status(200).json({ message: 'Пароль успешно изменен' })
  } catch (error) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})

module.exports = router

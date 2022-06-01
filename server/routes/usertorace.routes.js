const { Router } = require('express')
const auth = require('../middleware/auth.middleware')
const UserToRace = require('../models/UserToRace')

const router = Router()

router.get('/getinfo', auth, async (req, res) => {
  try {
    const info = await UserToRace.find()
    res.json(info)
  } catch (error) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})

// router.post('/setinfo', auth, async (req, res) => {
//   try {
//     const { fio, num, date, cat } = req.body
//     const user = await User.findOne({ _id: req.user.userId })

//     if (fio !== null) user.fio = fio
//     if (num !== null) user.license.licenseNum = num
//     if (date !== null) user.license.licenseDate = date
//     if (cat !== null) user.license.licenseCat = cat

//     await user.save()
//     res.json(user)
//   } catch (error) {
//     res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
//   }
// })

module.exports = router

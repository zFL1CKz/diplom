const { Router } = require('express')
const auth = require('../middleware/auth.middleware')
const UserToRace = require('../models/UserToRace')

const router = Router()

// router.get('/getinfo', auth, async (req, res) => {
//   try {
//     const info = await UserToRace.find()
//     res.json(info)
//   } catch (error) {
//     res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
//   }
// })

router.post('/setuserrace', auth, async (req, res) => {
  try {
    const { userId, userSignature, motoId, isFree } = req.body
    const data = new UserToRace({
      user: userId,
      userSignature: userSignature,
      moto: motoId,
      isFree: isFree,
    })

    await data.save()
    res.json(data)
  } catch (error) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})

module.exports = router

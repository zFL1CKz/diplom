const { Router } = require('express')
const auth = require('../middleware/auth.middleware')
const router = Router()
const Ticket = require('../models/Ticket')

router.get('/getticket', auth, async (req, res) => {
  try {
    const ticket = await Ticket.find({ owner: req.user.userId }).populate(
      'moto'
    )
    res.json(ticket)
  } catch (error) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})

module.exports = router

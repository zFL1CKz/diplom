const express = require('express')
const mongoose = require('mongoose')
const config = require('config')

const app = express()

app.use(express.json({ extended: true }))
app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/news', require('./routes/news.routes'))
app.use('/api/races', require('./routes/races.routes'))
app.use('/api/user', require('./routes/user.routes'))
app.use('/api/ticket', require('./routes/ticket.routes'))
app.use('/api', require('./routes/newtrip.routes'))
app.use('/api', require('./routes/usertorace.routes'))

const PORT = config.get('PORT') || 5000

async function start() {
  try {
    await mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true,
    })
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

start()

app.listen(PORT, () => {
  console.log(`Server has been started on port ${PORT}...`)
})

const { Schema, model } = require('mongoose')

const schema = new Schema({
  title: { type: String },
  desc: { type: String },
  date: { type: String },
  image: { type: String },
})

module.exports = model('News', schema)

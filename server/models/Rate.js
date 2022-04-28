const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
  name: { type: String },
  discount: { type: Number },
  price: { type: String },
  desc: { type: String },
})

module.exports = model('Rate', schema)

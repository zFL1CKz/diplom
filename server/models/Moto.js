const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
  name: { type: String },
  class: { type: Types.ObjectId, ref: 'Class' },
  image: { type: String },
  specs: { type: Array },
})

module.exports = model('Moto', schema)

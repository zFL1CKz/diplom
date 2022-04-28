const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
  owner: { type: Types.ObjectId, ref: 'User' },
  date: { type: Date },
  price: { type: Number },
  moto: { type: Types.ObjectId, ref: 'Moto' },
  reason: { type: String },
  status: { type: String },
})

module.exports = model('Ticket', schema)

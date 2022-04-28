const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  fio: { type: String },
  card: {
    num: { type: String },
    date: { type: String },
    cvv: { type: String },
    alias: { type: String },
  },
  license: {
    licenseNum: { type: String },
    licenseDate: { type: String },
    licenseCat: { type: String },
  },
  rating: { type: Number, default: 5 },
  ticket: { type: Types.ObjectId, ref: 'Ticket' },
  races: { type: Types.ObjectId, ref: 'Races' },
})

module.exports = model('User', schema)

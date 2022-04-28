const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
  owner: { type: Types.ObjectId, ref: 'User' },
  moto: { type: Types.ObjectId, ref: 'Moto' },
  from: { type: String },
  fromDate: { type: Date },
  to: { type: String },
  toDate: { type: Date },
  pay: { type: Number },
  speed: { type: Number },
  location: { type: Types.ObjectId, ref: 'Location' },
  rate: { type: Types.ObjectId, ref: 'Rate' },
  time: { type: Number },
})

module.exports = model('Races', schema)

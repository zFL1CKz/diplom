const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
  owner: { type: Types.ObjectId, ref: 'User' },
  moto: { type: Types.ObjectId, ref: 'Moto' },
  location: { type: Types.ObjectId, ref: 'Location' },
  rate: { type: Types.ObjectId, ref: 'Rate' },
  ownerSignature: { type: String },
})

module.exports = model('CurrentRace', schema)

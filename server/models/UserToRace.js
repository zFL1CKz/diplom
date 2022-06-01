const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
  user: { type: Types.ObjectId, ref: 'User' },
  userSignature: { type: String },
  moto: { type: Types.ObjectId, ref: 'Moto' },
  status: { type: String },
})

module.exports = model('UserToRace', schema)

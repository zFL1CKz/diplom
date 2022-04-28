const { Schema, model } = require('mongoose')

const schema = new Schema({
  name: { type: String },
  image: { type: String },
  info: {
    image: { type: String },
    desc: { type: String },
  },
})

module.exports = model('Class', schema)

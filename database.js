const mongoose = require('mongoose')
const connection = mongoose.createConnection(`mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PW}@${process.env.MONGO_HOST}`, { useNewUrlParser: true })

connection.on('error', console.error.bind(console, 'connection error:'))

const Poem = connection.model('Poem', new mongoose.Schema({
  poemId: Number,
  lines: Array,
  maxLength: Number,
  finishedAt: Date
}, {
  timestamps: { createdAt: 'createdAt' }
}))
const Status = connection.model('Status', {
  currentId: mongoose.Schema.Types.ObjectId,
  poemIdCounter: Number,
  linesLeft: Number
})

module.exports = {
  Poem,
  Status
}

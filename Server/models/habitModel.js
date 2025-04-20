const mongoose = require('mongoose')

const habitSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  name: String,
  time: String,
  repeatDays: Number,
  completed: { type: Boolean, default: false },
  completionDate: { type: Date },
  archived: { type: Boolean, default: false }
})

module.exports = mongoose.model('Habit', habitSchema)

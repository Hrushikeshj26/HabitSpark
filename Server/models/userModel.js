const mongoose = require("mongoose");


const userModel = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'Please add the username']
    },
    email: {
      type: String,
      required: [true, 'Please add the email'],
      unique: [true, 'Email address Already Taken']
    },
    password: {
      type: String,
      required: [true, 'Please add the user password']
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('User', userModel)

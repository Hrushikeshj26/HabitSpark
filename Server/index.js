const express = require('express')
const errorHandler = require('./middleware/errorHandler')
const mongoose = require('mongoose')
const connectDb = require('./config/dbConnection')
const cors = require('cors')
const bodyParser = require('body-parser')
const cron = require('node-cron')
const dotenv = require('dotenv').config()
const Habit = require('./models/habitModel')

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(bodyParser.json())

connectDb()

app.use('/users', require('./routes/userRoutes'))
app.use('/habits', require('./routes/habitRoutes'))
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})

// Schedule task to archive habits daily at midnight
cron.schedule('0 0 * * *', async () => {
  await Habit.updateMany(
    { completed: true, archived: false },
    { $set: { archived: true } }
  )
  console.log('Archived completed habits at midnight')
})

//Daily Habit chart back-end
app.get('/habits/daily-status', async (req, res) => {
  const startOfDay = new Date()
  startOfDay.setHours(0, 0, 0, 0)

  const endOfDay = new Date(startOfDay)
  endOfDay.setDate(endOfDay.getDate() + 1)

  const completedCount = await Habit.countDocuments({
    completed: true,
    completionDate: { $gte: startOfDay, $lt: endOfDay },
    user_id: req.user.id
  })

  const totalCount = await Habit.countDocuments({
    completionDate: { $gte: startOfDay, $lt: endOfDay },
    user_id: req.user.id
  })

  const incompleteCount = totalCount - completedCount

  res.json({ completed: completedCount, incomplete: incompleteCount })
})

//weekly habit chart back-end
app.get('/habits/completed/weekly', async (req, res) => {
  const today = new Date()
  today.setHours(24)

  const startOfWeek = new Date(today)
  startOfWeek.setDate(today.getDate() - 6) // 7 days ago

  const habits = await Habit.aggregate([
    {
      $match: {
        completed: true,
        user_id: new mongoose.Types.ObjectId(req.user.id),
        completionDate: { $gte: startOfWeek, $lt: today }
      }
    },
    {
      $group: {
        _id: { $dayOfWeek: '$completionDate' }, // Group by day of week (1-7)
        count: { $sum: 1 }
      }
    },
    {
      $sort: { _id: 1 }
    }
  ])

  const data = Array(6).fill(0) // Initialize array with 7 zeros

  habits.forEach(habit => {
    const dayIndex = (habit._id + 5) % 6 // Adjust day of week to match Sunday as 0
    data[dayIndex] = habit.count
  })

  res.json(data)
})

//Monthly Chart back-end
app.get('/habits/completed/monthly', async (req, res) => {
  const currentYear = new Date().getFullYear()

  const habits = await Habit.aggregate([
    {
      $match: {
        completed: true,
        user_id: new mongoose.Types.ObjectId(req.user.id),
        completionDate: {
          $gte: new Date(currentYear, 0, 1), // Start of the current year
          $lt: new Date(currentYear + 1, 0, 1) // Start of the next year
        }
      }
    },
    {
      $group: {
        _id: { $month: '$completionDate' }, // Group by month (1-12)
        count: { $sum: 1 }
      }
    },
    {
      $sort: { _id: 1 }
    }
  ])

  const data = Array(12).fill(0) // Initialize array with 12 zeros

  habits.forEach(habit => {
    data[habit._id - 1] = habit.count
  })

  res.json(data)
})
